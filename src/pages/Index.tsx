import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const productions = [
    {
      title: 'Гамлет',
      year: '2023',
      theater: 'Московский Художественный театр',
      description: 'Современная интерпретация классической трагедии Шекспира с минималистичной сценографией'
    },
    {
      title: 'Три сестры',
      year: '2022',
      theater: 'Театр имени Вахтангова',
      description: 'Психологическая драма Чехова в камерной постановке'
    },
    {
      title: 'Вишневый сад',
      year: '2021',
      theater: 'Малый театр',
      description: 'Классическая постановка с акцентом на музыкальность текста'
    }
  ];

  const timeline = [
    { year: '2020', event: 'Режиссерский дебют в Малом театре' },
    { year: '2018', event: 'Окончание ГИТИСа, мастерская К. Серебренникова' },
    { year: '2016', event: 'Ассистент режиссера в МХТ им. Чехова' },
    { year: '2014', event: 'Начало обучения в ГИТИСе' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-serif font-semibold">Александр Иванов</h1>
            <div className="hidden md:flex gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'bio', label: 'Биография' },
                { id: 'productions', label: 'Спектакли' },
                { id: 'contact', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors hover:text-accent ${
                    activeSection === item.id ? 'text-accent' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/6236fa28-375e-4abf-a0ad-a334136895f5/files/2722d4b6-724f-4334-8587-f99263b6ab86.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15
          }}
        />
        <div className="container mx-auto text-center max-w-4xl animate-fade-in relative z-10">
          <p className="text-accent text-sm uppercase tracking-wider mb-4">Театральный режиссер</p>
          <h2 className="text-6xl md:text-8xl font-serif font-bold mb-6">
            Александр Иванов
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Создаю театральные постановки, где классика встречается с современностью
          </p>
          <Button 
            onClick={() => scrollToSection('productions')}
            size="lg"
            className="bg-accent hover:bg-accent/90"
          >
            Смотреть спектакли
            <Icon name="ArrowDown" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section id="bio" className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-5xl font-serif font-bold mb-16 text-center">Биография</h3>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 animate-slide-in-left">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-6 border-4 border-accent">
                <img 
                  src="https://cdn.poehali.dev/projects/6236fa28-375e-4abf-a0ad-a334136895f5/files/361c49b0-e8b9-4115-a5f8-96c9dae948f1.jpg" 
                  alt="Александр Иванов" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg leading-relaxed">
                Александр Иванов — один из ярких представителей нового поколения российских режиссеров. 
                Его работы отличаются глубоким психологизмом и современным взглядом на классические произведения.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Окончил ГИТИС по специальности «режиссура драмы» в мастерской Кирилла Серебренникова. 
                Работал с ведущими театрами России, включая МХТ, Театр имени Вахтангова и Малый театр.
              </p>
              <div className="flex gap-4 pt-4">
                <Button variant="outline" size="sm">
                  <Icon name="Mail" className="mr-2" size={16} />
                  Связаться
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="FileText" className="mr-2" size={16} />
                  Резюме
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-serif font-semibold mb-6">Карьера</h4>
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className="flex gap-6 pb-6 border-l-2 border-accent pl-6 relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
                  <div>
                    <p className="text-accent font-semibold">{item.year}</p>
                    <p className="text-muted-foreground">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="productions" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-5xl font-serif font-bold mb-16 text-center">Спектакли</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {productions.map((production, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="aspect-[4/3] bg-muted relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="Theater" size={48} className="text-muted-foreground/30" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-accent mb-2">
                    <span>{production.year}</span>
                    <span>•</span>
                    <span>{production.theater}</span>
                  </div>
                  <h4 className="text-2xl font-serif font-semibold mb-3">{production.title}</h4>
                  <p className="text-muted-foreground">{production.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-5xl font-serif font-bold mb-6 text-center">Контакты</h3>
          <p className="text-center mb-12 opacity-90">
            Открыт к новым проектам и сотрудничеству
          </p>
          <form className="space-y-6 animate-fade-in">
            <div>
              <Input 
                placeholder="Ваше имя" 
                className="bg-background/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
            </div>
            <div>
              <Input 
                type="email" 
                placeholder="Email" 
                className="bg-background/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
            </div>
            <div>
              <Textarea 
                placeholder="Сообщение" 
                rows={5}
                className="bg-background/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
            </div>
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Отправить сообщение
              <Icon name="Send" className="ml-2" size={18} />
            </Button>
          </form>
          <div className="flex justify-center gap-6 mt-12">
            <Button variant="ghost" size="icon" className="hover:bg-background/10">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-background/10">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-background/10">
              <Icon name="Mail" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-primary/95 text-primary-foreground py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-sm opacity-75">
            © 2024 Александр Иванов. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;