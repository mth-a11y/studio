'use client';

import {useState, useEffect} from 'react';
import {Button} from '@/components/ui/button';

const HeroSection = () => {
  // Pre-generated image URL based on prompt:
  // "Современная клиника с улыбающимся врачом и семьей пациентов, светлый интерьер, стильный дизайн, 3D-рендеринг"
  const [imageUrl] = useState('https://picsum.photos/1920/600?random=1'); // Placeholder image
  
  // Note: In a real application, this would be a pre-generated image stored in assets
  // or fetched from a content management system
  return (
    <section className='relative w-full py-16 sm:py-24 flex flex-col items-center justify-center overflow-hidden'>
      <img
        src={imageUrl}
        alt='Hero'
        className='absolute top-0 left-0 w-full h-full object-cover object-center z-0'
        style={{ display: imageUrl ? 'block' : 'none' }}
      />
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6">Инновационная медицина для вашей семьи</h1>
        <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded">
          Записаться на прием
        </Button>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
    </section>
  );
};

export default HeroSection;