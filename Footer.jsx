import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Shop */}
                    <div className="space-y-6">
                        <h4 className="text-secondary tracking-widest uppercase text-sm font-semibold">Shop</h4>
                        <ul className="space-y-4 text-gray-400 text-sm font-light tracking-wide">
                            <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Bikinis</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">One-Pieces</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Resort Wear</a></li>
                        </ul>
                    </div>

                    {/* About */}
                    <div className="space-y-6">
                        <h4 className="text-secondary tracking-widest uppercase text-sm font-semibold">Angrawear</h4>
                        <ul className="space-y-4 text-gray-400 text-sm font-light tracking-wide">
                            <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Fabrics</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="space-y-6">
                        <h4 className="text-secondary tracking-widest uppercase text-sm font-semibold">Support</h4>
                        <ul className="space-y-4 text-gray-400 text-sm font-light tracking-wide">
                            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Care Instructions</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h4 className="text-secondary tracking-widest uppercase text-sm font-semibold">Join the Club</h4>
                        <p className="text-gray-400 text-sm font-light">
                            Subscribe to receive updates, access to exclusive deals, and more.
                        </p>
                        <form className="flex flex-col space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-secondary text-white text-sm placeholder-gray-500 transition-colors"
                            />
                            <button className="text-left text-xs uppercase tracking-widest text-secondary hover:text-white transition-colors font-semibold">
                                Subscribe
                            </button>
                        </form>
                        <div className="flex space-x-6 pt-4">
                            <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                            <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                            <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light tracking-wider">
                    <p>&copy; 2026 Angrawear. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
