import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Youtube,
    Send
} from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border/50 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-bold bg-linear-to-r from-primary to-chart-2 bg-clip-text text-transparent inline-block">
                            Marketing Web
                        </Link>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            We are a results-driven digital marketing agency dedicated to scaling your business through innovative strategies and transparent reporting.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="#" className="p-2 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="p-2 rounded-full bg-muted/50 hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                <Twitter className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h4 className="font-bold text-foreground text-lg mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">Careers</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">Our Team</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">Case Studies</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="font-bold text-foreground text-lg mb-6">Services</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">SEO Optimization</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">PPC Management</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">Social Media Marketing</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">Content Strategy</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">Email Automation</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-foreground text-lg">Subscribe</h4>
                        <p className="text-muted-foreground text-sm">
                            Join our newsletter to stay up to date on features and releases.
                        </p>
                        <form className="flex flex-col gap-3">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-muted/30 border-border focus:border-primary/50 transition-colors"
                            />
                            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                Subscribe <Send className="ml-2 w-4 h-4" />
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>
                        &copy; {new Date().getFullYear()} Ubiquitous. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-foreground transition-colors">Cookies Settings</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
