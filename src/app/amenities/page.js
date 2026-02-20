import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { hotelInfo } from "@/lib/data";

export default function AmenitiesPage() {
    const detailedAmenities = [
        {
            title: "Spa & Wellness",
            subtitle: "A Sanctuary of Stillness",
            description: "Rejuvenate your body and soul in our state-of-the-art spa. From ancient healing rituals to modern aesthetic treatments, our expert therapists provide a personalized path to wellness.",
            image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1200",
            features: ["Traditional Hammam", "Heated Therapy Pool", "Organic Essential Oils", "Signature Massages"]
        },
        {
            title: "Michelin-Starred Dining",
            subtitle: "Culinary Art on the Seine",
            description: "Experience the pinnacle of French gastronomy at 'L'Éclat', our signature three-Michelin-star restaurant. Our chefs blend local seasonal ingredients with avant-garde techniques.",
            image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200",
            features: ["Private Wine Cellar", "Chef's Table Experience", "Rooftop Terrace", "Artisanal Pastries"]
        },
        {
            title: "The Celestial Pool",
            subtitle: "Swim Above the City",
            description: "Our rooftop infinity pool offers breathtaking 360-degree views of the Parisian skyline. Relax on suede cabanas and enjoy curated cocktails as the sun sets over the Eiffel Tower.",
            image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&q=80&w=1200",
            features: ["Infinity Edge", "Climate Controlled", "Sunset Cocktails", "Private Cabanas"]
        },
        {
            title: "24/7 Butler Service",
            subtitle: "Anticipatory Hospitality",
            description: "Our elite butler team is dedicated to perfecting every detail of your stay. From bespoke wardrobe management to exclusive city arrangements, no request is too large or too small.",
            image: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=1200",
            features: ["Packing & Unpacking", "Shoe Shine Library", "Bath Ritual Concierge", "Private Dining Setup"]
        }
    ];

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-grow pt-32">
                {/* Header */}
                <section className="px-6 mb-24 text-center">
                    <div className="container mx-auto">
                        <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs">The Lumière Life</span>
                        <h1 className="mt-6 text-4xl md:text-7xl font-serif font-bold tracking-tight text-secondary dark:text-white leading-tight">
                            Curated Experiences
                        </h1>
                        <p className="mt-8 mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
                            At Lumière, we don't just provide amenities; we offer a lifestyle of effortless luxury. Explore our collection of world-class facilities designed to delight and inspire.
                        </p>
                    </div>
                </section>

                {/* Detailed Amenities List */}
                <section className="px-6 pb-32">
                    <div className="container mx-auto space-y-40">
                        {detailedAmenities.map((amenity, index) => (
                            <div key={amenity.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                    <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm italic">{amenity.subtitle}</span>
                                    <h2 className="mt-6 mb-8 text-3xl md:text-5xl font-serif font-bold text-secondary dark:text-white leading-tight">
                                        {amenity.title}
                                    </h2>
                                    <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                                        {amenity.description}
                                    </p>
                                    <ul className="grid grid-cols-2 gap-6 mb-12">
                                        {amenity.features.map(feature => (
                                            <li key={feature} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-secondary dark:text-white">
                                                <span className="w-2 h-2 rounded-full bg-primary ring-4 ring-primary/20"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className="text-secondary dark:text-white font-bold uppercase tracking-[0.2em] border-b-2 border-primary pb-2 hover:opacity-70 transition-opacity">
                                        Book an Experience
                                    </button>
                                </div>
                                <div className={`${index % 2 !== 0 ? 'lg:order-1' : ''} relative`}>
                                    <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                                        <img src={amenity.image} alt={amenity.title} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
                                    </div>
                                    <div className={`absolute -bottom-10 -${index % 2 === 0 ? 'right' : 'left'}-10 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10`}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Closing CTA */}
                <section className="py-32 px-6 bg-zinc-50 dark:bg-zinc-950 text-center">
                    <div className="container mx-auto max-w-4xl">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary dark:text-white mb-8">Beyond the Expected</h2>
                        <p className="text-muted-foreground text-lg mb-12">
                            Have a specific request? Our Golden Key concierges are available 24/7 to arrange private tours, exclusive bookings, or bespoke events.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact" className="gold-gradient px-12 py-5 rounded-2xl text-white font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-xl shadow-primary/20">
                                Speak with Concierge
                            </Link>
                            <Link href="/rooms" className="px-12 py-5 rounded-2xl border border-secondary dark:border-white text-secondary dark:text-white font-bold uppercase tracking-widest hover:bg-secondary hover:text-white dark:hover:bg-white dark:hover:text-secondary transition-all">
                                Book Your Stay
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
