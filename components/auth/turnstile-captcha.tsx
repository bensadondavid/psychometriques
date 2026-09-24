'use client'

import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string
      callback: (token: string) => void
      'expired-callback': () => void
      'error-callback': () => void
      theme: 'light'
      language: 'fr'
      appearance: 'interaction-only'
    }
  ) => string
  remove: (widgetId: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

export const turnstileSiteKey =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? ''

export function TurnstileCaptcha({
  onTokenChange,
  resetKey,
}: {
  onTokenChange: (token: string) => void
  resetKey: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const callbackRef = useRef(onTokenChange)
  const [scriptReady, setScriptReady] = useState(
    () => typeof window !== 'undefined' && Boolean(window.turnstile)
  )

  useEffect(() => {
    callbackRef.current = onTokenChange
  }, [onTokenChange])

  useEffect(() => {
    if (!turnstileSiteKey || !scriptReady || !containerRef.current) return

    const widgetId = window.turnstile?.render(containerRef.current, {
      sitekey: turnstileSiteKey,
      callback: (token) => callbackRef.current(token),
      'expired-callback': () => callbackRef.current(''),
      'error-callback': () => callbackRef.current(''),
      theme: 'light',
      language: 'fr',
      appearance: 'interaction-only',
    })

    return () => {
      if (widgetId) window.turnstile?.remove(widgetId)
    }
  }, [resetKey, scriptReady])

  if (!turnstileSiteKey) return null

  return (
    <div>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
        onReady={() => setScriptReady(true)}
      />
      <div ref={containerRef} />
    </div>
  )
}
