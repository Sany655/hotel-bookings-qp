import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { hotelInfo } from "@/lib/data";

export const metadata = {
    title: "Our Story",
};

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-grow pt-32">
                {/* Hero Section */}
                <section className="px-6 mb-24">
                    <div className="container mx-auto text-center">
                        <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs">Dedicated to Engineering</span>
                        <h1 className="mt-6 text-4xl md:text-7xl font-serif font-bold tracking-tight text-secondary dark:text-white leading-tight">
                            A Hub of Knowledge in the <br /> Heart of Dhaka
                        </h1>
                    </div>
                </section>

                {/* Narrative Section 1 */}
                <section className="px-6 mb-32">
                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1551882547-ff43c33f7839?auto=format&fit=crop&q=80&w=1200"
                                alt="Historic IEB Building"
                                className="rounded-[3rem] shadow-2xl z-10 relative"
                            />
                            <div className="absolute -top-10 -left-10 w-40 h-40 border-l-2 border-t-2 border-primary/30 rounded-tl-[3rem] -z-0"></div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-secondary dark:text-white mb-8">Serving the Nation</h2>
                            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                                <p>
                                    The Institute of Engineers Bangladesh (IEB) is the most prestigious professional organization for engineers in the country. Our Rest House was established to provide a comfortable and professional environment for our members and guests.
                                </p>
                                <p>
                                    From its inception, IEB has been at the forefront of national development. Our facility reflects this commitment to excellence, offering a serene atmosphere amidst the bustling city of Dhaka.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Philosophy Section (Interlude) */}
                <section className="py-32 px-6 bg-secondary text-secondary-foreground text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1920" className="w-full h-full object-cover" />
                    </div>
                    <div className="container mx-auto relative z-10">
                        <span className="text-primary font-bold uppercase tracking-[0.4em] text-sm italic">Our Commitment</span>
                        <blockquote className="mt-12 text-3xl md:text-5xl font-serif leading-tight max-w-4xl mx-auto">
                            "Engineering is about solving problems for humanity. Our hospitality is an extension of that care."
                        </blockquote>
                        <p className="mt-12 text-zinc-400 font-bold uppercase tracking-widest">— IEB Leadership</p>
                    </div>
                </section>

                {/* Architecture & Design Section */}
                <section className="px-6 py-32">
                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl font-serif font-bold text-secondary dark:text-white mb-8">Professional Environment</h2>
                            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                                <p>
                                    Our Rest House is designed to meet the needs of modern professionals. We provide a blend of functional workspaces and comfortable living areas, ensuring a productive and relaxing stay.
                                </p>
                                <p>
                                    We believe in the power of a well-designed environment. From high-speed internet to quiet meeting rooms, every aspect of our facility is tailored to support the professional community.
                                </p>
                            </div>
                            <div className="mt-12 grid grid-cols-2 gap-12 border-t border-border pt-12">
                                <div>
                                    <span className="block text-3xl font-serif font-bold text-primary mb-2">50+</span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Premium Rooms</span>
                                </div>
                                <div>
                                    <span className="block text-3xl font-serif font-bold text-primary mb-2">24/7</span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Professional Support</span>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <img
                                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200"
                                alt="IEB Interior"
                                className="rounded-[3rem] shadow-2xl"
                            />
                        </div>
                    </div>
                </section>

                {/* Commitment to Services */}
                <section className="px-6 pb-32">
                    <div className="container mx-auto text-center max-w-3xl">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary dark:text-white mb-10">Exceptional Service</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-16">
                            At IEB Rest House, we take pride in our hospitality. Our team is dedicated to providing you with a seamless experience, whether you are here for work or relaxation.
                        </p>
                        <Link href="/rooms" className="gold-gradient inline-block px-12 py-5 rounded-2xl text-white font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-xl shadow-primary/20">
                            Book Your Stay
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
