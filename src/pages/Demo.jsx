import { motion } from "framer-motion";
import { useState } from "react";
import MetaHead from "../components/MetaHead";
import { Link } from "react-router-dom";

export default function Demo() {
  const [selectedTest, setSelectedTest] = useState("if-gamma");
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState(null);

  const tests = [
    { id: "if-gamma", name: "IF-Gamma", time: 5, icon: "🧬" },
    { id: "crp", name: "C-Reactive Protein", time: 3, icon: "🔬" },
    { id: "glucose", name: "Glucose", time: 2, icon: "🩸" },
    { id: "cholesterol", name: "Cholesterol", time: 4, icon: "❤️" },
  ];

  const runTest = () => {
    setIsRunning(true);
    setResult(null);

    const test = tests.find(t => t.id === selectedTest);
    
    setTimeout(() => {
      setResult({
        test: test.name,
        value: Math.floor(Math.random() * 100) + 50,
        status: "Normal",
        timestamp: new Date().toLocaleString()
      });
      setIsRunning(false);
    }, test.time * 1000);
  };

  return (
    <>
      <MetaHead 
        title="Interactive Demo — Dignotix"
        description="Experience Dignotix's revolutionary diagnostic technology with our interactive demo. See real-time test results in 1-5 seconds."
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
              Interactive <span className="gradient-text">Product Demo</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-700"
            >
              Experience the speed and simplicity of Dignotix diagnostic testing. Select a test and see instant results.
            </motion.p>
          </div>
        </section>

        {/* Demo Interface */}
        <section className="section-container bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Device Visualization */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="sticky top-24"
              >
                <div className="card bg-gradient-to-br from-primary-50 to-sky-50 p-8">
                  <motion.img
                    src="/images/hero_device_render.png"
                    alt="Dignotix device"
                    className="w-full max-w-md mx-auto"
                    animate={isRunning ? { scale: [1, 1.05, 1] } : {}}
                    transition={{ duration: 0.5, repeat: isRunning ? Infinity : 0 }}
                  />
                  
                  {isRunning && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-6 text-center"
                    >
                      <div className="inline-flex items-center space-x-3 px-4 py-2 bg-primary-100 rounded-full">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-3 border-primary-600 border-t-transparent rounded-full"
                        />
                        <span className="font-semibold text-primary-700">Analyzing...</span>
                      </div>
                    </motion.div>
                  )}

                  {result && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-6 bg-white rounded-lg shadow-lg"
                    >
                      <h3 className="text-xl font-bold mb-4 text-green-600 flex items-center">
                        <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Test Complete
                      </h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Test:</span>
                          <span className="font-semibold">{result.test}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Result:</span>
                          <span className="font-semibold">{result.value} mg/dL</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Status:</span>
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                            {result.status}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Completed:</span>
                          <span className="text-gray-700">{result.timestamp}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Controls */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div className="card">
                  <h2 className="text-2xl font-bold mb-6">Select Diagnostic Test</h2>
                  
                  <div className="grid gap-4 mb-6">
                    {tests.map((test) => (
                      <motion.button
                        key={test.id}
                        onClick={() => !isRunning && setSelectedTest(test.id)}
                        disabled={isRunning}
                        whileHover={!isRunning ? { scale: 1.02 } : {}}
                        whileTap={!isRunning ? { scale: 0.98 } : {}}
                        className={`p-4 rounded-lg border-2 transition-all text-left ${
                          selectedTest === test.id
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300'
                        } ${isRunning ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-3xl">{test.icon}</span>
                            <div>
                              <div className="font-bold">{test.name}</div>
                              <div className="text-sm text-gray-600">
                                Completes in {test.time} seconds
                              </div>
                            </div>
                          </div>
                          {selectedTest === test.id && (
                            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  <button
                    onClick={runTest}
                    disabled={isRunning}
                    className={`w-full btn-primary text-lg py-4 ${
                      isRunning ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isRunning ? 'Running Test...' : '▶️ Start Test'}
                  </button>
                </div>

                <div className="card bg-sky-50">
                  <h3 className="text-lg font-bold mb-3">Demo Features</h3>
                  <ul className="space-y-2 text-sm">
                    {[
                      "⚡ Real-time processing simulation",
                      "🎯 Accurate result presentation",
                      "📊 Instant status indication",
                      "⏱️ Actual test timing",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card bg-primary-50 border-2 border-primary-200">
                  <p className="text-sm text-gray-700 mb-4">
                    <strong>Note:</strong> This is a simulated demo for demonstration purposes. 
                    Actual device requires proper calibration and test strips.
                  </p>
                  <Link to="/contact" className="btn-outline inline-block text-sm">
                    Request Live Demo
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-container gradient-bg">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Why Healthcare Providers Love Dignotix
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "⚡",
                  title: "Instant Results",
                  description: "Get diagnostic results in 1-5 seconds, enabling immediate treatment decisions"
                },
                {
                  icon: "💰",
                  title: "Cost Effective",
                  description: "90% cheaper than traditional lab testing, making diagnostics accessible to all"
                },
                {
                  icon: "📱",
                  title: "Point-of-Care",
                  description: "Portable design allows testing anywhere, from clinics to remote locations"
                },
                {
                  icon: "🎯",
                  title: "Highly Accurate",
                  description: "99.9% accuracy rate validated through clinical testing"
                },
                {
                  icon: "🔄",
                  title: "Easy to Use",
                  description: "Intuitive interface requires minimal training for healthcare staff"
                },
                {
                  icon: "☁️",
                  title: "Cloud Connected",
                  description: "IoT-enabled for seamless data integration with EMR systems"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card"
                >
                  <div className="text-5xl mb-3">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
