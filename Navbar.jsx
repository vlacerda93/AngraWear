import React from 'react';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = ({ toggleCart }) => {
    return (
        <nav className="fixed w-full z-50 transition-all duration-300 glassmorphism">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Menu className="w-6 h-6 text-primary cursor-pointer" />
                </div>

                {/* Logo */}
                <div className="text-2xl font-serif font-bold text-primary tracking-wider">
                    ANGRAWEAR
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-8 text-sm font-medium text-primary tracking-wide">
                    <a href="#" className="hover:text-secondary transition-colors underline-offset-4 hover:underline">SHOP</a>
                    <a href="#" className="hover:text-secondary transition-colors underline-offset-4 hover:underline">NEW ARRIVALS</a>
                    <a href="#" className="hover:text-secondary transition-colors underline-offset-4 hover:underline">ABOUT</a>
                    <a href="#" className="hover:text-secondary transition-colors underline-offset-4 hover:underline">JOURNAL</a>
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-6">
                    <Search className="w-5 h-5 text-primary cursor-pointer hover:text-secondary transition-colors" />
                    <div className="relative cursor-pointer" onClick={toggleCart}>
                        <ShoppingBag className="w-5 h-5 text-primary hover:text-secondary transition-colors" />
                        <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
