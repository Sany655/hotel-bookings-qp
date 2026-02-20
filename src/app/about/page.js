import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { hotelInfo } from "@/lib/data";

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-grow pt-32">
                {/* Hero Section */}
                <section className="px-6 mb-24">
                    <div className="container mx-auto text-center">
                        <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs">Since 1924</span>
                        <h1 className="mt-6 text-4xl md:text-7xl font-serif font-bold tracking-tight text-secondary dark:text-white leading-tight">
                            A Living Legacy in the <br /> Heart of Paris
                        </h1>
                    </div>
                </section>

                {/* Narrative Section 1 */}
                <section className="px-6 mb-32">
                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1551882547-ff43c33f7839?auto=format&fit=crop&q=80&w=1200"
                                alt="Historic Lumière Exterior"
                                className="rounded-[3rem] shadow-2xl z-10 relative"
                            />
                            <div className="absolute -top-10 -left-10 w-40 h-40 border-l-2 border-t-2 border-primary/30 rounded-tl-[3rem] -z-0"></div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-secondary dark:text-white mb-8">The Birth of an Icon</h2>
                            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                                <p>
                                    It began in the roaring twenties, a golden era where Paris was the epicentre of world culture. Lumière was conceived not merely as a hotel, but as a sanctuary for the avant-garde. Our doors first opened in 1924, welcoming the poets, painters, and pioneers who shaped the twentieth century.
                                </p>
                                <p>
                                    From the grand marble staircases to the delicate gold leaf detailing that adorns our ceilings, every corner of Lumière tells a story of elegance refined over generations. We have preserved the soul of the Belle Époque while embracing the pulse of the modern world.
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
                        <span className="text-primary font-bold uppercase tracking-[0.4em] text-sm italic">Our Philosophy</span>
                        <blockquote className="mt-12 text-3xl md:text-5xl font-serif leading-tight max-w-4xl mx-auto">
                            "Luxury is not about the visible, but the invisible. It is the feeling of being understood before a word is even spoken."
                        </blockquote>
                        <p className="mt-12 text-zinc-400 font-bold uppercase tracking-widest">— Henri Lumière, Founder</p>
                    </div>
                </section>

                {/* Architecture & Design Section */}
                <section className="px-6 py-32">
                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl font-serif font-bold text-secondary dark:text-white mb-8">Architecture & Design</h2>
                            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                                <p>
                                    Our design philosophy is "Contemporary Heritage"—a seamless fusion of historical grandeur and minimalist modernity. Our recent multimillion-euro restoration, led by world-renowned architects, has breathed new life into our historic corridors.
                                </p>
                                <p>
                                    We believe in the power of natural materials. Solid oak, Carrara marble, and hand-woven silks create a tactile experience that grounds you in comfort while elevating your senses. Every room is a curated gallery of bespoke furniture and local artistry.
                                </p>
                            </div>
                            <div className="mt-12 grid grid-cols-2 gap-12 border-t border-border pt-12">
                                <div>
                                    <span className="block text-3xl font-serif font-bold text-primary mb-2">156</span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Original Suites</span>
                                </div>
                                <div>
                                    <span className="block text-3xl font-serif font-bold text-primary mb-2">3</span>
                                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Michelin Stars</span>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 relative">
                            <img
                                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200"
                                alt="Architecture details"
                                className="rounded-[3rem] shadow-2xl"
                            />
                        </div>
                    </div>
                </section>

                {/* Commitment to Services */}
                <section className="px-6 pb-32">
                    <div className="container mx-auto text-center max-w-3xl">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary dark:text-white mb-10">Unwavering Hospitality</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-16">
                            At Lumière, service is an art form. From our dedicated concierges to our private butlers, every member of our team is a guardian of your comfort. We don’t just host guests; we curate memories that last a lifetime.
                        </p>
                        <Link href="/rooms" className="gold-gradient inline-block px-12 py-5 rounded-2xl text-white font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-xl shadow-primary/20">
                            Experience the Magic
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
