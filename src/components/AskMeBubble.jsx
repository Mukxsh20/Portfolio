import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, Send, X } from 'lucide-react'
import { CONTENT } from '../data/content'

const QUICK_ASKS = [
  'Tell me about SEW.ai',
  'What broke in Smart Hiring?',
  'What are you learning right now?',
]

function buildFriendlyReply(query) {
  const q = query.toLowerCase()

  if (q.includes('sew') || q.includes('intern') || q.includes('experience')) {
    return "At SEW.ai (Jun–Jul 2025), I was a Junior Data Analyst Intern. I cleaned raw operational tables with Pandas & NumPy, ran EDA, built Excel and Power BI dashboards for sales & customer metrics, and presented findings with senior analysts."
  }

  if (q.includes('smart hiring') || q.includes('hiring') || q.includes('broke') || q.includes('wrong')) {
    return "In Smart Hiring, I first accidentally scaled features before splitting train/test (data leakage!). Fixing it inside a proper Scikit-learn pipeline gave an honest 89%+ accuracy across Logistic Regression, Decision Tree, and SVM — then I wrapped it in a Tkinter app with Joblib."
  }

  if (q.includes('fraud') || q.includes('fraudic')) {
    return "Fraudic was my wake-up call on imbalanced data. Overall accuracy hid missed fraud cases, so I benchmarked Logistic Regression, Decision Tree, SVM, and Naive Bayes on Precision, Recall, and F1-score instead."
  }

  if (q.includes('power bi') || q.includes('sales') || q.includes('dashboard')) {
    return "For the Sales Analytics Dashboard, I modeled Excel sales logs in Power BI with custom DAX measures and drill-down filters for revenue, orders, outlet performance, and ratings."
  }

  if (q.includes('now') || q.includes('learning') || q.includes('reading')) {
    return `Right now I'm focused on: ${CONTENT.now.data.currentlyInto} I'm also reading Chip Huyen's Designing Machine Learning Systems.`
  }

  if (q.includes('skill') || q.includes('tool') || q.includes('python') || q.includes('rag')) {
    return "I spend most of my day in Python, Pandas, NumPy, Scikit-learn, SQL, and Power BI — plus I've been building RAG workflows with LangChain, embeddings, and vector DBs. On the DSA side, I use C++ (300+ LeetCode, Pupil on Codeforces)."
  }

  if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('resume')) {
    return `You can email me at ${CONTENT.meta.email}, grab my resume at /resume.pdf, or use the "Say hi" form at the bottom — I reply to everything.`
  }

  return "Good question! You can ask about my SEW.ai internship, what went wrong in Smart Hiring or Fraudic, my Power BI dashboard, my 300+ DSA problems, or what I'm learning right now."
}

async function fetchChatReply(query) {
  const apiUrl = import.meta.env.VITE_CHAT_API_URL
  if (apiUrl) {
    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      })
      if (res.ok) {
        const data = await res.json()
        if (data?.reply || data?.answer) return data.reply || data.answer
      }
    } catch {
      // Fall back to local friendly reply
    }
  }

  await new Promise((r) => setTimeout(r, 260))
  return buildFriendlyReply(query)
}

export default function AskMeBubble() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [thinking, setThinking] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 'hello',
      from: 'mukesh',
      text: "Hey! Ask me anything about my projects, internship, or what I'm learning right now.",
    },
  ])
  const listRef = useRef(null)

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages, thinking, open])

  const send = async (text) => {
    const clean = text.trim()
    if (!clean || thinking) return
    setMessages((prev) => [...prev, { id: `u-${Date.now()}`, from: 'visitor', text: clean }])
    setInput('')
    setThinking(true)
    const reply = await fetchChatReply(clean)
    setMessages((prev) => [...prev, { id: `m-${Date.now()}`, from: 'mukesh', text: reply }])
    setThinking(false)
  }

  return (
    <div className="fixed right-4 bottom-4 z-40 sm:right-6 sm:bottom-6">
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Ask me anything chat"
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="paper-card mb-3 flex h-[390px] w-[calc(100vw-2rem)] max-w-xs flex-col overflow-hidden rounded-md sm:max-w-sm"
          >
            <div className="flex items-center justify-between border-b border-dashed border-[var(--paper-border)] bg-[var(--paper-alt)] px-4 py-2.5">
              <div>
                <div className="font-serif text-sm font-bold text-[var(--ink)]">
                  Ask me anything
                </div>
                <div className="font-hand text-sm text-[var(--terracotta)]">
                  notebook Q&amp;A
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="rounded p-1 text-[var(--ink-muted)] hover:text-[var(--ink)]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div ref={listRef} className="flex-1 space-y-2.5 overflow-y-auto p-3.5 text-xs">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.from === 'visitor' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-md px-3 py-2 leading-relaxed ${
                      m.from === 'visitor'
                        ? 'bg-[var(--ink)] text-[var(--paper-card)]'
                        : 'border border-[var(--paper-border)] bg-[var(--paper-bg)] text-[var(--ink)]'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {thinking && (
                <div className="font-hand text-base text-[var(--ink-faint)]">
                  flipping pages...
                </div>
              )}
            </div>

            <div className="flex gap-1.5 overflow-x-auto border-t border-dashed border-[var(--paper-border)] px-3 py-2">
              {QUICK_ASKS.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => send(q)}
                  className="shrink-0 rounded border border-[var(--paper-border)] bg-[var(--paper-bg)] px-2 py-0.5 font-hand text-sm text-[var(--ink)] hover:border-[var(--terracotta)]"
                >
                  {q}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                send(input)
              }}
              className="flex items-center gap-2 border-t border-[var(--paper-border)] bg-[var(--paper-card)] p-2.5"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects or tools..."
                aria-label="Ask a question"
                className="flex-1 rounded border border-[var(--paper-border)] bg-[var(--paper-bg)] px-2.5 py-1.5 text-xs text-[var(--ink)] placeholder-[var(--ink-faint)] focus:border-[var(--terracotta)] focus:outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim() || thinking}
                aria-label="Send message"
                className="flex h-7 w-7 items-center justify-center rounded bg-[var(--terracotta)] text-white disabled:opacity-50"
              >
                <Send className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? 'Close Ask me anything' : 'Open Ask me anything'}
        className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)] bg-[var(--paper-card)] px-4 py-2.5 font-hand text-lg font-semibold text-[var(--ink)] shadow-md transition hover:-translate-y-0.5 hover:border-[var(--terracotta)] hover:text-[var(--terracotta)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--terracotta)]"
      >
        <MessageCircle className="h-4 w-4 text-[var(--terracotta)]" aria-hidden="true" />
        <span>Ask me anything</span>
      </button>
    </div>
  )
}
