import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, MapPin, Phone, Mail, Send, Check } from 'lucide-react';

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          message: ''
        });
      }, 3000);
    }, 1000);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const services = [
    { value: 'cardiology', label: 'Кардиология' },
    { value: 'pediatrics', label: 'Педиатрия' },
    { value: 'neurology', label: 'Неврология' },
    { value: 'ophthalmology', label: 'Офтальмология' },
    { value: 'lab', label: 'Лабораторная диагностика' },
    { value: 'therapy', label: 'Терапия' },
  ];
  
  const contacts = [
    { icon: <Phone className="w-5 h-5 text-teal-600" />, content: '+7 (495) 123-45-67', href: 'tel:+74951234567' },
    { icon: <Mail className="w-5 h-5 text-teal-600" />, content: 'info@mak-med.tech', href: 'mailto:info@mak-med.tech' },
    { icon: <MapPin className="w-5 h-5 text-teal-600" />, content: 'Москва, ул. Медицинская, 10', href: 'https://maps.google.com' },
    { icon: <Calendar className="w-5 h-5 text-teal-600" />, content: 'Пн-Сб: 8:00-20:00, Вс: 9:00-18:00', href: '#' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 text-sm text-teal-700 bg-teal-100 rounded-full mb-3">
            Контакты
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600">
            Оставьте заявку на приём или получите консультацию по любым интересующим вас вопросам
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Запись на приём</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700">Имя</Label>
                    <Input 
                      type="text" 
                      id="name" 
                      name="name"
                      placeholder="Ваше имя" 
                      className="p-3 bg-gray-50 border-gray-200 focus:ring-teal-500 focus:border-teal-500 rounded-lg"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={formStatus !== 'idle'}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700">Телефон</Label>
                    <Input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      placeholder="+7 (___) ___-__-__" 
                      className="p-3 bg-gray-50 border-gray-200 focus:ring-teal-500 focus:border-teal-500 rounded-lg"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      disabled={formStatus !== 'idle'}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">Email</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="your@email.com" 
                    className="p-3 bg-gray-50 border-gray-200 focus:ring-teal-500 focus:border-teal-500 rounded-lg"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={formStatus !== 'idle'}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-gray-700">Услуга</Label>
                  <select
                    id="service"
                    name="service"
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                    value={formData.service}
                    onChange={handleChange}
                    disabled={formStatus !== 'idle'}
                  >
                    <option value="">Выберите услугу</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700">Сообщение</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Дополнительная информация" 
                    className="p-3 bg-gray-50 border-gray-200 focus:ring-teal-500 focus:border-teal-500 rounded-lg min-h-[100px]"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={formStatus !== 'idle'}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className={`w-full py-3 px-6 rounded-lg font-medium text-white ${formStatus === 'success' ? 'bg-green-500 hover:bg-green-600' : 'bg-teal-600 hover:bg-teal-700'}`}
                  disabled={formStatus !== 'idle'}
                >
                  {formStatus === 'idle' && (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Отправить заявку
                    </>
                  )}
                  {formStatus === 'submitting' && 'Отправка...'}
                  {formStatus === 'success' && (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      Заявка отправлена
                    </>
                  )}
                </Button>
                
                <p className="text-sm text-gray-500 text-center">
                  Нажимая на кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </div>
          </motion.div>
          
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Контактная информация</h3>
              
              <ul className="space-y-6">
                {contacts.map((contact, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center mr-4">
                      {contact.icon}
                    </div>
                    <a 
                      href={contact.href} 
                      target={contact.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer" 
                      className="text-gray-700 hover:text-teal-600 transition-colors"
                    >
                      {contact.content}
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 flex space-x-4">
                <a 
                  href="https://t.me/Buddy108Bot" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white hover:bg-teal-600 transition-colors"
                  aria-label="Telegram"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.892 8.917c-.141.659-.534.818-1.083.51l-2.995-2.208-1.446 1.394c-.159.16-.294.294-.603.294l.213-3.035 5.529-4.994c.24-.213-.052-.332-.373-.119l-6.826 4.297-2.948-.975c-.638-.213-.652-.638.134-.946l11.514-4.435c.532-.179 1.001.132.776 1.3z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  aria-label="VK"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.547 7h-3.29a.743.743 0 0 0-.655.392s-1.312 2.416-1.734 3.23C14.734 12.813 14 12.126 14 11.11V7.603A1.104 1.104 0 0 0 12.896 6.5h-2.474a1.982 1.982 0 0 0-1.75.813s1.255-.204 1.255 1.49c0 .42.022 1.626.04 2.64a.73.73 0 0 1-1.272.503 21.54 21.54 0 0 1-2.498-4.543.693.693 0 0 0-.63-.403h-2.99a.508.508 0 0 0-.48.685C3.005 10.175 6.918 18 11.38 18h1.878a.742.742 0 0 0 .742-.742v-1.135a.73.73 0 0 1 1.23-.53l2.247 2.112a1.09 1.09 0 0 0 .746.295h2.953c1.424 0 1.424-.988.647-1.753-.546-.538-2.518-2.617-2.518-2.617a1.02 1.02 0 0 1-.078-1.323c.637-.84 1.68-2.212 2.122-2.8.603-.804 1.697-2.507.197-2.507z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl overflow-hidden h-[300px] relative flex-grow shadow-xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.3079503919145!2d37.618744!3d55.754532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQvtCy0YHQutC40Lkg0JrRgNC10LzQu9GM!5e0!3m2!1sen!2sus!4v1650960730967!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Map"
                className="z-0"
              ></iframe>
              
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent pointer-events-none z-10 flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Клиника Mak-Med</h4>
                  <p>Москва, ул. Медицинская, 10</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;