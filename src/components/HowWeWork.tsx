import { useRef, useEffect, useState } from "react";
import {
    motion,
    useInView,
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import completeData from "../src/data/completeData.json";
import vectoroverlay from "../assets/ctavector.png";

gsap.registerPlugin(ScrollTrigger);

const Icons = {
    HardHat: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 14h16v4H4v-4z" />
            <path d="M6 14v-3a6 6 0 0112 0v3" />
            <circle cx="12" cy="8" r="2" />
        </svg>
    ),
    Shield: () => (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 2L3 7v7c0 5.5 9 8 9 8s9-2.5 9-8V7l-9-5z" />
        </svg>
    ),
    Award: () => (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="8" r="6" />
            <path d="M8 14l-2 6 6-2 6 2-2-6" />
        </svg>
    ),
    Clock: () => (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 3" strokeLinecap="round" />
        </svg>
    ),
    Users: () => (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    ),
    Star: () => (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    ),
    Check: () => (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12l3 3 5-5" strokeLinecap="round" />
        </svg>
    ),
    ArrowRight: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
};

const iconMap: Record<string, any> = {
    Experience: Icons.Clock,
    Honest: Icons.Shield,
    Materials: Icons.Award,
    Communication: Icons.Users,
    Shield: Icons.Shield,
    Certified: Icons.Check,
};

const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);
    const inView = useInView(cardRef, { once: true, margin: "-50px" });

    const FeatureIcon = iconMap[feature.icon] || Icons.Star;

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group"
        >
            <div className="h-full bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-red-200 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center mb-5 group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300">
                    <div className="text-red-600 group-hover:text-white transition-colors duration-300">
                        <FeatureIcon />
                    </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {feature.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                </p>

                <div className="flex items-center gap-2 mt-4 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-bold uppercase tracking-wider">Learn More</span>
                    <Icons.ArrowRight />
                </div>
            </div>
        </motion.div>
    );
};

const WhyChooseUs = () => {
    const sectionRef = useRef(null);
    const [isClient, setIsClient] = useState(false);

    const { section, features, cta } = completeData.whyChooseUs;

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!sectionRef.current || !isClient) return;

        const ctx = gsap.context(() => {
            gsap.fromTo('.reveal-title',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, [isClient]);

    if (!isClient) return null;

    const cleanTitle = cta.title.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

    return (
        <section
            ref={sectionRef}
            className="relative bg-white py-16 md:py-20 lg:py-24 overflow-x-clip"
        >
            {/* Diagonal Grid Lines Background */}
            <div className="absolute inset-0 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="diagonalGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                            <line x1="0" y1="0" x2="0" y2="40" stroke="#DC2626" strokeWidth="0.5" opacity="0.06" />
                            <line x1="0" y1="0" x2="40" y2="0" stroke="#DC2626" strokeWidth="0.5" opacity="0.06" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#diagonalGrid)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-14 reveal-title">
                    <div className="inline-flex items-center gap-2 bg-red-600 px-5 py-2.5 rounded-lg mb-5 shadow-md">
                        <Icons.HardHat />
                        <span className="text-white uppercase tracking-[0.2em] text-xs font-black">
                            {section.badge}
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight"
                        dangerouslySetInnerHTML={{ __html: section.headline }}
                    />

                    <div className="flex justify-center gap-1 mb-4">
                        <div className="w-12 h-1 bg-red-600 rounded-full" />
                        <div className="w-6 h-1 bg-red-400 rounded-full" />
                        <div className="w-3 h-1 bg-red-300 rounded-full" />
                    </div>

                    <p className="text-gray-600 text-base max-w-2xl mx-auto">
                        {section.description}
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
                    {features.map((feature: any, index: number) => (
                        <FeatureCard key={feature.title} feature={feature} index={index} />
                    ))}
                </div>

                {/* CTA with Floating Image Effect */}
                <div className="relative mt-16 md:mt-20 lg:mt-24">
                    {/* Floating Image - Positioned on the left side, overflowing above */}
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="absolute left-4 md:left-8 lg:left-12 top-0 -translate-y-1/2 z-30"
                    >
                        <img 
                            src={vectoroverlay} 
                            alt="Mega Contracting" 
                            className="w-28 h-28 md:w-40 md:h-40 lg:w-52 lg:h-52 object-contain"
                            style={{
                                filter: 'drop-shadow(0 20px 25px rgba(0,0,0,0.25))',
                            }}
                        />
                    </motion.div>

                    {/* CTA Box - With left padding to avoid text overlapping image */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl z-20"
                    >
                        {/* Dynamic left padding based on screen size */}
                        <div className="p-12 md:p-14 lg:p-16 pl-28 md:pl-36 lg:pl-72">
                            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                                {/* Text Content */}
                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white mb-2">
                                        {cleanTitle}
                                    </h3>
                                    
                                    <p className="text-white/80 text-sm md:text-base max-w-xl">
                                        {cta.description}
                                    </p>
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
                                    {cta.buttons.map((button: any, idx: number) => (
                                        <motion.a
                                            key={idx}
                                            href={button.href}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`px-5 py-2.5 font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm whitespace-nowrap ${
                                                button.primary
                                                    ? 'bg-white text-red-600 hover:bg-gray-100'
                                                    : 'bg-transparent text-white border-2 border-white/30 hover:bg-white/10'
                                            }`}
                                        >
                                            {button.text}
                                            <Icons.ArrowRight />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;