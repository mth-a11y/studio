'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Baby, Microscope, Brain, Eye, Stethoscope, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const [services] = useState([
    {
      title: 'Кардиология',
      icon: <Heart className="w-8 h-8 text-teal-500" />,
      description: 'Диагностика и лечение заболеваний сердечно-сосудистой системы с использованием передовых технологий.',
      color: 'bg-gradient-to-br from-pink-50 to-red-50 border-pink-200',
      iconBg: 'bg-pink-100',
    },
    {
      title: 'Педиатрия',
      icon: <Baby className="w-8 h-8 text-teal-500" />,
      description: 'Профессиональная забота о здоровье детей любого возраста, от новорожденных до подростков.',
      color: 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200',
      iconBg: 'bg-blue-100',
    },
    {
      title: 'Лабораторная диагностика',
      icon: <Microscope className="w-8 h-8 text-teal-500" />,
      description: 'Более 1000 видов анализов с использованием современного оборудования и быстрой обработкой результатов.',
      color: 'bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200',
      iconBg: 'bg-purple-100',
    },
    {
      title: 'Неврология',
      icon: <Brain className="w-8 h-8 text-teal-500" />,
      description: 'Диагностика и лечение заболеваний центральной и периферической нервной системы.',
      color: 'bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200',
      iconBg: 'bg-yellow-100',
    },
    {
      title: 'Офтальмология',
      icon: <Eye className="w-8 h-8 text-teal-500" />,
      description: 'Современные методы диагностики и лечения заболеваний глаз для пациентов всех возрастов.',
      color: 'bg-gradient-to-br from-cyan-50 to-teal-50 border-cyan-200',
      iconBg: 'bg-cyan-100',
    },
    {
      title: 'Терапия',
      icon: <Stethoscope className="w-8 h-8 text-teal-500" />,
      description: 'Комплексный подход к профилактике, диагностике и лечению внутренних болезней.',
      color: 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200',
      iconBg: 'bg-green-100',
    },
  ]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className='py-20 bg-gradient-to-b from-white to-gray-50'>
      <div className='container mx-auto px-4'>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 text-sm text-teal-700 bg-teal-100 rounded-full mb-3">
            Наши услуги
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Профессиональная медицинская помощь
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600">
            Mak-Med предлагает широкий спектр медицинских услуг, используя современное оборудование и передовые методики лечения.
          </motion.p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className={`${service.color} border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col h-full`}
            >
              <div className="flex items-start">
                <div className={`${service.iconBg} p-3 rounded-xl`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4 pt-2">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mt-4 flex-grow">{service.description}</p>
              
              <div className="mt-6 flex items-center text-teal-600 hover:text-teal-700 transition-colors cursor-pointer">
                <span className="font-medium">Подробнее</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <Button 
            size="lg" 
            className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Записаться на консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;