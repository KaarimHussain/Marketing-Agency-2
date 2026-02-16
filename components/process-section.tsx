import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
    {
        id: "01",
        title: "Discovery & Strategy",
        description: "We dive deep into your brand, audience, and goals. We analyze competitors and opportunities to craft a bespoke roadmap.",
    },
    {
        id: "02",
        title: "Execution & Launch",
        description: "Our team implements the strategy with precision. From creative assets to technical setup, we ensure a flawless launch.",
    },
    {
        id: "03",
        title: "Optimization & Scale",
        description: "We don't set and forget. Continuous A/B testing and data analysis allow us to refine campaigns and scale profitable channels.",
    },
    {
        id: "04",
        title: "Reporting & Insights",
        description: "Transparent reporting keeps you in the loop. We provide actionable insights and strategic recommendations for the next phase.",
    },
]

export default function ProcessSection() {
    return (
        <section className="py-24 bg-background overflow-hidden relative">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                        The <span className="text-primary">Growth Path</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A proven 4-step framework designed to take your business from where it is now to where it deserves to be.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Central Vertical Line (Desktop) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12 md:space-y-0">
                        {steps.map((step, index) => (
                            <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group my-5`}>

                                {/* Timeline Dot (Center) */}
                                <div className={`absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 ${index % 2 === 0 ? 'border-primary' : 'border-secondary'} z-20 hidden md:block group-hover:scale-150 transition-transform duration-300`} />

                                {/* Spacer for layout balance */}
                                <div className="w-full md:w-5/12" />

                                {/* Content Card */}
                                <div className={`w-full md:w-5/12 bg-muted/20 p-8 rounded-3xl border border-border/50 hover:shadow-lg relative overflow-hidden group transition-all duration-300 ${index % 2 === 0 ? 'hover:border-primary/30' : 'hover:border-secondary/30'}`}>
                                    {/* Big Number Background */}
                                    <span className={`absolute -right-4 -bottom-8 text-9xl font-black text-foreground/5 z-0 transition-colors duration-500 select-none ${index % 2 === 0 ? 'group-hover:text-primary/5' : 'group-hover:text-secondary/5'}`}>
                                        {step.id}
                                    </span>

                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                                            <span className={`md:hidden ${index % 2 === 0 ? 'text-primary' : 'text-secondary'}`}>#{step.id}</span>
                                            {step.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
