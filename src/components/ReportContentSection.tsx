import { MapPin, Building, AlertTriangle, Target, Scale } from 'lucide-react';
import cityBg from '@/assets/city-bg.jpg';

const features = [
  {
    icon: MapPin,
    iconBg: 'bg-accent',
    title: '5 ликвидных районов Краснодара на 2026',
    description: 'Где реально держится спрос на аренду и перепродажу: для жизни и для сдачи.'
  },
  {
    icon: Building,
    iconBg: 'bg-primary/80',
    title: 'Какие квартиры будут брать быстрее в 2026-2027',
    description: 'Конкретно по типам: студия / 1к / евро-2 / 2к, метражи, этажность, планировки – что уходит без простоя и что виснет мертвым грузом.'
  },
  {
    icon: AlertTriangle,
    iconBg: 'bg-primary/80',
    title: 'Красные флаги застройщиков и новостроек',
    description: 'Где чаще возникают переносы сроков, удорожание ремонта или коммуналки, проблемы с управлением, перенасыщение арендой, сложная перепродажа.'
  },
  {
    icon: Target,
    iconBg: 'bg-accent',
    title: 'Инвест стратегии под вашу цель',
    description: 'Аренда / рост цены / смешанная. 2–3 сценария входа: классика / рассрочка / траншевая ипотека – когда это усиливает доходность, а когда добавляет риск.'
  },
  {
    icon: Scale,
    iconBg: 'bg-primary/80',
    title: 'Дилемма "1 большая vs 2 маленьких"',
    description: 'С расчётной логикой. В каких случаях одна большая выигрывает по ликвидности или премиум-аренде, а когда две маленьких дают стабильность.'
  }
];

const ReportContentSection = () => {
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
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
            Что внутри отчёта{' '}
            <span className="gold-gradient-text">(итоговая версия для инвестора)</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.slice(0, 3).map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 hover:border-primary/40 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg ${feature.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {features.slice(3).map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg ${feature.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="gold-button text-lg px-12">
            ПОЛУЧИТЬ ПОЛНЫЙ ОТЧЁТ
          </button>
          <p className="text-muted-foreground mt-4">Аналитика без маркетинговых обещаний.</p>
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

export default ReportContentSection;
