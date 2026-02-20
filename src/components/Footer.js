import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground py-20 px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="text-3xl font-serif font-bold tracking-tighter text-white mb-6 block">
                        IEB<span className="text-primary text-4xl">.</span>
                    </Link>
                    <p className="text-muted-foreground leading-relaxed max-w-xs">
                        Experience exceptional hospitality and comfort at the Institute of Engineers Bangladesh Rest House.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold uppercase tracking-widest text-primary mb-6">Quick Links</h4>
                    <ul className="space-y-4">
                        <li><Link href="/rooms" className="hover:text-primary transition-colors">Our Rooms</Link></li>
                        <li><Link href="/amenities" className="hover:text-primary transition-colors">Amenities</Link></li>
                        <li><Link href="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold uppercase tracking-widest text-primary mb-6">Contact Us</h4>
                    <ul className="space-y-4 text-muted-foreground">
                        <li>Ramna, Dhaka, Bangladesh</li>
                        <li>contact@ieb.org.bd</li>
                        <li>+880 2 1234567</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold uppercase tracking-widest text-primary mb-6">Newsletter</h4>
                    <p className="text-muted-foreground mb-4">Subscribe to receive our latest updates.</p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-primary transition-colors"
                        />
                        <button className="gold-gradient px-4 py-2 rounded-lg text-white font-bold">Join</button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-20 pt-8 border-t border-white/5 text-center text-muted-foreground text-sm">
                &copy; {new Date().getFullYear()} IEB Rest House. All rights reserved.
            </div>
        </footer>
    );
}
