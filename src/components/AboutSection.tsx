import { Check, Star } from 'lucide-react';
import expertImg from '@/assets/expert.jpg';
import cityBg from '@/assets/city-bg.jpg';

const risks = [
  'Неликвид и долгий выход',
  'Простой аренды',
  'Завышенная цена входа',
  'Риски новостроек (сроки, качество)',
  'Плохая перепродажа',
  'Ошибочный сценарий входа'
];

const stats = [
  { value: 'Топ-3', label: 'в регионе' },
  { value: '100+', label: 'застройщиков' },
  { value: 'Сделки', label: 'эскроу' },
  { value: '5.0', label: 'рейтинг' },
  { value: '0 ₽', label: 'комиссия' },
];

const AboutSection = () => {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${cityBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-4">
                Почему инвесторы выбирают
                <br />
                <span className="gold-gradient-text">«Кубань-Новострой»</span>: мы
                <br />
                не продаём ЖК — мы ведём
                <br />
                <span className="text-primary">в ликвидность</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Мы показываем картину рынка, риски и варианты
                <br />
                входа — до сделки. Наша задача — чтобы вы вошли
                <br />
                в ликвидность и понимали риски ДО покупки.
              </p>
            </div>

            {/* Risk Checklist */}
            <div className="space-y-3">
              {risks.map((risk, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-foreground/90">{risk}</span>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-4">
              {stats.slice(0, 3).map((stat, index) => (
                <div key={index} className="glass-card px-4 py-2">
                  <span className="text-foreground font-medium">{stat.value}</span>
                  <span className="text-muted-foreground text-sm ml-1">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              {stats.slice(3).map((stat, index) => (
                <div key={index} className="glass-card px-4 py-2">
                  <span className="text-foreground font-medium">{stat.value}</span>
                  <span className="text-muted-foreground text-sm ml-1">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <div className="text-muted-foreground">Без фейков</div>
              <div className="text-muted-foreground">Без скрытых обязательств</div>
              <div className="text-muted-foreground">Без давления</div>
              <div className="text-muted-foreground">Показываем минусы</div>
            </div>
          </div>

          {/* Right Column - Expert Card */}
          <div className="space-y-6">
            {/* Expert Photo Card */}
            <div className="glass-card p-4 border-2 border-primary/30 max-w-sm mx-auto lg:ml-auto">
              <div className="aspect-[4/5] overflow-hidden rounded-lg mb-4">
                <img 
                  src={expertImg} 
                  alt="Дмитрий Загайнов" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold text-center text-primary">
                Дмитрий Загайнов
              </h3>
            </div>

            {/* Quote Card */}
            <div className="glass-card p-6 border border-primary/20 max-w-sm mx-auto lg:ml-auto">
              <p className="text-foreground/90 italic leading-relaxed">
                «Наша задача — не показать "красиво".
                <br />
                Наша задача — чтобы вы вошли
                <br />
                в ликвидность и понимали риски
                <br />
                ДО покупки.»
              </p>
            </div>

            {/* CTA Button */}
            <div className="max-w-sm mx-auto lg:ml-auto">
              <button className="gold-button w-full">
                Забрать отчёт и разбор моей ситуации
              </button>
              <p className="text-center text-muted-foreground text-sm mt-3">
                Отчёт без обязательств. Консультация по запросу.
              </p>
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

export default AboutSection;
