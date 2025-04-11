"use client";

import {useState, useEffect} from 'react';

const AdvantagesSection = () => {
  const [images, setImages] = useState<string[]>(['', '', '']);

  const generateImage = async (prompt: string) => {
    // Placeholder for Firebase AI image generation
    // const response = await fetch('/api/firebase-generate', {
    //   method: 'POST',
    //   body: JSON.stringify({ prompt }),
    // });
    // return response.url;
    return `https://picsum.photos/100/100?random=${Math.random()}`; // Mock response
  };

  useEffect(() => {
    const fetchData = async () => {
      const newImages = await Promise.all([
        generateImage(
          'Абстрактная анимация молекул ДНК и медицинских инструментов, градиентные цвета'
        ),
        generateImage(
          'Абстрактная анимация молекул ДНК и медицинских инструментов, градиентные цвета'
        ),
        generateImage(
          'Абстрактная анимация молекул ДНК и медицинских инструментов, градиентные цвета'
        ),
      ]);

      setImages(newImages);
    };
    fetchData();
  }, []);

  const imageStyle = {display: images[0] ? 'block' : 'none'}

  return (
    <section className='py-12 sm:py-16 bg-gray-50'>
      <div className='container mx-auto px-4 '>
        <h2 className='text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12'>
          Наши преимущества
        </h2>
        <div className='grid grid-cols-1 gap-6 sm:gap-8'>
          <div className='bg-white p-4 sm:p-6 rounded-lg shadow-md flex items-center'>
            {images[0] && (
                <img src={images[0]} alt='Бесплатная консультация' className='mr-3 sm:mr-4 rounded-full' style={imageStyle}/>
            )}
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-gray-700 mb-1 sm:mb-2'>Бесплатная консультация</h3>
              <p className='text-sm sm:text-base text-gray-600'>Мы предлагаем бесплатную первичную консультацию для всех новых пациентов.</p>
            </div>
          </div>
          <div className='bg-white p-4 sm:p-6 rounded-lg shadow-md flex items-center'>
            {images[1] && (
                <img src={images[1]} alt='Современное оборудование' className='mr-3 sm:mr-4 rounded-full' style={imageStyle} />
            )}
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-gray-700 mb-1 sm:mb-2'>Современное оборудование</h3>
              <p className='text-sm sm:text-base text-gray-600'>Наша клиника оснащена новейшим медицинским оборудованием.</p>
            </div>
          </div>
          <div className='bg-white p-4 sm:p-6 rounded-lg shadow-md flex items-center'>
            {images[2] && (
                <img src={images[2]} alt='Онлайн-запись' className='mr-3 sm:mr-4 rounded-full' style={imageStyle} />
            )}
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-gray-700 mb-1 sm:mb-2'>Онлайн-запись</h3>
              <p className='text-sm sm:text-base text-gray-600'>Вы можете легко записаться на прием через наш сайт или мобильное приложение.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;