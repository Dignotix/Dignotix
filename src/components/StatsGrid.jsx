import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function StatsGrid({ stats }) {
  const defaultStats = [
    { label: "Diagnostic Types", value: 30, suffix: "" },
    { label: "Time per Test", value: "1–5s", isText: true },
    { label: "Intellectual Properties", value: 4, suffix: "" },
    { label: "Technology Readiness", value: 6, prefix: "TRL " },
  ];

  const displayStats = stats || defaultStats;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {displayStats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        >
          <div className="card text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600">
              {stat.isText ? (
                stat.value
              ) : (
                <>
                  {stat.prefix}
                  {isInView && (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2}
                      delay={i * 0.1}
                    />
                  )}
                  {stat.suffix}
                </>
              )}
            </div>
            <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
