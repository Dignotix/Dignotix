import { motion } from "framer-motion";
import MetaHead from "../components/MetaHead";
import siteContent from "../data/siteContent.json";

export default function BusinessModel() {
  const { businessModel } = siteContent;

  return (
    <>
      <MetaHead 
        title="Business Model — Dignotix"
        description="Explore our three-tier business model with 20-50% net profit margins and $160 lifetime revenue per user."
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
              Sustainable <span className="gradient-text">Business Model</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-700"
            >
              Three revenue streams with strong margins and recurring revenue potential.
            </motion.p>
          </div>
        </section>

        {/* Business Model Diagram */}
        <section className="section-container bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src="/Dignotix/images/business_model_diagram.png"
              alt="Business model: pricing and margin split"
              className="w-full max-w-3xl mx-auto rounded-lg shadow-xl mb-12"
              loading="lazy"
            />

            <div className="grid md:grid-cols-3 gap-8">
              {businessModel.map((model, index) => (
                <motion.div
                  key={model.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="card hover:shadow-2xl transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{model.name}</h3>
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                      {model.netProfit} margin
                    </span>
                  </div>
                  
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {model.price}
                  </div>

                  {model.lifetimeRevenue && (
                    <div className="mb-4 p-3 bg-green-50 rounded-lg">
                      <div className="text-sm text-gray-600">Lifetime Revenue</div>
                      <div className="text-2xl font-bold text-green-600">
                        {model.lifetimeRevenue}
                      </div>
                    </div>
                  )}

                  <p className="text-gray-600 text-sm border-t border-gray-200 pt-4">
                    {model.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Revenue Projections */}
        <section className="section-container gradient-bg">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Revenue Model Breakdown
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-2xl font-bold mb-6">Revenue Streams</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-primary-50 rounded-lg">
                    <span className="font-medium">Device Sales</span>
                    <span className="text-primary-600 font-bold">Primary</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-sky-50 rounded-lg">
                    <span className="font-medium">Test Strip Subscriptions</span>
                    <span className="text-sky-600 font-bold">Recurring</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">Bundle Packages</span>
                    <span className="text-green-600 font-bold">High-margin</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium">OEM Licensing</span>
                    <span className="text-purple-600 font-bold">Strategic</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-2xl font-bold mb-6">Key Metrics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Average Net Margin</span>
                      <span className="font-bold text-primary-600">33%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary-600 to-sky-600" style={{ width: '33%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Customer Retention</span>
                      <span className="font-bold text-green-600">85%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-600 to-emerald-600" style={{ width: '85%' }} />
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-primary-50 to-sky-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Lifetime Customer Value</div>
                    <div className="text-3xl font-bold text-primary-600">$160</div>
                    <div className="text-xs text-gray-500 mt-1">Based on full device + package model</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Scalability */}
        <section className="section-container bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto card bg-gradient-to-r from-primary-600 to-sky-600 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Highly Scalable Model</h2>
            <p className="text-lg mb-6 text-white/90">
              Our business model benefits from economies of scale, with decreasing unit costs and increasing margins as production volume grows.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">↓ 40%</div>
                <div className="text-sm">Unit cost reduction at scale</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">↑ 60%</div>
                <div className="text-sm">Margin improvement potential</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold mb-1">5x</div>
                <div className="text-sm">Revenue multiplier from recurring strips</div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
