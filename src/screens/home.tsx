import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../lib/firebase'

export default function Home() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleWaitlist(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const email = (e.currentTarget.querySelector('input[type="email"]') as HTMLInputElement).value.trim()
    setSubmitting(true)
    try {
      await addDoc(collection(db, 'waitlist'), {
        email,
        createdAt: serverTimestamp(),
      })
    } catch (err) {
      console.error('Waitlist save failed:', err)
    } finally {
      setSubmitted(true)
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* ══ NAV ══ */}
      <nav>
        <div className="nav-logo">
          <span className="grad">Check</span>Vault
        </div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How it works</a></li>
          <li><a href="#trust">Privacy</a></li>
        </ul>
        <div className="nav-cta">
          <a href="#waitlist" className="btn btn-primary btn-sm">Join Waitlist</a>
        </div>
      </nav>

      {/* ══ HERO ══ */}
      <section className="hero">
        <div className="hero-badge">
          <span className="dot"></span>
          Powered by AI
        </div>

        <h1>
          <span className="word grad">Scan.</span>&nbsp;
          <span className="word">Save.</span>&nbsp;
          <span className="word grad">Repeat.</span>
        </h1>

        <p className="hero-tagline">
          The future of expense tracking is here.<br />
          <em>Snap a receipt — let AI do the rest.</em>
        </p>

        <div className="hero-actions">
          <a href="#waitlist" className="btn btn-primary">Join the Waitlist</a>
          <a href="#features" className="btn btn-secondary">See how it works</a>
        </div>

        <div className="hero-stores" id="download">
          <div className="store-badge" style={{ cursor: 'default', opacity: 0.6 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="store-badge-text">
              <small>App Store</small>
              <span>Coming soon</span>
            </div>
          </div>
          <div className="store-badge" style={{ cursor: 'default', opacity: 0.6 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3l7.07 7.07M3 21l7.07-7.07M21 12H9" />
              <path d="M9 12l5-9 5 9-5-9" />
              <path d="M14 3l7 9-7 9" />
            </svg>
            <div className="store-badge-text">
              <small>Google Play</small>
              <span>Coming soon</span>
            </div>
          </div>
        </div>

        {/* Phone mockup */}
        <div className="hero-mockup">
          <div className="phone-frame">

            {/* Notch + status bar */}
            <div className="p-notch-bar">
              <div className="p-notch"></div>
              <span className="p-time">23:34</span>
              <div className="p-icons">
                {/* signal dots */}
                <svg viewBox="0 0 16 8">
                  <circle cx="2" cy="4" r="1.6" fill="white" />
                  <circle cx="6.5" cy="4" r="1.6" fill="white" />
                  <circle cx="11" cy="4" r="1.6" fill="white" />
                  <circle cx="15.5" cy="4" r="1.6" fill="white" opacity="0.35" />
                </svg>
                {/* wifi */}
                <svg viewBox="0 0 14 10">
                  <path d="M7 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" fill="white" />
                  <path d="M4.1 6a4.1 4.1 0 0 1 5.8 0l.9-1A5.5 5.5 0 0 0 7 3.5 5.5 5.5 0 0 0 3.2 5z" fill="white" opacity="0.7" />
                  <path d="M1.3 3.2A8 8 0 0 1 7 1a8 8 0 0 1 5.7 2.2l.9-1A9.4 9.4 0 0 0 7 0a9.4 9.4 0 0 0-6.6 2.2z" fill="white" opacity="0.4" />
                </svg>
                {/* battery */}
                <svg viewBox="0 0 22 12">
                  <rect x="0" y="1.5" width="18" height="9" rx="2" fill="none" stroke="white" strokeWidth="1.2" opacity="0.5" />
                  <rect x="1.5" y="3" width="14" height="6" rx="1" fill="white" />
                  <rect x="19" y="4" width="2.5" height="4" rx="1" fill="white" opacity="0.5" />
                </svg>
              </div>
            </div>

            {/* Screen content */}
            <div className="p-scroll">

              {/* Header */}
              <div className="p-header">
                <div>
                  <div className="p-welcome">Welcome back,</div>
                  <div className="p-username">DzmitryS</div>
                </div>
                <div className="p-header-icon">
                  <svg viewBox="0 0 24 24">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                    <circle cx="20" cy="7" r="3" />
                    <line x1="22.1" y1="9.1" x2="24" y2="11" />
                  </svg>
                </div>
              </div>

              {/* Spending cap */}
              <div className="p-cap-label">Spending Cap Limit: <strong>4578.00 USD</strong></div>

              {/* Arc gauge */}
              <div className="p-arc-wrap">
                <svg width="168" height="88" viewBox="0 0 168 88">
                  {/* Track arc */}
                  <path d="M10,84 A74,74 0 0,1 158,84" fill="none" stroke="rgba(126,217,87,0.15)" strokeWidth="9" strokeLinecap="round" />
                  {/* Progress arc */}
                  <path d="M10,84 A74,74 0 0,1 12,72" fill="none" stroke="url(#arcGrad)" strokeWidth="9" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#0097b2" />
                      <stop offset="100%" stopColor="#7ed957" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="p-arc-pct">0%</div>
              </div>

              <div className="p-expenses-label">Expenses March: <strong>0.00 USD</strong></div>

              {/* Add via label */}
              <div className="p-add-label">Please add your expense via:</div>

              {/* Action buttons */}
              <div className="p-actions">
                <div className="p-action">
                  <div className="p-action-btn">
                    <svg viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="3" />
                      <path d="M8 3v2M16 3v2M8 19v2M16 19v2M3 8h2M19 8h2M3 16h2M19 16h2" />
                      <rect x="8" y="8" width="8" height="8" rx="1" />
                    </svg>
                  </div>
                  <div className="p-action-label">Scan Receipt</div>
                </div>
                <div className="p-action">
                  <div className="p-action-btn" style={{ background: 'linear-gradient(135deg,#0097b2,#5bbf40)' }}>
                    <svg viewBox="0 0 24 24">
                      <polyline points="16 16 12 12 8 16" />
                      <line x1="12" y1="12" x2="12" y2="21" />
                      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                    </svg>
                  </div>
                  <div className="p-action-label">Upload Receipt</div>
                </div>
                <div className="p-action">
                  <div className="p-action-btn" style={{ background: 'linear-gradient(135deg,#1a7a3a,#0097b2)' }}>
                    <svg viewBox="0 0 24 24">
                      <rect x="3" y="3" width="4" height="4" rx="0.5" /><rect x="10" y="3" width="4" height="4" rx="0.5" /><rect x="17" y="3" width="4" height="4" rx="0.5" />
                      <rect x="3" y="10" width="4" height="4" rx="0.5" /><rect x="10" y="10" width="4" height="4" rx="0.5" /><rect x="17" y="10" width="4" height="4" rx="0.5" />
                      <rect x="3" y="17" width="4" height="4" rx="0.5" /><rect x="10" y="17" width="4" height="4" rx="0.5" /><rect x="17" y="17" width="4" height="4" rx="0.5" />
                    </svg>
                  </div>
                  <div className="p-action-label">Add manually</div>
                </div>
              </div>

              {/* AI Finance Advisor */}
              <div className="p-ai-card">
                <div className="p-ai-header">AI Finance Advisor</div>
                <div className="p-ai-body">
                  <div className="p-ai-bubble">
                    <svg viewBox="0 0 24 24">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div className="p-ai-text">
                    <div className="p-ai-title">Ask your financial advisor</div>
                    <div className="p-ai-sub">Get spending tips, budget advice &amp; more</div>
                  </div>
                  <div className="p-ai-chevron">›</div>
                </div>
              </div>

            </div>

            {/* Bottom pill tab bar */}
            <div className="p-tabbar">
              <div className="p-tab-active">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
                <span className="p-tab-active-label">DASHBOARD</span>
              </div>
              <div className="p-tab-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="13" y2="17" />
                </svg>
              </div>
              <div className="p-tab-icon">
                <svg viewBox="0 0 24 24">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <div className="p-tab-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <div className="stats-strip">
        <div className="stat-item">
          <div className="stat-number grad">10s</div>
          <div className="stat-label">to scan any receipt</div>
        </div>
        <div className="stat-item">
          <div className="stat-number grad">100%</div>
          <div className="stat-label">your data, your privacy</div>
        </div>
        <div className="stat-item">
          <div className="stat-number grad">Free</div>
          <div className="stat-label">to get started</div>
        </div>
      </div>

      {/* ══ FEATURES ══ */}
      <section className="features" id="features">
        <div className="section-header">
          <div className="section-eyebrow">Features</div>
          <h2 className="section-title">Everything you need</h2>
          <p className="section-sub">Smart tools to take full control of your spending.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>
            <div className="feature-title">Instant receipt scanning</div>
            <div className="feature-desc">Capture any receipt in seconds with your camera. Our AI extracts every line item automatically.</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
                <path d="M15 2v2M9 2v2M15 20v2M9 20v2M2 15h2M2 9h2M20 15h2M20 9h2" />
              </svg>
            </div>
            <div className="feature-title">AI-powered insights</div>
            <div className="feature-desc">Get personalised tips on where your money goes. Ask your AI advisor anything about your spending.</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            </div>
            <div className="feature-title">Spending analytics</div>
            <div className="feature-desc">Visual breakdowns by category, time and amount. See exactly where every dollar goes.</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </div>
            <div className="feature-title">Budget alerts</div>
            <div className="feature-desc">Know before you overspend. Set a monthly limit and get notified when you're getting close.</div>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <div className="how-it-works" id="how-it-works">
        <div className="how-inner">
          <div className="section-header">
            <div className="section-eyebrow">How it works</div>
            <h2 className="section-title">Three steps to clarity</h2>
            <p className="section-sub">From receipt in hand to insight in seconds.</p>
          </div>

          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-title">Snap your receipt</div>
              <div className="step-desc">Point your camera at any receipt — paper, digital, or email. CheckVault reads it instantly.</div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-title">AI categorises it</div>
              <div className="step-desc">Every item is tagged, totalled, and filed automatically. No manual entry, ever.</div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-title">Understand your money</div>
              <div className="step-desc">Explore trends, chat with your AI advisor, and stay ahead of your budget.</div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ TRUST ══ */}
      <section className="trust" id="trust">
        <div className="section-header">
          <div className="section-eyebrow">Built with trust</div>
          <h2 className="section-title">A few things to know</h2>
          <p className="section-sub">We believe in being upfront about how CheckVault works.</p>
        </div>

        <div className="trust-grid">
          <div className="trust-card">
            <div className="trust-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="trust-title">Your data stays yours</div>
            <div className="trust-desc">Receipt data is used only to generate insights and find discounts — never sold or shared with third parties.</div>
          </div>

          <div className="trust-card">
            <div className="trust-icon">
              <svg viewBox="0 0 24 24">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            </div>
            <div className="trust-title">How we earn</div>
            <div className="trust-desc">Some links are affiliate links. You save money, stores share a small commission with us. Win-win — and we'll always be transparent about it.</div>
          </div>

          <div className="trust-card">
            <div className="trust-icon">
              <svg viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div className="trust-title">Supported by the community</div>
            <div className="trust-desc">CheckVault is free thanks to users who believe in it. Every contribution keeps the app independent and ad-free.</div>
          </div>
        </div>
      </section>

      {/* ══ CTA / WAITLIST ══ */}
      <section className="cta-section" id="waitlist">
        <h2>Be the first.<br /><span className="grad">Join the waitlist.</span></h2>
        <p>CheckVault is launching soon. Drop your email and we'll notify you the moment it's live.</p>

        {!submitted ? (
          <form className="waitlist-form" onSubmit={handleWaitlist}>
            <input type="email" className="waitlist-input" placeholder="your@email.com" required />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ fontSize: '15px', padding: '14px 28px', whiteSpace: 'nowrap' }}
              disabled={submitting}
            >
              {submitting ? 'Saving…' : 'Notify me'}
            </button>
          </form>
        ) : (
          <div className="waitlist-success">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            You're on the list! We'll be in touch.
          </div>
        )}

        <div className="store-coming">
          <div className="store-badge" style={{ cursor: 'default', opacity: 0.55 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="store-badge-text"><small>App Store</small><span>Coming soon</span></div>
          </div>
          <div className="store-badge" style={{ cursor: 'default', opacity: 0.55 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3l7.07 7.07M3 21l7.07-7.07M21 12H9" />
              <path d="M9 12l5-9 5 9-5-9" />
              <path d="M14 3l7 9-7 9" />
            </svg>
            <div className="store-badge-text"><small>Google Play</small><span>Coming soon</span></div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer>
        <div className="footer-logo"><span className="grad">Check</span>Vault</div>
        <ul className="footer-links">
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms of Service</Link></li>
        </ul>
        <div className="footer-copy">© 2026 CheckVault. All rights reserved.</div>
      </footer>
    </>
  )
}
