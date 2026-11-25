import { useEffect, useState } from 'react'
import { FileDown, LampDesk, Menu, Sun, X } from 'lucide-react'
import { CONTENT } from '../data/content'

export default function NotebookNav({ lampMode, onToggleLamp }) {
  const [activeId, setActiveId] = useState('intro')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = CONTENT.nav.map((item) => document.getElementById(item.id)).filter(Boolean)
    if (sections.length === 0) return

    let ticking = false

    const updateActiveSection = () => {
      ticking = false
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24
      if (atBottom) {
        setActiveId(sections[sections.length - 1].id)
        return
      }

      const probeY = Math.min(window.innerHeight * 0.32, 240)
      let currentId = sections[0].id

      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        if (rect.top <= probeY) {
          currentId = section.id
        } else {
          break
        }
      }

      setActiveId(currentId)
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(updateActiveSection)
      }
    }

    updateActiveSection()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--paper-border)] bg-[var(--paper-bg)]/95 transition-colors">
      <nav
        aria-label="Notebook chapters"
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-3.5 sm:px-8 lg:px-12"
      >
        <a
          href="#intro"
          className="group flex shrink-0 items-baseline gap-2 whitespace-nowrap rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--terracotta)]"
        >
          <span className="font-serif text-lg font-bold tracking-tight text-[var(--ink)] sm:text-xl">
            mukesh&apos;s notebook
          </span>
          <span className="hidden font-hand text-base text-[var(--terracotta)] xl:inline">
            v2026
          </span>
        </a>

        {/* Desktop chapter tabs */}
        <ul className="hidden flex-1 items-center justify-center gap-1.5 lg:flex xl:gap-4">
          {CONTENT.nav.map((item) => {
            const active = activeId === item.id
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  aria-current={active ? 'page' : undefined}
                  className={`group relative whitespace-nowrap rounded-md px-2.5 py-1.5 text-[13px] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--terracotta)] xl:px-3 xl:text-sm ${active
                    ? 'text-[var(--ink)]'
                    : 'text-[var(--ink-muted)] hover:text-[var(--ink)]'
                    }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-2 -bottom-0.5 h-[3px] rounded-full bg-[var(--highlighter)] transition-opacity duration-200 ${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                      }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
          <a
            href={CONTENT.meta.resumeUrl}
            download="Mukesh_Kumar_Chaurasia_Resume.pdf"
            className="hidden items-center gap-1.5 whitespace-nowrap rounded-md border border-[var(--paper-border)] bg-[var(--paper-card)] px-3 py-1.5 font-mono text-xs text-[var(--ink)] transition hover:border-[var(--terracotta)] hover:text-[var(--terracotta)] sm:inline-flex"
          >
            <FileDown className="h-3.5 w-3.5" aria-hidden="true" />
            resume.pdf
          </a>

          <button
            type="button"
            onClick={onToggleLamp}
            aria-label={lampMode ? 'Switch to daylight paper mode' : 'Switch to dim desk lamp mode'}
            title={lampMode ? 'Daylight paper' : 'Desk lamp mode'}
            className="inline-flex h-8 items-center gap-1.5 whitespace-nowrap rounded-md border border-[var(--paper-border)] bg-[var(--paper-card)] px-3 font-hand text-sm text-[var(--ink)] transition hover:border-[var(--terracotta)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--terracotta)]"
          >
            {lampMode ? (
              <>
                <Sun className="h-3.5 w-3.5 text-[var(--highlighter)]" aria-hidden="true" />
                <span className="hidden sm:inline">Daylight</span>
              </>
            ) : (
              <>
                <LampDesk className="h-3.5 w-3.5 text-[var(--terracotta)]" aria-hidden="true" />
                <span className="hidden sm:inline">Desk lamp</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close chapters menu' : 'Open chapters menu'}
            aria-expanded={menuOpen}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--paper-border)] bg-[var(--paper-card)] text-[var(--ink)] lg:hidden"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-[var(--paper-border)] bg-[var(--paper-card)] px-4 py-3 lg:hidden">
          <ul className="grid grid-cols-2 gap-1.5">
            {CONTENT.nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded px-2.5 py-1.5 text-sm ${activeId === item.id
                    ? 'bg-[var(--highlighter)]/40 font-semibold text-[var(--ink)]'
                    : 'text-[var(--ink-muted)] hover:text-[var(--ink)]'
                    }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={CONTENT.meta.resumeUrl}
            download="Mukesh_Kumar_Chaurasia_Resume.pdf"
            onClick={() => setMenuOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-md border border-[var(--ink)] bg-[var(--paper-bg)] px-3 py-2 font-mono text-xs font-medium text-[var(--ink)]"
          >
            <FileDown className="h-3.5 w-3.5" aria-hidden="true" />
            Download resume.pdf
          </a>
        </div>
      )}
    </header>
  )
}
