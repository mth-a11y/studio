'use client';

import {useState, useEffect} from 'react';

const ServicesSection = () => {
  const [services, setServices] = useState([
    {
      title: 'Кардиология',
      iconUrl: '',
      description: '',
    },
    {
      title: 'Педиатрия',
      iconUrl: '',
      description: '',
    },
    {
      title: 'Лабораторные анализы',
      iconUrl: '',
      description: '',
    },
  ]);

  const generateContent = async (prompts: { iconPrompt: string, textPrompt: string }[]) => {
    return await Promise.all(
      prompts.map(async ({iconPrompt, textPrompt}) => {
        return {
          iconUrl: `https://picsum.photos/100/100?random=${Math.random()}`, // Mock response
          description: `Описание услуги, ${Math.random()} символов`, // Mock response
        };
      })
    );
  }

  useEffect(() => {
    const prompts = [
          iconPrompt: 'Минималистичная иконка кардиологии, линейный стиль, синий акцент',
          textPrompt: 'Короткий текст о преимуществах кардиологического отделения клиники Mak-Med, 120 символов',
        },
        {
          iconPrompt: 'Иконка педиатрии в стиле line art',
          textPrompt: 'Короткий текст о преимуществах педиатрического отделения клиники Mak-Med, 120 символов',
        },
        {
          iconPrompt: 'Иконка лабораторных анализов, плоский дизайн',
          textPrompt: 'Короткий текст о преимуществах лабораторных анализов в клинике Mak-Med, 120 символов',
        },
      ].map(item => ({
        iconPrompt: item.iconPrompt,
        textPrompt: item.textPrompt
      }))
    
    const fetchData = async () => {
      const newServices = await generateContent(prompts)
    
      setServices(
        services.map((service, index) => ({
          ...service,
          iconUrl: newServices[index].iconUrl,
          description: newServices[index].description,
        }))
      );
    }
    
    fetchData()
  }, []);

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