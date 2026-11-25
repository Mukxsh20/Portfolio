import { motion } from 'framer-motion'
import { CONTENT } from '../data/content'
import Highlighter from './Highlighter'
import { CoffeeDoodle } from './Doodles'

export default function ChapterNow() {
  const { updated, location, learning, building, reading } = CONTENT.now.data

  const columns = [
    { heading: 'Learning', items: learning },
    { heading: 'Building', items: building },
    { heading: 'Reading', items: reading },
  ]

  return (
    <section
      id="now"
      className="border-t border-dashed border-[var(--paper-border)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="font-hand text-xl text-[var(--terracotta)]">
              {CONTENT.now.chapterLabel}
            </span>
            <h2 className="mt-1 font-serif text-3xl font-bold text-[var(--ink)] sm:text-4xl">
              <Highlighter>{CONTENT.now.title}</Highlighter>
            </h2>
            <p className="mt-3 text-base text-[var(--ink-muted)]">
              {CONTENT.now.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-md border border-[var(--paper-border)] bg-[var(--paper-card)] px-3.5 py-2">
            <CoffeeDoodle className="h-7 w-7 text-[var(--ink)]" />
            <div className="font-mono text-xs">
              <div className="text-[var(--terracotta)]">updated: {updated}</div>
              <div className="text-[var(--ink-muted)]">{location}</div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {columns.map((col, idx) => (
            <motion.div
              key={col.heading}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="paper-card rounded-md p-5"
            >
              <h3 className="border-b border-dashed border-[var(--paper-border)] pb-2 font-hand text-2xl font-bold text-[var(--terracotta)]">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--ink-muted)]">
                {col.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ink)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
