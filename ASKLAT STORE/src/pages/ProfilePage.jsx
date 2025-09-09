import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { User, ShoppingBag, Settings, Bell, Download, Edit } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { useToast } from '@/components/ui/use-toast';

const ProfilePage = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('orders');

  const handleNotImplemented = () => {
    toast({
      title: "🚧 قيد التطوير",
      description: "هذه الميزة غير مطبقة بعد—لكن لا تقلق! يمكنك طلبها في رسالتك التالية! 🚀"
    });
  };

  const mockOrders = [
    { id: 'ORD-12345', date: '2025-09-08', total: '299.00 ر.س', status: 'مكتمل', items: ['FiveM Advanced Banking System'] },
    { id: 'ORD-12344', date: '2025-09-05', total: '149.00 ر.س', status: 'مكتمل', items: ['Minecraft Medieval Castle Map'] },
    { id: 'ORD-12342', date: '2025-08-28', total: '399.00 ر.س', status: 'مكتمل', items: ['Complete Server Setup Package'] },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSettings user={user} onSave={handleNotImplemented} />;
      case 'orders':
        return <OrderHistory orders={mockOrders} />;
      case 'notifications':
        return <Notifications onSave={handleNotImplemented} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-8">
      <Helmet>
        <title>{"الملف الشخصي - ASKLAT STORE"}</title>
        <meta name="description" content="إدارة ملفك الشخصي، عرض سجل الطلبات، وتعديل الإعدادات في ASKLAT STORE." />
      </Helmet>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row gap-8"
        >
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <div className="glass-effect rounded-xl p-6 sticky top-24">
              <div className="flex flex-col items-center mb-6">
                <Avatar className="h-24 w-24 mb-4 border-2 border-purple-500">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="text-3xl">{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold text-white">{user.name}</h2>
                <p className="text-sm text-gray-400">{user.email}</p>
              </div>
              <nav className="space-y-2">
                <button onClick={() => setActiveTab('orders')} className={`w-full flex items-center space-x-3 rtl:space-x-reverse p-3 rounded-lg transition-colors ${activeTab === 'orders' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700/50'}`}>
                  <ShoppingBag className="w-5 h-5" />
                  <span>سجل الطلبات</span>
                </button>
                <button onClick={() => setActiveTab('profile')} className={`w-full flex items-center space-x-3 rtl:space-x-reverse p-3 rounded-lg transition-colors ${activeTab === 'profile' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700/50'}`}>
                  <User className="w-5 h-5" />
                  <span>إعدادات الحساب</span>
                </button>
                <button onClick={() => setActiveTab('notifications')} className={`w-full flex items-center space-x-3 rtl:space-x-reverse p-3 rounded-lg transition-colors ${activeTab === 'notifications' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700/50'}`}>
                  <Bell className="w-5 h-5" />
                  <span>الإشعارات</span>
                </button>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </main>
        </motion.div>
      </div>
    </div>
  );
};

const OrderHistory = ({ orders }) => (
  <div className="glass-effect rounded-xl p-8">
    <h3 className="text-2xl font-bold text-white mb-6">سجل الطلبات</h3>
    <div className="space-y-4">
      {orders.map(order => (
        <div key={order.id} className="border border-gray-700 rounded-lg p-4">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-3">
            <div>
              <p className="font-semibold text-white">رقم الطلب: {order.id}</p>
              <p className="text-sm text-gray-400">التاريخ: {order.date}</p>
            </div>
            <div className="mt-2 sm:mt-0">
              <span className={`px-2 py-1 text-xs rounded-full ${order.status === 'مكتمل' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                {order.status}
              </span>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-3">
            <p className="text-gray-300 mb-2">المنتجات: {order.items.join(', ')}</p>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-white">الإجمالي: {order.total}</p>
              <Button variant="outline" size="sm" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                <Download className="w-4 h-4 ml-2" />
                تحميل
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ProfileSettings = ({ user, onSave }) => (
  <div className="glass-effect rounded-xl p-8">
    <h3 className="text-2xl font-bold text-white mb-6">إعدادات الحساب</h3>
    <form onSubmit={(e) => { e.preventDefault(); onSave(); }}>
      <div className="space-y-6">
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <Avatar className="h-20 w-20 border-2 border-purple-500">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="text-2xl">{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <Button type="button" variant="outline" onClick={onSave}>
            <Edit className="w-4 h-4 ml-2" />
            تغيير الصورة
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-300 mb-2">الاسم الكامل</label>
            <input type="text" defaultValue={user.name} className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white" />
          </div>
          <div>
            <label className="block text-gray-300 mb-2">البريد الإلكتروني</label>
            <input type="email" defaultValue={user.email} className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white" />
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">تغيير كلمة المرور</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2">كلمة المرور الجديدة</label>
              <input type="password" placeholder="********" className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white" />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">تأكيد كلمة المرور</label>
              <input type="password" placeholder="********" className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <Button type="submit" size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          حفظ التغييرات
        </Button>
      </div>
    </form>
  </div>
);

const Notifications = ({ onSave }) => (
  <div className="glass-effect rounded-xl p-8">
    <h3 className="text-2xl font-bold text-white mb-6">إعدادات الإشعارات</h3>
    <form onSubmit={(e) => { e.preventDefault(); onSave(); }}>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
          <div>
            <p className="text-white">إشعارات البريد الإلكتروني</p>
            <p className="text-sm text-gray-400">تلقي تحديثات المنتجات والعروض الخاصة.</p>
          </div>
          <input type="checkbox" className="toggle-switch" defaultChecked />
        </div>
        <div className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
          <div>
            <p className="text-white">إشعارات داخل الموقع</p>
            <p className="text-sm text-gray-400">تلقي إشعارات حول طلباتك ونشاط حسابك.</p>
          </div>
          <input type="checkbox" className="toggle-switch" defaultChecked />
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <Button type="submit" size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          حفظ التغييرات
        </Button>
      </div>
    </form>
  </div>
);

export default ProfilePage;