<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../models/Cart.php';
include_once '../middleware/Auth.php';

$database = new Database();
$db = $database->getConnection();
$cart = new Cart($db);

$method = $_SERVER['REQUEST_METHOD'];
$data = json_decode(file_get_contents("php://input"));

$auth = Auth::authenticate();
$user_id = $auth['user_id'];

if ($method === 'GET') {
    $cart->user_id = $user_id;
    $result = $cart->getByUserId();
    
    http_response_code(200);
    echo json_encode($result);
}

elseif ($method === 'POST') {
    if (!empty($data->product_id) && !empty($data->quantity)) {
        $cart->user_id = $user_id;
        $cart->product_id = $data->product_id;
        $cart->quantity = $data->quantity;

        if ($cart->add()) {
            http_response_code(201);
            echo json_encode(['message' => 'Product added to cart']);
        } else {
            http_response_code(500);
            echo json_encode(['message' => 'Unable to add product to cart']);
        }
    } else {
        http_response_code(400);
        echo json_encode(['message' => 'Incomplete data']);
    }
}

elseif ($method === 'PUT') {
    if (!empty($data->id) && isset($data->quantity)) {
        $cart->id = $data->id;
        $cart->user_id = $user_id;
        $cart->quantity = $data->quantity;

        if ($cart->update()) {
            http_response_code(200);
            echo json_encode(['message' => 'Cart updated successfully']);
        } else {
            http_response_code(500);
            echo json_encode(['message' => 'Unable to update cart']);
        }
    } else {
        http_response_code(400);
        echo json_encode(['message' => 'Incomplete data']);
    }
}

elseif ($method === 'DELETE') {
    if (isset($_GET['id'])) {
        $cart->id = $_GET['id'];
        $cart->user_id = $user_id;

        if ($cart->delete()) {
            http_response_code(200);
            echo json_encode(['message' => 'Item removed from cart']);
        } else {
            http_response_code(500);
            echo json_encode(['message' => 'Unable to remove item']);
        }
    } elseif (isset($_GET['clear'])) {
        $cart->user_id = $user_id;
        
        if ($cart->clear()) {
            http_response_code(200);
            echo json_encode(['message' => 'Cart cleared']);
        } else {
            http_response_code(500);
            echo json_encode(['message' => 'Unable to clear cart']);
        }
    } else {
        http_response_code(400);
        echo json_encode(['message' => 'Cart item ID required']);
    }
}
?>
