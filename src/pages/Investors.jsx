import { motion } from "framer-motion";
import MetaHead from "../components/MetaHead";
import financials from "../data/financials.json";
import { Link } from "react-router-dom";

export default function Investors() {
  const { fundingAsk, allocation, projections } = financials;

  return (
    <>
      <MetaHead 
        title="Investment Opportunity — Dignotix"
        description={`Seeking $${(fundingAsk / 1000000).toFixed(1)}M to scale production and expand globally. Strong margins and proven traction.`}
      />
      <div className="min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-r from-primary-600 to-sky-600 text-white section-container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Investment Opportunity
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl font-extrabold mb-4"
            >
              ${(fundingAsk / 1000000).toFixed(1)}M
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-white/90"
            >
              Series A funding to accelerate production and global expansion
            </motion.p>
          </div>
        </section>

        {/* Use of Funds */}
        <section className="section-container bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Use of Funds
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Pie Chart Placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className="w-full max-w-md">
                  {allocation.map((item, index) => (
                    <motion.div
                      key={item.category}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="mb-4"
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">{item.category}</span>
                        <span className="text-primary-600 font-bold">
                          ${(item.amount / 1000).toFixed(0)}K ({item.percentage}%)
                        </span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                          className={`h-full ${
                            index === 0 ? 'bg-primary-600' :
                            index === 1 ? 'bg-sky-600' :
                            index === 2 ? 'bg-green-600' :
                            'bg-purple-600'
                          }`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Details */}
              <div className="space-y-6">
                {allocation.map((item, index) => (
                  <motion.div
                    key={item.category}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="card"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold">{item.category}</h3>
                      <span className="text-2xl font-bold text-primary-600">
                        ${(item.amount / 1000).toFixed(0)}K
                      </span>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Financial Projections */}
        <section className="section-container gradient-bg">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              3-Year Financial Projections
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(projections).map(([year, data], index) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="card"
                >
                  <h3 className="text-xl font-bold mb-4 text-center">
                    Year {year.replace('year', '')}
                  </h3>
                  <div className="space-y-4">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="text-sm text-gray-600">Revenue</div>
                      <div className="text-2xl font-bold text-green-600">
                        ${(data.revenue / 1000).toFixed(0)}K
                      </div>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg">
                      <div className="text-sm text-gray-600">Costs</div>
                      <div className="text-2xl font-bold text-red-600">
                        ${(data.costs / 1000).toFixed(0)}K
                      </div>
                    </div>
                    <div className="p-3 bg-primary-50 rounded-lg">
                      <div className="text-sm text-gray-600">Net Profit</div>
                      <div className="text-2xl font-bold text-primary-600">
                        ${(data.profit / 1000).toFixed(0)}K
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 card bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200"
            >
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600">800%</div>
                  <div className="text-sm text-gray-600 mt-1">Revenue Growth (3 years)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">30%+</div>
                  <div className="text-sm text-gray-600 mt-1">Average Net Margin</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">18 months</div>
                  <div className="text-sm text-gray-600 mt-1">Projected Break-even</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Invest */}
        <section className="section-container bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Why Invest in Dignotix?
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: "🎯",
                  title: "Proven Technology",
                  description: "TRL 6 with basic sensor developed and validated. 4 intellectual properties protecting our innovation."
                },
                {
                  icon: "💰",
                  title: "Strong Unit Economics",
                  description: "20-50% net margins across product lines with $160 lifetime customer value."
                },
                {
                  icon: "🌍",
                  title: "Massive Market",
                  description: "$95.59B TAM with 7.5% annual growth. Addressing unmet needs for 50% of the population."
                },
                {
                  icon: "🤝",
                  title: "Strategic Partnerships",
                  description: "Active partnership with WLB, device licenses under negotiation, ongoing OEM discussions."
                },
                {
                  icon: "⚡",
                  title: "Competitive Advantage",
                  description: "99% faster and 90% cheaper than traditional methods with 30+ diagnostic capabilities."
                },
                {
                  icon: "📈",
                  title: "Clear Path to Scale",
                  description: "Defined roadmap from Egypt to global deployment. 20M sensors by 2028."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card hover:shadow-xl transition-shadow"
                >
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-container bg-gradient-to-r from-primary-600 to-sky-600 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join Us?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Download our complete investor deck or schedule a meeting with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                📄 Download Pitch Deck
              </button>
              <Link to="/contact" className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                📧 Schedule Meeting
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
