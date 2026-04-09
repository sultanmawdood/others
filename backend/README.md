# E-Commerce PHP Backend with MySQL

A complete PHP backend for the e-commerce website using MySQL database and XAMPP.

## 🚀 Features
- ✅ User Authentication (Register, Login, Logout)
- ✅ JWT Token-based Security
- ✅ Product Management (CRUD)
- ✅ Shopping Cart System
- ✅ Order Processing
- ✅ CORS Enabled
- ✅ RESTful API Design

## 📋 Requirements
- XAMPP (PHP 7.4+ and MySQL)
- Web Browser

## 🛠️ Installation

### Step 1: Install XAMPP
1. Download XAMPP from https://www.apachefriends.org/
2. Install XAMPP
3. Open XAMPP Control Panel
4. Start **Apache** and **MySQL**

### Step 2: Setup Project
1. Copy the `backend` folder to `C:\xampp\htdocs\`
   - Final path: `C:\xampp\htdocs\backend\`

### Step 3: Create Database
**Option A: Using phpMyAdmin (Recommended)**
1. Open browser and go to: http://localhost/phpmyadmin
2. Click "Import" tab
3. Click "Choose File" and select `database.sql` from the backend folder
4. Click "Go" button at the bottom
5. Done! Database created with sample data

**Option B: Manual SQL**
1. Open phpMyAdmin: http://localhost/phpmyadmin
2. Click "SQL" tab
3. Copy all content from `database.sql`
4. Paste into SQL box
5. Click "Go"

### Step 4: Test Backend
Open browser and test:
```
http://localhost/backend/api/products.php
```
You should see a JSON response with products!

## 🔌 API Endpoints

### Base URL
```
http://localhost/backend/api/
```

### Authentication

#### Register User
```http
POST /api/auth.php (with /register in URL)
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "accessToken": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "customer"
  }
}
```

#### Login
```http
POST /api/auth.php (with /login in URL)
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "admin123"
}
```

#### Logout
```http
POST /api/auth.php (with /logout in URL)
Authorization: Bearer {token}
```

### Products

#### Get All Products
```http
GET /api/products.php
```

#### Get Single Product
```http
GET /api/products.php?id=1
```

#### Create Product (Admin Only)
```http
POST /api/products.php
Authorization: Bearer {admin_token}
Content-Type: application/json

{
  "name": "New Product",
  "description": "Product description",
  "price": 99.99,
  "category": "Electronics",
  "stock": 50,
  "image_url": "product.jpg"
}
```

#### Update Product (Admin Only)
```http
PUT /api/products.php
Authorization: Bearer {admin_token}
Content-Type: application/json

{
  "id": 1,
  "name": "Updated Product",
  "description": "Updated description",
  "price": 89.99,
  "category": "Electronics",
  "stock": 45,
  "image_url": "product.jpg"
}
```

#### Delete Product (Admin Only)
```http
DELETE /api/products.php?id=1
Authorization: Bearer {admin_token}
```

### Cart (Requires Authentication)

#### Get User Cart
```http
GET /api/cart.php
Authorization: Bearer {token}
```

#### Add to Cart
```http
POST /api/cart.php
Authorization: Bearer {token}
Content-Type: application/json

{
  "product_id": 1,
  "quantity": 2
}
```

#### Update Cart Item
```http
PUT /api/cart.php
Authorization: Bearer {token}
Content-Type: application/json

{
  "id": 1,
  "quantity": 3
}
```

#### Remove from Cart
```http
DELETE /api/cart.php?id=1
Authorization: Bearer {token}
```

#### Clear Cart
```http
DELETE /api/cart.php?clear=true
Authorization: Bearer {token}
```

### Orders (Requires Authentication)

#### Get User Orders
```http
GET /api/orders.php
Authorization: Bearer {token}
```

#### Get Single Order
```http
GET /api/orders.php?id=1
Authorization: Bearer {token}
```

#### Create Order
```http
POST /api/orders.php
Authorization: Bearer {token}
Content-Type: application/json

