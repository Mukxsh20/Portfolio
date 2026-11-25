import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import { CONTENT } from '../data/content'
import Highlighter from './Highlighter'
import { PaperClip } from './Doodles'

export default function ChapterProjects() {
  const [filter, setFilter] = useState('All')
  const [showAllPages, setShowAllPages] = useState(false)

  const items = CONTENT.projects.items.filter((item) => {
    if (filter !== 'All' && item.category !== filter) return false
    if (!showAllPages && filter === 'All') return item.featured
    return true
  })

  return (
    <section
      id="projects"
      className="border-t border-dashed border-[var(--paper-border)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="font-hand text-xl text-[var(--terracotta)]">
              {CONTENT.projects.chapterLabel}
            </span>
            <h2 className="mt-1 font-serif text-3xl font-bold text-[var(--ink)] sm:text-4xl">
              <Highlighter>{CONTENT.projects.title}</Highlighter>
            </h2>
            <p className="mt-3 max-w-xl text-base text-[var(--ink-muted)]">
              {CONTENT.projects.subtitle}
            </p>
          </div>

          {/* Notebook tab filter */}
          <div
            role="tablist"
            aria-label="Filter project pages"
            className="inline-flex self-start rounded-md border border-[var(--paper-border)] bg-[var(--paper-card)] p-1"
          >
            {['All', 'ML', 'Data'].map((tab) => {
              const active = filter === tab
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(tab)}
                  className={`rounded px-3 py-1 font-mono text-xs transition ${
                    active
                      ? 'bg-[var(--highlighter)] font-semibold text-[#1F1B16]'
                      : 'text-[var(--ink-muted)] hover:text-[var(--ink)]'
                  }`}
                >
                  {tab}
                </button>
              )
            })}
          </div>
        </div>

        {/* Notebook pages (stacked ruled sheets, not a grid) */}
        <div className="space-y-10">
          <AnimatePresence mode="popLayout">
            {items.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 18, rotate: idx % 2 === 0 ? -0.4 : 0.4 }}
                whileInView={{ opacity: 1, y: 0, rotate: idx % 2 === 0 ? -0.35 : 0.35 }}
                exit={{ opacity: 0, x: -24 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4 }}
                className="ruled-paper relative rounded-md border border-[var(--paper-border)] p-6 pl-9 sm:p-8 sm:pl-14"
              >
                {/* Red notebook margin line */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 bottom-0 left-6 w-[1.5px] bg-[var(--terracotta)]/35 sm:left-10"
                />

                {/* Paperclip accent on alternating pages */}
                {idx % 2 === 0 && (
                  <PaperClip className="pointer-events-none absolute -top-4 right-6 h-12 w-6" />
                )}

                {/* Page header */}
                <div className="flex flex-wrap items-baseline justify-between gap-2 pb-2">
                  <div className="flex items-baseline gap-3">
                    <span className="font-hand text-lg text-[var(--terracotta)]">
                      {project.pageNumber}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[var(--ink)]">
                      {project.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-[var(--ink-faint)]">
                    {project.date} • {project.category}
                  </span>
                </div>

                {/* Notebook body lines */}
                <div className="mt-3 space-y-4 text-sm leading-8 text-[var(--ink)] sm:text-base sm:leading-8">
                  <p>
                    <span className="font-hand text-lg font-bold text-[var(--ink-muted)]">
                      What it is:{' '}
                    </span>
                    {project.whatItIs}
                  </p>

                  <p>
                    <span className="font-hand text-lg font-bold text-[var(--ink-muted)]">
                      Why I built it:{' '}
                    </span>
                    {project.whyIBuiltIt}
                  </p>

                  <div className="rounded border-l-3 border-[var(--terracotta)] bg-[var(--paper-bg)]/85 px-4 py-2.5 leading-relaxed">
                    <span className="font-hand text-lg font-bold text-[var(--terracotta)]">
                      What I got wrong:{' '}
                    </span>
                    <span className="text-[var(--ink-muted)]">{project.whatIGotWrong}</span>
                  </div>

                  <p className="leading-relaxed">
                    <span className="bg-[var(--highlighter)]/45 px-1.5 py-0.5 font-mono text-xs font-semibold text-[#1F1B16]">
                      RESULT
                    </span>{' '}
                    <span className="font-medium text-[var(--ink)]">{project.result}</span>
                  </p>
                </div>

                {/* Ink stamp tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stamps.map((tech, sIdx) => (
                    <span
                      key={tech}
                      style={{
                        transform: `rotate(${sIdx % 2 === 0 ? '-1deg' : '1.2deg'})`,
                      }}
                      className="inline-block rounded-sm border border-dashed border-[var(--ink-muted)] bg-[var(--paper-bg)] px-2.5 py-0.5 font-mono text-xs text-[var(--ink)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-[var(--ink)] bg-[var(--ink)] px-3.5 py-1.5 font-mono text-xs text-[var(--paper-card)] transition hover:border-[var(--terracotta)] hover:bg-[var(--terracotta)]"
                  >
                    <Github className="h-3.5 w-3.5" aria-hidden="true" />
                    GitHub
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-[var(--ink)] bg-[var(--paper-card)] px-3.5 py-1.5 font-mono text-xs text-[var(--ink)] transition hover:bg-[var(--paper-alt)]"
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      Live demo
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Toggle extra notebook pages */}
        {filter === 'All' && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllPages((prev) => !prev)}
              className="inline-flex items-center gap-2 rounded-md border border-[var(--paper-border)] bg-[var(--paper-card)] px-4 py-2 font-hand text-lg text-[var(--ink)] transition hover:border-[var(--terracotta)] hover:text-[var(--terracotta)]"
            >
              {showAllPages ? (
                <>
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  Fold away the extra 3 pages
                </>
              ) : (
                <>
                  Flip to 3 more pages (Crypto, KisanSetu, PySpark)
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
