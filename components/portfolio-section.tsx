"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { ArrowRight, Globe } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

const portfolioItems = [
    {
        logo: "TaPOOL",
        category: "Talent Networking",
        title: "Leading talent networking platform",
        metric: "2x Increase in Website Traffic",
        metricColor: "text-orange-500",
        image: "/image/Creator-Person.jpg", // Placeholder
        description: "A comprehensive platform connecting top-tier talent with industry leaders through AI-driven matching algorithms.",
    },
    {
        logo: "SELF",
        category: "EdTech Platform",
        title: "Platform to increase student's productivity",
        metric: "1.5x Increase in Revenue",
        metricColor: "text-blue-500",
        image: "/image/Brands-Building.jpg", // Placeholder
        description: "An educational ecosystem designed to enhance student engagement and productivity through gamified learning.",
    },
    {
        logo: "Bloom",
        category: "E-Commerce",
        title: "Scaling sustainable fashion globaly",
        metric: "300% ROI on Ad Spend",
        metricColor: "text-green-500",
        image: "/image/Creator-Person.jpg", // Placeholder
        description: "Helping a sustainable fashion brand expand into international markets with a data-driven digital strategy.",
    },
]

export default function PortfolioSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    )

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                        Our <span className="text-primary">Portfolio</span> Speaks for Itself
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        For the last 10 years, we&apos;ve helped our clients become market leaders in their respective industries through innovative digital solutions.
                    </p>
                </div>

                <Carousel
                    plugins={[plugin.current]}
                    className="w-full max-w-6xl mx-auto"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        {portfolioItems.map((item, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center p-8 lg:p-12 border border-border/50 rounded-[2.5rem] bg-muted/10 shadow-sm hover:shadow-md transition-shadow">
                                        {/* Content Side */}
                                        <div className="space-y-8">
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-2 text-primary font-bold text-xl tracking-wide uppercase">
                                                    <Globe className="h-5 w-5" />
                                                    {item.logo}
                                                </div>
                                                <h3 className="text-3xl md:text-4xl font-bold leading-tight text-foreground">
                                                    {item.title}
                                                </h3>
                                                <p className="text-lg text-muted-foreground">
                                                    {item.description}
                                                </p>
                                            </div>

                                            <div className={`text-xl font-bold ${item.metricColor}`}>
                                                {item.metric}
                                            </div>

                                            <Button
                                                variant="outline"
                                                className="rounded-full px-10 py-2 h-auto text-base font-semibold border-primary/20 text-foreground hover:bg-primary hover:text-primary-foreground group"
                                            >
                                                View Case Study
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </Button>
                                        </div>

                                        {/* Image Side (Laptop Mockup style) */}
                                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-8 border-gray-800 bg-gray-800">
                                            {/* Camera Dot */}
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-16 bg-black rounded-b-lg z-20 flex justify-center pt-1">
                                                <div className="h-1.5 w-1.5 rounded-full bg-gray-600" />
                                            </div>

                                            <div className="relative w-full h-full bg-white overflow-hidden group-hover:scale-105 transition-transform duration-700">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                                {/* Overlay Gradient */}
                                                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="hidden md:block">
                        <CarouselPrevious className="-left-15 h-12 w-12 border-2" />
                        <CarouselNext className="-right-15 h-12 w-12 border-2" />
                    </div>
                </Carousel>
            </div>
        </section>
    )
}
