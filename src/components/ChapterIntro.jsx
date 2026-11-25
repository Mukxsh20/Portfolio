import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react'
import { CONTENT } from '../data/content'
import Highlighter from './Highlighter'
import { HandArrow, HandUnderline, MarginStar } from './Doodles'

export default function ChapterIntro() {
  const [factIndex, setFactIndex] = useState(-1)

  const showNextFact = () => {
    setFactIndex((prev) => (prev + 1) % CONTENT.intro.funFacts.length)
  }

  return (
    <section id="intro" className="relative py-14 sm:py-20">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-4 sm:px-6 md:grid-cols-12">
        {/* Left: Notebook opening page */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="md:col-span-7"
        >
          <div className="mb-3 flex items-center gap-2 font-hand text-xl text-[var(--terracotta)]">
            <MarginStar className="h-5 w-5 shrink-0" />
            <span>{CONTENT.intro.handwrittenNote}</span>
          </div>

          <h1 className="font-serif text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
            Hey, I&apos;m <Highlighter>{CONTENT.intro.highlightWord}</Highlighter>
          </h1>

          <div className="mt-2 w-44">
            <HandUnderline className="h-3 w-full" />
          </div>

          <p className="mt-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
            {CONTENT.intro.lead}
          </p>

          <p className="mt-4 rounded-md border-l-3 border-[var(--terracotta)] bg-[var(--paper-card)] px-4 py-3 text-sm leading-relaxed text-[var(--ink-muted)] shadow-xs">
            {CONTENT.intro.rightNowLine}
          </p>

          {/* Primary buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#story"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--ink)] bg-[var(--ink)] px-5 py-2.5 text-sm font-medium text-[var(--paper-card)] transition hover:-translate-y-0.5 hover:bg-[var(--terracotta)] hover:border-[var(--terracotta)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--terracotta)]"
            >
              {CONTENT.intro.primaryCta}
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-[var(--ink)] bg-[var(--paper-card)] px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition hover:-translate-y-0.5 hover:bg-[var(--paper-alt)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--terracotta)]"
            >
              {CONTENT.intro.secondaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Fun fact button */}
          <div className="mt-6">
            <button
              type="button"
              onClick={showNextFact}
              className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-[var(--paper-border)] bg-[var(--paper-card)] px-3.5 py-1.5 font-hand text-base text-[var(--ink)] transition hover:border-[var(--terracotta)] hover:text-[var(--terracotta)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--terracotta)]"
            >
              <Sparkles className="h-3.5 w-3.5 text-[var(--terracotta)]" aria-hidden="true" />
              Fun fact about me
              {factIndex >= 0 ? ' (another one)' : ''}
            </button>

            {factIndex >= 0 && (
              <motion.p
                key={factIndex}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2.5 max-w-lg rounded-md bg-[var(--highlighter)]/30 px-3.5 py-2 font-hand text-lg leading-snug text-[var(--ink)]"
              >
                &ldquo;{CONTENT.intro.funFacts[factIndex]}&rdquo;
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Right: Slightly tilted Polaroid photo with masking tape */}
        <motion.div
          initial={{ opacity: 0, rotate: 2, y: 16 }}
          animate={{ opacity: 1, rotate: 2.2, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="relative mx-auto w-full max-w-[300px] md:col-span-5 md:ml-auto"
        >
          {/* Handwritten margin pointer */}
          <div className="mb-2 hidden items-center gap-1.5 font-hand text-lg text-[var(--ink-muted)] md:flex">
            <span>yes, that&apos;s me</span>
            <HandArrow className="h-7 w-11 text-[var(--ink-muted)]" />
          </div>

          <div className="paper-card relative rounded-sm p-3 pb-5 transition-transform duration-300 hover:rotate-0">
            {/* Masking tape piece on top */}
            <div
              aria-hidden="true"
              className="masking-tape absolute -top-3.5 left-1/2 h-7 w-24 -translate-x-1/2 -rotate-2"
            />

            <div className="aspect-[4/4.3] overflow-hidden bg-[var(--paper-alt)]">
              <img
                src={CONTENT.meta.photoUrl}
                alt={CONTENT.meta.photoAlt}
                loading="eager"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-3 text-center font-hand text-lg text-[var(--ink-muted)]">
              {CONTENT.meta.polaroidCaption}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
