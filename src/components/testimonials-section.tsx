import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "xX_d3stroyer_Xx",
    role: "FACEIT Level 8 → Level 10",
    initials: "DD",
    content:
      "За месяц с Zmiy поднялся с 6 до 10 лвл на FACEIT. Legit режим просто огонь — ни одного бана, выглядит как скилл.",
  },
  {
    name: "cr1mson_sniper",
    role: "Global Elite, Premier 25k+",
    initials: "CS",
    content:
      "Rage режим в дроп-лоббях — это что-то. Aimbot моментальный, ESP работает чётко. Обновляется быстро после патчей.",
  },
  {
    name: "n1ghtfall_pro",
    role: "Клиент 8 месяцев",
    initials: "NP",
    content:
      "Пробовал много читов — Zmiy лучший по соотношению цена/качество. Поддержка отвечает быстро, антибан реально держит.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Говорят игроки</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Тысячи игроков уже выбрали Zmiy для доминации в CS2
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-red-500/20 text-red-400 font-bold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
