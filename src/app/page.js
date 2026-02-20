import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { hotelInfo, rooms } from "@/lib/data";

export default function Home() {
  const featuredRooms = rooms.slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920"
              alt={hotelInfo.name}
              className="h-full w-full object-cover brightness-50"
            />
          </div>

          <div className="container relative z-10 px-6 text-center text-white">
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.4em] text-primary">Paris, France</span>
            <h1 className="mb-6 text-5xl font-serif font-bold tracking-tight md:text-7xl">
              {hotelInfo.name}
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-200">
              {hotelInfo.description}
            </p>

            {/* Search Bar Widget */}
            <div className="mx-auto max-w-4xl glass rounded-2xl p-4 shadow-2xl backdrop-blur-xl md:p-6 lg:p-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-4 items-end">
                <div className="text-left">
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-zinc-300">Room Type</label>
                  <select className="w-full bg-white/10 border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer p-4">
                    <option className="bg-zinc-900">Any Room</option>
                    {rooms.map(room => (
                      <option key={room.id} className="bg-zinc-900" value={room.id}>{room.name}</option>
                    ))}
                  </select>
                </div>
                <div className="text-left">
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-zinc-300">Check-In</label>
                  <input type="date" className="w-full bg-white/10 border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors [color-scheme:dark] p-4" />
                </div>
                <div className="text-left">
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-zinc-300">Check-Out</label>
                  <input type="date" className="w-full bg-white/10 border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors [color-scheme:dark] p-4" />
                </div>
                <div>
                  <Link href="/rooms" className="gold-gradient flex items-center justify-center p-4 rounded-xl text-white font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                    Check Availability
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story / About Section */}
        <section className="py-32 px-6">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200"
                alt="Lumière Lobby"
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-0"></div>
            </div>
            <div>
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm italic">Legacy of Excellence</span>
              <h2 className="mt-6 mb-8 text-4xl font-serif font-bold tracking-tight md:text-5xl text-secondary dark:text-white leading-tight">
                A Beacon of Luxury <br /> Since 1924
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Nestled on the historic Avenue Montaigne, Lumière has been the preferred residence of artists, dreamers, and global icons for over a century. Our architectural heritage seamlessly blends with avant-garde comfort, promising an experience that is as timeless as the City of Light itself.
              </p>
              <Link href="/about" className="inline-block px-10 py-4 border border-secondary dark:border-white text-secondary dark:text-white font-bold uppercase tracking-widest hover:bg-secondary hover:text-white dark:hover:bg-white dark:hover:text-secondary transition-all rounded-full">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Rooms */}
        <section className="py-32 px-6 bg-zinc-50 dark:bg-zinc-950">
          <div className="container mx-auto">
            <div className="mb-20 text-center">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Accommodations</span>
              <h2 className="mt-4 text-4xl font-serif font-bold tracking-tight md:text-5xl text-secondary dark:text-white">
                Refined Suites & Villas
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {featuredRooms.map((room) => (
                <div key={room.id} className="group relative overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 shadow-xl transition-all hover:-translate-y-2">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                      <p className="text-white text-sm italic">{room.description.substring(0, 100)}...</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-serif font-bold text-secondary dark:text-white">{room.name}</h3>
                      <span className="text-primary font-bold text-lg">${room.price}</span>
                    </div>
                    <div className="flex gap-4 mb-8 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      <span>{room.size}</span>
                      <span>•</span>
                      <span>{room.occupancy}</span>
                    </div>
                    <Link href={`/rooms/${room.id}`} className="block w-full text-center py-4 rounded-xl border border-primary/20 text-primary font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <Link href="/rooms" className="text-secondary dark:text-white font-bold uppercase tracking-[0.2em] border-b-2 border-primary pb-2 hover:opacity-70 transition-opacity">
                Explore All Rooms
              </Link>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-32 px-6 bg-secondary text-secondary-foreground text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
          <div className="container mx-auto relative z-10">
            <h2 className="mb-20 text-4xl font-serif font-bold tracking-tight md:text-5xl">Curated Experiences</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {hotelInfo.amenities.map((item) => (
                <div key={item.name} className="flex flex-col items-center group">
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white/5 border border-white/10 mb-8 transition-transform group-hover:scale-110 group-hover:bg-primary/20">
                    <span className="text-5xl">{item.icon}</span>
                  </div>
                  <span className="font-bold uppercase tracking-widest text-primary text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
