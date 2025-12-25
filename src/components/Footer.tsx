import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-xl">Н</span>
              </div>
              <div>
                <span className="text-accent font-bold text-lg">Кубань</span>
                <span className="text-foreground font-bold text-lg">Новострой</span>
                <span className="block text-xs text-muted-foreground">группа компаний</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Помогаем семьям безопасно и комфортно переехать на юг
              России с 2018 года.
            </p>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Контакты</h4>
            <div className="space-y-3">
              <a href="tel:88001234567" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>8 (800) 123-45-67</span>
              </a>
              <a href="mailto:info@kuban-novostroy.ru" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@kuban-novostroy.ru</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>г. Краснодар</span>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Полезное</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Как это работает
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Админ-панель
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Кубань-Новострой. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
