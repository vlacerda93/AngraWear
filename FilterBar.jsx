import React from 'react';
import { motion } from 'framer-motion';

const FilterBar = ({ activeCategory, setActiveCategory, activeColor, setActiveColor }) => {
    const categories = ["All", "Bikinis", "One-piece", "Resort"];
    const colors = ["All", "White", "Black", "Blue", "Floral", "Red", "Multi", "Teal"];

    const getColorStyle = (c) => {
        const lower = c.toLowerCase();
        if (lower === 'all') return { backgroundColor: 'transparent', color: '#6b7280' };
        if (lower === 'floral') return { backgroundImage: 'linear-gradient(135deg, #FFC0CB 25%, #ffffff 25%, #ffffff 50%, #FFC0CB 50%, #FFC0CB 75%, #ffffff 75%, #ffffff 100%)', backgroundSize: '10px 10px' };
        if (lower === 'multi') return { background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #FFE66D, #FF6B6B)' };
        if (lower === 'white') return { backgroundColor: '#ffffff', border: '1px solid #e5e7eb' };
        return { backgroundColor: lower };
    };

    return (
        <div className="w-full flex flex-col md:flex-row justify-center py-6 border-b border-gray-100 gap-6 my-8">
            {/* Category Filter */}
            <div className="flex justify-center items-center space-x-6 overflow-x-auto scrollbar-hide px-4">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`
              relative px-4 py-2 font-medium text-sm tracking-wider uppercase whitespace-nowrap
              ${activeCategory === cat ? 'text-primary' : 'text-gray-400 hover:text-primary'}
              transition-colors duration-300
            `}
                    >
                        {cat}
                        {activeCategory === cat && (
                            <motion.div
                                layoutId="categoryUnderscore"
                                className="absolute left-0 right-0 bottom-0 h-0.5 bg-secondary"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Color Filter */}
            <div className="flex justify-center items-center gap-3 px-4 mt-4 md:mt-0 flex-wrap">
                <span className="text-xs uppercase text-gray-400 font-medium mr-2">Color:</span>
                {colors.map((color) => (
                    <button
                        key={color}
                        onClick={() => setActiveColor(color)}
                        className={`
              w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center
              ${activeColor === color && color === 'All' ? 'bg-primary text-white border-primary !text-white' : ''}
              ${activeColor === color && color !== 'All' ? 'ring-2 ring-offset-2 ring-secondary' : ''}
              transition-all duration-300 hover:scale-110 shadow-sm
              text-[8px] font-bold
            `}
                        style={getColorStyle(color)}
                        title={color}
                    >
                        {color === 'All' && 'ALL'}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FilterBar;
