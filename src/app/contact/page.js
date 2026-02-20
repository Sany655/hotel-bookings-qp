import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { hotelInfo } from "@/lib/data";

export const metadata = {
    title: "Contact Us",
};

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-grow pt-32">
                {/* Header */}
                <section className="px-6 mb-24 text-center">
                    <div className="container mx-auto">
                        <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs">At Your Service</span>
                        <h1 className="mt-6 text-4xl md:text-7xl font-serif font-bold tracking-tight text-secondary dark:text-white leading-tight">
                            Get in Touch
                        </h1>
                        <p className="mt-8 mx-auto max-w-2xl text-muted-foreground text-lg">
                            Whether you're planning a stay, a special event, or have a specific inquiry for our concierge, we are here to assist with impeccable care.
                        </p>
                    </div>
                </section>

                <section className="px-6 pb-32">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            {/* Contact Form */}
                            <div className="bg-white dark:bg-zinc-900 border border-border rounded-[2.5rem] p-10 md:p-16 shadow-2xl">
                                <h2 className="text-3xl font-serif font-bold text-secondary dark:text-white mb-10">Send an Inquiry</h2>
                                <form className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
                                            <input type="text" className="bg-transparent border-b border-border py-4 focus:outline-none focus:border-primary transition-colors" placeholder="Jean Dupont" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email Address</label>
                                            <input type="email" className="bg-transparent border-b border-border py-4 focus:outline-none focus:border-primary transition-colors" placeholder="jean@example.com" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                                        <select className="bg-transparent border-b border-border py-4 focus:outline-none focus:border-primary transition-colors appearance-none">
                                            <option>General Inquiry</option>
                                            <option>Reservation Support</option>
                                            <option>Concierge Services</option>
                                            <option>Private Events</option>
                                            <option>Press & Media</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                                        <textarea rows="4" className="bg-transparent border-b border-border py-4 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us how we can assist you..."></textarea>
                                    </div>
                                    <button className="gold-gradient w-full py-5 rounded-2xl text-white font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-xl shadow-primary/20">
                                        Submit Inquiry
                                    </button>
                                </form>
                            </div>

                            {/* Contact Information & Map Placeholder */}
                            <div className="flex flex-col justify-between">
                                <div className="space-y-16">
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Location</h3>
                                        <p className="text-2xl font-serif font-bold text-secondary dark:text-white leading-snug">
                                            {hotelInfo.location}
                                        </p>
                                        <Link href="https://maps.google.com" target="_blank" className="mt-4 inline-block text-sm font-bold uppercase tracking-widest text-primary border-b border-primary/30 hover:border-primary transition-all">
                                            Get Directions
                                        </Link>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div>
                                            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Concierge</h3>
                                            <p className="text-lg font-medium text-secondary dark:text-white">+880 2 1234567</p>
                                            <p className="text-muted-foreground">concierge@ieb.org.bd</p>
                                        </div>
                                        <div>
                                            <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">Reservations</h3>
                                            <p className="text-lg font-medium text-secondary dark:text-white">+880 2 9876543</p>
                                            <p className="text-muted-foreground">book@ieb.org.bd</p>
                                        </div>
                                    </div>

                                    {/* Map Placeholder */}
                                    <div className="aspect-video w-full rounded-[2.5rem] overflow-hidden grayscale relative group">
                                        <img
                                            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1200"
                                            alt="Dhaka Map"
                                            className="w-full h-full object-cover border-none"
                                        />
                                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-8 py-4 rounded-2xl shadow-2xl">
                                                <span className="text-sm font-bold uppercase tracking-widest text-secondary dark:text-white">Visit IEB</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Global Destinations Section (Optional/Footer Teaser) */}
                <section className="py-24 px-6 border-t border-border">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                        <div>
                            <h4 className="font-bold uppercase tracking-widest text-secondary dark:text-white mb-4">Awards</h4>
                            <p className="text-muted-foreground text-sm">Best Professional Rest House 2024<br />Excellence in Hospitality</p>
                        </div>
                        <div>
                            <h4 className="font-bold uppercase tracking-widest text-secondary dark:text-white mb-4">Community</h4>
                            <p className="text-muted-foreground text-sm italic">"The home for engineers in Dhaka." — IEB Monthly</p>
                        </div>
                        <div>
                            <h4 className="font-bold uppercase tracking-widest text-secondary dark:text-white mb-4">Careers</h4>
                            <p className="text-muted-foreground text-sm">Join our dedicated team.<br />careers@ieb.org.bd</p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
