"use client"
import { useState } from "react"
import { ChevronDown, MessageCircle } from "lucide-react"

const categories = [
    { title: "General", icon: MessageCircle },
    { title: "Services", icon: MessageCircle },
    { title: "Technical", icon: MessageCircle },
]

const faqs = [
    {
        question: "How long does it take to see results?",
        answer: "Typically, you can start seeing measurable results within 3-6 months. However, this depends heavily on your industry, competition, and the specific strategies we implement. We prioritize long-term, sustainable growth over quick, flashy wins.",
        category: "General"
    },
    {
        question: "Do you offer custom packages?",
        answer: "Absolutely! We understand that every business is unique. We'll work closely with you to tailor a package that fits your specific goals, budget, and timeline.",
        category: "Services"
    },
    {
        question: "What platforms do you specialize in?",
        answer: "Our expertise covers all major platforms including Google Ads, Facebook/Meta, Instagram, LinkedIn, TikTok, and YouTube. We choose the platforms based on where your target audience spends their time.",
        category: "Technical"
    },
    {
        question: "How do you measure success?",
        answer: "We focus on Key Performance Indicators (KPIs) that matter to your bottom line: Conversions, ROI (Return on Investment), ROAS (Return on Ad Spend), and CPA (Cost Per Acquisition). Vanity metrics like likes and shares are secondary.",
        category: "Services"
    },
    {
        question: "Is there a long-term contract requirement?",
        answer: "We offer flexible month-to-month options as well as discounted annual contracts. We believe in earning your business every single month through performance, not locking you in with paperwork.",
        category: "General"
    },
]

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0)
    const [activeTab, setActiveTab] = useState("General")

    return (
        <section className="py-24 bg-background border-t border-border/50">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                        Got <span className="underline decoration-wavy decoration-2 underline-offset-8 decoration-linear-to-r from-primary to-secondary">Questions?</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We have the answers. If you don't see yours here, feel free to reach out.
                    </p>
                </div>

                {/* Tabs */}
                {/* Tabs */}
                <div className="flex justify-center flex-wrap gap-4 mb-12">
                    {["General", "Services", "Technical"].map((tab, idx) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border 
                            ${activeTab === tab
                                    ? idx % 2 === 0
                                        ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                                        : "bg-secondary text-secondary-foreground border-secondary shadow-lg shadow-secondary/25"
                                    : "bg-muted/50 text-muted-foreground border-transparent hover:bg-muted hover:text-foreground"}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="space-y-4">
                    {faqs.filter(faq => activeTab === "General" ? true : faq.category === activeTab).map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-2xl overflow-hidden transition-all duration-300 
                            ${activeIndex === index
                                    ? index % 2 === 0
                                        ? "bg-muted/5 border-primary/20 shadow-sm"
                                        : "bg-muted/5 border-secondary/20 shadow-sm"
                                    : "bg-transparent border-border/50 hover:bg-muted/30"}`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`text-lg font-bold transition-colors 
                                    ${activeIndex === index
                                        ? index % 2 === 0 ? "text-primary" : "text-secondary"
                                        : "text-foreground"}`}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 
                                        ${activeIndex === index
                                            ? index % 2 === 0 ? "rotate-180 text-primary" : "rotate-180 text-secondary"
                                            : ""}`}
                                />
                            </button>

                            <div
                                className={`grid transition-all duration-300 ease-in-out ${activeIndex === index ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0 pb-0"}`}
                            >
                                <div className="overflow-hidden px-6 text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
