import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { rooms } from "@/lib/data";

export default function RoomsPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-grow pt-32">
                {/* Header */}
                <section className="px-6 mb-20 text-center">
                    <div className="container mx-auto">
                        <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs">Exquisite Living</span>
                        <h1 className="mt-4 text-4xl font-serif font-bold tracking-tight md:text-6xl text-secondary dark:text-white">
                            Accommodations
                        </h1>
                        <p className="mt-6 mx-auto max-w-2xl text-muted-foreground text-lg">
                            From intimate villas to expansive penthouses, each room at Lumière is a masterpiece of design and comfort.
                        </p>
                    </div>
                </section>

                {/* Filter / Sort Placeholder */}
                <section className="px-6 mb-12 border-y border-border py-6 bg-zinc-50/50 dark:bg-zinc-900/50">
                    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex gap-8 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto">
                            <button className="text-sm font-bold uppercase tracking-widest text-primary border-b-2 border-primary pb-1 whitespace-nowrap">All Rooms</button>
                            <button className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-secondary dark:hover:text-white transition-colors whitespace-nowrap">Suites</button>
                            <button className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-secondary dark:hover:text-white transition-colors whitespace-nowrap">Villas</button>
                            <button className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-secondary dark:hover:text-white transition-colors whitespace-nowrap">Penthouses</button>
                        </div>
                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Sort By:</span>
                            <select className="bg-transparent border-none text-sm font-bold uppercase tracking-widest focus:outline-none cursor-pointer">
                                <option>Featured</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                </section>

                {/* Rooms Grid */}
                <section className="px-6 pb-32">
                    <div className="container mx-auto grid grid-cols-1 gap-16 md:grid-cols-2">
                        {rooms.map((room) => (
                            <div key={room.id} className="group relative flex flex-col bg-white dark:bg-zinc-900 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all hover:shadow-primary/5">
                                <div className="aspect-[16/10] overflow-hidden relative">
                                    <img
                                        src={room.image}
                                        alt={room.name}
                                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute top-8 left-8 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-6 py-2 rounded-full shadow-lg">
                                        <span className="text-secondary dark:text-white font-bold text-sm uppercase tracking-widest">${room.price} / night</span>
                                    </div>
                                </div>
                                <div className="p-10 md:p-14 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className="text-3xl font-serif font-bold text-secondary dark:text-white mb-2">{room.name}</h3>
                                            <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                                <span>{room.size}</span>
                                                <span>•</span>
                                                <span>{room.occupancy}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed mb-10 flex-grow">
                                        {room.description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-y-4 mb-10 border-t border-border pt-10">
                                        {room.amenities.slice(0, 4).map(amenity => (
                                            <div key={amenity} className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                                                {amenity}
                                            </div>
                                        ))}
                                    </div>

                                    <Link href={`/rooms/${room.id}`} className="gold-gradient w-full py-5 rounded-2xl text-center text-white font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg shadow-primary/20">
                                        Explore & Book
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
