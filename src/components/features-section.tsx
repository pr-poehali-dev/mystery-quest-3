import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Rage Aimbot",
    description: "Мгновенный захват цели с настраиваемым FOV, smooth и RCS. Работает сквозь дым и на любых дистанциях.",
    icon: "target",
    badge: "Убийца",
  },
  {
    title: "Wallhack ESP",
    description: "Видишь врагов сквозь стены: health, armor, оружие, дистанция. Полная картина поля боя в реальном времени.",
    icon: "globe",
    badge: "Визуал",
  },
  {
    title: "Triggerbot",
    description: "Автовыстрел при наведении прицела на врага. Мгновенная реакция быстрее любого человека.",
    icon: "zap",
    badge: "Реакция",
  },
  {
    title: "No Recoil",
    description: "Полная компенсация отдачи для всех оружий CS2. Очереди точные как одиночные выстрелы.",
    icon: "link",
    badge: "Точность",
  },
  {
    title: "Radar Hack",
    description: "Все враги видны на миникарте всегда. Никаких сюрпризов — ты знаешь каждое движение противника.",
    icon: "brain",
    badge: "Карта",
  },
  {
    title: "Антибан защита",
    description: "Обход VAC, FACEIT и других античит систем. Регулярные обновления после каждого патча CS2.",
    icon: "lock",
    badge: "Безопасно",
  },
]

export function FeaturesSection() {
  return (
    <section id="technology" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Арсенал возможностей</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Всё что нужно для тотального доминирования в CS2 — в одном чите
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#127919;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
