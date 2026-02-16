export default function WhyDifferentSection() {
    const features = [
        {
            number: "01",
            title: "Real ROI",
            description: "You get the measurement and analytics that let you draw distinct connections between marketing investments and sales results."
        },
        {
            number: "02",
            title: "Agility Redefined",
            description: "There are no layers of bureaucracy; you strategize and plan directly with the professional who makes your media investment."
        },
        {
            number: "03",
            title: "Atypical Experience",
            description: "We have the brainpower of a multinational, the acute focus of a boutique, the rational risk-taking spirit of a successful startup, and the track record of a Madison Avenue mainstay."
        }
    ]

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                        Why We Are <span className="text-primary relative inline-block">
                            Different
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary rounded-full opacity-80" />
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className={`group relative p-8 md:p-10 rounded-[2rem] bg-muted/30 hover:bg-background border border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-2
                            ${index % 2 === 0 ? 'hover:border-primary/20' : 'hover:border-secondary/20'}`}
                        >
                            {/* Number Watermark */}
                            <div className={`text-6xl md:text-8xl font-black text-muted-foreground/10 absolute top-4 right-8 select-none transition-colors 
                                ${index % 2 === 0 ? 'group-hover:text-primary/10' : 'group-hover:text-secondary/10'}`}>
                                {item.number}
                            </div>

                            <div className="relative z-10 space-y-6">
                                <div className={`inline-block px-4 py-1 rounded-full font-bold text-sm tracking-widest border 
                                    ${index % 2 === 0 ? 'bg-primary/10 text-primary border-primary/20' : 'bg-secondary/10 text-secondary border-secondary/20'}`}>
                                    STEP {item.number}
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                    {item.title}
                                </h3>

                                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                                    {item.description}
                                </p>
                            </div>

                            {/* Bottom Gradient Line */}
                            <div className={`absolute bottom-0 left-10 right-10 h-[2px] bg-linear-to-r from-transparent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100
                                ${index % 2 === 0 ? 'via-primary/50' : 'via-secondary/50'}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
