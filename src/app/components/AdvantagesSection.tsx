'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Award, Users, MessageCircle, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const AdvantagesSection = () => {
  const [advantages] = useState([
    {
      title: 'Опытные специалисты',
      description: 'Врачи с многолетним стажем и высшими квалификационными категориями',
      icon: <Users className="w-10 h-10 text-teal-600" />
    },
    {
      title: 'Современное оборудование',
      description: 'Диагностика и лечение на высокотехнологичном оборудовании ведущих производителей',
      icon: <Shield className="w-10 h-10 text-teal-600" />
    },
    {
      title: 'Удобная запись',
      description: 'Быстрая запись на приём через сайт или телефон без долгих ожиданий',
      icon: <Clock className="w-10 h-10 text-teal-600" />
    },
    {
      title: 'Высокие стандарты',
      description: 'Соблюдение международных стандартов качества медицинской помощи',
      icon: <Award className="w-10 h-10 text-teal-600" />
    },
  ]);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* About & Advantages Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.span 
              variants={fadeIn}
              className="inline-block py-1 px-3 text-sm text-teal-700 bg-teal-100 rounded-full mb-3">
              О нашей клинике
            </motion.span>
            
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              15 лет заботы о вашем здоровье
            </motion.h2>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-600 mb-10">
              Клиника Mak-Med — это современный медицинский центр с командой высококвалифицированных специалистов. Мы оказываем полный спектр медицинских услуг для всей семьи, используя передовые технологии и индивидуальный подход к каждому пациенту.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {advantages.map((advantage, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className="flex items-start">
                  <div className="mt-1 mr-4 p-2 bg-teal-50 rounded-lg">
                    {advantage.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                    <p className="text-gray-600">{advantage.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Telegram Bot Integration */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl overflow-hidden shadow-xl p-8 md:p-10">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white"></div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="relative z-10">
                {/* Telegram Icon */}
                <div className="mb-6 inline-block bg-white p-4 rounded-full">
                  <svg className="w-8 h-8 text-teal-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.892 8.917c-.141.659-.534.818-1.083.51l-2.995-2.208-1.446 1.394c-.159.16-.294.294-.603.294l.213-3.035 5.529-4.994c.24-.213-.052-.332-.373-.119l-6.826 4.297-2.948-.975c-.638-.213-.652-.638.134-.946l11.514-4.435c.532-.179 1.001.132.776 1.3z"/>
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  Наш Telegram бот
                </h3>
                
                <p className="text-white/90 mb-6">
                  Записывайтесь на прием, получайте ответы на вопросы и узнавайте о наших акциях через удобного Telegram бота
                </p>
                
                <ul className="space-y-3 mb-8">
                  {[
                    'Быстрая запись на прием',
                    'Напоминания о визитах',
                    'Результаты обследований',
                    'Консультации 24/7'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center text-white">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="https://t.me/makmed_bot" 
                  target="_blank" 
                  className="inline-flex items-center justify-center bg-white text-teal-600 hover:bg-gray-100 transition-colors py-3 px-6 rounded-full font-medium"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Открыть в Telegram
                </Link>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-teal-200 rounded-full"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal-300 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;