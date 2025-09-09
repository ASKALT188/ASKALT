import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useCart } from '@/context/CartContext';

const CartPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, cartCount } = useCart();

  const handleRemoveItem = (id, title) => {
    removeFromCart(id);
    toast({
      title: "🗑️ تم حذف المنتج",
      description: `تم حذف "${title}" من السلة بنجاح`
    });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.15; // 15% VAT
  const total = subtotal + tax;

  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-8">
        <Helmet>
          <title>{"السلة - ASKLAT STORE"}</title>
          <meta name="description" content="عرض منتجات السلة في ASKLAT STORE" />
          <meta property="og:title" content="السلة - ASKLAT STORE" />
          <meta property="og:description" content="عرض منتجات السلة في ASKLAT STORE" />
        </Helmet>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <ShoppingBag className="w-24 h-24 text-gray-600 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-white mb-4">السلة فارغة</h1>
            <p className="text-gray-400 mb-8">لم تقم بإضافة أي منتجات للسلة بعد</p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              <Link to="/products">
                تصفح المنتجات
                <ArrowRight className="w-5 h-5 mr-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <Helmet>
        <title>{`السلة (${cartCount}) - ASKLAT STORE`}</title>
        <meta name="description" content="عرض منتجات السلة في ASKLAT STORE" />
        <meta property="og:title" content={`السلة (${cartCount}) - ASKLAT STORE`} />
        <meta property="og:description" content="عرض منتجات السلة في ASKLAT STORE" />
      </Helmet>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            سلة التسوق
          </h1>
          <p className="text-gray-400">
            لديك {cartItems.length} {cartItems.length > 1 ? 'منتجات' : 'منتج'} في السلة
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ delay: index * 0.05 }}
                className="glass-effect rounded-xl p-6"
              >
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <img  
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    alt={item.title}
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-white mb-2 truncate">
                      <Link to={`/product/${item.id}`} className="hover:text-purple-400">
                        {item.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">
                      {item.price} ر.س
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 p-0"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="w-12 text-center text-white font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 p-0"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <span className="text-xl font-bold text-white">
                          {item.price * item.quantity} ر.س
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveItem(item.id, item.title)}
                          className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-effect rounded-xl p-6 h-fit sticky top-24"
          >
            <h2 className="text-xl font-bold text-white mb-6">ملخص الطلب</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-300">
                <span>المجموع الفرعي</span>
                <span>{subtotal.toFixed(2)} ر.س</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>ضريبة القيمة المضافة (15%)</span>
                <span>{tax.toFixed(2)} ر.س</span>
              </div>
              <div className="border-t border-gray-700 pt-4">
                <div className="flex justify-between text-xl font-bold text-white">
                  <span>المجموع الكلي</span>
                  <span>{total.toFixed(2)} ر.س</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                onClick={handleCheckout}
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                إتمام الشراء
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-purple-500 text-purple-400 hover:bg-purple-500/10"
              >
                <Link to="/products">
                  متابعة التسوق
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <div className="text-center space-y-2">
                <p className="text-sm text-gray-400">دفع آمن ومضمون</p>
                <div className="flex justify-center space-x-4 rtl:space-x-reverse">
                  <span className="text-xs text-gray-500">PayPal</span>
                  <span className="text-xs text-gray-500">Stripe</span>
                  <span className="text-xs text-gray-500">Visa</span>
                  <span className="text-xs text-gray-500">Mastercard</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;