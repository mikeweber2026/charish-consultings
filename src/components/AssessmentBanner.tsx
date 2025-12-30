
export default function AssessmentBanner() {
    return (
        <section className="relative py-24 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2622&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-charish-blue/90" /> {/* Dark Overlay */}

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    WANT TO KNOW YOUR ELIGIBILITY?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                    Take our free online assessment today to see which immigration path is right for you. It only takes a few minutes!
                </p>

                <button className="px-10 py-5 bg-charish-gold text-charish-blue text-lg font-bold rounded hover:bg-white hover:text-charish-blue transition-all uppercase tracking-wide shadow-[0_0_20px_rgba(241,180,76,0.5)]">
                    Free Online Assessment
                </button>
            </div>
        </section>
    );
}
