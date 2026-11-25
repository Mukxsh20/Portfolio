import { motion } from 'framer-motion'
import { CONTENT } from '../data/content'
import Highlighter from './Highlighter'

export default function ChapterProof() {
  return (
    <section
      id="proof"
      className="border-t border-dashed border-[var(--paper-border)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <span className="font-hand text-xl text-[var(--terracotta)]">
            {CONTENT.proof.chapterLabel}
          </span>
          <h2 className="mt-1 font-serif text-3xl font-bold text-[var(--ink)] sm:text-4xl">
            <Highlighter>{CONTENT.proof.title}</Highlighter>
          </h2>
          <p className="mt-3 text-base text-[var(--ink-muted)]">
            {CONTENT.proof.subtitle}
          </p>
        </div>

        {/* Ticket stubs for competitive programming */}
        <div className="grid gap-5 sm:grid-cols-2">
          {CONTENT.proof.tickets.map((ticket, idx) => (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="ticket-stub flex overflow-hidden rounded-md"
            >
              {/* Left perforated stub */}
              <div className="flex w-20 shrink-0 flex-col items-center justify-center border-r border-dashed border-[var(--paper-border)] bg-[var(--paper-alt)] px-2 py-4 text-center">
                <span className="font-mono text-[10px] tracking-widest text-[var(--terracotta)] uppercase">
                  admit
                </span>
                <span className="mt-1 font-mono text-xs font-bold text-[var(--ink)]">
                  {ticket.stubCode}
                </span>
                <span className="mt-1 font-hand text-sm text-[var(--ink-muted)]">
                  {ticket.date}
                </span>
              </div>

              {/* Ticket body */}
              <div className="flex-1 p-4 sm:p-5">
                <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-faint)]">
                  {ticket.org}
                </div>
                <h3 className="mt-1 font-serif text-xl font-bold text-[var(--ink)]">
                  {ticket.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--ink-muted)]">
                  {ticket.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Passport stamps for certifications & training */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {CONTENT.proof.stamps.map((stamp, idx) => (
            <motion.div
              key={stamp.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              style={{ transform: `rotate(${stamp.rot}deg)` }}
              className="paper-card relative flex items-center justify-between gap-4 rounded-md p-5"
            >
              <div>
                <div className="font-mono text-[11px] text-[var(--terracotta)]">
                  {stamp.issuer} • {stamp.date}
                </div>
                <h3 className="mt-1 font-serif text-lg font-semibold text-[var(--ink)]">
                  {stamp.title}
                </h3>
              </div>

              {/* Circular ink stamp */}
              <div
                aria-hidden="true"
                className="flex h-16 w-16 shrink-0 -rotate-12 items-center justify-center rounded-full border-2 border-dashed border-[var(--terracotta)]/70 p-1.5 text-center font-mono text-[9px] font-bold leading-tight text-[var(--terracotta)]"
              >
                {stamp.tag}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
