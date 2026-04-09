<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../models/User.php';
include_once '../middleware/Auth.php';

$database = new Database();
$db = $database->getConnection();
$user = new User($db);

$method = $_SERVER['REQUEST_METHOD'];
$data = json_decode(file_get_contents("php://input"));

if ($method === 'POST') {
    $uri = $_SERVER['REQUEST_URI'];
    
    if (strpos($uri, '/register') !== false) {
        if (!empty($data->name) && !empty($data->email) && !empty($data->password)) {
            $user->email = $data->email;
            $existing = $user->findByEmail();
            
            if ($existing) {
                http_response_code(400);
                echo json_encode(['message' => 'Email already exists']);
                exit();
            }

            $user->name = $data->name;
            $user->password = $data->password;
            $user->role = 'customer';

            if ($user->create()) {
                $created_user = $user->findByEmail();
                $token = Auth::generateToken($created_user['id'], $created_user['email'], $created_user['role']);
                
                http_response_code(201);
                echo json_encode([
                    'message' => 'User registered successfully',
                    'accessToken' => $token,
                    'user' => [
                        'id' => $created_user['id'],
                        'name' => $created_user['name'],
                        'email' => $created_user['email'],
                        'role' => $created_user['role']
                    ]
                ]);
            } else {
                http_response_code(500);
                echo json_encode(['message' => 'Unable to register user']);
            }
        } else {
            http_response_code(400);
            echo json_encode(['message' => 'Incomplete data']);
        }
    }
    
    elseif (strpos($uri, '/login') !== false) {
        if (!empty($data->email) && !empty($data->password)) {
            $user->email = $data->email;
            $user_data = $user->findByEmail();

            if ($user_data && password_verify($data->password, $user_data['password'])) {
                $token = Auth::generateToken($user_data['id'], $user_data['email'], $user_data['role']);
                
                http_response_code(200);
                echo json_encode([
                    'message' => 'Login successful',
                    'accessToken' => $token,
                    'user' => [
                        'id' => $user_data['id'],
                        'name' => $user_data['name'],
                        'email' => $user_data['email'],
                        'role' => $user_data['role']
                    ]
                ]);
            } else {
                http_response_code(401);
                echo json_encode(['message' => 'Invalid email or password']);
            }
        } else {
            http_response_code(400);
            echo json_encode(['message' => 'Incomplete data']);
        }
    }
    
    elseif (strpos($uri, '/logout') !== false) {
        http_response_code(200);
        echo json_encode(['message' => 'Logout successful']);
    }
}
?>
