import {
    motion,
    useInView,
    useReducedMotion
} from "framer-motion";
import { useRef, useEffect, useState, useCallback, useMemo, memo } from "react";
import Image from "next/image";
import ConstructionAbout from "../assets/yardsign.png";
import completeData from "@/data/completeData.json";
import vectoroverlay from '../assets/Frame.png';
import { FiBriefcase } from "react-icons/fi";

const Counter = memo(({ value, suffix = "", duration = 1.8 }: { value: number; suffix?: string; duration?: number }) => {
    const ref = useRef(null);
    const [display, setDisplay] = useState(0);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const shouldReduceMotion = useReducedMotion();
    const hasAnimatedRef = useRef(false);
    const animationFrameRef = useRef<number>();

    useEffect(() => {
        if (!inView || hasAnimatedRef.current) return;
        hasAnimatedRef.current = true;

        if (shouldReduceMotion) {
            setDisplay(value);
            return;
        }

        let startTime;
        const startValue = 0;
        const endValue = value;
        const durationMs = duration * 1000;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / durationMs, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(startValue + (endValue - startValue) * eased);
            setDisplay(current);

            if (progress < 1) {
                animationFrameRef.current = requestAnimationFrame(animate);
            } else {
                setDisplay(endValue);
            }
        };

        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [inView, value, duration, shouldReduceMotion]);

    return (
        <span ref={ref} className="tabular-nums">
            {display.toLocaleString()}{suffix}
        </span>
    );
});

Counter.displayName = "Counter";

const StatCard = memo(({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative bg-white p-3 sm:p-4 md:p-5 rounded-xl border-l-4 border-red-600 shadow-lg hover:shadow-xl transition-all duration-300"
        >
            <div className="relative">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                    <Counter value={value} suffix={suffix} />
                </span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-gray-600 mt-1 sm:mt-2 uppercase tracking-wide">
                {label}
            </p>
        </motion.div>
    );
});

StatCard.displayName = "StatCard";

