'use client';
import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Textarea} from '@/components/ui/textarea';
import {toast} from '@/hooks/use-toast';
import {useForm, SubmitHandler} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {contactFormSuggestion} from '@/ai/flows/contact-form-suggestion';
import {useEffect} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

const HeroSection = () => (
  <section className="w-full py-24 bg-muted flex flex-col items-center justify-center rounded-lg shadow-md">
    <img
      src="https://picsum.photos/1200/400"
      alt="Hero"
      className="w-full h-auto object-cover rounded-t-lg"
    />
    <div className="container mx-auto px-4 text-center mt-8">
      <h1 className="text-4xl font-bold text-primary mb-4">Решения в сфере медицины</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Стремимся к улучшению качества медицинских услуг
      </p>
      <Button className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-md shadow-sm">
        Узнать больше
      </Button>
    </div>
  </section>
);

const AboutUsSection = () => (
  <section className="container mx-auto py-16 px-4 flex items-center">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="text-gray-700">
        <h2 className="text-3xl font-bold mb-4 text-primary">О Нас</h2>
        <p className="text-lg text-muted-foreground">
          Мак-Мед — ваш надежный партнер в сфере медицинских решений. Мы фокусируемся на
          предоставлении высококачественного медицинского оборудования и инновационных сервисов,
          чтобы удовлетворить потребности как медицинских профессионалов, так и пациентов.
        </p>
      </div>
      <div>
        <img
          src="https://picsum.photos/600/400"
          alt="About Us"
          className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        />
      </div>
    </div>
  </section>
);

const KeyServicesSection = () => (
  <section className="bg-secondary py-16 rounded-lg">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-primary mb-12">Наши услуги</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-primary mb-2">Поставка оборудования</h3>
          <p className="text-muted-foreground">
            Предоставляем широкий спектр медицинского оборудования от ведущих мировых
            производителей.
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-primary mb-2">Техническое обслуживание</h3>
          <p className="text-muted-foreground">
            Обеспечиваем профессиональное техническое обслуживание и ремонт медицинского
            оборудования.
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-primary mb-2">Консультационные услуги</h3>
          <p className="text-muted-foreground">
            Предлагаем экспертные консультации по выбору и интеграции медицинского оборудования.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => {
  const [testimonials] = useState([
    {
      text:
        'Благодаря Мак-Мед мы смогли значительно улучшить качество обслуживания наших пациентов. Рекомендуем!',
      author: 'Доктор Иванов',
    },
    {
      text: 'Высокий уровень профессионализма и качества оборудования. Довольны сотрудничеством.',
      author: 'Медсестра Петрова',
    },
    {
      text: 'Оперативная техподдержка и индивидуальный подход. Превосходный сервис!',
      author: 'Главврач Сидоров',
    },
  ]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Отзывы клиентов</h2>
        <div className="grid grid-cols-1 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-muted/50 p-6 rounded-lg text-center hover:bg-muted transition-colors duration-300"
            >
              <CardContent>
                <p className="text-foreground mb-4">"{testimonial.text}"</p>
                <p className="text-muted-foreground">- {testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => (
  <section className="py-16 bg-secondary rounded-lg">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-primary mb-12">Галерея</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({length: 6}).map((_, index) => (
          <img
            key={index}
            src={`https://picsum.photos/400/300?random=${index}`}
            alt={`Gallery ${index + 1}`}
            className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          />
        ))}
      </div>
    </div>
  </section>
);

const contactFormSchema = z.object({
  name: z.string().min(2, {message: 'Имя должно содержать не менее 2 символов'}),
  email: z.string().email({message: 'Неверный формат электронной почты'}),
  message: z.string().min(10, {message: 'Сообщение должно содержать не менее 10 символов'}),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactFormSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const [suggestions, setSuggestions] = useState<string[]>([]);

  const onSubmit: SubmitHandler<ContactFormValues> = async data => {
    try {
      const aiResponse = await contactFormSuggestion({userInput: data.message});
      setSuggestions(aiResponse.suggestions);
      toast({
        title: 'Сообщение отправлено!',
        description: 'Спасибо за ваше сообщение. Мы свяжемся с вами в ближайшее время.',
      });
      reset(); // Clear the form after successful submission
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Ошибка',
        description: 'Не удалось отправить сообщение. Пожалуйста, попробуйте еще раз.',
      });
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      toast({
        variant: 'destructive',
        title: 'Ошибка',
        description: 'Пожалуйста, проверьте форму на наличие ошибок.',
      });
    }
  }, [errors]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-gray-700">
          <h2 className="text-3xl font-bold mb-2 text-primary">Связаться с нами</h2>
          <p className="text-lg mb-6 text-muted-foreground">Остались вопросы? Свяжитесь с нами.</p>
          {suggestions.length > 0 && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2 text-primary">Возможно, вам будет интересно:</h3>
              <ul>
                {suggestions.map((suggestion, index) => (
                  <li key={index} className="text-muted-foreground list-disc ml-5">
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Имя</Label>
            <Input
              type="text"
              id="name"
              placeholder="Введите ваше имя"
              {...register('name')}
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1 font-medium">{errors.name.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Введите ваш Email"
              {...register('email')}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1 font-medium">{errors.email.message}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Сообщение</Label>
            <Textarea
              id="message"
              placeholder="Ваше сообщение"
              rows={4}
              {...register('message')}
            />
            {errors.message && (
              <p className="text-sm text-red-500 mt-1 font-medium">{errors.message.message}</p>
            )}
          </div>
          <Button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-md shadow-sm"
          >
            Отправить
          </Button>
        </form>
      </div>
    </section>
  );
};

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
