
export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-charish-blue">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply z-10" />
                {/* We will replace this with a real image later if provided, for now using a pattern/gradient */}
                <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center" />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
                    Immigration & Visa <br className="hidden md:block" />
                    <span className="text-charish-gold">Consulting Worldwide</span>
                </h1>

                <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                    We specialize in EB2 NIW, Work Visas, and Visit Visas.
                    Your trusted partner for global opportunities and successful immigration pathways.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-charish-gold text-charish-blue font-bold rounded hover:bg-yellow-400 transition-all uppercase tracking-wide">
                        Free Assessment
                    </button>
                    <button className="px-8 py-4 border-2 border-white text-white font-bold rounded hover:bg-white/10 transition-all uppercase tracking-wide">
                        Explore Services
                    </button>
                </div>
            </div>

            {/* Feature Cards at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 z-30 translate-y-1/2 hidden lg:block">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white p-8 shadow-xl rounded-t-lg border-t-4 border-charish-gold">
                        <span className="text-5xl font-bold text-gray-100 absolute top-4 right-4">01</span>
                        <h3 className="text-xl font-bold text-charish-blue mb-2 relative z-10">EB-1 A</h3>
                        <p className="text-gray-600 text-sm relative z-10">Extraordinary Ability Green Card for those at the top of their field.</p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-charish-blue p-8 shadow-xl rounded-t-lg border-t-4 border-charish-gold">
                        <span className="text-5xl font-bold text-white/5 absolute top-4 right-4">02</span>
                        <h3 className="text-xl font-bold text-white mb-2 relative z-10">EB-2 NIW</h3>
                        <p className="text-gray-300 text-sm relative z-10">National Interest Waiver. No employer needed. Secure your future in the USA.</p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white p-8 shadow-xl rounded-t-lg border-t-4 border-charish-gold">
                        <span className="text-5xl font-bold text-gray-100 absolute top-4 right-4">03</span>
                        <h3 className="text-xl font-bold text-charish-blue mb-2 relative z-10">Express Entry</h3>
                        <p className="text-gray-600 text-sm relative z-10">The fastest way to immigrate to Canada as a skilled worker.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
