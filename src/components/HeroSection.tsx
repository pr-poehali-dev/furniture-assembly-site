import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
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
  );
};

export default HeroSection;
