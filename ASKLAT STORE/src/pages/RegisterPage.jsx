import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { UserPlus, Mail, Lock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/context/AuthContext';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();
  const { register } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      register(name, email, password);
      toast({
        title: "🎉 تم إنشاء الحساب",
        description: "أهلاً بك في ASKLAT STORE!"
      });
      navigate('/profile');
    } catch (error) {
      toast({
        title: "❌ خطأ في التسجيل",
        description: "حدث خطأ ما، يرجى المحاولة مرة أخرى.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>{"إنشاء حساب - ASKLAT STORE"}</title>
        <meta name="description" content="أنشئ حساباً جديداً في ASKLAT STORE للبدء في شراء أفضل محتوى الألعاب الرقمي." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 glass-effect rounded-2xl p-10"
      >
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            إنشاء حساب جديد
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            أو{' '}
            <Link to="/login" className="font-medium text-purple-400 hover:text-purple-300">
              سجل الدخول لحسابك
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="relative">
              <User className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-700 bg-gray-800/50 placeholder-gray-500 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="الاسم الكامل"
              />
            </div>
            <div className="relative pt-4">
              <Mail className="absolute right-3 top-7 h-5 w-5 text-gray-400" />
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-700 bg-gray-800/50 placeholder-gray-500 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="البريد الإلكتروني"
              />
            </div>
            <div className="relative pt-4">
              <Lock className="absolute right-3 top-7 h-5 w-5 text-gray-400" />
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-700 bg-gray-800/50 placeholder-gray-500 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="كلمة المرور"
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              size="lg"
              className="group relative w-full flex justify-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <UserPlus className="h-5 w-5 text-purple-300 group-hover:text-purple-200" />
              </span>
              إنشاء حساب
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default RegisterPage;