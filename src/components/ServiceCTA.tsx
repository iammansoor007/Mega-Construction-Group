"use client";

import { memo, useMemo } from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import vectoroverlay from "@/assets/ctavector.png";

// ============================================================================
// Constants
// ============================================================================

const ANIMATION_VARIANTS: Record<string, Variants> = {
    float: {
        initial: { y: 0, opacity: 1 },
        animate: {
            y: [0, -10, 0],
            transition: {
                y: {
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                },
            },
        },
    },
};

// ============================================================================
// Trust Badge Component
// ============================================================================

interface TrustBadgeProps {
    label: string;
    color: 'green' | 'blue' | 'red';
}

const TrustBadge = memo(({ label, color }: TrustBadgeProps) => {
    const colorClasses = {
        green: 'bg-green-500',
        blue: 'bg-blue-500',
        red: 'bg-red-400',
    };

    return (
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
            <div className={`w-1.5 h-1.5 ${colorClasses[color]} rounded-full animate-pulse`} />
            <span className="text-xs text-white/70 whitespace-nowrap">{label}</span>
        </div>
    );
});

TrustBadge.displayName = "TrustBadge";

// ============================================================================
// Main Service CTA Component
// ============================================================================

interface CTAButton {
    text: string;
    href: string;
    primary: boolean;
}

interface ServiceCTAProps {
    cta: {
        title: string;
        description: string;
        buttons: CTAButton[];
    };
}

const ServiceCTA = memo(({ cta }: ServiceCTAProps) => {
    const prefersReducedMotion = useReducedMotion();
    const cleanTitle = useMemo(() => {
        return cta.title.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    }, [cta.title]);

    const floatAnimation = prefersReducedMotion
        ? {}
        : {
            initial: "initial",
            animate: "animate",
            variants: ANIMATION_VARIANTS.float,
        };

    return (
        <div className="relative mt-16 md:mt-24 lg:mt-32">
            {/* CTA Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* Cinematic Gradient Background */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(135deg, #C30505 0%, #A00404 50%, #800303 100%)"
                    }}
                />

                {/* Ambient Glow Effects - Desktop only */}
                <div className="hidden md:block absolute right-[10%] top-[10%] w-[400px] h-[400px] bg-white/10 blur-[140px] rounded-full pointer-events-none" />
                <div className="hidden md:block absolute left-[5%] bottom-[20%] w-[250px] h-[250px] bg-black/10 blur-[100px] rounded-full pointer-events-none" />

                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_60%,rgba(0,0,0,0.3))]" />

                {/* Main Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-16 lg:py-20">

                    {/* Desktop Layout - Two columns with floating image */}
                    <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
                        {/* Left Column - Text Content */}
                        <div className="max-w-xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="inline-block mb-6"
                            >
                                <span className="px-4 py-2 text-sm font-bold bg-white/10 border border-white/20 rounded-lg text-white backdrop-blur-sm">
                                    READY TO BUILD
                                </span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.2] tracking-tight text-white font-heading"
                            >
                                {cleanTitle}
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="mt-4 text-white/80 text-lg max-w-lg font-body"
                            >
                                {cta.description}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="mt-8 flex flex-wrap gap-4"
                            >
                                {cta.buttons.map((button, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={button.href}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`
                                            px-8 py-3.5 rounded-full font-bold transition-all duration-300 shadow-lg
                                            flex items-center gap-2 text-sm uppercase tracking-widest
                                            ${button.primary
                                                ? 'bg-white text-red-600 hover:bg-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.3)]'
                                                : 'bg-transparent text-white border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm'
                                            }
                                        `}
                                    >
                                        {button.text}
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.a>
                                ))}
                            </motion.div>

                            {/* Trust Badges */}
                            <div className="mt-8 flex gap-4">
                                <TrustBadge label="Licensed & Insured" color="green" />
                                <TrustBadge label="Free Estimate" color="blue" />
                                <TrustBadge label="24/7 Support" color="red" />
                            </div>
                        </div>

                        {/* Right Column - Floating Image */}
                        <div className="relative">
                            <motion.div
                                {...floatAnimation}
                                className="absolute right-0 bottom-[-47rem] w-[115%] lg:w-[125%]"
                                style={{ right: '-20%' }}
                            >
                                <Image
                                    src={vectoroverlay}
                                    alt="Mega Contracting Professional"
                                    className="w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
                                    priority
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Mobile Layout - Centered text, no image */}
                    <div className="md:hidden text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-block mb-4"
                        >
                            <span className="px-3 py-1.5 text-xs font-semibold bg-white/20 border border-white/30 rounded-full text-white/90 backdrop-blur-sm">
                                MEGA CONTRACTING
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-2xl xs:text-3xl sm:text-4xl font-bold leading-[1.2] text-white font-heading"
                        >
                            {cleanTitle}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-3 text-white/80 text-base max-w-md mx-auto font-body"
                        >
                            {cta.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-6 flex flex-col sm:flex-row gap-3 justify-center"
                        >
                            {cta.buttons.map((button, idx) => (
                                <motion.a
                                    key={idx}
                                    href={button.href}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`
                                        px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-lg
                                        flex items-center justify-center gap-2 text-xs uppercase tracking-widest
                                        ${button.primary
                                            ? 'bg-white text-red-600 hover:bg-gray-100'
                                            : 'bg-transparent text-white border-2 border-white/30 hover:bg-white/10'
                                        }
                                    `}
                                >
                                    {button.text}
                                    <ArrowRight className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* Trust Badges - Mobile */}
                        <div className="mt-6 flex flex-wrap justify-center gap-2">
                            <TrustBadge label="Licensed & Insured" color="green" />
                            <TrustBadge label="Free Estimate" color="blue" />
                            <TrustBadge label="24/7 Support" color="red" />
                        </div>
                    </div>
                </div>

                {/* Bottom Fade */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
        </div>
    );
});

ServiceCTA.displayName = "ServiceCTA";

export default ServiceCTA;
