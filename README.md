# Premium E-Commerce Website

A modern, full-stack e-commerce website with PHP backend and MySQL database.

## 🚀 Features

- 🛍️ Product catalog with categories
- 🔐 User authentication (Register/Login)
- 🛒 Shopping cart system
- 📦 Order management
- 👤 User profiles
- 🔒 JWT-based security
- 📱 Responsive design

## 🛠️ Tech Stack

### Frontend
- HTML5, CSS3, JavaScript
- React/Vite (if applicable)
- Responsive UI components

### Backend
- PHP 7.4+
- MySQL Database
- RESTful API
- JWT Authentication

### Server
- XAMPP (Apache + MySQL)

## 📋 Prerequisites

- XAMPP (PHP 7.4+ and MySQL)
- Web Browser
- Git (optional)

## 🔧 Installation

### 1. Clone Repository
```bash
git clone https://github.com/YOUR_USERNAME/Premium-E-commerce-Website-UI.git
cd Premium-E-commerce-Website-UI
```

### 2. Setup Backend

#### Copy Backend to XAMPP
```bash
# Copy backend folder to XAMPP htdocs
copy backend C:\xampp\htdocs\backend
```

#### Start XAMPP
1. Open XAMPP Control Panel
2. Start **Apache**
3. Start **MySQL**

#### Import Database
1. Open phpMyAdmin: http://localhost/phpmyadmin
2. Click "Import"
3. Select `backend/database.sql`
4. Click "Go"

### 3. Configure Frontend
Update API base URL in your frontend files:
```javascript
const API_BASE = 'http://localhost/backend/api';
```

### 4. Run Application
Open in browser:
```
http://localhost/Premium-E-commerce-Website-UI/
```

## 📁 Project Structure

```
Premium-E-commerce-Website-UI/
├── backend/
│   ├── api/              # API endpoints
│   ├── config/           # Database config
│   ├── models/           # Data models
│   ├── middleware/       # Auth middleware
│   ├── database.sql      # Database schema
│   └── README.md         # Backend docs
├── src/                  # Frontend source
├── public/               # Static assets
├── guidelines/           # Project guidelines
├── auth-demo.html        # Auth demo page
└── README.md             # This file
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth.php` - Register/Login/Logout

### Products
- `GET /api/products.php` - Get all products
- `GET /api/products.php?id=1` - Get single product
- `POST /api/products.php` - Create product (Admin)
- `PUT /api/products.php` - Update product (Admin)
- `DELETE /api/products.php?id=1` - Delete product (Admin)

### Cart
- `GET /api/cart.php` - Get user cart
- `POST /api/cart.php` - Add to cart
- `PUT /api/cart.php` - Update cart item
- `DELETE /api/cart.php?id=1` - Remove from cart

### Orders
- `GET /api/orders.php` - Get user orders
- `POST /api/orders.php` - Create order

## 🔐 Default Credentials

**Admin Account:**
- Email: admin@example.com
- Password: admin123

## 🧪 Testing

Test the API:
```bash
# Get products
curl http://localhost/backend/api/products.php

# Login
curl -X POST http://localhost/backend/api/auth.php \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"admin123"}'
```

## 📝 Development

### Frontend Development
```bash
npm install
npm run dev
```

### Backend Development
- Edit PHP files in `backend/`
- Changes reflect immediately (no build needed)
- Check logs in `C:\xampp\apache\logs\`

## 🚀 Deployment

### Backend
1. Upload backend files to web server
2. Import database.sql to production MySQL
3. Update `config/database.php` with production credentials
4. Change JWT secret in `middleware/Auth.php`

### Frontend
1. Build frontend: `npm run build`
2. Upload dist files to web server
3. Update API base URL to production

## 🔒 Security

- JWT token authentication
- Password hashing with bcrypt
- SQL injection prevention (PDO prepared statements)
- CORS configuration
- Input validation

## 🐛 Troubleshooting

**Database Connection Error:**
- Ensure MySQL is running in XAMPP
- Check credentials in `config/database.php`

**404 Errors:**
- Verify backend is in `C:\xampp\htdocs\backend\`
- Check Apache is running

**CORS Errors:**
- Check CORS headers in API files
- Access via `http://localhost` not `file://`

## 📄 License

MIT License

## 👨‍💻 Author

Your Name

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📞 Support

For issues and questions:
- Open an issue on GitHub
- Check documentation in `backend/README.md`

---

**Made with ❤️**
