import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Timeline({ milestones }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedRegion, setSelectedRegion] = useState("all");

  const regions = ["all", ...new Set(milestones.map(m => m.region))];

  const filteredMilestones = selectedRegion === "all" 
    ? milestones 
    : milestones.filter(m => m.region === selectedRegion);

  return (
    <div ref={ref} className="space-y-6">
      {/* Region Filter */}
      <div className="flex flex-wrap gap-2">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setSelectedRegion(region)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedRegion === region
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {region.charAt(0).toUpperCase() + region.slice(1)}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-sky-600" />

        <div className="space-y-8">
          {filteredMilestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-0 w-5 h-5 bg-primary-600 rounded-full border-4 border-white shadow-md" />

              <div className="card">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{milestone.date}</h3>
                    <span className="inline-block mt-1 px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                      {milestone.region}
                    </span>
                  </div>
                  <div className="mt-3 md:mt-0 flex gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">{milestone.sensors}</div>
                      <div className="text-xs text-gray-500">Sensors</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-sky-600">{milestone.devices}</div>
                      <div className="text-xs text-gray-500">Devices</div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
