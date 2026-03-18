import { Button } from "@/components/ui/button"
import { useState } from "react"
import Icon from "@/components/ui/icon"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-xs">АПК</span>
            </div>
            <div>
              <p className="font-bold text-foreground text-sm leading-tight">ЦРО АПК</p>
              <p className="text-xs text-muted-foreground leading-tight hidden sm:block">Республика Саха (Якутия)</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollTo("about")} className="text-sm text-muted-foreground hover:text-foreground transition">О нас</button>
            <button onClick={() => scrollTo("benefits")} className="text-sm text-muted-foreground hover:text-foreground transition">Услуги</button>
            <button onClick={() => scrollTo("testimonials")} className="text-sm text-muted-foreground hover:text-foreground transition">Отзывы</button>
            <button onClick={() => scrollTo("faq")} className="text-sm text-muted-foreground hover:text-foreground transition">FAQ</button>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              size="sm"
              className="hidden md:flex bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => scrollTo("booking")}
            >
              Связаться
            </Button>
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={20} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4 flex flex-col gap-3">
            <button onClick={() => scrollTo("about")} className="text-sm text-muted-foreground hover:text-foreground text-left py-1">О нас</button>
            <button onClick={() => scrollTo("benefits")} className="text-sm text-muted-foreground hover:text-foreground text-left py-1">Услуги</button>
            <button onClick={() => scrollTo("testimonials")} className="text-sm text-muted-foreground hover:text-foreground text-left py-1">Отзывы</button>
            <button onClick={() => scrollTo("faq")} className="text-sm text-muted-foreground hover:text-foreground text-left py-1">FAQ</button>
            <Button
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground w-full mt-2"
              onClick={() => scrollTo("booking")}
            >
              Связаться
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
