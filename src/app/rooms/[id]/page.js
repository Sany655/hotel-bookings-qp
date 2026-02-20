import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { rooms, hotelInfo } from "@/lib/data";
import { notFound } from "next/navigation";

export default function RoomDetailPage({ params }) {
    const { id } = params;
    const room = rooms.find((r) => r.id === id);

    if (!room) {
        return notFound();
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-grow pt-32">
                <div className="container mx-auto px-6">
                    {/* Breadcrumbs / Back */}
                    <Link href="/rooms" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-12">
                        ← Back to All Rooms
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-secondary dark:text-white mb-6">
                                {room.name}
                            </h1>

                            <div className="flex flex-wrap gap-6 mb-12 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <span className="text-primary tracking-normal">Size:</span> <span>{room.size}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-primary tracking-normal">Occupancy:</span> <span>{room.occupancy}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-primary tracking-normal">Views:</span> <span>Panoramic</span>
                                </div>
                            </div>

                            {/* Gallery Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-16 rounded-[2rem] overflow-hidden h-[500px] md:h-[700px]">
                                <div className="col-span-2 md:col-span-1 h-full">
                                    <img src={room.gallery[0]} alt={room.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="col-span-2 md:col-span-1 grid grid-rows-2 gap-4 h-full">
                                    <div className="h-full overflow-hidden">
                                        <img src={room.gallery[1] || room.image} alt={room.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="h-full overflow-hidden relative">
                                        <img src={room.gallery[2] || room.image} alt={room.name} className="w-full h-full object-cover" />
                                        {room.gallery.length > 3 && (
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                                <span className="text-white font-bold text-xl">+{room.gallery.length - 3} Photos</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="mb-16">
                                <h3 className="text-2xl font-serif font-bold text-secondary dark:text-white mb-6 border-b border-border pb-4">
                                    The Experience
                                </h3>
                                <p className="text-muted-foreground text-lg leading-[1.8] mb-10 max-w-3xl">
                                    {room.description}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-50 dark:bg-zinc-900/50 p-10 rounded-3xl">
                                    <div>
                                        <h4 className="font-bold uppercase tracking-widest text-primary text-xs mb-6">Luxury Amenities</h4>
                                        <ul className="grid grid-cols-1 gap-4">
                                            {room.amenities.map(item => (
                                                <li key={item} className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase tracking-widest text-primary text-xs mb-6">Guest Services</h4>
                                        <ul className="grid grid-cols-1 gap-4">
                                            <li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                                                In-room check-in
                                            </li>
                                            <li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                                                Twice-daily housekeeping
                                            </li>
                                            <li className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                                                24-hour room service
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sticky Booking Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-40 bg-white dark:bg-zinc-900 border border-border shadow-2xl rounded-[2.5rem] p-10">
                                <div className="flex items-end gap-2 mb-10">
                                    <span className="text-4xl font-serif font-bold text-secondary dark:text-white">${room.price}</span>
                                    <span className="text-muted-foreground text-sm font-medium mb-1">/ night</span>
                                </div>

                                <div className="space-y-6 mb-10">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Stay Dates</label>
                                        <div className="flex border border-border rounded-xl overflow-hidden divide-x divide-border">
                                            <input type="text" placeholder="Arrival" className="w-1/2 p-4 text-sm focus:outline-none focus:bg-zinc-50 dark:focus:bg-zinc-800 transition-colors bg-white dark:bg-zinc-900" />
                                            <input type="text" placeholder="Departure" className="w-1/2 p-4 text-sm focus:outline-none focus:bg-zinc-50 dark:focus:bg-zinc-800 transition-colors bg-white dark:bg-zinc-900" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Guests</label>
                                        <select className="w-full p-4 border border-border rounded-xl text-sm focus:outline-none focus:bg-zinc-50 dark:focus:bg-zinc-800 transition-colors bg-white dark:bg-zinc-900 appearance-none">
                                            <option>2 Adults, 0 Children</option>
                                            <option>1 Adult, 0 Children</option>
                                            <option>3 Adults, 0 Children</option>
                                        </select>
                                    </div>
                                </div>

                                <Link href="/rooms/success" className="gold-gradient flex items-center justify-center w-full py-5 rounded-2xl text-white font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-xl shadow-primary/20 mb-6">
                                    Reserve Securely
                                </Link>
                                <p className="text-center text-xs text-muted-foreground">
                                    No charges will be made yet. <br /> Free cancellation until 48h before arrival.
                                </p>

                                <div className="mt-10 pt-10 border-t border-border space-y-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Price per night</span>
                                        <span className="font-bold">${room.price}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Stay Duration</span>
                                        <span className="font-bold">1 Night</span>
                                    </div>
                                    <div className="flex justify-between text-lg pt-4 border-t border-border">
                                        <span className="font-bold text-secondary dark:text-white">Total</span>
                                        <span className="font-serif font-bold text-secondary dark:text-white">${room.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
