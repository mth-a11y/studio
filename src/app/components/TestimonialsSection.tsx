'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      text: 'Я очень благодарна всему персоналу клиники Mak-Med за профессионализм и внимательное отношение. Особенно хочу отметить доктора Иванова, который помог мне решить давнюю проблему, с которой я боролась многие годы.',
      author: 'Анна С.,',
      position: 'Пациентка',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      rating: 5
    },
    {
      text: 'Высокий уровень сервиса и качества медицинской помощи. Моя семья уже несколько лет обслуживается в этой клинике, и мы всегда уверены в точности диагнозов и эффективности лечения.',
      author: 'Дмитрий К.,',
      position: 'Пациент',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5
    },
    {
      text: 'Прекрасные специалисты, современное оборудование, уютная атмосфера. Очень удобно, что можно получить все необходимые консультации и пройти обследования в одном месте. Искренне рекомендую!',
      author: 'Елена П.,',
      position: 'Пациентка',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5
    },
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 text-sm text-teal-700 bg-teal-100 rounded-full mb-3">
            Отзывы
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Что говорят наши пациенты
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600">
            Нам доверяют самое ценное — здоровье свое и своих близких
          </motion.p>
        </div>
        
        <div className="relative max-w-4xl mx-auto" ref={testimonialsRef}>
          <div className="absolute top-0 left-0 w-1/3 h-full bg-teal-500/5 -ml-6 rounded-l-[100px] z-0"></div>
          
          {/* Control buttons */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 -mt-6 z-10 px-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-teal-600" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-teal-600" />
            </button>
          </div>
          
          {/* Testimonial card */}
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8 sm:p-10 relative z-10"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img 
                      src={testimonials[activeIndex].avatar} 
                      alt={testimonials[activeIndex].author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-teal-500 rounded-full p-1">
                    <svg 
                      className="w-5 h-5 text-white" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M9.71 5.71l-5 5c-.39.39-.39 1.02 0 1.41l5 5c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 12l3.29-3.29c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0zm7 0c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L18.59 12l-3.29 3.29c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l5-5c.39-.39.39-1.02 0-1.41l-5-5z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 italic mb-6">"{testimonials[activeIndex].text}"</blockquote>
                
                <div>
                  <p className="font-semibold text-gray-900">{testimonials[activeIndex].author}</p>
                  <p className="text-sm text-gray-500">{testimonials[activeIndex].position}</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Pagination indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${index === activeIndex ? 'bg-teal-600' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;