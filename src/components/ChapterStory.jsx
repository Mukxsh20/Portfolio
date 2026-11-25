import { motion } from 'framer-motion'
import { CONTENT } from '../data/content'
import Highlighter from './Highlighter'
import { StoryDoodle } from './Doodles'

export default function ChapterStory() {
  return (
    <section
      id="story"
      className="border-t border-dashed border-[var(--paper-border)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-12">
          <span className="font-hand text-xl text-[var(--terracotta)]">
            {CONTENT.story.chapterLabel}
          </span>
          <h2 className="mt-1 font-serif text-3xl font-bold text-[var(--ink)] sm:text-4xl">
            <Highlighter>{CONTENT.story.title}</Highlighter>
          </h2>
          <p className="mt-3 max-w-xl text-base text-[var(--ink-muted)]">
            {CONTENT.story.subtitle}
          </p>
        </div>

        {/* Hand-drawn vertical trail */}
        <div className="relative pl-8 sm:pl-12">
          <div
            aria-hidden="true"
            className="absolute top-3 bottom-3 left-3.5 w-[2px] border-l-2 border-dashed border-[var(--terracotta)]/50 sm:left-5"
          />

          <div className="space-y-8">
            {CONTENT.story.entries.map((entry, idx) => (
              <motion.article
                key={entry.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="relative"
              >
                {/* Doodle node */}
                <span
                  aria-hidden="true"
                  className="absolute top-2 -left-8 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--paper-border)] bg-[var(--paper-card)] text-[var(--ink)] shadow-xs sm:-left-11"
                >
                  <StoryDoodle type={entry.doodle} className="h-4 w-4" />
                </span>

                <div className="paper-card rounded-md p-5 sm:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-serif text-xl font-semibold text-[var(--ink)]">
                      {entry.title}
                    </h3>
                    <span className="font-mono text-xs text-[var(--terracotta)]">
                      {entry.date}
                    </span>
                  </div>

                  <p className="mt-2.5 text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">
                    {entry.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
