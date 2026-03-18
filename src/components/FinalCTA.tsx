import { Button } from "@/components/ui/button"

export function FinalCTA() {
  const handleContact = () => {
    const bookingSection = document.getElementById("booking")
    bookingSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="bg-accent py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground text-balance mb-4">
          Нужны ресурсы для вашего хозяйства?
        </h2>
        <p className="text-accent-foreground/80 text-lg max-w-2xl mx-auto mb-8">
          Оставьте заявку — наши специалисты подберут необходимые ресурсы и расскажут 
          о действующих программах государственной поддержки АПК Якутии.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleContact}
            size="lg"
            className="bg-white text-accent hover:bg-white/90 text-base font-semibold"
          >
            Оставить заявку
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 bg-transparent text-base"
            onClick={() => window.open("https://apksakha.ru", "_blank")}
          >
            Перейти на сайт
          </Button>
        </div>
      </div>
    </section>
  )
}
