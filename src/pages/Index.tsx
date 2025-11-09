import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const Index = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    time: '',
    message: ''
  });

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', email: '', time: '', message: '' });
    setDate(undefined);
  };

  const services = [
    {
      icon: 'Wrench',
      title: 'Сборка корпусной мебели',
      description: 'Шкафы, комоды, стеллажи, гардеробные системы',
      price: 'от 1500 ₽'
    },
    {
      icon: 'Home',
      title: 'Сборка кухонной мебели',
      description: 'Кухонные гарнитуры любой сложности',
      price: 'от 3000 ₽'
    },
    {
      icon: 'Armchair',
      title: 'Сборка мягкой мебели',
      description: 'Диваны, кресла, кровати с механизмами',
      price: 'от 2000 ₽'
    },
    {
      icon: 'Package',
      title: 'Сборка офисной мебели',
      description: 'Столы, кресла, стеллажи для офисов',
      price: 'от 1200 ₽'
    },
    {
      icon: 'Baby',
      title: 'Сборка детской мебели',
      description: 'Кроватки, комоды, парты, игровые зоны',
      price: 'от 1800 ₽'
    },
    {
      icon: 'Drill',
      title: 'Ремонт мебели',
      description: 'Замена фурнитуры, исправление дефектов',
      price: 'от 800 ₽'
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/cf2c9b0f-33ca-41a2-8c83-f774e376ad90/files/9f226861-5f12-41a6-9464-5f5180a3be56.jpg',
      title: 'Гостиная "Скандинавия"',
      description: 'Полная сборка мебели для гостиной'
    },
    {
      image: 'https://cdn.poehali.dev/projects/cf2c9b0f-33ca-41a2-8c83-f774e376ad90/files/8edd6eb2-848e-49ea-9796-d68cc8a94e20.jpg',
      title: 'Офисное пространство',
      description: 'Сборка 15 рабочих мест'
    },
    {
      image: 'https://cdn.poehali.dev/projects/cf2c9b0f-33ca-41a2-8c83-f774e376ad90/files/35094d4f-7d57-4ed3-add4-f3ba2ebc8080.jpg',
      title: 'Детская комната',
      description: 'Кровать-чердак с рабочей зоной'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      text: 'Быстро и качественно собрали шкаф-купе на 3 метра. Мастер приехал вовремя, работал аккуратно. Рекомендую!',
      rating: 5
    },
    {
      name: 'Дмитрий Сидоров',
      text: 'Заказывал сборку кухни. Всё сделали за один день, помогли с выравниванием. Очень доволен результатом.',
      rating: 5
    },
    {
      name: 'Елена Иванова',
      text: 'Собирали детскую мебель. Мастер был очень внимателен к деталям, всё объяснил по уходу. Спасибо!',
      rating: 5
    }
  ];

  const faq = [
    {
      question: 'Сколько времени занимает сборка?',
      answer: 'Время сборки зависит от типа и сложности мебели. Обычный шкаф - 2-3 часа, кухня - от 6-8 часов, кровать - 1-2 часа.'
    },
    {
      question: 'Нужно ли мне быть дома во время сборки?',
      answer: 'Да, ваше присутствие необходимо для доступа в помещение и согласования деталей установки.'
    },
    {
      question: 'Что входит в стоимость услуг?',
      answer: 'В стоимость входит сборка мебели согласно инструкции производителя, крепление к стене (если требуется), уборка рабочего места.'
    },
    {
      question: 'Даёте ли вы гарантию на работу?',
      answer: 'Да, мы предоставляем гарантию 6 месяцев на все виды сборочных работ.'
    },
    {
      question: 'Можно ли заказать сборку в выходные?',
      answer: 'Да, мы работаем 7 дней в неделю, включая выходные и праздники.'
    }
  ];

  const timeSlots = ['09:00', '11:00', '13:00', '15:00', '17:00', '19:00'];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-2xl font-bold text-primary">
              <Icon name="Wrench" size={28} />
              <span>МебельМастер</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-primary transition-colors">Портфолио</button>
              <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-primary transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button>
              <Button onClick={() => scrollToSection('booking')} size="sm">
                Записаться
              </Button>
            </div>
            <Button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              size="sm" 
              variant="ghost"
              className="md:hidden"
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
          </div>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button onClick={() => scrollToSection('services')} className="text-left py-2 hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left py-2 hover:text-primary transition-colors">Портфолио</button>
              <button onClick={() => scrollToSection('reviews')} className="text-left py-2 hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('faq')} className="text-left py-2 hover:text-primary transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('about')} className="text-left py-2 hover:text-primary transition-colors">О нас</button>
              <Button onClick={() => scrollToSection('booking')} className="w-full">
                Записаться
              </Button>
            </div>
          </div>
        )}
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Профессиональная сборка мебели
              </h1>
              <p className="text-xl text-muted-foreground">
                Быстро, качественно, с гарантией. Более 500 довольных клиентов в Москве и области.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('booking')} className="gap-2">
                  <Icon name="Calendar" size={20} />
                  Записаться онлайн
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')} className="gap-2">
                  <Icon name="List" size={20} />
                  Наши услуги
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">5 лет</div>
                  <div className="text-sm text-muted-foreground">На рынке</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://cdn.poehali.dev/projects/cf2c9b0f-33ca-41a2-8c83-f774e376ad90/files/8edd6eb2-848e-49ea-9796-d68cc8a94e20.jpg" 
                alt="Инструменты для сборки мебели"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Профессиональная сборка любой мебели от простых полок до сложных кухонных гарнитуров
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 border-2">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Наши работы</h2>
            <p className="text-lg text-muted-foreground">
              Примеры выполненных проектов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-lg text-muted-foreground">
              Ответы на популярные вопросы о наших услугах
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border-2 rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">О нас</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            МебельМастер — это команда профессиональных сборщиков с опытом работы более 5 лет. 
            Мы специализируемся на сборке любой мебели: от простых полок до сложных кухонных гарнитуров 
            и офисных пространств. Наша цель — сделать процесс установки мебели максимально простым и 
            комфортным для вас.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold">Опыт</h3>
              <p className="text-muted-foreground">5 лет успешной работы на рынке</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold">Гарантия</h3>
              <p className="text-muted-foreground">6 месяцев гарантии на все работы</p>
            </div>
            <div className="space-y-2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold">Команда</h3>
              <p className="text-muted-foreground">Сертифицированные мастера</p>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-muted/30 to-primary/5">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Онлайн-запись</h2>
            <p className="text-lg text-muted-foreground">
              Выберите удобное время для сборки мебели
            </p>
          </div>
          <Card className="border-2 shadow-xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ваше имя *</label>
                  <Input 
                    required
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Телефон *</label>
                  <Input 
                    required
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input 
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Дата *</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <Icon name="Calendar" size={16} className="mr-2" />
                          {date ? format(date, 'dd MMMM yyyy', { locale: ru }) : 'Выберите дату'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          locale={ru}
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Время *</label>
                    <select 
                      required
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    >
                      <option value="">Выберите время</option>
                      {timeSlots.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Описание работы</label>
                  <Textarea 
                    placeholder="Опишите, какую мебель нужно собрать..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <h3 className="font-bold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-muted-foreground">info@mebelmaster.ru</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2">
              <CardContent className="pt-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="font-bold mb-2">Адрес</h3>
                <p className="text-muted-foreground">Москва и область</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-secondary text-secondary-foreground">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4 text-xl font-bold">
            <Icon name="Wrench" size={24} />
            <span>МебельМастер</span>
          </div>
          <p className="text-sm opacity-80">
            © 2024 МебельМастер. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;