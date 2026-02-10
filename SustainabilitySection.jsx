import React from 'react';
import { motion } from 'framer-motion';

const SustainabilitySection = () => {
    return (
        <section className="bg-primary text-white py-32 px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-secondary text-sm font-bold uppercase tracking-[0.3em] font-sans mb-8">
                    Sustainability
                </h2>
                <h3 className="text-4xl md:text-5xl font-serif font-light leading-snug tracking-wide mb-8">
                    Conscious luxury, committed to <br /> eco-certified Italian fabrics.
                </h3>
                <p className="text-gray-400 font-light text-lg tracking-wider max-w-2xl mx-auto">
                    We believe true elegance is responsible. Every piece is crafted from regenerated nylon and recycled polyester, reducing ocean waste while ensuring the perfect fit.
                </p>

                <div className="mt-12 flex justify-center gap-12 text-sm text-secondary font-medium uppercase tracking-[0.1em]">
                    <span>Econyl® Certified</span>
                    <span>Slow Fashion</span>
                    <span>Cruelty Free</span>
                </div>
            </motion.div>
        </section>
    );
};

export default SustainabilitySection;
