import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { LogIn, Mail, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      login(email, password);
      toast({
        title: "✅ تم تسجيل الدخول",
        description: "مرحباً بعودتك!"
      });
      navigate('/profile');
    } catch (error) {
      toast({
        title: "❌ خطأ في تسجيل الدخول",
        description: "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>{"تسجيل الدخول - ASKLAT STORE"}</title>
        <meta name="description" content="تسجيل الدخول إلى حسابك في ASKLAT STORE للوصول إلى مشترياتك وملفك الشخصي." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 glass-effect rounded-2xl p-10"
      >
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            تسجيل الدخول
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            أو{' '}
            <Link to="/register" className="font-medium text-purple-400 hover:text-purple-300">
              أنشئ حساباً جديداً
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="relative">
              <Mail className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
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
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-lg relative block w-full px-3 py-3 border border-gray-700 bg-gray-800/50 placeholder-gray-500 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="كلمة المرور"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a href="#" className="font-medium text-purple-400 hover:text-purple-300">
                نسيت كلمة المرور؟
              </a>
            </div>
          </div>

          <div>
            <Button
              type="submit"
              size="lg"
              className="group relative w-full flex justify-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LogIn className="h-5 w-5 text-purple-300 group-hover:text-purple-200" />
              </span>
              تسجيل الدخول
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginPage;