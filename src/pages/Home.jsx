import { motion } from "framer-motion";
import Hero from "../components/Hero";
import StatsGrid from "../components/StatsGrid";
import FeatureCard from "../components/FeatureCard";
import MetaHead from "../components/MetaHead";
import siteContent from "../data/siteContent.json";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <MetaHead />
      <div className="overflow-x-hidden">
        <Hero />

        {/* Problem Section */}
        <section className="section-container bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {siteContent.problem.title}
            </h2>
            <img
              src="/images/problem_infographic.png"
              alt="Problem: diagnostic delays, chemical dependency, pricing unaffordability"
              className="w-full max-w-2xl mx-auto mb-8 rounded-lg shadow-lg"
              loading="lazy"
            />
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {siteContent.problem.points.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-6 bg-red-50 rounded-lg"
                >
                  <p className="text-gray-700 font-medium">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Solution Section */}
        <section className="section-container gradient-bg">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {siteContent.solution.title}
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                {siteContent.solution.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {siteContent.solution.features.map((feature, index) => (
                <FeatureCard
                  key={feature.name}
                  icon={feature.icon}
                  title={feature.name}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Product Metrics */}
        <section className="section-container bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Product Performance
            </motion.h2>
            <StatsGrid />
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-container bg-gradient-to-r from-primary-600 to-sky-600 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Join us in making medical diagnostics accessible, affordable, and instant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/investors" className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                View Investment Opportunity
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
