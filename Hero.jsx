import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center brightness-90 animate-zoom-in"
                style={{ backgroundImage: "url('/images/angra-dos-reis-to-de-passagem-6-1024x684.jpg')" }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            {/* Content */}
            <div className="relative container mx-auto h-full flex items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-white z-10 space-y-6"
                >
                    <p className="text-secondary tracking-[0.2em] font-medium uppercase text-sm">
                        Welcome to Angrawear
                    </p>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                        Elegance in <span className="italic block text-secondary">every wave.</span>
                    </h1>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-8 px-10 py-4 bg-white text-primary text-sm font-semibold tracking-wider hover:bg-secondary hover:text-white transition-all duration-300 shadow-xl"
                    >
                        DISCOVER COLLECTION
                    </motion.button>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
            </motion.div>
        </div>
    );
};

export default Hero;
