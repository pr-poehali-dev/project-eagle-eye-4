import { Button } from "@/components/ui/button"

export function Hero() {
  const handleContact = () => {
    const contactSection = document.getElementById("booking")
    contactSection?.scrollIntoView({ behavior: "smooth" })
  }

  const handleLearnMore = () => {
    const aboutSection = document.getElementById("benefits")
    aboutSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full w-fit">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="text-sm font-medium">Государственное казённое учреждение РС(Я)</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Центр ресурсного обеспечения АПК Республики Саха (Якутия)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Обеспечиваем агропромышленный комплекс Якутии необходимыми ресурсами, техникой и материалами. 
              Поддерживаем сельхозтоваропроизводителей для устойчивого развития аграрного сектора республики.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={handleContact}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base"
              >
                Связаться с нами
              </Button>
              <Button
                onClick={handleLearnMore}
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted bg-transparent"
              >
                Наши услуги
              </Button>
            </div>
            <div className="flex gap-8 pt-4 text-sm">
              <div>
                <p className="font-semibold text-foreground">34</p>
                <p className="text-muted-foreground">Района обслуживания</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">30+</p>
                <p className="text-muted-foreground">Лет на рынке</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">1000+</p>
                <p className="text-muted-foreground">Хозяйств</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl"></div>
            <img
              src="https://cdn.poehali.dev/projects/52a492a6-620c-4091-b61e-682e269b524e/files/09afe5d8-bc72-4c7f-9c4e-3e0863510a0c.jpg"
              alt="Сельскохозяйственные угодья Якутии"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
