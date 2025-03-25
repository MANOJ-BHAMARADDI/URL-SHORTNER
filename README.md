# URL Shortener

## 🚀 Overview
A simple and efficient URL shortener built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This project allows users to shorten long URLs, and manage their links.

## 🛠 Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ORM)
- **Other:** CORS, dotenv for environment variables

## 🔥 Features
- 🔗 Shorten long URLs instantly
- 📊 Track click statistics
- 🔒 Secure with JWT authentication
- ⚡ Fast and efficient redirect handling
- 🌍 API for programmatic access

## ⚙️ Installation

### Clone the repository
```sh
git clone https://github.com/MANOJ-BHAMARADDI/URL-SHORTNER.git
cd urlshortener
```

### Setup Backend
```sh
cd backend
npm install
cp .env.example .env  # Configure environment variables
npm run dev
```

### Setup Frontend
```sh
cd frontend
npm install
npm run dev
```

## 🛠 API Endpoints
| Method | Endpoint             | Description           |
|--------|----------------------|-----------------------|
| POST   | /api/shorten         | Shorten a URL        |
| GET    | /:shortId            | Redirect to full URL |


## 💡 Contributing
Feel free to open an issue or submit a pull request. Contributions are welcome!

---
🚀 Happy Coding!

