'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Play, Calendar, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [imageUrl] = useState('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80');
  
  return (
    <section className='relative w-full min-h-screen pt-32 pb-20 flex items-center bg-gradient-to-br from-teal-900 via-teal-800 to-teal-950 overflow-hidden'>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/4 -right-24 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Современная медицина для всей
            <span className="text-teal-400"> семьи</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8">
            Используем новейшие технологии для точной диагностики и эффективного лечения. Забота о вашем здоровье — наш главный приоритет.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-full px-8 py-6 flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Записаться на прием
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 flex items-center">
              О клинике
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-12 flex items-center">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-teal-500 overflow-hidden">
                  <img 
                    src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`} 
                    alt="Doctor" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="ml-4">
              <p className="text-teal-400 font-medium">4.9/5</p>
              <p className="text-sm text-gray-300">Рейтинг от наших пациентов</p>
            </div>
          </div>
        </motion.div>
        
        {/* AI Video Avatar Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-video bg-gradient-to-b from-teal-900/60 to-teal-950/60 rounded-2xl overflow-hidden backdrop-blur shadow-xl border border-teal-500/20"
        >
          {/* Video Placeholder */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="w-20 h-20 rounded-full bg-teal-500/20 backdrop-blur flex items-center justify-center mb-4">
              <Play className="h-10 w-10 text-white" />
            </div>
            <p className="text-xl font-medium">AI Врач-консультант</p>
            <p className="text-sm text-gray-300 mt-2 max-w-md text-center px-6">
              Наш виртуальный ассистент ответит на ваши вопросы о здоровье и поможет сориентироваться в услугах клиники.
            </p>
          </div>
          
          {/* Interactive Elements on the video container */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            <div className="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
              Доступно 24/7
            </div>
            <div className="bg-teal-500 px-4 py-2 rounded-full text-white text-sm cursor-pointer hover:bg-teal-600 transition-colors">
              Задать вопрос
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;