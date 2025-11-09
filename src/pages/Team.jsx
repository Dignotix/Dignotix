import { motion } from "framer-motion";
import MetaHead from "../components/MetaHead";
import ContactCard from "../components/ContactCard";
import siteContent from "../data/siteContent.json";

export default function Team() {
  const { team } = siteContent;

  return (
    <>
      <MetaHead 
        title="Team — Dignotix"
        description="Meet the experienced team behind Dignotix, combining expertise in medical technology, biotech, and business development."
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
              Meet Our <span className="gradient-text">Expert Team</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-700"
            >
              A passionate team of innovators combining deep expertise in medical technology, biotech, and business development.
            </motion.p>
          </div>
        </section>

        {/* Team Members */}
        <section className="section-container bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="card"
                >
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={member.name.includes("Mohammed") 
                        ? "/Dignotix/images/team_mohammed_abdo.png" 
                        : "/Dignotix/images/team_mostafa_nasser.png"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-primary-100"
                      loading="lazy"
                    />
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-semibold mb-4">{member.role}</p>
                    
                    {member.bio && (
                      <p className="text-gray-600 mb-6">{member.bio}</p>
                    )}

                    {member.email && (
                      <div className="flex flex-col sm:flex-row gap-3 w-full">
                        <a
                          href={`mailto:${member.email}`}
                          className="flex-1 btn-outline text-sm justify-center flex items-center space-x-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span>Email</span>
                        </a>
                        {member.phone && (
                          <a
                            href={`tel:${member.phone}`}
                            className="flex-1 btn-secondary text-sm justify-center flex items-center space-x-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>Call</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="section-container gradient-bg">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Our Collective Expertise
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🔬",
                  title: "Medical Technology",
                  areas: ["Diagnostic Devices", "Lab-on-Chip", "Biosensors", "Medical AI"]
                },
                {
                  icon: "🧬",
                  title: "Biotechnology",
                  areas: ["Molecular Recognition", "Polymer Science", "Antibody Engineering", "Clinical Testing"]
                },
                {
                  icon: "💼",
                  title: "Business Development",
                  areas: ["Strategic Partnerships", "Market Entry", "Investor Relations", "Operations Management"]
                }
              ].map((expertise, index) => (
                <motion.div
                  key={expertise.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="text-5xl mb-4">{expertise.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{expertise.title}</h3>
                  <ul className="space-y-2">
                    {expertise.areas.map((area, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="section-container bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto card bg-gradient-to-r from-primary-600 to-sky-600 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
            <p className="text-lg mb-6 text-white/90">
              We're always looking for talented individuals passionate about transforming healthcare.
            </p>
            <a href="mailto:Mohammed.abdo@rst.edu.eg" className="btn-outline bg-white text-primary-600 hover:bg-gray-100 inline-block">
              Get in Touch
            </a>
          </motion.div>
        </section>
      </div>
    </>
  );
}
