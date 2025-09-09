import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Star, Download, ShoppingCart, Heart, Share2, Shield, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useCart } from '@/context/CartContext';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Mock product data - in a real app, this would be fetched
  const product = {
    id: parseInt(id),
    title: "FiveM Advanced Banking System",
    description: "نظام بنكي متقدم ومتكامل لسيرفرات FiveM مع واجهة مستخدم حديثة وميزات شاملة. يتضمن النظام إدارة الحسابات، التحويلات، القروض، والاستثمارات مع نظام أمان متطور.",
    price: 299,
    originalPrice: 399,
    images: [
      "نظام بنكي متطور لسيرفر FiveM مع واجهة مستخدم حديثة",
      "لوحة تحكم البنك في FiveM مع إحصائيات مفصلة",
      "واجهة تحويل الأموال في نظام البنك",
      "نظام القروض والاستثمارات في البنك"
    ],
    category: "fivem",
    rating: 4.9,
    reviews: 127,
    downloads: 1250,
    featured: true,
    tags: ["بنك", "اقتصاد", "FiveM", "سكربت"],
    features: [
      "واجهة مستخدم حديثة وسهلة الاستخدام",
      "نظام حسابات متعدد مع أنواع مختلفة",
      "تحويلات فورية وآمنة بين الحسابات",
      "نظام قروض مع فوائد قابلة للتخصيص",
      "استثمارات طويلة وقصيرة المدى",
      "تقارير مالية مفصلة وإحصائيات",
      "نظام أمان متطور ضد الاختراق",
      "دعم متعدد اللغات (عربي/إنجليزي)"
    ],
    requirements: [
      "FiveM Server",
      "ESX Framework",
      "MySQL Database",
      "Node.js 16+"
    ],
    changelog: [
      {
        version: "2.1.0",
        date: "2024-01-15",
        changes: [
          "إضافة نظام الاستثمارات الجديد",
          "تحسين واجهة المستخدم",
          "إصلاح مشاكل الأداء"
        ]
      },
      {
        version: "2.0.5",
        date: "2024-01-10",
        changes: [
          "إصلاح مشكلة التحويلات",
          "تحديث نظام الأمان"
        ]
      }
    ]
  };

  const relatedProducts = [
    {
      id: 2,
      title: "FiveM Police MDT System",
      price: 249,
      image: "نظام MDT للشرطة في FiveM مع واجهة احترافية",
      rating: 4.6
    },
    {
      id: 3,
      title: "Advanced Economy Plugin",
      price: 199,
      image: "واجهة بلوقن الاقتصاد المتقدم لسيرفر Minecraft",
      rating: 4.7
    }
  ];

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "🛒 تمت الإضافة للسلة",
      description: `تمت إضافة ${quantity} × "${product.title}" إلى السلة.`
    });
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  const handleWishlist = () => {
    toast({
      title: "❤️ قائمة الأمنيات",
      description: "🚧 هذه الميزة غير مطبقة بعد—لكن لا تقلق! يمكنك طلبها في رسالتك التالية! 🚀"
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "🔗 تم نسخ الرابط",
      description: "تم نسخ رابط المنتج إلى الحافظة."
    });
  };

  return (
    <div className="min-h-screen py-8">
      <Helmet>
        <title>{`${product.title} - ASKLAT STORE`}</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={`${product.title} - ASKLAT STORE`} />
        <meta property="og:description" content={product.description} />
      </Helmet>

      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-400 mb-8"
        >
          <Link to="/" className="hover:text-purple-400">الرئيسية</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-purple-400">المنتجات</Link>
          <span>/</span>
          <span className="text-white">{product.title}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="aspect-video rounded-xl overflow-hidden glass-effect">
              <img  
                className="w-full h-full object-cover"
                alt={product.title}
               src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-video rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-purple-500' : 'border-gray-700'
                  }`}
                >
                  <img  
                    className="w-full h-full object-cover"
                    alt={`${product.title} - صورة ${index + 1}`}
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {product.title}
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Rating and Stats */}
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-white font-medium">{product.rating}</span>
                <span className="text-gray-400">({product.reviews} تقييم)</span>
              </div>
              <div className="flex items-center space-x-1 rtl:space-x-reverse text-gray-400">
                <Download className="w-4 h-4" />
                <span>{product.downloads} تحميل</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <span className="text-3xl font-bold text-white">
                {product.price} <span className="text-lg text-gray-400">ر.س</span>
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  {product.originalPrice} ر.س
                </span>
              )}
              {product.originalPrice && (
                <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">
                  وفر {product.originalPrice - product.price} ر.س
                </span>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span className="text-gray-400">الكمية:</span>
                  <div className="flex items-center border border-gray-600 rounded">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 hover:bg-gray-700 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-gray-800 text-white">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-700 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 rtl:space-x-reverse">
                <Button
                  onClick={handleBuyNow}
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                >
                  شراء فوري
                </Button>
                <Button
                  onClick={handleAddToCart}
                  variant="outline"
                  size="lg"
                  className="flex-1 border-purple-500 text-purple-400 hover:bg-purple-500/10"
                >
                  <ShoppingCart className="w-5 h-5 ml-2" />
                  إضافة للسلة
                </Button>
              </div>

              <div className="flex space-x-4 rtl:space-x-reverse">
                <Button
                  onClick={handleWishlist}
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-red-400"
                >
                  <Heart className="w-4 h-4 ml-2" />
                  إضافة للمفضلة
                </Button>
                <Button
                  onClick={handleShare}
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-blue-400"
                >
                  <Share2 className="w-4 h-4 ml-2" />
                  مشاركة
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-700">
              <div className="text-center">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <span className="text-sm text-gray-400">دفع آمن</span>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <span className="text-sm text-gray-400">تحديث فوري</span>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <span className="text-sm text-gray-400">دعم 24/7</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="glass-effect rounded-xl p-8">
            <div className="space-y-8">
              {/* Features */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">المميزات</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">المتطلبات</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.requirements.map((req, index) => (
                    <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-300">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Changelog */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">سجل التحديثات</h3>
                <div className="space-y-4">
                  {product.changelog.map((version, index) => (
                    <div key={index} className="border border-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-semibold text-white">
                          الإصدار {version.version}
                        </span>
                        <span className="text-gray-400 text-sm">{version.date}</span>
                      </div>
                      <ul className="space-y-1">
                        {version.changes.map((change, changeIndex) => (
                          <li key={changeIndex} className="text-gray-300 text-sm flex items-center space-x-2 rtl:space-x-reverse">
                            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                            <span>{change}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8">منتجات ذات صلة</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct, index) => (
              <motion.div
                key={relatedProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-xl overflow-hidden card-hover"
              >
                <Link to={`/product/${relatedProduct.id}`}>
                  <img  
                    className="w-full h-48 object-cover"
                    alt={relatedProduct.title}
                   src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {relatedProduct.title}
                    </h4>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{relatedProduct.rating}</span>
                      </div>
                      <span className="text-xl font-bold text-white">
                        {relatedProduct.price} ر.س
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetailPage;