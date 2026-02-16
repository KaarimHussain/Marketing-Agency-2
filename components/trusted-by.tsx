"use client"
import Marquee from "react-fast-marquee"
import Image from "next/image"

const brands = [
    { name: "TikTok", logo: "/svgs/Tiktok.svg" },
    { name: "Instagram", logo: "/svgs/Instgram.svg" },
    { name: "YouTube", logo: "/svgs/Youtube.svg" },
    { name: "Twitter", logo: "/svgs/Twitter.svg" },
    { name: "LinkedIn", logo: "/svgs/LinkedIn.svg" },
    { name: "TikTok", logo: "/svgs/Tiktok.svg" },
    { name: "Instagram", logo: "/svgs/Instgram.svg" },
    { name: "YouTube", logo: "/svgs/Youtube.svg" },
    { name: "Twitter", logo: "/svgs/Twitter.svg" },
    { name: "LinkedIn", logo: "/svgs/LinkedIn.svg" },
]

export default function TrustedBy() {
    return (
        <section className="py-10 bg-background border-b border-border/40">
            <div className="container mx-auto px-4 mb-10">
                <h3 className="text-xl font-bold text-foreground/80 tracking-wide">
                    Trusted by the Top Brands
                </h3>
            </div>

            <div className="w-full overflow-hidden">
                <Marquee gradient={false} speed={50} pauseOnHover={true} className="overflow-hidden py-4">
                    {brands.map((brand, index) => (
                        <div
                            key={`${brand.name}-${index}`}
                            className="mx-12 relative h-16 w-32 md:w-40 opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 flex items-center justify-center cursor-pointer"
                        >
                            <Image
                                src={brand.logo}
                                alt={brand.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}
