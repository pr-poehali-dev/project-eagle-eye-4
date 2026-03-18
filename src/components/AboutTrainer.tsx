export function AboutTrainer() {
  return (
    <section id="about" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl"></div>
            <img
              src="https://cdn.poehali.dev/projects/52a492a6-620c-4091-b61e-682e269b524e/files/09afe5d8-bc72-4c7f-9c4e-3e0863510a0c.jpg"
              alt="АПК Якутия"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wide">О нас</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                ГКУ РС(Я) «ЦРО АПК»
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Государственное казённое учреждение Республики Саха (Якутия) «Центр ресурсного обеспечения 
              агропромышленного комплекса» создано для комплексного снабжения сельскохозяйственных 
              предприятий республики.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Учреждение осуществляет закупку, хранение и реализацию горюче-смазочных материалов, 
              минеральных удобрений, средств защиты растений, сельскохозяйственной техники и запасных 
              частей для нужд агропромышленного комплекса Якутии.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Учредитель — Минсельхоз РС(Я)</p>
                  <p className="text-sm text-muted-foreground">Министерство сельского хозяйства и продовольственной политики</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Охват всей республики</p>
                  <p className="text-sm text-muted-foreground">Работаем во всех 34 муниципальных районах Якутии</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Государственная поддержка</p>
                  <p className="text-sm text-muted-foreground">Субсидированные цены для сельхозтоваропроизводителей</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
