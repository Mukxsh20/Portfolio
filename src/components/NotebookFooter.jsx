import { CONTENT } from '../data/content'

export default function NotebookFooter() {
  return (
    <footer className="border-t border-dashed border-[var(--paper-border)] py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 text-center sm:flex-row sm:px-6">
        <p className="font-hand text-lg text-[var(--ink-muted)]">
          written &amp; maintained by {CONTENT.meta.name} • {new Date().getFullYear()}
        </p>
        <a
          href="#intro"
          className="font-mono text-xs text-[var(--ink-muted)] underline decoration-dashed underline-offset-4 hover:text-[var(--terracotta)]"
        >
          back to page 01 ↑
        </a>
      </div>
    </footer>
  )
}