{
  "shipping_address": "123 Main St, City, Country",
  "total_amount": 299.99,
  "items": [
    {
      "product_id": 1,
      "quantity": 2,
      "price": 99.99
    }
  ]
}
```

## 🔐 Default Credentials

### Admin Account
- **Email:** admin@example.com
- **Password:** admin123

### Sample Products
The database includes 5 sample products:
- Laptop ($999.99)
- Smartphone ($699.99)
- Headphones ($199.99)
- T-Shirt ($29.99)
- Sneakers ($89.99)

## 🌐 Frontend Integration

### Update API Base URL
In your `auth-demo.html` or frontend code:
```javascript
const API_BASE = 'http://localhost/backend/api';
```

### Making API Calls

**Register/Login:**
```javascript
const response = await fetch('http://localhost/backend/api/auth.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'password123'
  })
});
```

**Authenticated Requests:**
```javascript
const token = localStorage.getItem('accessToken');

const response = await fetch('http://localhost/backend/api/cart.php', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});
```

## 📁 Project Structure
```
backend/
├── api/
│   ├── auth.php          # Authentication endpoints
│   ├── products.php      # Product CRUD
│   ├── cart.php          # Cart management
│   └── orders.php        # Order processing
├── config/
│   └── database.php      # Database connection
├── models/
│   ├── User.php          # User model
│   ├── Product.php       # Product model
│   ├── Cart.php          # Cart model
│   └── Order.php         # Order model
├── middleware/
│   └── Auth.php          # JWT authentication
├── .htaccess             # URL rewriting
├── database.sql          # Database schema
└── README.md             # This file
```

## 🔧 Configuration

### Database Settings
Edit `config/database.php` if needed:
```php
private $host = "localhost";
private $db_name = "ecommerce_db";
private $username = "root";
private $password = "";  // Default XAMPP has no password
```

### JWT Secret Key
For production, change the secret key in `middleware/Auth.php`:
```php
private static $secret_key = "your-secret-key-change-this-in-production";
```

## ❗ Troubleshooting

### Database Connection Error
- Make sure MySQL is running in XAMPP Control Panel
- Check database name is `ecommerce_db`
- Verify credentials in `config/database.php`

### 404 Not Found
- Ensure files are in `C:\xampp\htdocs\backend\`
- Check Apache is running in XAMPP
- Verify `.htaccess` file exists

### CORS Errors
- Check CORS headers in API files
- Ensure `.htaccess` is configured
- Try accessing from `http://localhost` not `file://`

### Token Errors
- Check Authorization header format: `Bearer {token}`
- Verify token is not expired (24 hours)
- Make sure token is stored correctly

### Can't Import database.sql
- File too large? Import via SQL tab instead
- Check MySQL is running
- Try creating database manually first

## 🔒 Security Notes

### For Production:
1. Change JWT secret key in `middleware/Auth.php`
2. Use HTTPS instead of HTTP
3. Update CORS to allow only your domain
4. Use environment variables for sensitive data
5. Enable error logging, disable error display
6. Add rate limiting
7. Use prepared statements (already implemented)
8. Validate and sanitize all inputs

## 📝 Testing with Postman

1. Download Postman: https://www.postman.com/downloads/
2. Import the API endpoints
3. Test each endpoint with sample data
4. Save tokens for authenticated requests

## 🎯 Next Steps

1. ✅ Setup XAMPP and import database
2. ✅ Test API endpoints
3. ✅ Update frontend to use new API
4. ✅ Test authentication flow
5. ✅ Test cart and orders
6. 🚀 Deploy to production

## 📞 Support

For issues:
1. Check XAMPP Apache and MySQL are running
2. Verify database is imported correctly
3. Check browser console for errors
4. Review PHP error logs in `C:\xampp\apache\logs\`

## 📄 License
MIT License

---

**Made with ❤️ for E-Commerce**
