import { TrendingUp, MapPin, Target } from 'lucide-react';
import cityBg from '@/assets/city-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cityBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8 animate-slide-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight">
              Инвестиции в{' '}
              <br className="hidden md:block" />
              недвижимость Краснодара:
              <br />
              <span className="gold-gradient-text">
                ликвидные районы и ЖК
              </span>
              <br />
              под сдачу + сценарии входа
              <br />
              по траншевой ипотеки
              <br />
              <span className="text-primary">от 200 000 рублей</span>
            </h1>

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">Вышлем отчёт:</p>
              <ul className="space-y-3">
                {[
                  'где спрос и аренда держатся в 2026,',
                  'где доходность сохраняется от 12%,',
                  'а где красиво, но неликвидно'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <button className="gold-button text-lg w-full md:w-auto">
                ПОЛУЧИТЬ ОТЧЁТ
              </button>
              <p className="text-muted-foreground text-sm">Без обязательств</p>
            </div>
          </div>

          {/* Right Column - Cards Grid */}
          <div className="grid grid-cols-2 gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Map Card */}
            <div className="glass-card p-4 col-span-1 row-span-2">
              <div className="h-full flex flex-col">
                <div className="flex-1 relative">
                  {/* Stylized Map Visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Glow Points */}
                      <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-accent/40 rounded-full blur-xl animate-pulse" />
                      <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-accent/50 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
                      <div className="absolute bottom-1/3 right-1/4 w-14 h-14 bg-primary/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
                      
                      {/* Labels */}
                      <div className="absolute top-1/4 left-1/4 bg-accent/80 px-2 py-1 rounded text-xs font-medium">
                        ЛИКВИДНОСТЬ
                      </div>
                      <div className="absolute top-1/2 left-1/3 text-foreground font-medium text-sm">
                        Краснодар
                      </div>
                      <div className="absolute bottom-1/3 right-1/3 bg-primary/80 px-2 py-1 rounded text-xs font-medium text-background">
                        ВЫСОКИЙ СПРОС
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-xs text-muted-foreground mt-4">
                  МАТРИЦА РИСК / ЛИКВИДНОСТЬ
                </p>
              </div>
            </div>

            {/* Trend Card */}
            <div className="glass-card p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground">ТРЕНД / СТАБИЛЬНОСТЬ</span>
              </div>
              <div className="h-20 flex items-end justify-center">
                <svg viewBox="0 0 100 40" className="w-full h-full">
                  <path
                    d="M0,35 Q25,30 40,25 T70,15 T100,5"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                  />
                  <circle cx="100" cy="5" r="3" fill="hsl(var(--primary))" />
                </svg>
              </div>
              <TrendingUp className="w-5 h-5 text-primary mt-2" />
            </div>

            {/* Risk Matrix Card */}
            <div className="glass-card p-4">
              <div className="h-full flex flex-col">
                <div className="flex-1 relative">
                  <div className="absolute inset-2 border border-muted/30 rounded">
                    <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-xs text-muted-foreground rotate-[-90deg]">
                      РИСК
                    </span>
                    <span className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                      ЛИКВИДНОСТЬ
                    </span>
                    {/* Points */}
                    <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-primary rounded-full" />
                    <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary/60 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 bg-primary/80 px-2 py-1 rounded text-[10px] text-background">
                      ОПТИМАЛЬНЫЙ ВХОД
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Banner */}
            <div className="col-span-2 glass-card p-4 bg-gradient-to-r from-secondary/80 to-secondary/40">
              <div className="text-center">
                <p className="text-sm font-medium mb-1">СЦЕНАРИИ ВХОДА:</p>
                <p className="text-primary font-semibold">
                  ТРАНШЕВАЯ ИПОТЕКА / ИНВЕСТ-СДЕЛКИ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Star */}
      <div className="absolute bottom-8 right-8 text-muted-foreground/30">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
