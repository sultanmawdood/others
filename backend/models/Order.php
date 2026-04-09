<?php
class Order {
    private $conn;
    private $table = "orders";

    public $id;
    public $user_id;
    public $total_amount;
    public $status;
    public $shipping_address;

    public function __construct($db) {
        $this->conn = $db;
    }

    public function create($items) {
        try {
            $this->conn->beginTransaction();

            $query = "INSERT INTO " . $this->table . " (user_id, total_amount, status, shipping_address) VALUES (:user_id, :total_amount, :status, :shipping_address)";
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(":user_id", $this->user_id);
            $stmt->bindParam(":total_amount", $this->total_amount);
            $stmt->bindParam(":status", $this->status);
            $stmt->bindParam(":shipping_address", $this->shipping_address);
            $stmt->execute();

            $order_id = $this->conn->lastInsertId();

            $query = "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (:order_id, :product_id, :quantity, :price)";
            $stmt = $this->conn->prepare($query);

            foreach ($items as $item) {
                $stmt->bindParam(":order_id", $order_id);
                $stmt->bindParam(":product_id", $item['product_id']);
                $stmt->bindParam(":quantity", $item['quantity']);
                $stmt->bindParam(":price", $item['price']);
                $stmt->execute();
            }

            $this->conn->commit();
            return $order_id;
        } catch (Exception $e) {
            $this->conn->rollBack();
            return false;
        }
    }

    public function getByUserId() {
        $query = "SELECT * FROM " . $this->table . " WHERE user_id = :user_id ORDER BY created_at DESC";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":user_id", $this->user_id);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getById() {
        $query = "SELECT o.*, oi.product_id, oi.quantity, oi.price, p.name as product_name 
                  FROM " . $this->table . " o 
                  LEFT JOIN order_items oi ON o.id = oi.order_id 
                  LEFT JOIN products p ON oi.product_id = p.id 
                  WHERE o.id = :id";
        $stmt = $this->conn->prepare($query);
        $stmt->bindParam(":id", $this->id);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
?>
