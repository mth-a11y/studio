'use client';

import {useState, useEffect} from 'react';

const ServicesSection = () => {
  // Pre-generated content based on the following prompts:
  // 1. Icon: "Минималистичная иконка кардиологии, линейный стиль, синий акцент"
  //    Text: "Короткий текст о преимуществах кардиологического отделения клиники Mak-Med, 120 символов"
  // 2. Icon: "Иконка педиатрии в стиле line art"
  //    Text: "Короткий текст о преимуществах педиатрического отделения клиники Mak-Med, 120 символов"
  // 3. Icon: "Иконка лабораторных анализов, плоский дизайн"
  //    Text: "Короткий текст о преимуществах лабораторных анализов в клинике Mak-Med, 120 символов"
  
  const [services] = useState([
    {
      title: 'Кардиология',
      iconUrl: 'https://picsum.photos/100/100?random=1', // Placeholder for icon
      description: 'Современное оборудование и опытные кардиологи помогут вам поддерживать здоровье сердца. Индивидуальный подход к каждому пациенту.',
    },
    {
      title: 'Педиатрия',
      iconUrl: 'https://picsum.photos/100/100?random=2', // Placeholder for icon
      description: 'Забота о здоровье ваших детей от рождения до подросткового возраста. Наши педиатры помогут вашему ребенку расти здоровым.',
    },
    {
      title: 'Лабораторные анализы',
      iconUrl: 'https://picsum.photos/100/100?random=3', // Placeholder for icon
      description: 'Быстрые и точные результаты с использованием современного оборудования. Широкий спектр доступных анализов.',
    },
  ]);
  
  // Note: In a real application, these would be pre-generated images and text content
  // stored in assets or fetched from a content management system

  return (
    <section className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <h2 className='text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12'>Наши услуги</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8'>
          {services.map((service, index) => (
              <div key={index} className='bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center justify-center'>
                {service.iconUrl && (
                  <img src={service.iconUrl} alt={service.title} className='w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-2 sm:mb-4' style={{ display: service.iconUrl ? 'block' : 'none' }}/>
                )}
                  <h3 className='text-lg sm:text-xl font-semibold text-gray-700 mb-1 sm:mb-2'>{service.title}</h3>
                  <p className='text-sm sm:text-base text-gray-600'>{service.description}</p>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;