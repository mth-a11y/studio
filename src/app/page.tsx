'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const HeroSection = () => (
  <section className="w-full py-24 bg-gray-100 flex flex-col items-center justify-center">
    <img src="https://via.placeholder.com/1200x400" alt="Hero" className="w-full h-auto object-cover" />
    <div className="container mx-auto px-4 text-center mt-8">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Решения в сфере медицины</h1>
      <p className="text-xl text-gray-600 mb-8">Стремимся к улучшению качества медицинских услуг</p>
      <Button>Узнать больше</Button>
    </div>
  </section>
);

const AboutUsSection = () => (
  <section className="container mx-auto py-16 px-4 flex items-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="text-gray-700">
        <h2 className="text-3xl font-bold mb-4">О Нас</h2>
        <p className="text-lg">
          Мак-Мед — ваш надежный партнер в сфере медицинских решений. Мы
          сфокусированы на предоставлении высококачественного медицинского
          оборудования и инновационных сервисов, чтобы удовлетворить потребности
          как медицинских профессионалов, так и пациентов.
        </p>
      </div>
      <div>
        <img src="https://via.placeholder.com/600x400" alt="About Us" className="rounded-lg" />
      </div>
    </div>
  </section>
);

const KeyServicesSection = () => (
  <section className="bg-gray-50 py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Наши услуги</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Поставка оборудования</h3>
          <p className="text-gray-600">Предоставляем широкий спектр медицинского оборудования от ведущих мировых производителей.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Техническое обслуживание</h3>
          <p className="text-gray-600">Обеспечиваем профессиональное техническое обслуживание и ремонт медицинского оборудования.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Консультационные услуги</h3>
          <p className="text-gray-600">Предлагаем экспертные консультации по выбору и интеграции медицинского оборудования.</p>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => {
  const [testimonials] = useState([
    { text: "Благодаря Мак-Мед мы смогли значительно улучшить качество обслуживания наших пациентов. Рекомендуем!", author: "Доктор Иванов" },
    { text: "Высокий уровень профессионализма и качества оборудования. Довольны сотрудничеством.", author: "Медсестра Петрова" },
    { text: "Оперативная техподдержка и индивидуальный подход. Превосходный сервис!", author: "Главврач Сидоров" },
  ]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Отзывы клиентов</h2>
        <div className="grid grid-cols-1 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg text-center">
              <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
              <p className="text-gray-600">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Галерея</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <img
            key={index}
            src={`https://via.placeholder.com/400x300?text=Image+${index + 1}`}
            alt={`Gallery ${index + 1}`}
            className="rounded-lg"
          />
        ))}
      </div>
    </div>
  </section>
);

const ContactFormSection = () => (
  <section className="py-16">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="text-gray-700">
        <h2 className="text-3xl font-bold mb-2">Связаться с нами</h2>
        <p className="text-lg mb-6">Остались вопросы? Свяжитесь с нами.</p>
      </div>
      <form className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Имя</Label>
          <Input type="text" id="name" placeholder="Введите ваше имя" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Введите ваш Email" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Сообщение</Label>
          <Textarea id="message" placeholder="Ваше сообщение" rows={4} />
        </div>
        <Button type="submit">Отправить</Button>
      </form>
    </div>
  </section>
);

export default function Home() {
  return (
    <main className="container mx-auto">
      <HeroSection />
      <AboutUsSection />
      <KeyServicesSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactFormSection />
    </main>
  );
}

