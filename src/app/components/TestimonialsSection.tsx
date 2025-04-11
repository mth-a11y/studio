'use client';

import {useState, useEffect} from 'react';

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState([
    {
      text: 'Благодаря Мак-Мед мы смогли значительно улучшить качество обслуживания наших пациентов. Рекомендуем!',
      author: 'Доктор Иванов',
      avatar: '',
    },
    {
      text: 'Высокий уровень профессионализма и качества оборудования. Довольны сотрудничеством.',
      author: 'Медсестра Петрова',
      avatar: '',
    },
    {
      text: 'Оперативная техподдержка и индивидуальный подход. Превосходный сервис!',
      author: 'Главврач Сидоров',
      avatar: '',
    },
  ]);

  const generateAvatar = async () => {
      const avatarUrl = `https://picsum.photos/150/150?random=${Math.random()}`; // Mock response
      return avatarUrl
  };

  useEffect(() => {
    const fetchData = async () => {
      const newAvatars = await Promise.all([generateAvatar(), generateAvatar(), generateAvatar()]);
      setTestimonials((prevTestimonials) => {
          return prevTestimonials.map((testimonial, index) => ({
              ...testimonial,
              avatar: newAvatars[index]
          }));
      })
    };

    fetchData();

  }, []);

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 ">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
          Отзывы клиентов
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col items-center">
              {testimonial.avatar && (
                  <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-16 h-16 sm:w-24 sm:h-24 rounded-full mb-2 sm:mb-4"
                  />
              )}

              <p className="text-sm sm:text-base text-gray-700 mb-1 sm:mb-2 text-center">"{testimonial.text}"</p>
              <p className="text-sm sm:text-base text-gray-600">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;