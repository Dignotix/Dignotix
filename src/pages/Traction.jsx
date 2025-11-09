import { motion } from "framer-motion";
import MetaHead from "../components/MetaHead";
import siteContent from "../data/siteContent.json";

export default function Traction() {
  const { partners } = siteContent;

  return (
    <>
      <MetaHead 
        title="Partnerships & Traction — Dignotix"
        description="Our strategic partnerships and market traction demonstrate strong validation and growth potential."
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
              Partnerships & <span className="gradient-text">Traction</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-700"
            >
              Strategic partnerships and proven market validation demonstrate our technology's commercial viability.
            </motion.p>
          </div>
        </section>

        {/* Key Partnership */}
        <section className="section-container bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Strategic Partner
            </motion.h2>

            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card max-w-4xl mx-auto"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="md:w-1/3">
                    <img
                      src="/Dignotix/images/partner_wlb_logo.png"
                      alt={`Partner: ${partner.name}`}
                      className="w-full max-w-xs mx-auto"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-2">{partner.name}</h3>
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                      {partner.status}
                    </span>
                    <ul className="space-y-3">
                      {partner.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Traction Metrics */}
        <section className="section-container gradient-bg">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Current Traction
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Basic Sensor Developed",
                  description: "Core technology validated and functional",
                  icon: "✅",
                  status: "Complete"
                },
                {
                  title: "Device Licenses",
                  description: "Under negotiation with manufacturing partners",
                  icon: "📋",
                  status: "In Progress"
                },
                {
                  title: "OEM Discussions",
                  description: "Active talks with multiple OEM partners",
                  icon: "🤝",
                  status: "Ongoing"
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    item.status === "Complete" 
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }`}>
                    {item.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Partnerships */}
        <section className="section-container bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card bg-gradient-to-r from-primary-50 to-sky-50"
            >
              <h2 className="text-2xl font-bold mb-4">Partnership Opportunities</h2>
              <p className="text-gray-700 mb-6">
                We are actively seeking strategic partnerships in:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Healthcare Providers & Hospitals",
                  "Medical Device Distributors",
                  "Pharmaceutical Companies",
                  "Research Institutions",
                  "Government Health Agencies",
                  "Insurance Providers"
                ].map((opportunity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <span className="text-gray-700">{opportunity}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
