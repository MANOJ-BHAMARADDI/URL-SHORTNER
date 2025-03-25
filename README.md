# URL Shortener

## 🚀 Overview
A simple and efficient URL shortener built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This project allows users to shorten long URLs, track usage statistics, and manage their links.

## 🛠 Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JWT (JSON Web Tokens)
- **Other:** Zod for validation, Rate limiting, CORS, dotenv for environment variables

## 🔥 Features
- 🔗 Shorten long URLs instantly
- 📊 Track click statistics
- 🔒 Secure with JWT authentication
- ⚡ Fast and efficient redirect handling
- 🌍 API for programmatic access

## 📂 Project Structure
```
urlshortener/
│── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│── .env
│── package.json
│── README.md
```

## ⚙️ Installation

### Clone the repository
```sh
git clone https://github.com/yourusername/urlshortener.git
cd urlshortener
```

### Setup Backend
```sh
cd backend
npm install
cp .env.example .env  # Configure environment variables
npm start
```

### Setup Frontend
```sh
cd frontend
npm install
npm start
```

## 🛠 API Endpoints
| Method | Endpoint             | Description           |
|--------|----------------------|-----------------------|
| POST   | /api/auth/register   | Register a new user  |
| POST   | /api/auth/login      | User login           |
| POST   | /api/shorten         | Shorten a URL        |
| GET    | /:shortId            | Redirect to full URL |
| GET    | /api/stats/:shortId  | Get URL statistics   |

## 🔐 Authentication
- JWT-based authentication
- Users must be logged in to manage their links

## 🏗 Future Improvements
- 📈 Advanced analytics dashboard
- 📌 Custom URL aliases
- 📦 Deployment to Vercel/Heroku

## 💡 Contributing
Feel free to open an issue or submit a pull request. Contributions are welcome!

## 📜 License
This project is licensed under the MIT License.

---
🚀 Happy Coding!

