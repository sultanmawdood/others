<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../models/Product.php';
include_once '../middleware/Auth.php';

$database = new Database();
$db = $database->getConnection();
$product = new Product($db);

$method = $_SERVER['REQUEST_METHOD'];
$data = json_decode(file_get_contents("php://input"));

if ($method === 'GET') {
    if (isset($_GET['id'])) {
        $product->id = $_GET['id'];
        $result = $product->getById();
        
        if ($result) {
            http_response_code(200);
            echo json_encode($result);
        } else {
            http_response_code(404);
            echo json_encode(['message' => 'Product not found']);
        }
    } else {
        $result = $product->getAll();
        http_response_code(200);
        echo json_encode($result);
    }
}

elseif ($method === 'POST') {
    $auth = Auth::authenticate();
    
    if ($auth['role'] !== 'admin') {
        http_response_code(403);
        echo json_encode(['message' => 'Access denied. Admin only.']);
        exit();
    }

    if (!empty($data->name) && !empty($data->price)) {
        $product->name = $data->name;
        $product->description = $data->description ?? '';
        $product->price = $data->price;
        $product->category = $data->category ?? '';
        $product->stock = $data->stock ?? 0;
        $product->image_url = $data->image_url ?? '';

        if ($product->create()) {
            http_response_code(201);
            echo json_encode(['message' => 'Product created successfully']);
        } else {
            http_response_code(500);
            echo json_encode(['message' => 'Unable to create product']);
        }
    } else {
        http_response_code(400);
        echo json_encode(['message' => 'Incomplete data']);
    }
}

elseif ($method === 'PUT') {
    $auth = Auth::authenticate();
    
    if ($auth['role'] !== 'admin') {
        http_response_code(403);
        echo json_encode(['message' => 'Access denied. Admin only.']);
        exit();
    }

    if (!empty($data->id)) {
        $product->id = $data->id;
        $product->name = $data->name;
        $product->description = $data->description;
        $product->price = $data->price;
        $product->category = $data->category;
        $product->stock = $data->stock;
        $product->image_url = $data->image_url;

        if ($product->update()) {
            http_response_code(200);
            echo json_encode(['message' => 'Product updated successfully']);
        } else {
            http_response_code(500);
            echo json_encode(['message' => 'Unable to update product']);
        }
    } else {
        http_response_code(400);
        echo json_encode(['message' => 'Product ID required']);
    }
}

elseif ($method === 'DELETE') {
    $auth = Auth::authenticate();
    
    if ($auth['role'] !== 'admin') {
        http_response_code(403);
        echo json_encode(['message' => 'Access denied. Admin only.']);
        exit();
    }

    if (isset($_GET['id'])) {
        $product->id = $_GET['id'];
        
        if ($product->delete()) {
            http_response_code(200);
            echo json_encode(['message' => 'Product deleted successfully']);
        } else {
            http_response_code(500);
            echo json_encode(['message' => 'Unable to delete product']);
        }
    } else {
        http_response_code(400);
        echo json_encode(['message' => 'Product ID required']);
    }
}
?>
