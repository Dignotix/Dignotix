import { motion } from "framer-motion";
import MetaHead from "../components/MetaHead";
import siteContent from "../data/siteContent.json";

export default function Technology() {
  return (
    <>
      <MetaHead 
        title="Technology — Dignotix"
        description="Explore Dignotix's cutting-edge technology stack: AI, IoT, MIPs, and MAb LOCs for advanced diagnostics."
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
              {siteContent.technology.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-700"
            >
              Our proprietary technology combines AI, IoT, and advanced molecular recognition systems to deliver unprecedented diagnostic accuracy and speed.
            </motion.p>
          </div>
        </section>

        {/* Tech Stack Diagram */}
        <section className="section-container bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src="/Dignotix/images/tech_stack_diagram.png"
              alt="Technology stack: AI, IoT, MIPs, MAb LOCs"
              className="w-full max-w-3xl mx-auto rounded-lg shadow-xl mb-12"
              loading="lazy"
            />

            <div className="grid md:grid-cols-2 gap-8">
              {siteContent.technology.components.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-600">
                        {tech.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                      <p className="text-gray-600">{tech.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="section-container gradient-bg">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Performance Metrics
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "Accuracy Rate", value: "99.9%", icon: "🎯" },
                { label: "Response Time", value: "1-5s", icon: "⚡" },
                { label: "Energy Efficiency", value: "Ultra-low", icon: "🔋" },
                { label: "Test Types", value: "30+", icon: "🧪" },
                { label: "Device Lifespan", value: "5+ years", icon: "⏳" },
                { label: "Connectivity", value: "IoT-enabled", icon: "📡" },
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card text-center"
                >
                  <div className="text-4xl mb-3">{metric.icon}</div>
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
