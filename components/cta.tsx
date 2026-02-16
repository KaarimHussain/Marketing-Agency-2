import Image from "next/image"

export default function CTA() {
    return (
        <section className="py-24 px-4 bg-background flex justify-center">
            <div className="relative w-full max-w-6xl overflow-hidden rounded-[3rem] bg-linear-to-br from-primary to-secondary px-6 py-24 text-center shadow-2xl md:px-20">
                {/* Decorative Elements */}
                <div className="absolute -left-20 -bottom-40 h-[500px] w-[500px] rounded-full bg-chart-4/50 blur-3xl opacity-60" />
                <div className="absolute -right-20 -top-40 h-[600px] w-[600px] rounded-full bg-chart-2/50 blur-3xl opacity-60" />

                {/* Content */}
                <div className="relative z-10 mx-auto max-w-4xl flex flex-col items-center gap-10">
                    <blockquote className="text-2xl md:text-4xl font-medium leading-[1.4] tracking-tight text-white">
                        &ldquo;I worked with Ubiquitous on an influencer campaign and it was the best experience I&rsquo;ve had in the space! Customer service couldn&rsquo;t be better and they really helped our team with strategy and execution. Great communication as well. If I could give more than 5 stars I would!&rdquo;
                    </blockquote>

                    <div className="flex flex-col items-center gap-6">
                        <cite className="text-xl font-bold not-italic text-white">
                            – Sarah Minami, Disney
                        </cite>

                        <div className="flex items-center gap-6">
                            <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white/30 shadow-lg">
                                <Image
                                    src="/image/Creator-Person.jpg"
                                    alt="Sarah Minami"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-4xl font-bold text-white font-serif tracking-wide drop-shadow-md">
                                Disney
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
