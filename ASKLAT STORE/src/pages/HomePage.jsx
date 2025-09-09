import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { ArrowRight, Star, Download, Users, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';

const HomePage = () => {
  const featuredProducts = [
    {
      id: 1,
      title: "FiveM Advanced Banking System",
      description: "نظام بنكي متقدم مع واجهة حديثة وميزات شاملة",
      price: 299,
      image: "نظام بنكي متطور لسيرفر FiveM مع واجهة مستخدم حديثة",
      category: "fivem",
      rating: 4.9,
      downloads: 1250
    },
    {
      id: 2,
      title: "Minecraft Medieval Castle Map",
      description: "خريطة قلعة من العصور الوسطى مع تفاصيل مذهلة",
      price: 149,
      image: "قلعة من العصور الوسطى في Minecraft مع تفاصيل معمارية رائعة",
      category: "minecraft-maps",
      rating: 4.8,
      downloads: 890
    },
    {
      id: 3,
      title: "Advanced Economy Plugin",
      description: "بلوقن اقتصاد متقدم مع نظام تجارة شامل",
      price: 199,
      image: "واجهة بلوقن الاقتصاد المتقدم لسيرفر Minecraft",
      category: "minecraft-plugins",
      rating: 4.7,
      downloads: 2100
    }
  ];

  const categories = [
    {
      name: "سكربتات FiveM",
      description: "سكربتات احترافية لسيرفرات GTA V RP",
      icon: "🎮",
      path: "/products/fivem",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "مابات Minecraft",
      description: "خرائط مذهلة ومبدعة لعالمك",
      icon: "🗺️",
      path: "/products/minecraft-maps",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "بلوقنات Minecraft",
      description: "إضافات قوية لتطوير سيرفرك",
      icon: "🔧",
      path: "/products/minecraft-plugins",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "سيت أب جاهز",
      description: "حلول جاهزة لإطلاق سيرفرك",
      icon: "⚙️",
      path: "/products/server-setups",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { icon: Users, value: "5000+", label: "عميل راضي" },
    { icon: Download, value: "15000+", label: "تحميل" },
    { icon: Star, value: "4.9", label: "تقييم المتجر" },
    { icon: Shield, value: "100%", label: "دفع آمن" }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{"ASKLAT STORE - الرئيسية | متجر محتوى الألعاب الرقمي"}</title>
        <meta name="description" content="اكتشف أفضل سكربتات FiveM ومابات Minecraft وبلوقنات وسيت أب جاهز في ASKLAT STORE. محتوى عالي الجودة لسيرفراتك." />
        <meta property="og:title" content="ASKLAT STORE - الرئيسية | متجر محتوى الألعاب الرقمي" />
        <meta property="og:description" content="اكتشف أفضل سكربتات FiveM ومابات Minecraft وبلوقنات وسيت أب جاهز في ASKLAT STORE. محتوى عالي الجودة لسيرفراتك." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="gradient-text">ASKLAT STORE</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                متجرك المتخصص في محتوى الألعاب الرقمي
                <br />
                <span className="text-purple-400">سكربتات • مابات • بلوقنات • سيت أب جاهز</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full glow-purple"
              >
                <Link to="/products">
                  استكشف المنتجات
                  <ArrowRight className="w-5 h-5 mr-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-full"
              >
                <Link to="/about">
                  تعرف علينا
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl floating-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl floating-animation" style={{ animationDelay: '4s' }}></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              استكشف <span className="gradient-text">فئاتنا</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              اختر من مجموعة واسعة من المحتوى عالي الجودة المصمم خصيصاً لسيرفراتك
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={category.path}>
                  <div className="glass-effect rounded-xl p-6 card-hover group">
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 text-center">
                      {category.name}
                    </h3>
                    <p className="text-gray-400 text-center text-sm">
                      {category.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              المنتجات <span className="gradient-text">المميزة</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              اكتشف أحدث وأفضل منتجاتنا المختارة بعناية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full"
            >
              <Link to="/products">
                عرض جميع المنتجات
                <ArrowRight className="w-5 h-5 mr-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              لماذا <span className="gradient-text">ASKLAT STORE</span>؟
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-effect rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">جودة عالية</h3>
              <p className="text-gray-400">
                جميع منتجاتنا مختبرة ومضمونة الجودة مع دعم فني متواصل
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-effect rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">دفع آمن</h3>
              <p className="text-gray-400">
                نظام دفع آمن 100% مع ضمان استرداد الأموال
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-effect rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">دعم مستمر</h3>
              <p className="text-gray-400">
                فريق دعم متخصص متاح 24/7 لمساعدتك في أي وقت
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;