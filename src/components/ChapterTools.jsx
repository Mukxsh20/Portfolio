import { useState } from 'react'
import { motion } from 'framer-motion'
import { CONTENT } from '../data/content'
import Highlighter from './Highlighter'

const STICKY_COLORS = {
  yellow: 'bg-[#FDF1B8] text-[#1F1B16] border-[#E8D585] lamp:bg-[#3A3320] lamp:text-[#EFE7DA] lamp:border-[#594E31]',
  cream: 'bg-[#FFFDF9] text-[#1F1B16] border-[#D6C9B4] lamp:bg-[#2A251F] lamp:text-[#EFE7DA] lamp:border-[#473E34]',
  terracotta: 'bg-[#FAE3DC] text-[#1F1B16] border-[#E3B3A4] lamp:bg-[#3A2722] lamp:text-[#EFE7DA] lamp:border-[#5D3D35]',
  sage: 'bg-[#E7EFE2] text-[#1F1B16] border-[#C3D3BA] lamp:bg-[#273125] lamp:text-[#EFE7DA] lamp:border-[#404F3D]',
}

export default function ChapterTools() {
  const [selectedTool, setSelectedTool] = useState(null)

  return (
    <section
      id="tools"
      className="border-t border-dashed border-[var(--paper-border)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <span className="font-hand text-xl text-[var(--terracotta)]">
            {CONTENT.tools.chapterLabel}
          </span>
          <h2 className="mt-1 font-serif text-3xl font-bold text-[var(--ink)] sm:text-4xl">
            <Highlighter>{CONTENT.tools.title}</Highlighter>
          </h2>
          <p className="mt-3 text-base text-[var(--ink-muted)]">
            {CONTENT.tools.subtitle}
          </p>
        </div>

        {/* Active note readout for mobile/keyboard accessibility */}
        <div
          aria-live="polite"
          className="mb-8 min-h-[3.25rem] rounded-md border border-dashed border-[var(--paper-border)] bg-[var(--paper-card)] px-4 py-3 font-hand text-lg text-[var(--ink)]"
        >
          {selectedTool ? (
            <span>
              <strong className="text-[var(--terracotta)]">{selectedTool.name}:</strong>{' '}
              {selectedTool.note}
            </span>
          ) : (
            <span className="text-[var(--ink-faint)]">
              Hover or tap any sticky note below to read what I actually use it for...
            </span>
          )}
        </div>

        {/* Messy sticker / sticky-note wall */}
        <div className="space-y-10">
          {CONTENT.tools.groups.map((group, gIdx) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: gIdx * 0.05 }}
            >
              <h3 className="mb-4 font-hand text-2xl font-semibold text-[var(--ink-muted)]">
                # {group.label}
              </h3>

              <div className="flex flex-wrap items-start gap-4 sm:gap-5">
                {group.stickers.map((sticker) => {
                  const isSelected = selectedTool?.name === sticker.name
                  return (
                    <button
                      key={sticker.name}
                      type="button"
                      onMouseEnter={() => setSelectedTool(sticker)}
                      onFocus={() => setSelectedTool(sticker)}
                      onClick={() => setSelectedTool(sticker)}
                      style={{ '--sticker-rot': `${sticker.rot}deg` }}
                      className={`sticker-note group relative w-[160px] rounded-sm border p-3.5 text-left shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--terracotta)] sm:w-[178px] ${
                        STICKY_COLORS[group.color]
                      } ${isSelected ? 'ring-2 ring-[var(--terracotta)]' : ''}`}
                    >
                      {/* Little tape dot */}
                      <span
                        aria-hidden="true"
                        className="masking-tape absolute -top-2 left-1/2 h-3.5 w-10 -translate-x-1/2"
                      />
                      <span className="block font-mono text-xs font-semibold">
                        {sticker.name}
                      </span>
                      <span className="mt-1.5 block font-hand text-base leading-snug opacity-80 transition-opacity group-hover:opacity-100">
                        {sticker.note}
                      </span>
                    </button>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
