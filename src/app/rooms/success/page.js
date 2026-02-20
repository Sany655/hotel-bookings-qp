import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BookingSuccessPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-grow pt-40 pb-32 text-center px-6">
                <div className="container mx-auto max-w-2xl">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-10 text-primary animate-bounce">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs">Request Received</span>
                    <h1 className="mt-6 text-4xl md:text-6xl font-serif font-bold tracking-tight text-secondary dark:text-white leading-tight">
                        See You in Paris
                    </h1>
                    <p className="mt-8 text-muted-foreground text-lg leading-relaxed">
                        Your reservation request for Lumière Hotel & Spa has been received. Our concierge team will review the details and contact you within the hour to finalize your stay.
                    </p>

                    <div className="mt-16 p-8 border border-border rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 text-left">
                        <h3 className="font-bold uppercase tracking-widest text-primary text-xs mb-6 underline underline-offset-8 decoration-primary/30">Next Steps</h3>
                        <ul className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
                            <li className="flex gap-3">
                                <span className="font-bold text-secondary dark:text-white">01.</span>
                                Check your inbox for a preliminary confirmation email.
                            </li>
                            <li className="flex gap-3">
                                <span className="font-bold text-secondary dark:text-white">02.</span>
                                Our concierge will call to confirm any special requirements.
                            </li>
                            <li className="flex gap-3">
                                <span className="font-bold text-secondary dark:text-white">03.</span>
                                Start dreaming of the City of Light.
                            </li>
                        </ul>
                    </div>

                    <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/" className="px-12 py-5 rounded-2xl border border-secondary dark:border-white text-secondary dark:text-white font-bold uppercase tracking-widest hover:bg-secondary hover:text-white dark:hover:bg-white dark:hover:text-secondary transition-all">
                            Return Home
                        </Link>
                        <Link href="/rooms" className="gold-gradient px-12 py-5 rounded-2xl text-white font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-xl shadow-primary/20">
                            View Other Rooms
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
