export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xs">АПК</span>
              </div>
              <div>
                <p className="font-bold text-background text-sm">ГКУ РС(Я) «ЦРО АПК»</p>
              </div>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Государственное казённое учреждение Республики Саха (Якутия) «Центр ресурсного обеспечения 
              агропромышленного комплекса»
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li>Горюче-смазочные материалы</li>
              <li>Минеральные удобрения</li>
              <li>Сельскохозяйственная техника</li>
              <li>Запасные части</li>
              <li>Корма и кормовые добавки</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li>г. Якутск, ул. Кирова, 13</li>
              <li>+7 (4112) 34-16-84</li>
              <li>info@apksakha.ru</li>
              <li>apksakha.ru</li>
              <li>Пн–Пт: 9:00–18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} ГКУ РС(Я) «ЦРО АПК». Все права защищены.
          </p>
          <p className="text-background/40 text-sm">
            Учредитель: Министерство сельского хозяйства и продовольственной политики РС(Я)
          </p>
        </div>
      </div>
    </footer>
  )
}
