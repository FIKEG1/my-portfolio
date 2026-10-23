import { useState } from 'react'
import {
  BriefcaseBusiness,
  Bot,
  CalendarDays,
  Check,
  ChevronDown,
  Globe2,
  Menu,
  Moon,
  Sun,
  Users,
} from 'lucide-react'
import './ketari.css'

const candidates = [
  { initials: 'AK', name: 'Abebe Kebede', role: 'Full Stack Developer', years: '4 yrs', score: 92 },
  { initials: 'ST', name: 'Sara Tesfaye', role: 'Frontend Engineer', years: '3 yrs', score: 89 },
  { initials: 'DA', name: 'Dawit Alemu', role: 'Backend Developer', years: '5 yrs', score: 84 },
]

const stages = [
  ['Applied', 24],
  ['Screening', 12],
  ['Shortlisted', 7],
  ['Interview', 3],
  ['Offer', 1],
]

function CandidateCard({ candidate, featured = false }) {
  return (
    <article className={`ketari-candidate${featured ? ' is-featured' : ''}`}>
      <span className="ketari-avatar">{candidate.initials}</span>
      <div className="ketari-candidate-info">
        <strong>{candidate.name}</strong>
        <span>{candidate.role} · {candidate.years}</span>
      </div>
      <div className="ketari-score">
        <strong>{candidate.score}%</strong>
        <span>MATCH</span>
      </div>
      {featured && (
        <div className="ketari-skills">
          {['React', 'Node.js', 'PostgreSQL'].map((skill) => (
            <span key={skill}><Check size={12} />{skill}</span>
          ))}
        </div>
      )}
    </article>
  )
}

