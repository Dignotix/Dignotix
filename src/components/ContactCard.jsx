import { motion } from "framer-motion";
import { scaleIn } from "../utils/motionVariants";

export default function ContactCard({ contact }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={scaleIn}
      className="card max-w-md"
    >
      <div className="flex items-start space-x-4">
        <img
          src={contact.image || "/images/team_mohammed_abdo.png"}
          alt={contact.name}
          className="w-20 h-20 rounded-full object-cover"
          loading="lazy"
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900">{contact.name}</h3>
          <p className="text-sm text-primary-600 font-medium">{contact.role}</p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {contact.email && (
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors group"
          >
            <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm">{contact.email}</span>
          </a>
        )}

        {contact.phone && (
          <a
            href={`tel:${contact.phone}`}
            className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 transition-colors group"
          >
            <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-sm">{contact.phone}</span>
          </a>
        )}
      </div>

      {contact.bio && (
        <p className="mt-4 text-sm text-gray-600 border-t border-gray-200 pt-4">
          {contact.bio}
        </p>
      )}
    </motion.div>
  );
}
