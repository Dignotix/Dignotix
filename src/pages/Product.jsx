import { motion } from "framer-motion";
import MetaHead from "../components/MetaHead";
import StatsGrid from "../components/StatsGrid";
import siteContent from "../data/siteContent.json";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <>
      <MetaHead 
        title="Product — Dignotix"
        description="Discover Dignotix's smart, wearable, and portable diagnostic devices. 30 diagnostic types in 1-5 seconds."
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="gradient-bg section-container">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Revolutionary Diagnostic <span className="gradient-text">Technology</span>
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Experience the future of medical testing with our smart, portable devices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center mb-12"
            >
              <img
                src="/Dignotix/images/hero_device_render.png"
                alt="Dignotix portable diagnostic device"
                className="w-full max-w-2xl rounded-2xl shadow-2xl"
                loading="eager"
              />
            </motion.div>

            <StatsGrid />
          </div>
        </section>

        {/* Features Detail */}
        <section className="section-container bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Key Features
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {siteContent.solution.features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="card"
                >
                  <div className="text-6xl mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{feature.name}</h3>
                  <p className="text-gray-600 text-lg">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo CTA */}
        <section className="section-container gradient-bg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              See It in Action
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Experience our interactive product demo and discover how Dignotix is transforming diagnostics.
            </p>
            <Link to="/demo" className="btn-primary inline-block">
              Launch Interactive Demo
            </Link>
          </motion.div>
        </section>
      </div>
    </>
  );
}
