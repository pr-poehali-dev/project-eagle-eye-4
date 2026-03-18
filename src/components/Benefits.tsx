export function Benefits() {
  const benefits = [
    {
      icon: "⛽",
      title: "Горюче-смазочные материалы",
      description: "Поставка ГСМ для сельскохозяйственной техники по субсидированным ценам во все районы республики",
    },
    {
      icon: "🌱",
      title: "Минеральные удобрения",
      description: "Широкий ассортимент удобрений и средств защиты растений для повышения урожайности",
    },
    {
      icon: "🚜",
      title: "Сельхозтехника",
      description: "Поставка тракторов, комбайнов и другой сельскохозяйственной техники ведущих производителей",
    },
    {
      icon: "🔧",
      title: "Запасные части",
      description: "Обширный склад запчастей для оперативного ремонта и технического обслуживания техники",
    },
    {
      icon: "🐄",
      title: "Корма и кормовые добавки",
      description: "Обеспечение животноводческих хозяйств сбалансированными кормами и витаминными добавками",
    },
    {
      icon: "📋",
      title: "Консультации и поддержка",
      description: "Помощь в оформлении заявок, документации и получении государственных субсидий",
    },
  ]

  return (
    <section id="benefits" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Направления работы</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Всё необходимое для АПК
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Комплексное ресурсное обеспечение агропромышленного комплекса Республики Саха (Якутия)
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
