import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

const Header = ({ mobileMenuOpen, setMobileMenuOpen, scrollToSection }: HeaderProps) => {
  return (
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
  );
};

export default Header;
