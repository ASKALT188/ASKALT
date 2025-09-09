import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gamepad2 as GameController2, Mail, MessageCircle, Shield, CreditCard } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 border-t border-purple-500/20 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center"
              >
                <GameController2 className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-xl font-bold gradient-text">ASKLAT STORE</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              متجرك المتخصص في محتوى الألعاب الرقمي. نوفر أفضل السكربتات والمابات والبلوقنات لسيرفراتك.
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-white" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer"
              >
                <Mail className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-white">روابط سريعة</span>
            <nav className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                الرئيسية
              </Link>
              <Link to="/products" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                جميع المنتجات
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                من نحن
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                تواصل معنا
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-white">الفئات</span>
            <nav className="space-y-2">
              <Link to="/products/fivem" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                🎮 سكربتات FiveM
              </Link>
              <Link to="/products/minecraft-maps" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                🗺️ مابات Minecraft
              </Link>
              <Link to="/products/minecraft-plugins" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                🔧 بلوقنات Minecraft
              </Link>
              <Link to="/products/server-setups" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                ⚙️ سيت أب جاهز
              </Link>
            </nav>
          </div>

          {/* Security & Payment */}
          <div className="space-y-4">
            <span className="text-lg font-semibold text-white">الأمان والدفع</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-gray-400 text-sm">دفع آمن 100%</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <CreditCard className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400 text-sm">PayPal & Stripe</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <MessageCircle className="w-4 h-4 text-purple-400" />
                <span className="text-gray-400 text-sm">دعم Discord</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 ASKLAT STORE. جميع الحقوق محفوظة.
          </p>
          <div className="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
              سياسة الخصوصية
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
              الشروط والأحكام
            </Link>
            <Link to="/refund" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
              سياسة الاسترداد
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;