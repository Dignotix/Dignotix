import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ComparisonTable({ data }) {
  const defaultData = [
    {
      test: "IF-Gamma",
      traditional: { time: "3 days", cost: "$40–60" },
      dignotix: { time: "5 seconds", cost: "$4" }
    },
    {
      test: "CRP, Chol, UA, CK, Glu, Na, K, iCa, Cl-",
      traditional: { time: "2 days", cost: "$50–100" },
      dignotix: { time: "5 seconds", cost: "$9" }
    }
  ];

  const displayData = data || defaultData;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
        <thead className="bg-gradient-to-r from-primary-600 to-sky-600 text-white">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold">Test Type</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Traditional (Time / Cost)</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">
              <span className="flex items-center">
                Dignotix (Time / Cost)
                <span className="ml-2 px-2 py-1 bg-white/20 rounded text-xs">Up to 99% faster</span>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {displayData.map((row, index) => (
            <motion.tr
              key={row.test}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.test}</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                <div className="flex flex-col space-y-1">
                  <span>⏱️ {row.traditional.time}</span>
                  <span>💰 {row.traditional.cost}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-primary-700 font-semibold">
                <div className="flex flex-col space-y-1">
                  <span>⚡ {row.dignotix.time}</span>
                  <span>💵 {row.dignotix.cost}</span>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
