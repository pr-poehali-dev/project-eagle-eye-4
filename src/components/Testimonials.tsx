export function Testimonials() {
  const testimonials = [
    {
      name: "Николай Семёнов",
      role: "Глава КФХ «Маяк», Намский улус",
      content:
        "Центр помогает нашему хозяйству уже много лет. Всегда получаем ГСМ и запчасти вовремя, даже в самый напряжённый посевной сезон. Благодаря субсидированным ценам удаётся удержать рентабельность.",
      rating: 5,
    },
    {
      name: "Мария Егорова",
      role: "Директор СХПК «Хатасский»",
      content:
        "Оформить заявку на технику через ЦРО АПК гораздо проще, чем искать поставщиков самостоятельно. Специалисты всегда помогают с документами и разъясняют условия государственной поддержки.",
      rating: 5,
    },
    {
      name: "Иван Борисов",
      role: "Агроном, Мегино-Кангаласский улус",
      content:
        "Покупаем минеральные удобрения только через Центр ресурсного обеспечения. Качество проверенное, цены государственные, доставка организована. Очень доволен сотрудничеством.",
      rating: 5,
    },
    {
      name: "Айталина Попова",
      role: "Руководитель ООО «Якутское молоко»",
      content:
        "Обращались за кормовыми добавками для молочного стада. Помогли подобрать подходящий состав и оформить субсидию от Минсельхоза. Профессионализм сотрудников на высоком уровне.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Отзывы</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Нам доверяют сельхозтоваропроизводители
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Отзывы руководителей хозяйств и фермеров, работающих с нашим центром
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 flex flex-col gap-4">
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>
              <p className="text-foreground leading-relaxed">"{testimonial.content}"</p>
              <div className="pt-2 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
