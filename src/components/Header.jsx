import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, Menu, X, User, Gamepad2 as GameController2, LogOut, LayoutDashboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const { user, logout } = useAuth();

  const categories = [
    { name: 'سكربتات FiveM', path: '/products/fivem', icon: '🎮' },
    { name: 'مابات Minecraft', path: '/products/minecraft-maps', icon: '🗺️' },
    { name: 'بلوقنات Minecraft', path: '/products/minecraft-plugins', icon: '🔧' },
    { name: 'سيت أب جاهز', path: '/products/server-setups', icon: '⚙️' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center"
            >
              <GameController2 className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-xl font-bold gradient-text">ASKLAT STORE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            <Link to="/" className="text-gray-300 hover:text-purple-400 transition-colors">
              الرئيسية
            </Link>
            <div className="relative group">
              <button className="text-gray-300 hover:text-purple-400 transition-colors flex items-center">
                المنتجات
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full right-0 mt-2 w-64 glass-effect rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="p-4 space-y-2">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      to={category.path}
                      className="flex items-center space-x-3 rtl:space-x-reverse p-2 rounded-lg hover:bg-purple-500/20 transition-colors"
                    >
                      <span className="text-lg">{category.icon}</span>
                      <span className="text-gray-300">{category.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/about" className="text-gray-300 hover:text-purple-400 transition-colors">
              من نحن
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-purple-400 transition-colors">
              تواصل معنا
            </Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن المنتجات..."
                className="w-64 px-4 py-2 pr-10 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-400"
              >
                <Search className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile">
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      <span>لوحة التحكم</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>تسجيل الخروج</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-300 hover:text-purple-400"
              >
                <Link to="/login">
                  <User className="w-5 h-5" />
                </Link>
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="text-gray-300 hover:text-purple-400 relative"
            >
              <Link to="/cart">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                    {cartCount}
                  </span>
                )}
              </Link>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-300 hover:text-purple-400"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-700 py-4"
          >
            <div className="space-y-4">
              <form onSubmit={handleSearch} className="md:hidden">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="ابحث عن المنتجات..."
                    className="w-full px-4 py-2 pr-10 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 text-white placeholder-gray-400"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-400"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </form>
              
              <nav className="space-y-2">
                <Link
                  to="/"
                  className="block py-2 text-gray-300 hover:text-purple-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  الرئيسية
                </Link>
                <div className="space-y-2">
                  <span className="block py-2 text-gray-300 font-medium">المنتجات</span>
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      to={category.path}
                      className="block py-2 pr-4 text-gray-400 hover:text-purple-400 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {category.icon} {category.name}
                    </Link>
                  ))}
                </div>
                <Link
                  to="/about"
                  className="block py-2 text-gray-300 hover:text-purple-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  من نحن
                </Link>
                <Link
                  to="/contact"
                  className="block py-2 text-gray-300 hover:text-purple-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  تواصل معنا
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;