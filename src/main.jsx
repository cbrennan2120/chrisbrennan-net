import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Apple,
  ArrowUpRight,
  Dumbbell,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Music2,
  Wrench,
  Youtube,
  Zap
} from 'lucide-react';
import './styles.css';

const socialLinks = [
  {
    label: 'Instagram',
    handle: '@cbrennan2120',
    href: 'https://www.instagram.com/cbrennan2120',
    icon: Instagram
  },
  {
    label: 'TikTok',
    handle: '@hypertrophychris',
    href: 'https://www.tiktok.com/@hypertrophychris',
    icon: Music2
  },
  {
    label: 'YouTube',
    handle: '@cbrennan2120',
    href: 'https://www.youtube.com/@cbrennan2120',
    icon: Youtube
  },
  {
    label: 'X',
    handle: '@stickgod',
    href: 'https://x.com/stickgod',
    icon: Zap
  },
  {
    label: 'Facebook',
    handle: 'Chris Adam Brennan',
    href: 'https://www.facebook.com/ChrisAdamBrennan',
    icon: Facebook
  },
  {
    label: 'LinkedIn',
    handle: 'Chris Brennan',
    href: 'https://www.linkedin.com/in/chris-brennan-38b27486',
    icon: Linkedin
  }
];

function Bolt({ className = '' }) {
  return <span className={`bolt ${className}`} aria-hidden="true" />;
}

function Header() {
  return (
    <header className="site-header">
      <a className="mini-brand" href="#top" aria-label="ChrisSpace 2.0 home">
        <span className="mini-mark">CB</span>
        <span>
          <strong>ChrisSpace 2.0</strong>
          <small>chrisbrennan.net</small>
        </span>
      </a>
      <div className="online-status" role="status">
        <span className="status-light" aria-hidden="true" />
        Last online: right now
      </div>
    </header>
  );
}

function Centerpiece() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-frame">
        <Bolt className="bolt-tl" />
        <Bolt className="bolt-tr" />
        <Bolt className="bolt-bl" />
        <Bolt className="bolt-br" />
        <picture>
          <source
            media="(max-width: 620px)"
            srcSet="/assets/chrisspace-hero-michigan-mobile.png"
          />
          <img
            src="/assets/chrisspace-hero-michigan-desktop.png"
            alt="A Michigan field guide collage featuring a CB compass badge, a dog and cat, a field notebook, tools, and a kettlebell."
            width="1600"
            height="720"
            fetchPriority="high"
          />
        </picture>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-copy">
          <span className="hero-eyebrow">Portage, Michigan // Leadership in practice</span>
          <h1 id="hero-title">Chris Brennan</h1>
          <p className="hero-lede">
            Retail operations leader. Builder of practical tools.
            <br />
            Animal advocate. Lifelong competitor.
          </p>
          <p className="hero-motto">Lead teams. Solve real problems. Keep showing up.</p>
          <div className="hero-actions">
            <a className="hero-action hero-action-primary" href="#projects">
              Explore my work
            </a>
            <a
              className="hero-action hero-action-secondary"
              href="https://plan.chrisbrennan.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Current plan
            </a>
          </div>
        </div>
        <a
          className="cb-hotspot"
          href="/esports/"
          aria-label="Open Chris Brennan's esports career archive"
          title="Esports archive"
        />
      </div>
      <div className="mission-panel">
        <div className="terminal-copy">
          <span className="prompt" aria-hidden="true">&gt;</span>
          <strong>System status</strong>
        </div>
        <p className="mission-copy">Build useful things. Help animals. Build yourself in real life.</p>
      </div>
    </section>
  );
}

function BodybuildingPortal() {
  return (
    <section className="bodybuilding-portal" aria-labelledby="bodybuilding-title">
      <div className="bodybuilding-photo" aria-hidden="true" />
      <div className="bodybuilding-copy">
        <span className="eyebrow">Built in real life</span>
        <h2 id="bodybuilding-title">My First Bodybuilding Show</h2>
        <p>
          I chose the stage as a hard target during a demanding season of work, fatherhood, fatigue,
          and health challenges. This is the story of the decisions and consistency that got me
          there.
        </p>
        <a className="bodybuilding-link" href="/bodybuilding/">
          <Dumbbell aria-hidden="true" />
          Read the story
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

function CurrentPlanPortal() {
  return (
    <a
      className="macros-portal"
      href="https://plan.chrisbrennan.net/"
      target="_blank"
      rel="noopener noreferrer"
      aria-labelledby="macros-title"
    >
      <span className="macros-icon" aria-hidden="true">
        <Apple />
        <Dumbbell />
      </span>
      <span className="macros-copy">
        <small className="eyebrow">My Current Plan</small>
        <strong id="macros-title">6-Day Push / Pull / Legs</strong>
        <span>
          My current hypertrophy split with exercise order, sets, rep targets, rest periods,
          weekly volume, and the meal plan I am running now.
        </span>
        <span className="macros-tags" aria-hidden="true">
          <i>Meal plan</i>
          <i>Training split</i>
        </span>
      </span>
      <span className="macros-launch">
        Open my current plan
        <ArrowUpRight aria-hidden="true" />
      </span>
    </a>
  );
}

function Projects() {
  return (
    <section className="project-bay" id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title">My Projects</h2>
      <div className="project-grid">
        <a
          className="project-card"
          href="https://potty.chrisbrennan.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="project-icon" aria-hidden="true">💩</span>
          <span className="project-copy">
            <small>Practical health tool</small>
            <strong>Poop Tracker</strong>
            <span>
              A simple way to log bathroom habits, use the Bristol Stool Scale, and notice patterns
              over time.
            </span>
          </span>
          <span className="project-launch">
            Open project
            <ArrowUpRight aria-hidden="true" />
          </span>
        </a>
      </div>
    </section>
  );
}

function SocialBoard() {
  return (
    <section className="social-section" aria-labelledby="follow-title">
      <div className="section-plate">
        <Bolt className="bolt-left" />
        <Wrench aria-hidden="true" />
        <div>
          <span className="eyebrow">Friend requests: open</span>
          <h2 id="follow-title">Follow the updates</h2>
        </div>
        <Bolt className="bolt-right" />
      </div>

      <div className="social-grid">
        {socialLinks.map(({ label, handle, href, icon: Icon }) => (
          <a className="social-card" href={href} target="_blank" rel="noopener noreferrer" key={label}>
            <span className="social-icon"><Icon aria-hidden="true" /></span>
            <span className="social-copy">
              <strong>{label}</strong>
              <small>{handle}</small>
            </span>
            <ArrowUpRight className="external-icon" aria-hidden="true" />
          </a>
        ))}
      </div>

      <aside className="contact-strip" aria-label="Collaboration contact">
        <div>
          <span className="eyebrow">Got something useful to build?</span>
          <p>
            Open to thoughtful ideas across community, technology, fitness, animal welfare, and
            practical tools.
          </p>
        </div>
        <a className="contact-button" href="mailto:cbrennan2120@gmail.com">
          <Mail aria-hidden="true" />
          Email Chris
        </a>
      </aside>
    </section>
  );
}

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Centerpiece />
        <BodybuildingPortal />
        <CurrentPlanPortal />
        <Projects />
        <SocialBoard />
      </main>
      <footer>
        <span>© 2026 Chris Brennan</span>
        <span className="footer-status"><i aria-hidden="true" /> Status: building something useful</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
