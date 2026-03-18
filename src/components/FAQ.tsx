import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Кто может обратиться в ЦРО АПК за ресурсами?",
      answer:
        "В наш центр могут обращаться все сельскохозяйственные товаропроизводители Республики Саха (Якутия): крестьянско-фермерские хозяйства, сельскохозяйственные потребительские кооперативы, личные подсобные хозяйства, а также агропромышленные предприятия республики.",
    },
    {
      question: "Как оформить заявку на получение ресурсов?",
      answer:
        "Заявку можно подать несколькими способами: лично в офисе учреждения по адресу г. Якутск, ул. Кирова, 13; по телефону +7 (4112) 34-16-84; по электронной почте info@apksakha.ru; или заполнив форму на нашем сайте. Специалисты помогут оформить все необходимые документы.",
    },
    {
      question: "Предоставляются ли субсидии при покупке ресурсов?",
      answer:
        "Да, государство субсидирует часть стоимости ресурсов для сельхозтоваропроизводителей. Условия и размер субсидий зависят от вида ресурса, категории хозяйства и текущих программ поддержки Минсельхоза РС(Я). Наши специалисты проконсультируют по всем доступным мерам поддержки.",
    },
    {
      question: "Осуществляется ли доставка в отдалённые районы Якутии?",
      answer:
        "Да, мы организуем поставки во все 34 муниципальных района республики. Для труднодоступных районов используем все доступные виды транспорта, в том числе зимники и авиадоставку. Сроки и условия доставки обсуждаются индивидуально.",
    },
    {
      question: "Какую технику можно приобрести через ЦРО АПК?",
      answer:
        "Через наш центр доступны тракторы, комбайны, почвообрабатывающая и посевная техника, оборудование для животноводства, а также запасные части к ним. Мы работаем с ведущими российскими и зарубежными производителями сельскохозяйственной техники.",
    },
    {
      question: "Есть ли возможность приобрести ресурсы в рассрочку?",
      answer:
        "Для отдельных категорий ресурсов и при наличии государственных программ поддержки возможно предоставление льготных условий оплаты. Подробную информацию о действующих программах уточняйте у наших специалистов по телефону или на личном приёме.",
    },
  ]

  return (
    <section id="faq" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Вопросы и ответы</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Часто задаваемые вопросы
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ответы на вопросы о работе Центра ресурсного обеспечения АПК
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
