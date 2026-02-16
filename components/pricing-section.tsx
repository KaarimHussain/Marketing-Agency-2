"use client"
import { useState } from "react"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
    {
        name: "Starter",
        price: 7500,
        description: "Perfect for small businesses looking to establish a strong online presence.",
        highlight: false,
        features: [
            "1 Platform Management",
            "5 Custom Posts/Month",
            "Basic SEO Audit",
            "Monthly Reporting",
            "Email Support",
        ]
    },
    {
        name: "Growth",
        price: 25000,
        description: "Designed for scaling brands ready to dominate their market niche.",
        highlight: true,
        features: [
            "3 Platforms Management",
            "15 Custom Posts/Month",
            "Advanced SEO & Link Building",
            "Bi-Weekly Reporting",
            "Dedicated Account Manager",
            "PPC Campaign Setup",
        ]
    },
    {
        name: "Enterprise",
        price: 50000,
        description: "Comprehensive solutions tailored for large organizations and corporations.",
        highlight: false,
        features: [
            "Unlimited Platforms",
            "Daily Content Creation",
            "Full-Stack SEO Strategy",
            "24/7 Priority Support",
            "Custom Dashboard Access",
            "Advanced Analytics & ROI Tracking",
            "Quarterly Strategy Review"
        ]
    },
]

export default function PricingSection() {
    const [isYearly, setIsYearly] = useState(false)

    return (
        <section className="py-24 bg-muted/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                        Simple, Transparent <span className="text-primary">Pricing</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Choose the perfect plan for your business needs. No hidden fees.
                    </p>

                    {/* Toggle */}
                    <div className="flex justify-center items-center mt-8 gap-4">
                        <span className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
                        <div
                            className="w-16 h-8 bg-muted rounded-full p-1 cursor-pointer transition-colors duration-300 relative border border-border"
                            onClick={() => setIsYearly(!isYearly)}
                        >
                            <div className={`w-6 h-6 bg-primary rounded-full shadow-md transform transition-transform duration-300 ${isYearly ? "translate-x-8" : "translate-x-0"}`} />
                        </div>
                        <span className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
                            Yearly <span className="text-primary text-xs font-bold ml-1">(Save 20%)</span>
                        </span>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-[2rem] border transition-all duration-300 relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl
                            ${plan.highlight
                                    ? "bg-background border-primary shadow-xl scale-105 z-10"
                                    : "bg-card border-border shadow-sm hover:border-primary/50"}`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold py-1 px-4 rounded-bl-xl uppercase tracking-widest shadow-md">
                                    Most Popular
                                </div>
                            )}

                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
                                        PKR {isYearly ? (plan.price * 0.8).toFixed(0) : plan.price}
                                    </span>
                                    <span className="text-muted-foreground font-medium">/mo</span>
                                </div>
                                <p className="text-muted-foreground text-sm min-h-12">
                                    {plan.description}
                                </p>

                                <div className="h-px bg-border my-6" />

                                <ul className="space-y-4">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                                            <div className={`p-1 rounded-full ${plan.highlight ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}>
                                                <Check className="h-3 w-3" />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    className={`w-full rounded-full py-6 mt-8 shadow-sm transition-transform active:scale-95 text-base font-semibold
                                    ${plan.highlight ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary/25" : "bg-muted text-foreground hover:bg-muted/80"}`}
                                >
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
