# 🛍️ Internship E-Commerce Project

A full-stack e-commerce store built with **React**, **Node.js**, and **MongoDB** as part of an internship project.

This project includes:
- 🔐 User authentication (register & login)
- 🛒 Product catalog with filtering
- ❤️ Favorites (frontend-managed)
- 🛍️ Cart & checkout
- 📦 Order submission

---

## 🚀 Live Demo

- **Frontend (Vercel)**: https://ecommerce-store-seven-sage.vercel.app/
- **GitHub Repository**: https://github.com/JyDan51/ecommerce-store
- *(Backend can be run locally or deployed separately — see below)*

---

## ⚙️ Tech Stack

- **Frontend**: React, React Router, plain CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB Atlas
- **Auth**: JWT + bcrypt
- **Hosting**: Vercel (frontend), optional Render (backend)

---

## 📁 Project Structure

```
ecommerce-store/
├── backend/             # Express API
│   ├── models/          # Mongoose models
│   ├── controllers/     # Business logic
│   ├── routes/          # Route definitions
│   ├── middleware/      # Auth middleware
│   └── server.js        # Entry point
├── public/              # Static assets (React)
├── src/                 # React app
│   ├── api/             # API utility functions
│   ├── components/      # UI components
│   └── pages/           # App views
├── .env.example         # Environment template
└── README.md            # This file
```

---

## 🛠️ Local Development

### 🔧 Backend Setup

1. Open terminal and go into the backend:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file based on the example:

```bash
cp .env.example .env
```

4. Fill in the following values in `.env`:

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/ecommerce?retryWrites=true&w=majority
JWT_SECRET=your_secret
PORT=5000
```

5. Start the backend server:

```bash
node server.js
```

It runs at `http://localhost:5000`

---

### 🌐 Frontend Setup

1. Navigate to the root (if not already there):

```bash
cd ecommerce-store
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The app runs at `http://localhost:3000`

---

## 📦 Environment Variables

Create a `.env` file in `/backend` based on this example:

```
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

> ❗ Never commit `.env` to GitHub. Use `.env.example` to share variable names only.

---

## 🧪 Testing the App

1. Register a user
2. Log in
3. Add products to cart and favorites
4. Filter products
5. Fill the checkout form and place an order

---

## 📸 Screenshots (optional)

> You can add screenshots of the homepage, catalog, cart, and checkout.

---

## 📝 Notes

- Favorites are stored in frontend state.
- Cart and orders are stored in MongoDB.
- Backend must be running locally or deployed for full functionality.

---

## 🙋 Handoff Notes for the Company

- Clone the repo: https://github.com/JyDan51/ecommerce-store
- Install dependencies and follow the setup guide above
- Use MongoDB Atlas for database (a `.env.example` is provided)
- Backend can be hosted via Render if needed

---

## 👤 Developed by Miika Leppänen & Daniil Iurkin