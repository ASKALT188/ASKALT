import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Filter, Grid, List, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';

const ProductsPage = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');

  // Mock products data
  const allProducts = [
    {
      id: 1,
      title: "FiveM Advanced Banking System",
      description: "نظام بنكي متقدم مع واجهة حديثة وميزات شاملة للسيرفرات",
      price: 299,
      image: "نظام بنكي متطور لسيرفر FiveM مع واجهة مستخدم حديثة",
      category: "fivem",
      rating: 4.9,
      downloads: 1250,
      featured: true
    },
    {
      id: 2,
      title: "Minecraft Medieval Castle Map",
      description: "خريطة قلعة من العصور الوسطى مع تفاصيل معمارية مذهلة",
      price: 149,
      image: "قلعة من العصور الوسطى في Minecraft مع تفاصيل معمارية رائعة",
      category: "minecraft-maps",
      rating: 4.8,
      downloads: 890,
      featured: true
    },
    {
      id: 3,
      title: "Advanced Economy Plugin",
      description: "بلوقن اقتصاد متقدم مع نظام تجارة شامل ومتاجر",
      price: 199,
      image: "واجهة بلوقن الاقتصاد المتقدم لسيرفر Minecraft",
      category: "minecraft-plugins",
      rating: 4.7,
      downloads: 2100,
      featured: true
    },
    {
      id: 4,
      title: "FiveM Police MDT System",
      description: "نظام MDT للشرطة مع قاعدة بيانات شاملة",
      price: 249,
      image: "نظام MDT للشرطة في FiveM مع واجهة احترافية",
      category: "fivem",
      rating: 4.6,
      downloads: 756
    },
    {
      id: 5,
      title: "Modern City Minecraft Map",
      description: "خريطة مدينة حديثة مع ناطحات سحاب ومباني متطورة",
      price: 179,
      image: "مدينة حديثة في Minecraft مع ناطحات سحاب ومباني متطورة",
      category: "minecraft-maps",
      rating: 4.5,
      downloads: 1340
    },
    {
      id: 6,
      title: "Complete Server Setup Package",
      description: "حزمة سيت أب كاملة لسيرفر Minecraft مع جميع الإعدادات",
      price: 399,
      image: "حزمة سيت أب كاملة لسيرفر Minecraft مع لوحة تحكم",
      category: "server-setups",
      rating: 4.9,
      downloads: 567
    }
  ];

  const categories = [
    { id: 'all', name: 'جميع المنتجات', count: allProducts.length },
    { id: 'fivem', name: 'سكربتات FiveM', count: allProducts.filter(p => p.category === 'fivem').length },
    { id: 'minecraft-maps', name: 'مابات Minecraft', count: allProducts.filter(p => p.category === 'minecraft-maps').length },
    { id: 'minecraft-plugins', name: 'بلوقنات Minecraft', count: allProducts.filter(p => p.category === 'minecraft-plugins').length },
    { id: 'server-setups', name: 'سيت أب جاهز', count: allProducts.filter(p => p.category === 'server-setups').length }
  ];

  // Filter products based on category and search
  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'downloads':
        return b.downloads - a.downloads;
      default:
        return b.id - a.id; // newest first
    }
  });

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  const getCategoryTitle = () => {
    const cat = categories.find(c => c.id === selectedCategory);
    return cat ? cat.name : 'جميع المنتجات';
  };

  return (
    <div className="min-h-screen py-8">
      <Helmet>
        <title>{`${getCategoryTitle()} - ASKLAT STORE`}</title>
        <meta name="description" content={`تصفح ${getCategoryTitle()} في ASKLAT STORE. أفضل محتوى الألعاب الرقمي بجودة عالية.`} />
        <meta property="og:title" content={`${getCategoryTitle()} - ASKLAT STORE`} />
        <meta property="og:description" content={`تصفح ${getCategoryTitle()} في ASKLAT STORE. أفضل محتوى الألعاب الرقمي بجودة عالية.`} />
      </Helmet>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {getCategoryTitle()}
          </h1>
          {searchQuery && (
            <p className="text-gray-400">
              نتائج البحث عن: "<span className="text-purple-400">{searchQuery}</span>"
            </p>
          )}
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-64 space-y-6"
          >
            {/* Categories */}
            <div className="glass-effect rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Filter className="w-5 h-5 ml-2" />
                الفئات
              </h3>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`w-full text-right p-2 rounded-lg transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{cat.name}</span>
                      <span className="text-sm">({cat.count})</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="glass-effect rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">نطاق السعر</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="w-20 px-2 py-1 bg-gray-800 border border-gray-600 rounded text-white text-sm"
                    placeholder="من"
                  />
                  <span className="text-gray-400">-</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 1000])}
                    className="w-20 px-2 py-1 bg-gray-800 border border-gray-600 rounded text-white text-sm"
                    placeholder="إلى"
                  />
                  <span className="text-gray-400 text-sm">ر.س</span>
                </div>
              </div>
            </div>

            {/* Sort Options */}
            <div className="glass-effect rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">ترتيب حسب</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white"
              >
                <option value="newest">الأحدث</option>
                <option value="price-low">السعر: من الأقل للأعلى</option>
                <option value="price-high">السعر: من الأعلى للأقل</option>
                <option value="rating">التقييم</option>
                <option value="downloads">الأكثر تحميلاً</option>
              </select>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* View Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between mb-6"
            >
              <div className="text-gray-400">
                عرض {sortedProducts.length} من {allProducts.length} منتج
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>

            {/* Products */}
            {sortedProducts.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`grid gap-6 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                    : 'grid-cols-1'
                }`}
              >
                {sortedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">لا توجد منتجات</h3>
                <p className="text-gray-400">جرب تغيير معايير البحث أو الفلترة</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;