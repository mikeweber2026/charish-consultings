
export default function Footer() {
    return (
        <footer className="bg-charish-blue text-white pt-16 pb-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Column 1: Brand Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-charish-gold rounded flex items-center justify-center">
                                <svg className="h-6 w-6 text-charish-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <span className="font-display font-bold text-xl tracking-wider">
                                CHARISH <span className="text-charish-gold">CONSULTING</span>
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We provide expert immigration and visa consulting services to clients worldwide. Our mission is to make global opportunities accessible to everyone.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons Placeholder */}
                            <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-charish-gold hover:text-charish-blue transition-colors cursor-pointer">F</div>
                            <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-charish-gold hover:text-charish-blue transition-colors cursor-pointer">L</div>
                            <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-charish-gold hover:text-charish-blue transition-colors cursor-pointer">Y</div>
                        </div>
                    </div>

                    {/* Column 2: Important Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 border-l-4 border-charish-gold pl-4">Important Links</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#" className="hover:text-charish-gold transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-charish-gold transition-colors">Testimonials</a></li>
                            <li><a href="#" className="hover:text-charish-gold transition-colors">Services</a></li>
                            <li><a href="#" className="hover:text-charish-gold transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-charish-gold transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 border-l-4 border-charish-gold pl-4">Contact Us</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start">
                                <span className="mr-3 text-charish-gold mt-1">📍</span>
                                <span>1942 Broadway St. STE 314C,<br />Boulder, CO 80302, USA</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3 text-charish-gold">📞</span>
                                <span>+1 (720) 919-4681</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3 text-charish-gold">✉️</span>
                                <span>info@charishconsulting.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Payment / Newsletter */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 border-l-4 border-charish-gold pl-4">Services Payment</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Securely pay for your consultation or visa services online.
                        </p>
                        <div className="bg-white p-4 rounded-lg">
                            {/* Simplified payment mockup */}
                            <div className="text-charish-blue font-bold text-center mb-2">Checkout Details</div>
                            <input type="number" placeholder="Amount (USD)" className="w-full mb-2 p-2 border border-gray-300 rounded text-black" />
                            <button className="w-full bg-yellow-400 text-blue-900 font-bold py-2 rounded hover:bg-yellow-500">Pay Now</button>
                            <div className="flex justify-center gap-2 mt-2">
                                <span className="text-xs text-gray-500">Visa</span>
                                <span className="text-xs text-gray-500">Mastercard</span>
                                <span className="text-xs text-gray-500">PayPal</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Charish Consulting. All Rights Reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Terms & Conditions</a>
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
