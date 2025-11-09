import { motion } from "framer-motion";
import MetaHead from "../components/MetaHead";
import ComparisonTable from "../components/ComparisonTable";
import siteContent from "../data/siteContent.json";

export default function Market() {
  const { market, competitiveAdvantage } = siteContent;

  return (
    <>
      <MetaHead 
        title="Market Opportunity — Dignotix"
        description={`TAM $${market.TAM}, SAM $${market.SAM}, SOM $${market.SOM}. ${market.growth} growth through ${market.growthPeriod}.`}
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
              Massive Market <span className="gradient-text">Opportunity</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-700"
            >
              The global diagnostic testing market is growing at {market.growth} annually, reaching unprecedented scale by {market.growthPeriod}.
            </motion.p>
          </div>
        </section>

        {/* Market Size */}
        <section className="section-container bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src="/images/market_chart.png"
              alt={`Market opportunity: TAM $${market.TAM}, SAM $${market.SAM}, SOM $${market.SOM}`}
              className="w-full max-w-3xl mx-auto rounded-lg shadow-xl mb-12"
              loading="lazy"
            />

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                  Total Addressable Market
                </h3>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  ${market.TAM}
                </div>
                <p className="text-sm text-gray-600">
                  Global diagnostic testing market size
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="card text-center"
              >
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                  Serviceable Addressable Market
                </h3>
                <div className="text-4xl font-bold text-sky-600 mb-2">
                  ${market.SAM}
                </div>
                <p className="text-sm text-gray-600">
                  Point-of-care and portable diagnostics
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="card text-center"
              >
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                  Serviceable Obtainable Market
                </h3>
                <div className="text-4xl font-bold text-green-600 mb-2">
                  ${market.SOM}
                </div>
                <p className="text-sm text-gray-600">
                  Our realistic 3-year target market share
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-primary-50 rounded-lg text-center"
            >
              <p className="text-lg font-semibold text-gray-800">
                <span className="text-primary-600 text-2xl">{market.growth}</span> Annual Growth Rate
              </p>
              <p className="text-sm text-gray-600 mt-2">Source: {market.source}</p>
            </motion.div>
          </div>
        </section>

        {/* Competitive Advantage */}
        <section className="section-container gradient-bg">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-4"
            >
              Unmatched Competitive Advantage
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center text-gray-700 mb-12 max-w-3xl mx-auto"
            >
              Our technology delivers results up to 99% faster and 90% cheaper than traditional laboratory testing.
            </motion.p>

            <ComparisonTable data={competitiveAdvantage} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 grid md:grid-cols-2 gap-6"
            >
              <div className="card bg-green-50 border-2 border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  ⚡ Up to 99% Faster
                </h3>
                <p className="text-gray-700">
                  Instant results in 1-5 seconds vs. days of waiting for traditional labs
                </p>
              </div>
              <div className="card bg-blue-50 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  💰 Up to 90% Cheaper
                </h3>
                <p className="text-gray-700">
                  Affordable pricing makes diagnostics accessible to 50% more of the population
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
