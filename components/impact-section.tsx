import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ImpactSection() {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Image */}
                    <div className="relative mx-auto lg:mx-0 w-full max-w-md aspect-4/5">
                        {/* Main "Phone" Image */}
                        <div className="relative z-10 h-full w-full overflow-hidden rounded-[2.5rem] border-8 border-gray-900 shadow-2xl bg-gray-100">
                            <Image
                                src="/image/Digital-Marketing.jpg"
                                alt="Digital Marketing Impact"
                                fill
                                className="object-cover"
                            />
                        </div>


                    </div>

                    {/* Right Column - Text */}
                    <div className="space-y-6 lg:pl-10">
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-foreground">
                            What <span className="text-primary">Digital Marketing</span> Can Do for Your Business
                        </h2>

                        <div className="space-y-4 text-muted-foreground leading-relaxed text-[0.95rem]">
                            <p>
                                Whether you are an eCommerce business looking to boost your sales, a tech startup targeting rapid scaling, or even a local service provider seeking to expand reach, digital marketing services have the power to make it happen for you.
                            </p>
                            <p>
                                All you need is a results-driven digital marketing agency that knows exactly what to fine-tune your marketing funnels, relies on tried-and-tested strategies that work, and delivers results without the usual smoke and mirrors.
                            </p>
                            <p>
                                Since 2018, Ubiquitous has partnered with hundreds of businesses across the USA and beyond to optimize targeted audiences, generate qualified leads, and boost brand authority. Market leadership and stronger customer connections? That&apos;s the by-product of what we deliver.
                            </p>
                        </div>

                        <div className="pt-2">
                            <Button
                                variant="outline"
                                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-3 h-auto text-base font-semibold transition-all"
                            >
                                Get Your FREE Marketing Plan
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
