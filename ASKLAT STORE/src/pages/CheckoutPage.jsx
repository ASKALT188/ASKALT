import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { CreditCard, Lock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

// Helper components for refactoring CheckoutPage
const CheckoutProgress = ({ step }) => (
  <div className="text-center mb-8">
    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
      إتمام الشراء
    </h1>
    
    <div className="flex justify-center items-center space-x-4 rtl:space-x-reverse mb-8">
      {[1, 2, 3].map((stepNumber) => (
        <div key={stepNumber} className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
            step >= stepNumber 
              ? 'bg-purple-600 text-white' 
              : 'bg-gray-700 text-gray-400'
          }`}>
            {stepNumber}
          </div>
          {stepNumber < 3 && (
            <div className={`w-16 h-1 mx-2 ${
              step > stepNumber ? 'bg-purple-600' : 'bg-gray-700'
            }`}></div>
          )}
        </div>
      ))}
    </div>
    
    <div className="flex justify-center space-x-8 rtl:space-x-reverse text-sm">
      <span className={step >= 1 ? 'text-purple-400' : 'text-gray-400'}>
        معلومات الفوترة
      </span>
      <span className={step >= 2 ? 'text-purple-400' : 'text-gray-400'}>
        طريقة الدفع
      </span>
      <span className={step >= 3 ? 'text-purple-400' : 'text-gray-400'}>
        مراجعة الطلب
      </span>
    </div>
  </div>
);

const BillingInfoForm = ({ formData, handleInputChange, nextStep }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="glass-effect rounded-xl p-8"
  >
    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
      <User className="w-6 h-6 ml-2" />
      معلومات الفوترة
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-gray-300 mb-2">الاسم الأول *</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
        />
      </div>
      <div>
        <label className="block text-gray-300 mb-2">الاسم الأخير *</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
        />
      </div>
      <div>
        <label className="block text-gray-300 mb-2">البريد الإلكتروني *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
        />
      </div>
      <div>
        <label className="block text-gray-300 mb-2">رقم الهاتف *</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
        />
      </div>
      <div>
        <label className="block text-gray-300 mb-2">الدولة *</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
        >
          <option value="SA">المملكة العربية السعودية</option>
          <option value="AE">الإمارات العربية المتحدة</option>
          <option value="KW">الكويت</option>
          <option value="QA">قطر</option>
          <option value="BH">البحرين</option>
          <option value="OM">عمان</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-300 mb-2">المدينة *</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
        />
      </div>
      <div className="md:col-span-2">
        <label className="block text-gray-300 mb-2">العنوان *</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
        />
      </div>
    </div>
    
    <div className="flex justify-end mt-8">
      <Button
        type="button"
        onClick={nextStep}
        size="lg"
        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
      >
        التالي
      </Button>
    </div>
  </motion.div>
);

const PaymentInfoForm = ({ formData, handleInputChange, nextStep, prevStep }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="glass-effect rounded-xl p-8"
  >
    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
      <CreditCard className="w-6 h-6 ml-2" />
      معلومات الدفع
    </h2>
    
    <div className="space-y-6">
      <div>
        <label className="block text-gray-300 mb-2">رقم البطاقة *</label>
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleInputChange}
          placeholder="1234 5678 9012 3456"
          required
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-300 mb-2">تاريخ الانتهاء *</label>
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleInputChange}
            placeholder="MM/YY"
            required
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-2">CVV *</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            placeholder="123"
            required
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-gray-300 mb-2">اسم حامل البطاقة *</label>
        <input
          type="text"
          name="cardName"
          value={formData.cardName}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
        />
      </div>
    </div>
    
    <div className="flex justify-between mt-8">
      <Button
        type="button"
        onClick={prevStep}
        variant="outline"
        size="lg"
        className="border-gray-600 text-gray-400 hover:bg-gray-700"
      >
        السابق
      </Button>
      <Button
        type="button"
        onClick={nextStep}
        size="lg"
        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
      >
        التالي
      </Button>
    </div>
  </motion.div>
);

const OrderReview = ({ orderItems, formData, prevStep, handleSubmit }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className="glass-effect rounded-xl p-8"
  >
    <h2 className="text-2xl font-bold text-white mb-6">مراجعة الطلب</h2>
    
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">المنتجات</h3>
        <div className="space-y-3">
          {orderItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-700">
              <div>
                <span className="text-white">{item.title}</span>
                <span className="text-gray-400 text-sm mr-2">x{item.quantity}</span>
              </div>
              <span className="text-white font-medium">
                {item.price * item.quantity} ر.س
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">معلومات الفوترة</h3>
        <div className="text-gray-300 space-y-1">
          <p>{formData.firstName} {formData.lastName}</p>
          <p>{formData.email}</p>
          <p>{formData.phone}</p>
          <p>{formData.address}, {formData.city}</p>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">طريقة الدفع</h3>
        <div className="flex items-center space-x-2 rtl:space-x-reverse text-gray-300">
          <CreditCard className="w-5 h-5" />
          <span>**** **** **** {formData.cardNumber.slice(-4)}</span>
        </div>
      </div>
    </div>
    
    <div className="flex justify-between mt-8">
      <Button
        type="button"
        onClick={prevStep}
        variant="outline"
        size="lg"
        className="border-gray-600 text-gray-400 hover:bg-gray-700"
      >
        السابق
      </Button>
      <Button
        type="submit"
        size="lg"
        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white flex items-center"
      >
        <Lock className="w-5 h-5 ml-2" />
        إتمام الدفع
      </Button>
    </div>
  </motion.div>
);

const OrderSummary = ({ orderItems }) => {
  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.15;
  const total = subtotal + tax;

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass-effect rounded-xl p-6 h-fit sticky top-8"
    >
      <h2 className="text-xl font-bold text-white mb-6">ملخص الطلب</h2>
      
      <div className="space-y-4 mb-6">
        {orderItems.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span className="text-gray-300">
              {item.title} x{item.quantity}
            </span>
            <span className="text-white">
              {item.price * item.quantity} ر.س
            </span>
          </div>
        ))}
      </div>
      
      <div className="space-y-3 mb-6 border-t border-gray-700 pt-4">
        <div className="flex justify-between text-gray-300">
          <span>المجموع الفرعي</span>
          <span>{subtotal.toFixed(2)} ر.س</span>
        </div>
        <div className="flex justify-between text-gray-300">
          <span>ضريبة القيمة المضافة (15%)</span>
          <span>{tax.toFixed(2)} ر.س</span>
        </div>
        <div className="border-t border-gray-700 pt-3">
          <div className="flex justify-between text-xl font-bold text-white">
            <span>المجموع الكلي</span>
            <span>{total.toFixed(2)} ر.س</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 text-center">
        <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-green-400">
          <Lock className="w-4 h-4" />
          <span className="text-sm">دفع آمن ومشفر</span>
        </div>
        <div className="text-xs text-gray-400">
          محمي بواسطة SSL 256-bit
        </div>
      </div>
    </motion.div>
  );
};

const CheckoutPage = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'SA',
    city: '',
    address: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const orderItems = [
    {
      id: 1,
      title: "FiveM Advanced Banking System",
      price: 299,
      quantity: 1
    },
    {
      id: 2,
      title: "Minecraft Medieval Castle Map",
      price: 149,
      quantity: 2
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "💳 معالجة الدفع",
      description: "🚧 هذه الميزة غير مطبقة بعد—لكن لا تقلق! يمكنك طلبها في رسالتك التالية! 🚀"
    });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen py-8">
      <Helmet>
        <title>{"إتمام الشراء - ASKLAT STORE"}</title>
        <meta name="description" content="إتمام عملية الشراء في ASKLAT STORE" />
        <meta property="og:title" content="إتمام الشراء - ASKLAT STORE" />
        <meta property="og:description" content="إتمام عملية الشراء في ASKLAT STORE" />
      </Helmet>

      <div className="container mx-auto px-4">
        <CheckoutProgress step={step} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <BillingInfoForm 
                  formData={formData} 
                  handleInputChange={handleInputChange} 
                  nextStep={nextStep} 
                />
              )}
              {step === 2 && (
                <PaymentInfoForm 
                  formData={formData} 
                  handleInputChange={handleInputChange} 
                  nextStep={nextStep} 
                  prevStep={prevStep} 
                />
              )}
              {step === 3 && (
                <OrderReview 
                  orderItems={orderItems} 
                  formData={formData} 
                  prevStep={prevStep} 
                  handleSubmit={handleSubmit} 
                />
              )}
            </form>
          </div>

          <OrderSummary orderItems={orderItems} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;