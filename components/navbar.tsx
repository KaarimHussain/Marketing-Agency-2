"use client"
import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Briefcase, Users, Star, TrendingUp, Zap, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

const services = [
    {
        title: "TikTok",
        href: "/services/tiktok",
        description: "Grow your brand presence on TikTok with strategic content and viral campaigns.",
        icon: "/svgs/Tiktok.svg"
    },
    {
        title: "Instagram",
        href: "/services/instagram",
        description: "Engage your audience with visually stunning Instagram stories, posts, and reels.",
        icon: "/svgs/Instgram.svg"
    },
    {
        title: "YouTube",
        href: "/services/youtube",
        description: "Create long-form content that builds authority, community, and lasting impact.",
        icon: "/svgs/Youtube.svg"
    },
    {
        title: "LinkedIn",
        href: "/services/linkedin",
        description: "Build your professional brand and connect with industry leaders on LinkedIn.",
        icon: "/svgs/LinkedIn.svg"
    },
    {
        title: "Twitter",
        href: "/services/twitter",
        description: "Build your professional brand and connect with industry leaders on Twitter.",
        icon: "/svgs/Twitter.svg"
    },
]

const howItWorks = [
    {
        title: "For Brands",
        href: "/how-it-works/brands",
        description: "Discover how we help brands scale through influencer marketing strategies.",
        icon: TrendingUp,
        image: "/image/Brands-Building.jpg"
    },
    {
        title: "For Creators",
        href: "/how-it-works/creators",
        description: "Learn how we empower creators to monetize their content effectively.",
        icon: Zap,
        image: "/image/Creator-Person.jpg"
    },
]

const results = [
    {
        title: "Case Studies",
        href: "/results/case-studies",
        description: "See real-world examples of our successful campaigns and ROI.",
        icon: Briefcase
    },
    {
        title: "Clients",
        href: "/results/clients",
        description: "Explore the diverse range of world-class brands we've partnered with.",
        icon: Users
    },
    {
        title: "Testimonials",
        href: "/results/testimonials",
        description: "Read what our clients and creators have to say about working with us.",
        icon: Star
    },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold bg-linear-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                    Marketing Web
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-base">Services</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="w-screen flex justify-center bg-background border-b border-border/50 shadow-lg">
                                        <div className="flex w-full max-w-6xl gap-12 p-12">
                                            {/* Left Side: Features */}
                                            <div className="flex-1">
                                                <div className="mb-6 text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                                                    Platform Services
                                                </div>
                                                <ul className="grid grid-cols-2 gap-x-12 gap-y-8">
                                                    {services.map((component) => (
                                                        <CardLink
                                                            key={component.title}
                                                            title={component.title}
                                                            href={component.href}
                                                            icon={component.icon}
                                                        >
                                                            {component.description}
                                                        </CardLink>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Right Side: Explore */}
                                            <div className="w-64 shrink-0 border-l pl-12 border-border/50">
                                                <div className="mb-6 text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                                                    Explore
                                                </div>
                                                <ul className="space-y-4">
                                                    <li>
                                                        <Link href="/pricing" className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                                                            Pricing & Plans
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/about" className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                                                            About Us
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog" className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                                                            Latest Insights
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-base">How it works</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="w-screen flex justify-center bg-background border-b border-border/50 shadow-lg">
                                        <ul className="grid grid-cols-2 gap-4 p-8 w-full max-w-3xl">
                                            {howItWorks.map((item) => (
                                                <li key={item.title}>
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            href={item.href}
                                                            className="group relative flex h-[500px] w-full select-none flex-col justify-end overflow-hidden rounded-2xl no-underline outline-none focus:shadow-md"
                                                        >
                                                            <Image
                                                                src={item.image}
                                                                alt={item.title}
                                                                fill
                                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                            />
                                                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                                                            <div className="relative z-10 p-5 space-y-2">
                                                                <div className="flex items-center gap-2 text-white">
                                                                    <item.icon className="h-10 w-10 text-white" />
                                                                    <h3 className="text-2xl font-bold">{item.title}</h3>
                                                                </div>
                                                                <p className="text-sm text-gray-200 leading-relaxed max-w-[90%]">
                                                                    {item.description}
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-base">Results</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="w-screen flex justify-center bg-background border-b border-border/50 shadow-lg">
                                        <div className="flex w-full max-w-6xl gap-12 p-12">
                                            <div className="flex-1">
                                                <div className="mb-6 text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                                                    Success Stories
                                                </div>
                                                <ul className="grid grid-cols-2 gap-x-12 gap-y-8">
                                                    {results.map((component) => (
                                                        <CardLink
                                                            key={component.title}
                                                            title={component.title}
                                                            href={component.href}
                                                            icon={component.icon}
                                                        >
                                                            {component.description}
                                                        </CardLink>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="w-64 shrink-0 border-l pl-12 border-border/50">
                                                <div className="mb-6 text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                                                    Company
                                                </div>
                                                <ul className="space-y-4">
                                                    <li>
                                                        <Link href="/careers" className="block text-sm font-medium text-foreground/80 hover:text-pink-600 transition-colors">
                                                            Careers
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/contact" className="block text-sm font-medium text-foreground/80 hover:text-pink-600 transition-colors">
                                                            Contact Us
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
                        Get Started
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 top-[73px] z-40 bg-background flex flex-col p-6 md:hidden overflow-y-auto h-[calc(100vh-73px)]">
                    <div className="space-y-6">
                        <MobileSection title="Services" items={services} />
                        <MobileSection title="How it works" items={howItWorks} />
                        <MobileSection title="Results" items={results} />
                        <div className="pt-6">
                            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 text-lg">
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

const CardLink = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { icon: React.ElementType | string }
>(({ className, title, children, icon: IconOrPath, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "group block select-none rounded-lg leading-none no-underline outline-none transition-colors hover:bg-muted/50 p-2 -m-2",
                        className
                    )}
                    {...props}
                >
                    <div className="flex gap-4 items-center">
                        <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/30 group-hover:text-primary-foreground transition-colors duration-300">
                            {typeof IconOrPath === "string" ? (
                                <Image
                                    src={IconOrPath}
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="object-contain"
                                />
                            ) : (
                                <IconOrPath size={20} />
                            )}
                        </div>
                        <div className="space-y-1">
                            <div className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                                {title}
                            </div>
                            <p className="text-sm leading-snug text-muted-foreground line-clamp-2">
                                {children}
                            </p>
                        </div>
                    </div>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
CardLink.displayName = "CardLink"

function MobileSection({ title, items }: { title: string; items: { title: string; href: string; description: string; icon?: any }[] }) {
    return (
        <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground/80">{title}</h3>
            <div className="pl-4 space-y-2 border-l-2 border-border/50">
                {items.map((item) => (
                    <Link
                        key={item.title}
                        href={item.href}
                        className="block py-3 text-foreground hover:text-primary transition-colors"
                    >
                        <div className="flex items-center gap-2">
                            {item.icon && (
                                typeof item.icon === "string" ? (
                                    <Image src={item.icon} alt="" width={16} height={16} className="text-muted-foreground" />
                                ) : (
                                    <item.icon size={16} className="text-muted-foreground" />
                                )
                            )}
                            <div className="font-medium text-base">{item.title}</div>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1 pl-6">{item.description}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}