import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Copy, FileDown, Github, Linkedin, Mail, Send } from 'lucide-react'
import { CONTENT } from '../data/content'
import Highlighter from './Highlighter'

export default function ChapterSayHi() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)
  const [copied, setCopied] = useState(false)

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Tell me what to call you.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = 'That email looks slightly off.'
    }
    if (form.message.trim().length < 8) {
      next.message = 'Drop at least a short sentence!'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTENT.meta.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // Ignore clipboard failure
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setSending(true)
    setStatus('')

    const formspree = import.meta.env.VITE_FORMSPREE_ENDPOINT
    const emailjsService = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const emailjsTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const emailjsKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    try {
      if (formspree) {
        const res = await fetch(formspree, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        })
        if (!res.ok) throw new Error('Formspree failed')
        setStatus("Sent! I'll read this and write back soon.")
        setForm({ name: '', email: '', message: '' })
      } else if (emailjsService && emailjsTemplate && emailjsKey) {
        const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            service_id: emailjsService,
            template_id: emailjsTemplate,
            user_id: emailjsKey,
            template_params: {
              from_name: form.name,
              from_email: form.email,
              message: form.message,
            },
          }),
        })
        if (!res.ok) throw new Error('EmailJS failed')
        setStatus("Sent! I'll read this and write back soon.")
        setForm({ name: '', email: '', message: '' })
      } else {
        const subject = encodeURIComponent(`Hey Mukesh — note from ${form.name}`)
        const body = encodeURIComponent(
          `From: ${form.name} (${form.email})\n\n${form.message}`
        )
        window.location.href = `mailto:${CONTENT.meta.email}?subject=${subject}&body=${body}`
        setStatus(
          'Opened your mail app! (Add VITE_FORMSPREE_ENDPOINT in .env to send straight from this page.)'
        )
        setForm({ name: '', email: '', message: '' })
      }
    } catch {
      setStatus(`Something tripped up. Email me directly at ${CONTENT.meta.email}.`)
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      id="say-hi"
      className="border-t border-dashed border-[var(--paper-border)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <span className="font-hand text-xl text-[var(--terracotta)]">
            {CONTENT.sayHi.chapterLabel}
          </span>
          <h2 className="mt-1 font-serif text-3xl font-bold text-[var(--ink)] sm:text-4xl">
            <Highlighter>{CONTENT.sayHi.title}</Highlighter>
          </h2>
          <p className="mt-3 text-lg font-medium text-[var(--ink)]">
            {CONTENT.sayHi.copy}
          </p>
          <p className="mt-1.5 text-sm text-[var(--ink-muted)]">
            {CONTENT.sayHi.subcopy}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-12">
          {/* Left: Direct links postcard */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4 }}
            className="space-y-4 md:col-span-5"
          >
            <div className="paper-card rounded-md p-5">
              <div className="font-hand text-lg text-[var(--terracotta)]">
                my desk &amp; links
              </div>

              <div className="mt-3 flex items-center justify-between gap-2 rounded border border-dashed border-[var(--paper-border)] bg-[var(--paper-bg)] px-3 py-2.5">
                <a
                  href={`mailto:${CONTENT.meta.email}`}
                  className="flex min-w-0 items-center gap-2 font-mono text-xs text-[var(--ink)] hover:text-[var(--terracotta)]"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-[var(--terracotta)]" aria-hidden="true" />
                  <span className="truncate">{CONTENT.meta.email}</span>
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="inline-flex shrink-0 items-center gap-1 rounded border border-[var(--paper-border)] bg-[var(--paper-card)] px-2 py-0.5 font-mono text-[11px] text-[var(--ink)] hover:border-[var(--terracotta)]"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-700" aria-hidden="true" />
                      copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" aria-hidden="true" />
                      copy
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4 flex flex-wrap gap-2.5">
                <a
                  href={CONTENT.meta.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-[var(--paper-border)] bg-[var(--paper-bg)] px-3 py-2 font-mono text-xs text-[var(--ink)] transition hover:border-[var(--terracotta)] hover:text-[var(--terracotta)]"
                >
                  <Github className="h-3.5 w-3.5" aria-hidden="true" />
                  GitHub
                </a>
                <a
                  href={CONTENT.meta.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-[var(--paper-border)] bg-[var(--paper-bg)] px-3 py-2 font-mono text-xs text-[var(--ink)] transition hover:border-[var(--terracotta)] hover:text-[var(--terracotta)]"
                >
                  <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
                  LinkedIn
                </a>
                <a
                  href={CONTENT.meta.resumeUrl}
                  download="Mukesh_Kumar_Chaurasia_Resume.pdf"
                  className="inline-flex items-center gap-1.5 rounded-md border border-[var(--ink)] bg-[var(--ink)] px-3 py-2 font-mono text-xs text-[var(--paper-card)] transition hover:border-[var(--terracotta)] hover:bg-[var(--terracotta)]"
                >
                  <FileDown className="h-3.5 w-3.5" aria-hidden="true" />
                  Resume PDF
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Notebook letter form */}
          <motion.form
            noValidate
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: 0.06 }}
            className="paper-card rounded-md p-6 md:col-span-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="hi-name"
                  className="mb-1 block font-hand text-lg text-[var(--ink)]"
                >
                  Your name
                </label>
                <input
                  id="hi-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value })
                    if (errors.name) setErrors({ ...errors, name: '' })
                  }}
                  placeholder="Alex"
                  className="w-full rounded border border-[var(--paper-border)] bg-[var(--paper-bg)] px-3 py-2 text-sm text-[var(--ink)] placeholder-[var(--ink-faint)] focus:border-[var(--terracotta)] focus:outline-none"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-[var(--terracotta)]">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="hi-email"
                  className="mb-1 block font-hand text-lg text-[var(--ink)]"
                >
                  Your email
                </label>
                <input
                  id="hi-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value })
                    if (errors.email) setErrors({ ...errors, email: '' })
                  }}
                  placeholder="alex@example.com"
                  className="w-full rounded border border-[var(--paper-border)] bg-[var(--paper-bg)] px-3 py-2 text-sm text-[var(--ink)] placeholder-[var(--ink-faint)] focus:border-[var(--terracotta)] focus:outline-none"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-[var(--terracotta)]">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="hi-message"
                className="mb-1 block font-hand text-lg text-[var(--ink)]"
              >
                What&apos;s on your mind?
              </label>
              <textarea
                id="hi-message"
                rows={4}
                value={form.message}
                onChange={(e) => {
                  setForm({ ...form, message: e.target.value })
                  if (errors.message) setErrors({ ...errors, message: '' })
                }}
                placeholder="Hey Mukesh, saw your Fraudic writeup..."
                className="w-full rounded border border-[var(--paper-border)] bg-[var(--paper-bg)] px-3 py-2 text-sm text-[var(--ink)] placeholder-[var(--ink-faint)] focus:border-[var(--terracotta)] focus:outline-none"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-[var(--terracotta)]">{errors.message}</p>
              )}
            </div>

            {status && (
              <p
                role="status"
                className="mt-3 rounded border border-dashed border-[var(--paper-border)] bg-[var(--highlighter)]/25 px-3 py-2 text-xs text-[var(--ink)]"
              >
                {status}
              </p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="mt-5 inline-flex items-center gap-2 rounded-md border border-[var(--ink)] bg-[var(--ink)] px-5 py-2.5 text-sm font-medium text-[var(--paper-card)] transition hover:border-[var(--terracotta)] hover:bg-[var(--terracotta)] disabled:opacity-60"
            >
              <Send className="h-3.5 w-3.5" aria-hidden="true" />
              {sending ? 'Sending note...' : 'Send note'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
