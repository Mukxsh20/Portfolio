import { motion } from 'framer-motion'

/**
 * Draws a soft yellow highlighter mark behind or under key words as it scrolls into view.
 */
export default function Highlighter({ children, className = '' }) {
  return (
    <span className={`relative inline-block whitespace-nowrap ${className}`}>
      <motion.span
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        style={{ originX: 0, backgroundColor: 'var(--highlighter)' }}
        className="absolute right-[-3px] bottom-[2px] left-[-3px] -z-0 h-[0.42em] -rotate-[0.6deg] rounded-sm opacity-75"
      />
      <span className="relative z-10">{children}</span>
    </span>
  )
}
