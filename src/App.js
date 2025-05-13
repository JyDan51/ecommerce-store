// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import FavoritesPage from "./pages/FavoritesPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import AuthPage from "./pages/AuthPage";
import ProductPage from "./pages/ProductPage"; // Добавили новый импорт

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/product/:id" element={<ProductPage />} /> {/* Новый маршрут */}
      </Routes>
    </Router>
  );
}

export default App;
