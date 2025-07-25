'use client'

import { motion } from 'framer-motion';

type FadeInTextProp  = {
    text: string;
    className?: string;
    additative?: boolean;
}

export default function FadeInText({ text, className = '', additative = false} : FadeInTextProp) {
    if (additative) {
        className = "text-2xl lg:text-4xl" + " " + className
    }
    return (
        <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: .7, duration: .8, ease: "easeInOut" }}
            className={className}
            >
            
            <h2 className='text-center'>{text}</h2>
        </motion.div>
    );
}