import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../lib/firebase'

const ISSUE_TYPES = [
  'Account & Login',
  'Receipt Scanning',
  'AI Advisor',
  'Billing & Subscription',
  'Data & Privacy',
  'Bug Report',
  'Feature Request',
  'Other',
]

export default function Support() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSupport(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)

    const form = e.currentTarget
    const name = (form.querySelector('#s-name') as HTMLInputElement).value.trim()
    const email = (form.querySelector('#s-email') as HTMLInputElement).value.trim()
    const issueType = (form.querySelector('#s-type') as HTMLSelectElement).value
    const message = (form.querySelector('#s-message') as HTMLTextAreaElement).value.trim()

    if (!name || !email || !issueType || !message) {
      setError('Please fill in all fields.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    if (message.length < 20) {
      setError('Please describe your issue in at least 20 characters.')
      return
    }

    setSubmitting(true)
    try {
      await addDoc(collection(db, 'support_requests'), {
        name,
        email,
        issueType,
        message,
        createdAt: serverTimestamp(),
        status: 'open',
      })
      setSubmitted(true)
    } catch (err) {
      console.error('Support request failed:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* ══ NAV ══ */}
      <nav>
        <div className="nav-logo">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span className="grad">Check</span>Vault
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/#features">Features</Link></li>
          <li><Link to="/#how-it-works">How it works</Link></li>
          <li><Link to="/#trust">Privacy</Link></li>
        </ul>
        <div className="nav-cta">
          <Link to="/#waitlist" className="btn btn-primary btn-sm">Join Waitlist</Link>
        </div>
      </nav>

      {/* ══ SUPPORT CONTENT ══ */}
      <div className="legal-container" style={{ maxWidth: 640 }}>
        <span className="legal-eyebrow">Help Centre</span>
        <h1 className="legal-title">Contact <span className="grad">Support</span></h1>
        <p className="legal-updated">We typically respond within 1–2 business days.</p>
        <div className="legal-divider" />

        {!submitted ? (
          <form onSubmit={handleSupport} className="support-form" noValidate>

            <div className="support-field">
              <label htmlFor="s-name" className="support-label">Full name</label>
              <input
                id="s-name"
                type="text"
                className="support-input"
                placeholder="Jane Smith"
                maxLength={120}
                required
              />
            </div>

            <div className="support-field">
              <label htmlFor="s-email" className="support-label">Email address</label>
              <input
                id="s-email"
                type="email"
                className="support-input"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="support-field">
              <label htmlFor="s-type" className="support-label">Issue type</label>
              <select id="s-type" className="support-input support-select" required defaultValue="">
                <option value="" disabled>Select a category…</option>
                {ISSUE_TYPES.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="support-field">
              <label htmlFor="s-message" className="support-label">Description</label>
              <textarea
                id="s-message"
                className="support-input support-textarea"
                placeholder="Please describe your issue in as much detail as possible…"
                rows={6}
                maxLength={2000}
                required
              />
            </div>

            {error && (
              <div className="waitlist-error">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {error}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', fontSize: '15px', padding: '14px 28px', marginTop: 8 }}
              disabled={submitting}
            >
              {submitting ? 'Sending…' : 'Send message'}
            </button>
          </form>
        ) : (
          <div className="waitlist-success" style={{ marginTop: 32 }}>
            <div className="waitlist-success-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className="waitlist-success-title">Message sent!</div>
            <div className="waitlist-success-sub">Thanks for reaching out. We'll get back to you within 1–2 business days.</div>
          </div>
        )}
      </div>

      {/* ══ FOOTER ══ */}
      <footer>
        <div className="footer-logo"><span className="grad">Check</span>Vault</div>
        <ul className="footer-links">
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms of Service</Link></li>
          <li><Link to="/support">Support</Link></li>
        </ul>
        <div className="footer-copy">© 2026 CheckVault. All rights reserved.</div>
      </footer>
    </>
  )
}
