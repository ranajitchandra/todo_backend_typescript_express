🚀 Express TypeScript REST API

A RESTful API built with Node.js, Express, TypeScript, PostgreSQL, and JWT Authentication.
Designed with a scalable modular architecture, controller–service pattern, and role-based access control.

📌 Features

✅ Modular folder structure

🔐 JWT authentication

🧑‍⚖️ Role-based authorization (admin, user)

🗄️ PostgreSQL database

🧩 Controller–Service architecture

🧪 Clean error handling

🛡️ Middleware-based security


| Technology | Description         |
| ---------- | ------------------- |
| Node.js    | JavaScript runtime  |
| Express.js | Web framework       |
| TypeScript | Static typing       |
| PostgreSQL | Relational database |
| JWT        | Authentication      |
| pg         | PostgreSQL client   |


📁 Project Structure

src/
├── app.ts                  # Express app configuration
├── server.ts               # Application entry point
│
├── config/                 # Configurations
│   ├── index.ts            # Environment variables
│   └── db.ts               # PostgreSQL connection
│
├── middleware/             # Custom middlewares
│   ├── auth.ts             # JWT & role-based authorization
│   └── logger.ts           # Request logger
│
├── modules/                # Feature-based modules
│   │
│   ├── auth/               # Authentication
│   │   └── auth.route.ts
│   │
│   ├── users/              # User management
│   │   ├── user.route.ts
│   │   ├── user.controller.ts
│   │   └── user.service.ts
│   │
│   └── todos/              # Todo management
│       ├── todos.route.ts
│       ├── todos.controller.ts
│       └── todos.service.ts

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install


🔧 Environment Variables
PORT=5000
DATABASE_URL=postgresql://username:password@localhost:5432/db_name
JWT_SECRET=your_jwt_secret

▶️ Running the Application

npm run dev
npm run build
npm start


🔐 Authentication & Authorization

JWT is required for protected routes

Token must be sent via headers
Authorization: <JWT_TOKEN>
auth("admin", "user")


What it does:

Verifies JWT token

Extracts user info

Checks role permissions

Attaches user data to req.user


📡 API Endpoints

| Method | Endpoint | Description      |
| ------ | -------- | ---------------- |
| GET    | `/`      | API health check |

👤 Users (/users)
| Method | Endpoint     | Access      | Description    |
| ------ | ------------ | ----------- | -------------- |
| POST   | `/users`     | Public      | Create user    |
| GET    | `/users`     | Admin       | Get all users  |
| GET    | `/users/:id` | Admin, User | Get user by ID |
| PUT    | `/users/:id` | Public      | Update user    |
| DELETE | `/users/:id` | Public      | Delete user    |


✅ Todos (/todos)
| Method | Endpoint     | Description    |
| ------ | ------------ | -------------- |
| POST   | `/todos`     | Create todo    |
| GET    | `/todos`     | Get all todos  |
| GET    | `/todos/:id` | Get todo by ID |
| PUT    | `/todos/:id` | Update todo    |
| DELETE | `/todos/:id` | Delete todo    |

🔑 Auth (/auth)
| Method | Endpoint         | Description |
| ------ | ---------------- | ----------- |
| POST   | `/auth/login`    | Login       |
| POST   | `/auth/register` | Register    |

🧪 Example Request
Create Todo

POST /todos
Content-Type: application/json

{
  "title": "Learn TypeScript",
  "completed": false
}

❌ Error Handling
Route Not Found
{
  "success": false,
  "message": "Route Not Found",
  "path": "/invalid-route"
}

Unauthorized Access
{
  "error": "Unauthorized!!"
}

🧠 Best Practices Used

Separation of concerns

Middleware-driven architecture

Type safety with TypeScript

Clean and readable codebase

RESTful conventions

👨‍💻 Author

Ranajit
Backend Developer | Node.js | TypeScript

📜 License

This project is licensed under the MIT License.

⭐ If you like this project, give it a star on GitHub!