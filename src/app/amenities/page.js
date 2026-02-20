import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { hotelInfo } from "@/lib/data";

export default function AmenitiesPage() {
    const detailedAmenities = [
        {
            title: "Business Center",
            subtitle: "Excellence in Work",
            description: "Stay productive with our state-of-the-art business facilities. High-speed internet, private meeting rooms, and professional support ensure your work never skips a beat.",
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200",
            features: ["High-speed Wi-Fi", "Private Meeting Rooms", "Printing & Scanning", "Video Conferencing"]
        },
        {
            title: "Fine Dining",
            subtitle: "Culinary Excellence in Dhaka",
            description: "Experience the best of local and international cuisine at our signature restaurant. Our chefs use the freshest local ingredients to create memorable dining experiences.",
            image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200",
            features: ["Local Specialties", "International Cuisine", "Rooftop Dining", "Corporate Packages"]
        },
        {
            title: "The Rooftop View",
            subtitle: "Dhaka from Above",
            description: "Our rooftop terrace offers breathtaking views of the Dhaka skyline. Relax and enjoy the city's pulse from a serene vantage point.",
            image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&q=80&w=1200",
            features: ["Panoramic Views", "Evening Refreshments", "Quiet Atmosphere", "Private Events"]
        },
        {
            title: "24/7 Security",
            subtitle: "Your Peace of Mind",
            description: "We prioritize your safety and security. Our dedicated security team and modern surveillance systems ensure a safe and worry-free stay.",
            image: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=1200",
            features: ["CCTV Surveillance", "On-site Security", "Secure Parking", "Safe Deposits"]
        }
    ];

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-grow pt-32">
                {/* Header */}
                <section className="px-6 mb-24 text-center">
                    <div className="container mx-auto">
                        <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs">The IEB Experience</span>
                        <h1 className="mt-6 text-4xl md:text-7xl font-serif font-bold tracking-tight text-secondary dark:text-white leading-tight">
                            Curated Amenities
                        </h1>
                        <p className="mt-8 mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
                            At IEB Rest House, we provide more than just a stay; we offer a professional and comfortable environment. Explore our range of facilities designed for your convenience and productivity.
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
