import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ProductsPage from '@/pages/ProductsPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import CartPage from '@/pages/CartPage';
import CheckoutPage from '@/pages/CheckoutPage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import ProfilePage from '@/pages/ProfilePage';
import ProtectedRoute from '@/components/ProtectedRoute';
import { CartProvider } from '@/context/CartContext';
import { AuthProvider } from '@/context/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Helmet>
              <title>{"ASKLAT STORE - متجر محتوى الألعاب الرقمي"}</title>
              <meta name="description" content="متجر ASKLAT STORE المتخصص في بيع سكربتات FiveM ومابات Minecraft وبلوقنات وسيت أب جاهز للسيرفرات" />
              <meta property="og:title" content="ASKLAT STORE - متجر محتوى الألعاب الرقمي" />
              <meta property="og:description" content="متجر ASKLAT STORE المتخصص في بيع سكربتات FiveM ومابات Minecraft وبلوقنات وسيت أب جاهز للسيرفرات" />
              <meta property="og:type" content="website" />
            </Helmet>
            
            <Header />
            
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/:category" element={<ProductsPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                } />
              </Routes>
            </main>
            
            <Footer />
            <Toaster />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;