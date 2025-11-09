import { motion } from "framer-motion";
import MetaHead from "../components/MetaHead";
import Timeline from "../components/Timeline";
import siteContent from "../data/siteContent.json";

export default function Milestones() {
  const { milestones } = siteContent;

  return (
    <>
      <MetaHead 
        title="Milestones & Roadmap — Dignotix"
        description="Our strategic roadmap from 2025 to 2028: from Egypt launch to global deployment of 20M sensors and 100K devices."
      />
      <div className="min-h-screen">
        {/* Hero */}
        <section className="gradient-bg section-container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our <span className="gradient-text">Roadmap</span> to Global Impact
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-700"
            >
              A strategic 3-year plan to scale from local deployment in Egypt to global distribution across multiple continents.
            </motion.p>
          </div>
        </section>

        {/* Timeline Visualization */}
        <section className="section-container bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src="/Dignotix/images/milestones_timeline.png"
              alt="Milestones timeline: 2025–2028 rollout"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-xl mb-12"
              loading="lazy"
            />
          </div>
        </section>

        {/* Detailed Timeline */}
        <section className="section-container gradient-bg">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Detailed Milestones
            </motion.h2>
            
            <Timeline milestones={milestones} />
          </div>
        </section>

        {/* Scale Visualization */}
        <section className="section-container bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Growth Trajectory
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Sensors Growth */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-2xl font-bold mb-6 text-primary-600">Sensor Production</h3>
                <div className="space-y-4">
                  {[
                    { year: "2025", amount: "1M", percentage: 5 },
                    { year: "2026", amount: "2M", percentage: 10 },
                    { year: "2027", amount: "6M", percentage: 30 },
                    { year: "2028", amount: "20M", percentage: 100 },
                  ].map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">{item.year}</span>
                        <span className="text-primary-600 font-bold">{item.amount}</span>
                      </div>
                      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                          className="h-full bg-gradient-to-r from-primary-600 to-sky-600"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Devices Growth */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-2xl font-bold mb-6 text-sky-600">Device Distribution</h3>
                <div className="space-y-4">
                  {[
                    { year: "2025", amount: "20K", percentage: 20 },
                    { year: "2026", amount: "40K", percentage: 40 },
                    { year: "2027", amount: "60K", percentage: 60 },
                    { year: "2028", amount: "100K", percentage: 100 },
                  ].map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">{item.year}</span>
                        <span className="text-sky-600 font-bold">{item.amount}</span>
                      </div>
                      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                          className="h-full bg-gradient-to-r from-sky-600 to-blue-600"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Summary Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-4 gap-4 mt-8"
            >
              {[
                { label: "Total Sensors by 2028", value: "29M+", icon: "📊" },
                { label: "Total Devices by 2028", value: "220K+", icon: "🏥" },
                { label: "Regions Covered", value: "Global", icon: "🌍" },
                { label: "Growth Rate", value: "400%", icon: "📈" },
              ].map((stat, index) => (
                <div key={index} className="card text-center">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-primary-600">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
