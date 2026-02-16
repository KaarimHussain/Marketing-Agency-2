import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 min-h-full min-w-full object-cover"
            >
                <source
                    src="https://videocdn.cdnpk.net/videos/ec1661c4-6f1c-4bcf-a1dc-7ab96aa0d7b2/horizontal/previews/clear/large.mp4?token=exp=1770933675~hmac=0b61a5c84f2a61f82e53e4c1902587ba8284c10d1366aa4a2cb749fb49aed47b"
                    type="video/mp4"
                />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content Container */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
                <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.1]">
                        Unleash Your <br />
                        <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent font-extrabold pb-2">
                            Digital Potential
                        </span>
                    </h1>

                    <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
                        We build brands that define the future. Combining data-driven strategies with world-class creativity to scale your business beyond limits.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button
                            size="lg"
                            className="bg-white text-black hover:bg-white/90 rounded-full h-14 px-8 text-lg font-semibold transition-all hover:scale-105"
                        >
                            Start Your Journey
                        </Button>
                        <Button
                            size="lg"
                            className="rounded-full h-14 px-8 text-lg font-semibold transition-all hover:scale-105"
                        >
                            View Our Work
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
