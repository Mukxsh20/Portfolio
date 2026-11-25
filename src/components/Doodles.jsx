/**
 * Small hand-drawn SVG doodles, underlines, paperclips, and arrows for notebook margins.
 */
export function HandUnderline({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 18"
      fill="none"
      className={`pointer-events-none ${className}`}
      preserveAspectRatio="none"
    >
      <path
        d="M3 12.5C48 6.5 135 5.5 216 11.5"
        stroke="var(--terracotta)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M14 15.5C72 11.5 148 11 206 14"
        stroke="var(--highlighter)"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  )
}

export function HandArrow({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 42"
      fill="none"
      className={className}
    >
      <path
        d="M6 32C18 14 38 11 54 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="3 3"
      />
      <path
        d="M46 9L56 16.5L45 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PaperClip({ className = '' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 36 72"
      fill="none"
      className={className}
    >
      <path
        d="M12 18V50C12 56.5 24 56.5 24 50V14C24 6 10 6 10 14V44C10 48.5 19 48.5 19 44V20"
        stroke="var(--ink-muted)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function MarginStar({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" fill="none" className={className}>
      <path
        d="M16 3L18.8 12.2L28 13.5L20.8 19.2L23 28.5L16 23.2L9 28.5L11.2 19.2L4 13.5L13.2 12.2L16 3Z"
        stroke="var(--terracotta)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CoffeeDoodle({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" fill="none" className={className}>
      <path
        d="M10 20H32V33C32 37.5 28 41 21 41C14 41 10 37.5 10 33V20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M32 23H36C38.5 23 40 24.8 40 27.5C40 30.2 38.5 32 36 32H32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 14C15 11 18 9 17 6M22 14C21 11 24 9 23 6M28 14C27 11 30 9 29 6"
        stroke="var(--terracotta)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function StoryDoodle({ type, className = 'h-6 w-6' }) {
  switch (type) {
    case 'book':
      return (
        <svg aria-hidden="true" viewBox="0 0 28 28" fill="none" className={className}>
          <path
            d="M4 6.5C7 5.2 11 5.5 14 7.5C17 5.5 21 5.2 24 6.5V21.5C21 20.2 17 20.5 14 22.5C11 20.5 7 20.2 4 21.5V6.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path d="M14 7.5V22.5" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'compass':
      return (
        <svg aria-hidden="true" viewBox="0 0 28 28" fill="none" className={className}>
          <circle cx="14" cy="14" r="9.5" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M17.5 10.5L15.3 15.3L10.5 17.5L12.7 12.7L17.5 10.5Z"
            stroke="var(--terracotta)"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'snake':
      return (
        <svg aria-hidden="true" viewBox="0 0 28 28" fill="none" className={className}>
          <path
            d="M6 19C6 15 11 15 14 14C17 13 22 13 22 9C22 6.5 19.5 5 17 5C14.5 5 13 6.8 13 8.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="13" cy="21" r="1.5" fill="var(--terracotta)" />
        </svg>
      )
    case 'puzzle':
      return (
        <svg aria-hidden="true" viewBox="0 0 28 28" fill="none" className={className}>
          <path
            d="M6 9H11C11 7 12.5 5.5 14 5.5C15.5 5.5 17 7 17 9H22V14C20 14 18.5 15.5 18.5 17C18.5 18.5 20 20 22 20V22H6V9Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'chart':
      return (
        <svg aria-hidden="true" viewBox="0 0 28 28" fill="none" className={className}>
          <path d="M5 22H23" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <rect x="7" y="14" width="3.5" height="6" rx="0.8" stroke="currentColor" strokeWidth="1.6" />
          <rect x="12.5" y="10" width="3.5" height="10" rx="0.8" stroke="currentColor" strokeWidth="1.6" />
          <rect x="18" y="6.5" width="3.5" height="13.5" rx="0.8" stroke="var(--terracotta)" strokeWidth="1.6" />
        </svg>
      )
    default:
      return (
        <svg aria-hidden="true" viewBox="0 0 28 28" fill="none" className={className}>
          <path
            d="M14 4L16.2 11.8L24 14L16.2 16.2L14 24L11.8 16.2L4 14L11.8 11.8L14 4Z"
            stroke="var(--terracotta)"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      )
  }
}
