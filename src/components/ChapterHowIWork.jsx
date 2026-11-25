import { motion } from 'framer-motion'
import { CONTENT } from '../data/content'
import Highlighter from './Highlighter'

export default function ChapterHowIWork() {
  return (
    <section
      id="how-i-work"
      className="border-t border-dashed border-[var(--paper-border)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <span className="font-hand text-xl text-[var(--terracotta)]">
            {CONTENT.howIWork.chapterLabel}
          </span>
          <h2 className="mt-1 font-serif text-3xl font-bold text-[var(--ink)] sm:text-4xl">
            <Highlighter>{CONTENT.howIWork.title}</Highlighter>
          </h2>
          <p className="mt-3 text-base text-[var(--ink-muted)]">
            {CONTENT.howIWork.subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {CONTENT.howIWork.cards.map((card, idx) => (
            <motion.article
              key={card.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              style={{ transform: `rotate(${card.rot}deg)` }}
              className="paper-card relative rounded-md p-6 transition-transform duration-300 hover:rotate-0"
            >
              <span
                aria-hidden="true"
                className="masking-tape absolute -top-2.5 left-6 h-5 w-16 -rotate-2"
              />

              <span className="font-mono text-xs font-semibold text-[var(--terracotta)]">
                note #{card.number}
              </span>
              <h3 className="mt-2 font-serif text-xl font-semibold text-[var(--ink)]">
                {card.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--ink-muted)]">
                {card.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
