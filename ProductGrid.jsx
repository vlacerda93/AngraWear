import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="group"
        >
            <div className="relative overflow-hidden aspect-[3/4] rounded-lg shadow-sm group-hover:shadow-xl transition-shadow duration-300">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Quick View Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-white/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center py-4">
                    <button className="text-sm font-medium uppercase tracking-widest text-primary hover:text-secondary">
                        Quick View
                    </button>
                </div>
                {/* Size Selector Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center pointer-events-none">
                    {/* This could be center overlay, but prompt says "Select Size" pill style selector... maybe below price? */}
                </div>
            </div>

            <div className="mt-4 text-center">
                <h3 className="text-lg font-serif font-medium text-primary line-clamp-1">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500 font-medium">{product.price}</p>

                {/* Size Selector - Pill Style */}
                <div className="mt-3 flex justify-center gap-2 flex-wrap">
                    {product.sizes.map((size) => (
                        <button
                            key={size}
                            className="px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-colors uppercase tracking-wide"
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const ProductGrid = ({ products }) => {
    return (
        <div className="editorial-grid">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductGrid;
