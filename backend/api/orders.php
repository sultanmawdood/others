<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../models/Order.php';
include_once '../models/Cart.php';
include_once '../middleware/Auth.php';

$database = new Database();
$db = $database->getConnection();
$order = new Order($db);
$cart = new Cart($db);

$method = $_SERVER['REQUEST_METHOD'];
$data = json_decode(file_get_contents("php://input"));

$auth = Auth::authenticate();
$user_id = $auth['user_id'];

if ($method === 'GET') {
    if (isset($_GET['id'])) {
        $order->id = $_GET['id'];
        $result = $order->getById();
        
        if ($result) {
            http_response_code(200);
            echo json_encode($result);
        } else {
            http_response_code(404);
            echo json_encode(['message' => 'Order not found']);
        }
    } else {
        $order->user_id = $user_id;
        $result = $order->getByUserId();
        
        http_response_code(200);
        echo json_encode($result);
    }
}

elseif ($method === 'POST') {
    if (!empty($data->shipping_address) && !empty($data->items)) {
        $order->user_id = $user_id;
        $order->total_amount = $data->total_amount;
        $order->status = 'pending';
        $order->shipping_address = $data->shipping_address;

        $order_id = $order->create($data->items);

        if ($order_id) {
            $cart->user_id = $user_id;
            $cart->clear();
            
            http_response_code(201);
            echo json_encode([
                'message' => 'Order created successfully',
                'order_id' => $order_id
            ]);
        } else {
            http_response_code(500);
            echo json_encode(['message' => 'Unable to create order']);
        }
    } else {
        http_response_code(400);
        echo json_encode(['message' => 'Incomplete data']);
    }
}
?>
