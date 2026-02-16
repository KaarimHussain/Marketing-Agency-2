import {
    Building2,
    ShoppingCart,
    Rocket,
    GraduationCap,
    HeartPulse,
    Shirt,
    Cpu,
    Utensils,
    Briefcase,
    Truck
} from "lucide-react"

const industries = [
    {
        name: "Real Estate",
        icon: Building2,
        color: "text-blue-400",
        bg: "bg-blue-400/10",
        border: "border-blue-400/20"
    },
    {
        name: "Ecommerce",
        icon: ShoppingCart,
        color: "text-purple-400",
        bg: "bg-purple-400/10",
        border: "border-purple-400/20"
    },
    {
        name: "Startups",
        icon: Rocket,
        color: "text-green-400",
        bg: "bg-green-400/10",
        border: "border-green-400/20"
    },
    {
        name: "Education",
        icon: GraduationCap,
        color: "text-yellow-400",
        bg: "bg-yellow-400/10",
        border: "border-yellow-400/20"
    },
    {
        name: "Healthcare",
        icon: HeartPulse,
        color: "text-red-400",
        bg: "bg-red-400/10",
        border: "border-red-400/20"
    },
    {
        name: "Fashion",
        icon: Shirt,
        color: "text-pink-400",
        bg: "bg-pink-400/10",
        border: "border-pink-400/20"
    },
    {
        name: "Tech & SaaS",
        icon: Cpu,
        color: "text-cyan-400",
        bg: "bg-cyan-400/10",
        border: "border-cyan-400/20"
    },
    {
        name: "Restaurants",
        icon: Utensils,
        color: "text-orange-400",
        bg: "bg-orange-400/10",
        border: "border-orange-400/20"
    },
    {
        name: "Corporate",
        icon: Briefcase,
        color: "text-indigo-400",
        bg: "bg-indigo-400/10",
        border: "border-indigo-400/20"
    },
    {
        name: "Logistics",
        icon: Truck,
        color: "text-amber-400",
        bg: "bg-amber-400/10",
        border: "border-amber-400/20"
    },
]

export default function IndustriesSection() {
    return (
        <section className="py-24 bg-secondary/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                        Trusted Across Major Industries
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center gap-4 p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer border border-transparent hover:border-border/50"
                        >
                            <div className={`h-16 w-16 rounded-2xl flex items-center justify-center border ${industry.bg} ${industry.border} transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                                <industry.icon className={`h-8 w-8 ${industry.color}`} />
                            </div>
                            <span className="text-base font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                                {industry.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
