
export default function AboutSection() {
    return (
        <section className="py-20 bg-white" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Image Side */}
                    <div className="relative w-full lg:w-1/2 h-[500px]">
                        {/* Using a placeholder image similar to the professional team photo */}
                        <div className="absolute inset-0 bg-slate-200 rounded-lg overflow-hidden shadow-2xl transform -rotate-2">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop')] bg-cover bg-center" />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-charish-gold rounded-lg p-6 flex flex-col justify-center items-center text-center shadow-lg transform rotate-3">
                            <span className="text-4xl font-bold text-charish-blue">20+</span>
                            <span className="text-sm font-bold text-charish-blue uppercase">Years of Experience</span>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-1/2">
                        <h4 className="text-charish-gold font-bold uppercase tracking-wider mb-2">Who We Are</h4>
                        <h2 className="text-3xl md:text-5xl font-bold text-charish-blue mb-6 leading-tight">
                            Immigration Services From Experienced Professionals
                        </h2>
                        <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                            We are a dedicated team of immigration consultants committed to helping individuals and businesses navigate the complex world of visas and global mobility.
                        </p>
                        <p className="text-slate-600 mb-8">
                            Whether you are looking for an EB-2 NIW, a work visa, or expanding your business to the US, our expert guidance ensures your journey is smooth and successful. We pride ourselves on a high success rate and personalized attention to every case.
                        </p>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-charish-blue font-medium">
                                <span className="h-6 w-6 rounded-full bg-charish-gold/20 flex items-center justify-center text-charish-gold mr-3">✓</span>
                                Certified Legal Experts
                            </li>
                            <li className="flex items-center text-charish-blue font-medium">
                                <span className="h-6 w-6 rounded-full bg-charish-gold/20 flex items-center justify-center text-charish-gold mr-3">✓</span>
                                98% Visa Success Rate
                            </li>
                            <li className="flex items-center text-charish-blue font-medium">
                                <span className="h-6 w-6 rounded-full bg-charish-gold/20 flex items-center justify-center text-charish-gold mr-3">✓</span>
                                Global Network Support
                            </li>
                        </ul>

                        <button className="px-8 py-4 bg-charish-blue text-white font-bold rounded hover:bg-blue-900 transition-all uppercase tracking-wide">
                            Read More About Us
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
