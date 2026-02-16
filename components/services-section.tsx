import {
    Search,
    MousePointerClick,
    CircleDollarSign,
    Palette,
    RefreshCw,
    PenTool,
    Mail,
    ShoppingBag,
    FlaskConical,
    ArrowRight
} from "lucide-react"
import Link from "next/link"

const services = [
    {
        title: "SEO Services",
        description: "Enhance your website's visibility with technical SEO audits and SERP performance optimization strategies. We ensure high rankings through data-driven analysis.",
        icon: Search,
    },
    {
        title: "SEM Services",
        description: "Drive targeted traffic with precision search engine marketing. Our PPC campaigns focus on optimal keyword bidding and ad copy testing.",
        icon: MousePointerClick,
    },
    {
        title: "PPC Services",
        description: "Maximize your brand's reach with strategic social media marketing. We craft tailored content to engage your audience and optimize campaigns.",
        icon: CircleDollarSign,
    },
    {
        title: "Web Design & Dev",
        description: "Transform your digital presence with creative web design. We focus on responsive designs, streamlined navigation, and high-speed performance.",
        icon: Palette,
    },
    {
        title: "CRO Services",
        description: "Convert more visitors into customers with advanced CRO techniques. We use A/B testing and heatmap analysis to improve usability.",
        icon: RefreshCw,
    },
    {
        title: "Content Marketing",
        description: "Engage and inform your audience with high-quality content marketing. Our services include content creation, distribution, and performance tracking.",
        icon: PenTool,
    },
    {
        title: "Email Marketing",
        description: "Boost your communication strategy with targeted email marketing. We design personalized campaigns to segment your audience and track metrics.",
        icon: Mail,
    },
    {
        title: "eCommerce Marketing",
        description: "Take your online sales to the next level with specialized solutions. Combining SEO, PPC, and retargeting to attract the right shoppers.",
        icon: ShoppingBag,
    },
    {
        title: "A/B Testing",
        description: "Make every marketing decision count. We test variations of pages, emails, or ads to see what resonates best with your audience.",
        icon: FlaskConical,
    },
]

export default function ServicesSection() {
    return (
        <section className="py-24 bg-muted/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                        Our <span className="text-primary">Premium Services</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        We provide comprehensive digital solutions designed to scale your business and generate measurable results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative bg-background rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-border/50 overflow-hidden
                            ${index % 2 === 0 ? 'hover:border-primary/30' : 'hover:border-secondary/30'}`}
                        >
                            {/* Hover Gradient Border Effect */}
                            <div className={`absolute inset-0 bg-linear-to-br from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                ${index % 2 === 0 ? 'from-primary/10' : 'from-secondary/10'}`} />

                            <div className="relative z-10 space-y-6">
                                <div className={`h-14 w-14 rounded-2xl flex items-center justify-center transition-colors duration-300
                                    ${index % 2 === 0
                                        ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground'
                                        : 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground'}`}>
                                    <service.icon className="h-7 w-7" />
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-foreground">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="pt-2">
                                    <Link
                                        href="/services"
                                        className={`inline-flex items-center text-sm font-semibold transition-colors group/link
                                            ${index % 2 === 0 ? 'text-primary hover:text-primary/80' : 'text-secondary hover:text-secondary/80'}`}
                                    >
                                        Learn more
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
