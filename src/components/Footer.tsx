import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;
