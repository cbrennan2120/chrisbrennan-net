import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Apple,
  ArrowUpRight,
  Dumbbell,
  Facebook,
  Instagram,
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
      <h1 id="hero-title" className="sr-only">Welcome to ChrisSpace 2.0</h1>
      <div className="hero-frame">
        <Bolt className="bolt-tl" />
        <Bolt className="bolt-tr" />
        <Bolt className="bolt-bl" />
        <Bolt className="bolt-br" />
        <picture>
          <img
            src="/assets/chrisspace-main.png"
            alt="Welcome to ChrisSpace 2.0. Chris Brennan builds useful things, helps animals, gets strong, and has fun."
            width="1536"
            height="1024"
            fetchPriority="high"
          />
        </picture>
        <a
          className="engineer-hotspot"
          href="/esports/"
          aria-label="Open Chris Brennan's st1ckg0d esports career history"
        >
          <span aria-hidden="true">PLAYER 1 // ESPORTS BIO</span>
        </a>
      </div>
      <div className="mission-panel">
        <div className="terminal-copy">
          <span className="prompt" aria-hidden="true">&gt;</span>
          <p>Build useful things. Help animals. Build yourself in real life.</p>
          <span className="cursor" aria-hidden="true" />
        </div>
        <p className="intro-copy">
          Chris Brennan is a Michigan-based retail leader, builder of practical tools, dad, animal
          advocate, and lifelong competitor. He leads teams, solves real problems, and keeps showing
          up when life gets complicated.
        </p>
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
        <small className="eyebrow">Training in real life</small>
        <strong id="macros-title">The Current Plan</strong>
        <span>
          My current meal plan and alternating workout split, organized around family weeks, work,
          and recovery.
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
    <section className="project-bay" aria-labelledby="projects-title">
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
