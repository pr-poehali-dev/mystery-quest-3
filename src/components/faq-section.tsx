import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Zmiy обходит VAC?",
      answer:
        "Да, Zmiy использует продвинутые методы обхода VAC и регулярно обновляется. За всё время работы продукта не было ни одного волны банов среди наших пользователей.",
    },
    {
      question: "Работает ли чит на FACEIT?",
      answer:
        "Да, специальный legit-режим адаптирован под FACEIT Anticheat. Движения выглядят естественно, скрины и стримы защищены.",
    },
    {
      question: "Как долго после покупки я получу доступ?",
      answer:
        "Доступ выдаётся автоматически в течение нескольких минут после оплаты. Ты получишь личный loader и инструкцию по запуску.",
    },
    {
      question: "Что делать если вышел новый патч CS2?",
      answer:
        "Обновление выходит в течение 24 часов после патча. Всё это время поддержка на связи. Loader обновится автоматически.",
    },
    {
      question: "Можно ли использовать на нескольких ПК?",
      answer:
        "Лицензия привязывается к одному ПК. Если хочешь сменить компьютер — напиши в поддержку, перепривяжем бесплатно.",
    },
    {
      question: "Какие тарифы доступны?",
      answer:
        "Доступны подписки на 1 месяц, 3 месяца и год. Чем дольше — тем дешевле. Есть пробный период на 24 часа.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё что хочешь знать о Zmiy перед покупкой
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
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
