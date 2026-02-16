import { TrendingUp, MonitorPlay, Copyright, CircleDollarSign } from "lucide-react"

const stats = [
    {
        icon: TrendingUp,
        value: "150+",
        label: "Growth Marketers",
    },
    {
        icon: MonitorPlay,
        value: "300+",
        label: "Brands Scaled",
    },
    {
        icon: Copyright,
        value: "4.8",
        label: "Clutch Rating",
    },
    {
        icon: CircleDollarSign,
        value: "$10m",
        label: "Ad Spend",
    },
]

export default function StatsSection() {
    return (
        <section className="bg-linear-to-r from-primary to-secondary py-16 text-primary-foreground">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4 text-center sm:text-left group hover:scale-105 transition-transform duration-300">
                            <stat.icon className="h-12 w-12 stroke-[1.5] text-primary-foreground shrink-0" />
                            <div className="space-y-1">
                                <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-none">
                                    {stat.value}
                                </h3>
                                <p className="text-sm font-medium opacity-80 uppercase tracking-wider">
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
