import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Mail, MessageCircle, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "📧 تم إرسال الرسالة",
      description: "🚧 هذه الميزة غير مطبقة بعد—لكن لا تقلق! يمكنك طلبها في رسالتك التالية! 🚀"
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "support@asklat-store.com",
      description: "راسلنا في أي وقت"
    },
    {
      icon: MessageCircle,
      title: "Discord",
      value: "ASKLAT Store#1234",
      description: "انضم لسيرفر Discord الخاص بنا"
    },
    {
      icon: Phone,
      title: "الهاتف",
      value: "+966 50 123 4567",
      description: "اتصل بنا للدعم الفوري"
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      value: "24/7",
      description: "متاحون دائماً لخدمتك"
    }
  ];

  const faqs = [
    {
      question: "كيف يمكنني تحميل المنتج بعد الشراء؟",
      answer: "بعد إتمام عملية الشراء، ستحصل على رابط التحميل فوراً عبر البريد الإلكتروني. كما يمكنك الوصول للمنتج من حسابك الشخصي."
    },
    {
      question: "هل تقدمون دعم فني للمنتجات؟",
      answer: "نعم، نقدم دعم فني شامل لجميع منتجاتنا عبر Discord والبريد الإلكتروني. فريقنا متاح 24/7 لمساعدتك."
    },
    {
      question: "ما هي طرق الدفع المتاحة؟",
      answer: "نقبل الدفع عبر PayPal، Stripe، والتحويل البنكي. جميع المعاملات آمنة ومشفرة."
    },
    {
      question: "هل يمكنني طلب تخصيص للمنتج؟",
      answer: "نعم، نقدم خدمات التخصيص للمنتجات حسب احتياجاتك. تواصل معنا لمناقشة متطلباتك والحصول على عرض سعر."
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <Helmet>
        <title>{"تواصل معنا - ASKLAT STORE"}</title>
        <meta name="description" content="تواصل مع فريق ASKLAT STORE للحصول على الدعم أو الاستفسارات. نحن هنا لمساعدتك 24/7." />
        <meta property="og:title" content="تواصل معنا - ASKLAT STORE" />
        <meta property="og:description" content="تواصل مع فريق ASKLAT STORE للحصول على الدعم أو الاستفسارات. نحن هنا لمساعدتك 24/7." />
      </Helmet>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            تواصل <span className="gradient-text">معنا</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            نحن هنا لمساعدتك! تواصل معنا للحصول على الدعم أو الاستفسارات
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-effect rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">أرسل لنا رسالة</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">الاسم *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                    placeholder="اسمك الكامل"
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
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">الموضوع *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                  placeholder="موضوع الرسالة"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">الرسالة *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 text-white resize-none"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
              >
                <Send className="w-5 h-5 ml-2" />
                إرسال الرسالة
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">معلومات التواصل</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 rtl:space-x-reverse"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                      <p className="text-purple-400 mb-1">{info.value}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-effect rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <MapPin className="w-5 h-5 ml-2" />
                موقعنا
              </h3>
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                <img  
                  className="w-full h-full object-cover rounded-lg"
                  alt="خريطة موقع ASKLAT STORE"
                 src="https://images.unsplash.com/photo-1671823056785-8a28b4c9fbe6" />
              </div>
              <p className="text-gray-400 text-sm mt-3">
                المملكة العربية السعودية، الرياض
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">الأسئلة الشائعة</h2>
            <p className="text-gray-400 text-lg">إجابات على أكثر الأسئلة شيوعاً</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">هل تحتاج مساعدة فورية؟</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            انضم إلى سيرفر Discord الخاص بنا للحصول على دعم فوري من فريقنا والتفاعل مع مجتمع ASKLAT STORE
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8"
            onClick={() => toast({
              title: "🎮 Discord",
              description: "🚧 هذه الميزة غير مطبقة بعد—لكن لا تقلق! يمكنك طلبها في رسالتك التالية! 🚀"
            })}
          >
            <MessageCircle className="w-5 h-5 ml-2" />
            انضم لسيرفر Discord
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;