export default function ConstructionAboutSection() {
    const sectionRef = useRef(null);
    const shouldReduceMotion = useReducedMotion();

    const { badge, headline, description, image, stats, buttons, trustBadges } = completeData.about;

    const variants = useMemo(() => ({
        hidden: { opacity: 0, y: 30 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.12,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1] as any
            }
        })
    }), []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-gray-50 overflow-visible py-16 md:py-20 lg:py-24"
            aria-label="About Mega Contracting NY Group"
        >
            {/* Construction Pattern Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='%23DC2626' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Animated Background Elements - Offloaded to CSS for zero main-thread overhead */}
            {!shouldReduceMotion && (
                <>
                    <div
                        className="absolute -top-40 -left-40 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-float-slow smooth-gpu"
                    />
                    <div
                        className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] bg-red-600/5 rounded-full blur-3xl animate-float-reverse smooth-gpu"
                    />
                </>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Equal Height Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Left Column - Image - Equal Height */}
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        custom={0}
                        className="relative lg:h-full lg:min-h-[600px] flex"
                    >
                        {/* Construction Frame */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-red-600/10 via-red-600/5 to-transparent rounded-2xl" />

                        <div className="relative rounded-lg overflow-visible shadow-2xl w-full h-full flex">
                            <div className="relative w-full h-full rounded-none overflow-hidden">
                                <Image
                                    src={ConstructionAbout}
                                    alt={image.alt}
                                    className="w-full h-full object-cover smooth-gpu"
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                {/* Experience Badge */}
                                <motion.div
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                    className="absolute bottom-0 left-0 right-0 p-6"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center shadow-xl">
                                            <span className="text-white text-2xl font-bold">{trustBadges.happyClients}</span>
                                        </div>
                                        <div className="text-white">
                                            <p className="text-sm font-semibold uppercase tracking-wider opacity-90">Projects</p>
                                            <p className="text-xl font-bold">Completed</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Vector Overlay - Floating Outside the Frame */}
                            <motion.div
                                initial={{ x: 80, y: -80, opacity: 0, rotate: -10 }}
                                animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                                transition={{
                                    delay: 0.6,
                                    duration: 0.8,
                                    type: "spring",
                                    stiffness: 80,
                                    damping: 12
                                }}
                                whileHover={{
                                    scale: 1.08,
                                    rotate: 5,
                                    y: -10,
                                    transition: { duration: 0.3 }
                                }}
                                className="absolute -top-12 -right-6 md:-top-16 md:-right-15 lg:-top-20 lg:-right-15 z-30 pointer-events-none"
                            >
                                <Image
                                    src={vectoroverlay}
                                    alt="Vector Overlay"
                                    className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain drop-shadow-2xl pointer-events-auto smooth-gpu"
                                    style={{
                                        filter: 'drop-shadow(0 20px 25px rgba(0,0,0,0.25))'
                                    }}
                                />
                            </motion.div>
                        </div>

                        {/* Decorative Corner Elements */}
                        <div className="absolute -bottom-3 -left-3 w-24 h-24 border-l-4 border-b-4 border-red-600 rounded-bl-2xl pointer-events-none" />
                        <div className="absolute -top-3 -right-3 w-24 h-24 border-t-4 border-r-4 border-red-600 rounded-tr-2xl pointer-events-none" />
                    </motion.div>

                    {/* Right Column - Content - Equal Height */}
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        custom={1}
                        className="flex flex-col justify-center lg:h-full lg:min-h-[600px] space-y-6 smooth-gpu"
                    >
                        {/* Badge */}
                        <motion.div
                            variants={variants}
                            custom={2}
                            className="inline-flex items-center gap-2 sm:gap-3 bg-red-600/10 px-4 sm:px-5 py-2 sm:py-2.5 rounded-none self-start"
                        >
                            <FiBriefcase className="text-red-600 w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-red-600 uppercase tracking-[0.2em] text-xs sm:text-sm font-bold">
                                {badge}
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <div className="space-y-3">
                            <motion.h2
                                variants={variants}
                                custom={3}
                                className="heading-lg leading-[1.15] tracking-tight"
                            >
                                <span className="block text-gray-900">
                                    {headline.prefix}
                                </span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                                    {headline.highlight}
                                </span>
                                <span className="block text-gray-900">
                                    {headline.suffix}
                                </span>
                            </motion.h2>

                            <motion.div
                                variants={variants}
                                custom={4}
                                className="flex gap-1"
                            >
                                <div className="w-16 h-1 bg-red-600 rounded-sm" />
                                <div className="w-8 h-1 bg-red-400 rounded-sm" />
                                <div className="w-4 h-1 bg-red-300 rounded-sm" />
                            </motion.div>
                        </div>

                        {/* Description */}
                        <motion.p
                            variants={variants}
                            custom={5}
                            className="text-gray-700 text-lg leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: description }}
                        />

                        {/* Trust Indicators */}
                        <motion.div
                            variants={variants}
                            custom={6}
                            className="flex flex-wrap gap-4 py-2"
                        >
                            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-none shadow-sm transition-all duration-300">
                                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-bold text-gray-700">LICENSED & INSURED</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-none shadow-sm transition-all duration-300">
                                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-bold text-gray-700">BBB A+ RATED</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-none shadow-sm transition-all duration-300">
                                <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="text-sm font-bold text-gray-700">4.9★ RATING</span>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={variants}
                            custom={7}
                            className="flex flex-col sm:flex-row gap-4 pt-2"
                        >
                            {buttons.map((button, idx) => (
                                button.primary ? (
                                    <motion.a
                                        key={idx}
                                        href={button.href}
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="group relative px-7 py-3.5 bg-red-600 text-white font-bold rounded-none shadow-lg hover:shadow-xl hover:bg-red-700 transition-all duration-300 inline-block text-center"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            {button.text}
                                            <svg
                                                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                                />
                                            </svg>
                                        </span>
                                    </motion.a>
                                ) : (
                                    <motion.a
                                        key={idx}
                                        href={button.href}
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="group inline-block px-7 py-3.5 bg-white text-gray-900 font-bold rounded-none border-2 border-gray-300 hover:border-red-600 hover:text-red-600 shadow-md hover:shadow-lg transition-all duration-300 text-center"
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            {button.text}
                                            <svg
                                                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        </span>
                                    </motion.a>
                                )
                            ))}
                        </motion.div>

                        {/* Stats Grid - Responsive */}
                        <motion.div
                            variants={variants}
                            custom={8}
                            className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-6"
                        >
                            {stats.map((stat) => (
                                <StatCard key={stat.label} {...stat} />
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}