function Dashboard({ matching }) {
  return (
    <div className="ketari-visual" aria-label="Preview of the Ketari recruitment dashboard">
      <div className="ketari-dashboard">
        <div className="ketari-window-bar">
          <span className="ketari-window-dots"><i /><i /><i /></span>
          <strong>KETARI · Recruitment</strong>
          <span className="ketari-sample">SAMPLE</span>
        </div>
        <div className="ketari-dashboard-body">
          <aside className="ketari-sidebar">
            <span className="ketari-mark">k</span>
            {['Dashboard', 'Jobs', 'Applications', 'Candidates', 'AI Matching', 'Analytics'].map((item) => (
              <span key={item} className={item === 'AI Matching' ? 'selected' : ''}>{item}</span>
            ))}
          </aside>
          <div className="ketari-workspace">
            <div className="ketari-job-heading">
              <div>
                <span className="ketari-eyebrow">AI MATCHING</span>
                <h2>Senior Full Stack Developer</h2>
                <p><BriefcaseBusiness size={14} /> Engineering · Addis Ababa · Open to hybrid</p>
              </div>
              <button type="button" onClick={matching.onRun}>
                {matching.running ? 'Matching...' : 'Run matching'}
              </button>
            </div>
            <div className="ketari-stat-row">
              <div><span>APPLICANTS</span><strong>24</strong></div>
              <div><span>TOTAL MATCHES</span><strong>7</strong></div>
            </div>
            <div className="ketari-results">
              <div className="ketari-candidate-list">
                {candidates.map((candidate, index) => (
                  <CandidateCard key={candidate.initials} candidate={candidate} featured={index === 0} />
                ))}
              </div>
              <div className="ketari-stage-card">
                <strong>Hiring pipeline</strong>
                {stages.map(([stage, count]) => (
                  <div className="ketari-stage" key={stage}>
                    <span>{stage}</span>
                    <span className="ketari-stage-track"><i style={{ width: `${(count / 24) * 100}%` }} /></span>
                    <b>{count}</b>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ketari-match-popover">
        <div className="ketari-match-top">
          <span className="ketari-avatar">AK</span>
          <div><strong>Abebe Kebede</strong><span>Full Stack Developer · 4 yrs</span></div>
          <b>{matching.running ? '96%' : '92%'}<small>MATCH</small></b>
        </div>
        <div className="ketari-match-skills">
          {['React', 'Node.js', 'PostgreSQL'].map((skill) => (
            <span key={skill}><Check size={12} />{skill}</span>
          ))}
        </div>
        <p><Bot size={15} /> Matches every required skill; 4 years of relevant experience.</p>
      </div>
      <div className="ketari-interview-note">
        <CalendarDays size={17} />
        <span><strong>Interview scheduled</strong><small>Sara Tesfaye · Thu 10:00</small></span>
      </div>
      <button className="ketari-assistant" type="button" aria-label="Open AI assistant">
        <Bot size={29} /><span>AI</span>
      </button>
    </div>
  )
}

export default function KetariPage() {
  const [dark, setDark] = useState(false)
  const [running, setRunning] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const runMatching = () => {
    setRunning(true)
    window.setTimeout(() => setRunning(false), 1600)
  }

  return (
    <div className={`ketari-page${dark ? ' ketari-dark' : ''}`}>
      <header className="ketari-header">
        <a className="ketari-logo" href="#top" aria-label="Ketari home">ketari</a>
        <button className="ketari-menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          <Menu size={22} />
        </button>
        <nav className={menuOpen ? 'is-open' : ''} aria-label="Main navigation">
          <a href="#platform">Platform <ChevronDown size={15} /></a>
          <a href="#employers">For Employers <ChevronDown size={15} /></a>
          <a href="#seekers">For Job Seekers <ChevronDown size={15} /></a>
          <a className="ketari-ai-link" href="#matching"><Bot size={16} /> AI Matching</a>
          <a href="#resources">Resources <ChevronDown size={15} /></a>
        </nav>
        <div className="ketari-header-actions">
          <button type="button" className="ketari-language"><Globe2 size={16} /> EN <ChevronDown size={14} /></button>
          <span className="ketari-action-divider" />
          <button className="ketari-theme-toggle" type="button" onClick={() => setDark((value) => !value)} aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}>
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a className="ketari-sign-in" href="#signin">Sign in</a>
          <a className="ketari-get-started" href="#get-started">Get started</a>
        </div>
      </header>

      <main id="top">
        <section className="ketari-hero" id="platform">
          <div className="ketari-hero-copy">
            <p className="ketari-kicker"><Bot size={16} /> AI-POWERED RECRUITMENT</p>
            <h1>Hire better.<br />Build stronger<br className="ketari-title-break" /> teams.</h1>
            <p className="ketari-hero-description">
              KETARI combines AI-powered job matching, recruitment automation and clear candidate insights in one platform - for job seekers and for the HR teams who hire them.
            </p>
            <div className="ketari-hero-ctas">
              <a href="#employers" className="ketari-audience-card"><Users size={21} /><span><strong>For employers</strong><small>Find your next great hire</small></span></a>
              <a href="#seekers" className="ketari-audience-card"><BriefcaseBusiness size={21} /><span><strong>For job seekers</strong><small>Find work that fits you</small></span></a>
              <a href="#get-started" className="ketari-primary-cta">Get started <span>→</span></a>
            </div>
            <div className="ketari-trust-note"><span><Check size={14} /></span> Smarter hiring starts with a better match.</div>
          </div>
          <Dashboard matching={{ running, onRun: runMatching }} />
        </section>

        <section className="ketari-below-fold" id="matching">
          <p className="ketari-kicker"><Bot size={16} /> BETTER MATCHES, LESS GUESSWORK</p>
          <h2>People and opportunities, brought closer.</h2>
          <p>From the first application to the final offer, KETARI helps teams make confident decisions and helps candidates find roles where they can thrive.</p>
          <div className="ketari-feature-links">
            <article id="employers"><Users size={23} /><h3>For employers</h3><p>Organize your hiring pipeline and focus on candidates who fit the role.</p></article>
            <article id="seekers"><BriefcaseBusiness size={23} /><h3>For job seekers</h3><p>Discover opportunities aligned with your skills and ambitions.</p></article>
            <article id="resources"><Bot size={23} /><h3>AI-powered matching</h3><p>See clear, useful insights behind every recommended match.</p></article>
          </div>
          <div id="get-started" className="ketari-bottom-cta"><strong>Ready for a better match?</strong><a href="mailto:hello@ketari.com">Get started <span>→</span></a></div>
          <span id="signin" className="ketari-anchor" aria-hidden="true" />
        </section>
      </main>
    </div>
  )
}
