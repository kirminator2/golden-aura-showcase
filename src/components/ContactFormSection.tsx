import { useState } from 'react';
import { Send, FileText, Shield, BellOff } from 'lucide-react';
import cityBg from '@/assets/city-bg.jpg';

const ContactFormSection = () => {
  const [phone, setPhone] = useState('');
  const [messenger, setMessenger] = useState<'telegram' | 'whatsapp'>('telegram');

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${cityBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/80" />
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-2">
            <span className="gold-gradient-text">Получите инвест-отчёт по Краснодару PDF,</span>
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold mb-4">
            а так же короткий разбор вашей ситуации
            <br />
            от вашего персонального менеджера
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Отправим в удобный мессенджер. Без звонков и дожима.
            <br />
            Если захотите – обсудим сценарии входа под ваши критерии
          </p>
        </div>

        {/* Form Card */}
        <div className="glass-card p-6 md:p-8 max-w-lg mx-auto glow">
          <div className="space-y-6">
            {/* Phone Input */}
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Телефон</label>
              <div className="relative">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-secondary/50 border border-glass-border rounded-lg px-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Messenger Selection */}
            <div>
              <label className="block text-sm text-muted-foreground mb-3">Куда отправить</label>
              <div className="flex gap-4">
                <button
                  onClick={() => setMessenger('telegram')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border transition-all ${
                    messenger === 'telegram'
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-glass-border bg-secondary/30 text-muted-foreground hover:border-primary/50'
                  }`}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.12.098.153.228.166.331.014.103.03.336.017.519z"/>
                  </svg>
                  Telegram
                </button>
                <button
                  onClick={() => setMessenger('whatsapp')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border transition-all ${
                    messenger === 'whatsapp'
                      ? 'border-green-500 bg-green-500/10 text-green-500'
                      : 'border-glass-border bg-secondary/30 text-muted-foreground hover:border-green-500/50'
                  }`}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button className="gold-button w-full text-lg flex items-center justify-center gap-2">
              Получить отчёт и разбор моей ситуации
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-muted-foreground text-sm mt-6 max-w-lg mx-auto">
          «Можно просто взять отчёт. Консультация – только по вашему запросу.
          <br />
          Никаких впариваний ЖК и горячих предложений»
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div className="glass-card px-4 py-2 flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            <span className="text-sm">PDF сразу в мессенджер</span>
          </div>
          <div className="glass-card px-4 py-2 flex items-center gap-2">
            <Shield className="w-5 h-5 text-accent" />
            <span className="text-sm">Без СПАМА</span>
          </div>
          <div className="glass-card px-4 py-2 flex items-center gap-2">
            <BellOff className="w-5 h-5 text-primary" />
            <span className="text-sm">Без рекламы ЖК</span>
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

export default ContactFormSection;
