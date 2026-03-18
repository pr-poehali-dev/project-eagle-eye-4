import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Booking() {
  return (
    <section id="booking" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Контакты</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Свяжитесь с нами</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Оставьте заявку или свяжитесь напрямую — наши специалисты ответят на все вопросы
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-card border border-border rounded-xl p-8 flex flex-col gap-6">
            <h3 className="text-xl font-semibold text-foreground">Контактная информация</h3>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Icon name="MapPin" size={20} className="text-accent" />
              </div>
              <div>
                <p className="font-medium text-foreground">Адрес</p>
                <p className="text-muted-foreground text-sm mt-1">
                  677000, Республика Саха (Якутия),<br />
                  г. Якутск, ул. Кирова, 13
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Phone" size={20} className="text-accent" />
              </div>
              <div>
                <p className="font-medium text-foreground">Телефон</p>
                <p className="text-muted-foreground text-sm mt-1">+7 (4112) 34-16-84</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Mail" size={20} className="text-accent" />
              </div>
              <div>
                <p className="font-medium text-foreground">Email</p>
                <p className="text-muted-foreground text-sm mt-1">info@apksakha.ru</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Icon name="Clock" size={20} className="text-accent" />
              </div>
              <div>
                <p className="font-medium text-foreground">Режим работы</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Пн–Пт: 9:00–18:00<br />
                  Сб–Вс: выходной
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 flex flex-col gap-6">
            <h3 className="text-xl font-semibold text-foreground">Оставить заявку</h3>
            <p className="text-muted-foreground text-sm">
              Заполните форму, и наш специалист свяжется с вами в ближайшее рабочее время
            </p>

            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Ваше имя</label>
                <input
                  type="text"
                  placeholder="Иванов Иван Иванович"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Организация</label>
                <input
                  type="text"
                  placeholder="Название хозяйства / организации"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Телефон</label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Вопрос или потребность</label>
                <textarea
                  placeholder="Опишите, какие ресурсы или услуги вам необходимы..."
                  rows={3}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none"
                />
              </div>
            </div>

            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground w-full"
            >
              Отправить заявку
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
