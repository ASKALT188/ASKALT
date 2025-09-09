import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Download, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }) => {
  const { toast } = useToast();
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast({
      title: "🛒 تمت الإضافة للسلة",
      description: `تمت إضافة "${product.title}" إلى السلة.`
    });
  };

  const getCategoryBadge = (category) => {
    const badges = {
      'fivem': { text: 'FiveM', color: 'bg-purple-500' },
      'minecraft-maps': { text: 'خرائط', color: 'bg-blue-500' },
      'minecraft-plugins': { text: 'بلوقنات', color: 'bg-green-500' },
      'server-setups': { text: 'سيت أب', color: 'bg-orange-500' }
    };
    return badges[category] || { text: 'عام', color: 'bg-gray-500' };
  };

  const badge = getCategoryBadge(product.category);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-effect rounded-xl overflow-hidden card-hover group"
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative">
          <img  
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            alt={product.title}
           src="https://images.unsplash.com/photo-1671376354106-d8d21e55dddd" />
          <div className="absolute top-4 right-4">
            <span className={`${badge.color} text-white text-xs px-2 py-1 rounded-full`}>
              {badge.text}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
            {product.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-300">{product.rating}</span>
              </div>
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <Download className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">{product.downloads}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              {product.price} <span className="text-sm text-gray-400">ر.س</span>
            </div>
            <Button
              onClick={handleAddToCart}
              size="sm"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              <ShoppingCart className="w-4 h-4 ml-2" />
              إضافة للسلة
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;