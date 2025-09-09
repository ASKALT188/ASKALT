import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Users, Target, Award, Zap, Shield, Heart } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Users, value: "5000+", label: "عميل راضي" },
    { icon: Award, value: "3+", label: "سنوات خبرة" },
    { icon: Zap, value: "15000+", label: "تحميل" },
    { icon: Shield, value: "100%", label: "ضمان الجودة" }
  ];

  const team = [
    {
      name: "أحمد محمد",
      role: "مطور FiveM",
      image: "مطور FiveM محترف يعمل على الكود",
      description: "خبير في تطوير سكربتات FiveM مع أكثر من 4 سنوات خبرة"
    },
    {
      name: "سارة أحمد",
      role: "مصممة خرائط",
      image: "مصممة خرائط Minecraft تعمل على مشروع",
      description: "متخصصة في تصميم خرائط Minecraft الإبداعية والمعمارية"
    },
    {
      name: "محمد علي",
      role: "مطور بلوقنات",
      image: "مطور بلوقنات Minecraft يعمل على الكود",
      description: "خبير في تطوير بلوقنات Minecraft المتقدمة والمخصصة"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "الجودة أولاً",
      description: "نلتزم بتقديم أعلى مستويات الجودة في جميع منتجاتنا"
    },
    {
      icon: Users,
      title: "رضا العملاء",
      description: "نضع رضا عملائنا في المقدمة ونسعى لتجاوز توقعاتهم"
    },
    {
      icon: Zap,
      title: "الابتكار",
      description: "نبتكر حلولاً جديدة ومتطورة لتلبية احتياجات السوق"
    },
    {
      icon: Shield,
      title: "الأمان",
      description: "نضمن أمان وحماية جميع منتجاتنا وبيانات عملائنا"
    },
    {
      icon: Heart,
      title: "الشغف",
      description: "نعمل بشغف وحب لما نقوم به في عالم الألعاب"
    },
    {
      icon: Award,
      title: "التميز",
      description: "نسعى للتميز في كل ما نقدمه من منتجات وخدمات"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <Helmet>
        <title>{"من نحن - ASKLAT STORE"}</title>
        <meta name="description" content="تعرف على ASKLAT STORE وفريقنا المتخصص في تطوير محتوى الألعاب الرقمي. خبرة واسعة في FiveM وMinecraft." />
        <meta property="og:title" content="من نحن - ASKLAT STORE" />
        <meta property="og:description" content="تعرف على ASKLAT STORE وفريقنا المتخصص في تطوير محتوى الألعاب الرقمي. خبرة واسعة في FiveM وMinecraft." />
      </Helmet>

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            من نحن في <span className="gradient-text">ASKLAT STORE</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            نحن فريق متخصص في تطوير وتوفير أفضل محتوى الألعاب الرقمي. 
            نسعى لتقديم حلول مبتكرة وعالية الجودة لمجتمع الألعاب العربي.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center glass-effect rounded-xl p-6"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">قصتنا</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                بدأت رحلتنا في عام 2021 من شغفنا العميق بعالم الألعاب وتطوير المحتوى الرقمي. 
                لاحظنا الحاجة الماسة في السوق العربي لمحتوى عالي الجودة ومتخصص للألعاب.
              </p>
              <p>
                انطلقنا بفكرة بسيطة: توفير أفضل السكربتات والمابات والبلوقنات للمطورين 
                وأصحاب السيرفرات في المنطقة العربية. اليوم، نفخر بخدمة آلاف العملاء 
                وتقديم منتجات تلبي أعلى معايير الجودة.
              </p>
              <p>
                نؤمن بأن الألعاب ليست مجرد تسلية، بل منصة للإبداع والتواصل وبناء المجتمعات. 
                لذلك نسعى دائماً لتطوير حلول تساعد في إثراء تجربة اللعب للجميع.
              </p>
            </div>
          </div>
          <div className="relative">
            <img  
              className="w-full rounded-xl shadow-2xl"
              alt="فريق ASKLAT STORE يعمل على تطوير المحتوى"
             src="https://images.unsplash.com/photo-1519241047957-be31d7379a5d" />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-xl"></div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">قيمنا</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              القيم التي نؤمن بها وتوجه عملنا اليومي
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect rounded-xl p-6 text-center card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">فريقنا</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              تعرف على الخبراء الذين يقفون وراء نجاح ASKLAT STORE
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect rounded-xl overflow-hidden card-hover"
              >
                <img  
                  className="w-full h-64 object-cover"
                  alt={member.name}
                 src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">رسالتنا</h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            نسعى لأن نكون الوجهة الأولى في المنطقة العربية لمحتوى الألعاب الرقمي عالي الجودة. 
            نؤمن بقوة المجتمع والإبداع، ونعمل على توفير الأدوات والموارد التي تمكن المطورين 
            وأصحاب السيرفرات من تحقيق رؤيتهم وإنشاء تجارب لعب استثنائية.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;