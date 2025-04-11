import {useState, useEffect} from 'react';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Textarea} from '@/components/ui/textarea';

const ContactSection = () => {
  const [imageUrl, setImageUrl] = useState('');
  useEffect(() => {
    const generateImage = async (prompt: string) => {
      // Placeholder for Firebase AI image generation
      // const response = await fetch('/api/firebase-generate', {
      //   method: 'POST',
      //   body: JSON.stringify({ prompt }),
      // });
      // return response.url;
      return `https://picsum.photos/1200/600?random=${Math.random()}`; // Mock response
    };
    generateImage('Абстрактный медицинский фон с элементами ДНК и синими оттенками, 4k').then(
      setImageUrl
    );
  }, []);

  return (
    <section className='py-12 sm:py-16 bg-cover bg-center' style={{backgroundImage: `url(${imageUrl})`}}>
      <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center'>
        <div className='text-white mb-4 md:mb-0'>
          <h2 className='text-2xl sm:text-3xl font-bold mb-2'>Свяжитесь с нами</h2>
          <p className='text-base sm:text-lg mb-4 sm:mb-6'>Оставьте заявку, и мы вам перезвоним</p>
        </div>
        <form className='bg-white p-6 sm:p-8 rounded-lg shadow-md grid gap-4'>
          <div className='grid gap-2 '>
            <Label htmlFor='name'>Имя</Label>
            <Input type='text' id='name' placeholder='Введите ваше имя' />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='phone'>Телефон</Label>
            <Input type='tel' id='phone' placeholder='Введите ваш телефон' />
          </div>
          <div className="sm:col-span-2">

          </div>
          <div className='grid gap-2'>
            <Label htmlFor='service'>Услуга</Label>
            <select
              id='service'
              className='border border-gray-300 px-4 py-2 rounded-md'
            >
              <option value=''>Выберите услугу</option>
              <option value='терапия'>Терапия</option>
              <option value='диагностика'>Диагностика</option>
              <option value='профилактика'>Профилактика</option>
            </select>
          </div>
          <Button className='mt-2 sm:mt-4' type='submit'>Отправить</Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;