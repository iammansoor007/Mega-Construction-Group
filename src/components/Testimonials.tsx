import { useRef, useEffect, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  useMotionValue,
  AnimatePresence
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import completeData from "@/data/completeData.json";
import SectionHeader from "@/components/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const Icons = {
  Quote: () => (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-red-600">
      <path d="M10 11H6V7H10V11Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M18 11H14V7H18V11Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  Verified: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-red-600">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Play: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="1.5" />
      <path d="M16 12L10 16V8L16 12Z" fill="white" />
    </svg>
  ),
  Close: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  ArrowLeft: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-red-600">
      <path d="M19 12H5M5 12L11 18M5 12L11 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  ArrowRight: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-red-600">
      <path d="M5 12H19M19 12L13 18M19 12L13 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Youtube: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-red-600">
      <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M15 12L10 9V15L15 12Z" fill="currentColor" />
    </svg>
  ),
  Star: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  MessageSquare: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
};

const VideoModal = ({ isOpen, onClose, videoId, title }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-red-600 hover:bg-red-700 flex items-center justify-center transition-all duration-300"
        >
          <Icons.Close />
        </motion.button>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="relative w-full max-w-5xl aspect-video rounded-lg overflow-hidden shadow-2xl border-2 border-gray-700"
          onClick={(e) => e.stopPropagation()}
        >
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&showinfo=0`}
            title={title || "YouTube video player"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const VideoThumbnailCard = ({ video, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  const formatViews = (views) => {
    if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
    return views.toString();
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative group cursor-pointer"
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 shadow-md border-2 border-gray-200 group-hover:border-red-600 transition-colors">
        <img
          src={imageError ? 'https://via.placeholder.com/320x180?text=Mega+Contracting' : `https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
          alt={video.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={() => setImageError(true)}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-red-600 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-lg bg-red-600 flex items-center justify-center transform transition-transform group-hover:scale-110 shadow-lg">
              <Icons.Play />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3">
          <div className="flex items-center gap-2 text-white/90 text-xs">
            <span className="bg-black/50 px-2 py-0.5 rounded">{video.duration}</span>
            {video.views && (
              <span className="bg-black/50 px-2 py-0.5 rounded">{formatViews(video.views)} views</span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-2 md:mt-3">
        <h4 className="font-bold text-gray-900 text-sm md:text-base line-clamp-1">{video.name}</h4>
        <p className="text-xs md:text-sm text-gray-500 line-clamp-1">{video.title}</p>
      </div>
    </motion.div>
  );
};

const TestimonialCard = ({ testimonial, isActive = false, onPlayVideo }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });
  const rotateX = useTransform(springY, [-0.2, 0.2], [1, -1]);
  const rotateY = useTransform(springX, [-0.2, 0.2], [-1, 1]);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / rect.width - 0.5) * 0.05;
    const yPct = (mouseY / rect.height - 0.5) * 0.05;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{
        rotateX: window.innerWidth >= 768 ? rotateX : 0,
        rotateY: window.innerWidth >= 768 ? rotateY : 0,
        transformPerspective: 1000,
        willChange: "transform"
      }}
      className="relative w-full mx-auto"
    >
      <div className={`
        relative bg-white rounded-lg p-6 md:p-8 lg:p-10
        border-l-4 shadow-lg transition-all duration-300
        min-h-[320px] md:min-h-[360px] lg:min-h-[400px]
        flex flex-col
        ${isActive
          ? 'border-l-red-600 shadow-xl'
          : 'border-l-gray-300 shadow-md'
        }
      `}>
        {/* Rating Stars */}
        <div className="flex gap-0.5 mb-4 flex-shrink-0">
          {[...Array(5)].map((_, i) => (
            <Icons.Star key={i} />
          ))}
        </div>

        <div className="mb-4 md:mb-6 text-red-600/30 flex-shrink-0">
          <Icons.Quote />
        </div>

        <div className="flex-1 overflow-y-auto mb-4 md:mb-6 pr-2 custom-scrollbar">
          <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed font-medium">
            "{testimonial.text}"
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 flex-shrink-0 mt-auto">
          <div className="flex items-center gap-3 md:gap-4 min-w-0">
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {testimonial.avatar}
              </div>
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1 md:gap-2 flex-wrap">
                <h4 className="font-bold text-gray-900 text-sm md:text-base lg:text-lg truncate">
                  {testimonial.name}
                </h4>
                <span className="text-red-600 flex-shrink-0">
                  <Icons.Verified />
                </span>
              </div>
              <p className="text-xs md:text-sm text-gray-500 truncate">
                {testimonial.position}, {testimonial.company}
              </p>
            </div>
          </div>

          {testimonial.videoId && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onPlayVideo(testimonial.videoId, testimonial.name)}
              className="relative group flex-shrink-0"
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-lg bg-red-600 flex items-center justify-center shadow-md hover:bg-red-700 transition-colors">
                <Icons.Play />
              </div>
            </motion.button>
          )}
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-red-600/20" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-red-600/20" />
      </div>
    </motion.div>
  );
};

const scrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #DC2626;
    border-radius: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #B91C1C;
  }
`;

const Testimonials = () => {
  const sectionRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedVideoTitle, setSelectedVideoTitle] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const { section, testimonials, videos, stats } = completeData.testimonials;

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = scrollbarStyles;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  const handlePlayVideo = (videoId, title) => {
    setSelectedVideo(videoId);
    setSelectedVideoTitle(title);
    setShowVideoModal(true);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !isClient) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.reveal-element',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isClient]);



  return (
    <>
      <section
        ref={sectionRef}
        className="relative bg-gray-50 py-12 md:py-16 lg:py-20 overflow-hidden"
      >
        {/* Construction Pattern Background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='%23DC2626' stroke-width='2'/%3E%3C/svg%3E")`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-red-50/80 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-red-50/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <SectionHeader
            badge={section.badge}
            headline={section.headline}
            description={section.description}
          />

            <div className="flex items-center justify-center gap-2 -mt-8 mb-8">
              <Icons.Youtube />
              <span className="text-xs md:text-sm text-gray-500">{section.featured}</span>
            </div>

          {/* Main Testimonial */}
          <div className="max-w-4xl mx-auto mb-12 md:mb-16 lg:mb-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TestimonialCard
                  testimonial={testimonials[activeIndex]}
                  isActive={true}
                  onPlayVideo={handlePlayVideo}
                />
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-4 md:mt-6">
              <div className="flex items-center gap-2">
                <span className="text-sm md:text-base font-bold text-red-600">
                  {String(activeIndex + 1).padStart(2, '0')}
                </span>
                <span className="text-sm md:text-base text-gray-300">/</span>
                <span className="text-sm md:text-base text-gray-400">
                  {String(testimonials.length).padStart(2, '0')}
                </span>
              </div>

              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center hover:border-red-600 hover:bg-red-50 transition-all duration-300"
                >
                  <Icons.ArrowLeft />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
                  className="w-10 h-10 rounded-lg border-2 border-gray-300 flex items-center justify-center hover:border-red-600 hover:bg-red-50 transition-all duration-300"
                >
                  <Icons.ArrowRight />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
          <svg
            viewBox="0 0 1440 60"
            className="relative block w-full h-10 md:h-12"
            preserveAspectRatio="none"
          >
            <path
              fill="url(#testimonialsGradient)"
              d="M0,24L60,26.7C120,29,240,34,360,34C480,34,600,29,720,26.7C840,24,960,24,1080,26.7C1200,29,1320,34,1380,36.7L1440,39L1440,60L1380,60C1320,60,1200,60,1080,60C960,60,840,60,720,60C600,60,480,60,360,60C240,60,120,60,60,60L0,60Z"
            />
            <defs>
              <linearGradient id="testimonialsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#DC2626" stopOpacity="0.03" />
                <stop offset="50%" stopColor="#DC2626" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#DC2626" stopOpacity="0.03" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      <VideoModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        videoId={selectedVideo}
        title={selectedVideoTitle}
      />
    </>
  );
};

export default Testimonials;