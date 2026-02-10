import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full md:w-[400px] bg-white z-[70] shadow-2xl flex flex-col"
                    >
                        <div className="p-6 flex justify-between items-center border-b border-gray-100">
                            <div className="flex items-center gap-2">
                                <ShoppingBag className="w-5 h-5 text-primary" />
                                <h2 className="text-xl font-serif font-medium text-primary">Shopping Cart</h2>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <X className="w-6 h-6 text-gray-500" />
                            </button>
                        </div>

                        <div className="flex-1 flex flex-col justify-center items-center p-10 text-center">
                            <ShoppingBag className="w-16 h-16 text-gray-200 mb-4" />
                            <p className="text-gray-500 font-medium">Your cart is currently empty.</p>
                            <button
                                onClick={onClose}
                                className="mt-6 px-8 py-3 bg-primary text-white text-sm uppercase tracking-wide font-semibold hover:bg-secondary transition-colors"
                            >
                                Start Shopping
                            </button>
                        </div>

                        <div className="p-6 border-t border-gray-100 bg-gray-50">
                            <div className="flex justify-between items-center mb-4 text-sm font-medium text-gray-600">
                                <span>Subtotal</span>
                                <span>R$ 0,00</span>
                            </div>
                            <button className="w-full py-4 bg-gray-300 text-white text-sm uppercase tracking-widest font-bold cursor-not-allowed">
                                Checkout
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
