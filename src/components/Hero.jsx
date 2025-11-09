import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section ref={ref} className="relative gradient-bg overflow-hidden min-h-[85vh] flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 space-y-6"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
              style={{ opacity }}
            >
              Dignotix{" "}
              <span className="gradient-text">
                — Empower Tomorrow's Health
              </span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Making medical tests faster and cheaper. Portable, wearable, and smart diagnostic devices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/investors" className="btn-primary text-center">
                Investor Pitch
              </Link>
              <Link to="/demo" className="btn-outline text-center">
                Request Demo
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <div>
                <div className="text-3xl font-bold text-primary-600">30</div>
                <div className="text-sm text-gray-600">Diagnostic Types</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">1–5s</div>
                <div className="text-sm text-gray-600">Per Test</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">4</div>
                <div className="text-sm text-gray-600">IPs</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Device Image */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{ y }}
          >
            <motion.img
              src="/Dignotix/images/hero_device_render.png"
              alt="Dignotix portable diagnostic device"
              className="w-full max-w-[540px] object-contain drop-shadow-2xl"
              loading="eager"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-400"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
