import { useEffect, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import NotebookNav from './components/NotebookNav'
import ChapterIntro from './components/ChapterIntro'
import ChapterStory from './components/ChapterStory'
import ChapterProjects from './components/ChapterProjects'
import ChapterTools from './components/ChapterTools'
import ChapterHowIWork from './components/ChapterHowIWork'
import ChapterProof from './components/ChapterProof'
import ChapterNow from './components/ChapterNow'
import ChapterSayHi from './components/ChapterSayHi'
import NotebookFooter from './components/NotebookFooter'
import AskMeBubble from './components/AskMeBubble'

const THEME_KEY = 'notebook-theme'

export default function App() {
  const [lampMode, setLampMode] = useState(() => {
    try {
      return localStorage.getItem(THEME_KEY) === 'lamp'
    } catch {
      return false
    }
  })

  useEffect(() => {
    document.documentElement.classList.toggle('lamp', lampMode)
    try {
      localStorage.setItem(THEME_KEY, lampMode ? 'lamp' : 'day')
    } catch {
      // Ignore storage errors
    }
  }, [lampMode])

  return (
    <MotionConfig reducedMotion="user">
      <div className="paper-grain relative min-h-screen">
        <a
          href="#main-notebook"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded focus:bg-[var(--terracotta)] focus:px-3 py-1.5 focus:text-xs focus:font-semibold focus:text-white"
        >
          Skip to notebook
        </a>

        <NotebookNav
          lampMode={lampMode}
          onToggleLamp={() => setLampMode((prev) => !prev)}
        />

        <main id="main-notebook">
          <ChapterIntro />
          <ChapterStory />
          <ChapterProjects />
          <ChapterTools />
          <ChapterHowIWork />
          <ChapterProof />
          <ChapterNow />
          <ChapterSayHi />
        </main>

        <NotebookFooter />
        <AskMeBubble />
      </div>
    </MotionConfig>
  )
}
