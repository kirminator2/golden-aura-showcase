import testimonial1 from '@/assets/testimonial1.jpg';
import testimonial2 from '@/assets/testimonial2.jpg';
import testimonial3 from '@/assets/testimonial3.jpg';
import cityBg from '@/assets/city-bg.jpg';

const testimonials = [
  {
    image: testimonial1,
    name: 'Алексей С.',
    role: 'Инвестор, Москва',
    text: 'Искал объект под сдачу. Вместо студии, которую мне "впаривали", Дмитрий предложил евро-2 в развивающемся районе. Сдалась за неделю, доходность 15% годовых. Чётко, по делу, без воды.'
  },
  {
    image: testimonial2,
    name: 'Елена В.',
    role: 'Предприниматель, Санкт-Петербург',
    text: 'Боялась траншевой ипотеки. Ребята всё разложили по полочкам, показали риски. Взяла объект с мин. вложением, через год перепродала с прибылью 35%. Спасибо за честность!'
  },
  {
    image: testimonial3,
    name: 'Сергей и Анна',
    role: 'Переезд + Инвестиции, Новосибирск',
    text: 'Переезжали в Краснодар и хотели сохранить капитал. Подобрали две квартиры: одну для жизни, другую под аренду. Оба объекта ликвидные, аренда покрывает ипотеку. Идеальная стратегия!'
  }
];

const TestimonialsSection = () => {
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Отзывы инвесторов, <span className="gold-gradient-text">которые</span>
            <br />
            <span className="gold-gradient-text">уже заработали</span> с нами
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Реальные истории людей, которые выбрали ликвидность, а не «красивую картинку».
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card p-6 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="glass-card px-4 py-2 flex items-center gap-2">
            <span className="text-muted-foreground">Топ-3 в регионе</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">100+ застройщиков</span>
          </div>
        </div>

        {/* Ratings */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="glass-card px-6 py-4 flex items-center gap-4">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">5.0</div>
              <div className="text-sm text-muted-foreground">Рейтинг Яндекс Карты</div>
            </div>
          </div>
          <div className="glass-card px-6 py-4 flex items-center gap-4">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">5.0</div>
              <div className="text-sm text-muted-foreground">Рейтинг 2ГИС</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="gold-button text-lg px-12">
            Получить инвест-отчёт и начать зарабатывать
          </button>
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

export default TestimonialsSection;
