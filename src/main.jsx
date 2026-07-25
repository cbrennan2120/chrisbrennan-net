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
  PawPrint,
  Wrench,
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
    href: 'https://www.linkedin.com/in/chris-brennan-38b27486/',
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
          <img
            src="/assets/chrisspace-main-v3.png"
            alt="Retro-industrial illustration of a team leader surrounded by symbols for people, animals, practical tools, retail, and fitness."
            width="1536"
            height="1024"
            fetchPriority="high"
          />
        </picture>
        <div className="hero-art-copy" aria-hidden="true">
          <span className="hero-art-label">ChrisSpace 2.0</span>
          <strong className="hero-art-message">
            <span>Lead Teams.</span>
            <span>Build Systems.</span>
            <em>Strengthen Communities.</em>
          </strong>
          <span className="hero-art-domain">ChrisBrennan.Net</span>
        </div>
        <a
          className="career-hotspot"
          href="/esports/"
          aria-label="Open Chris Brennan's st1ckg0d esports career history"
        >
          <span aria-hidden="true">CAREER ORIGINS // ESPORTS</span>
        </a>
      </div>
      <div className="mission-panel">
        <h1 id="hero-title" className="professional-title">
          <span>Chris Brennan</span>
          Retail Leader, Community Builder &amp; Animal Advocate
        </h1>
        <div className="terminal-copy">
          <span className="prompt" aria-hidden="true">&gt;</span>
          <p>Buildin&apos; stuff. Helpin&apos; animals. Gettin&apos; strong. Havin&apos; fun.</p>
          <span className="cursor" aria-hidden="true" />
        </div>
        <p className="intro-copy">
          You found Chris Brennan—a retail leader, builder, animal advocate, competitive gamer,
          bodybuilder, and dad in Michigan. This is the front door to whatever he&apos;s making next.
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
        <span className="eyebrow">The stage files</span>
        <h2 id="bodybuilding-title">Chris Brennan Bodybuilding</h2>
        <p>
          A 100-pound transformation, a first NPC stage, and the systems, coaching, health lessons,
          and daily execution behind the result.
        </p>
        <a className="bodybuilding-link" href="/bodybuilding/">
          <Dumbbell aria-hidden="true" />
          Enter the bodybuilding page
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
        <small className="eyebrow">My Macros</small>
        <strong id="macros-title">Week A / Week B Plan</strong>
        <span>
          Two alternating meal and training plans designed around different weekly schedules.
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

function AnimalsPortal() {
  return (
    <a
      className="macros-portal animals-portal"
      href="https://animals.chrisbrennan.net/"
      aria-labelledby="animals-title"
    >
      <span className="animals-icon" aria-hidden="true">
        <img src="/assets/animal-advocacy/chris-and-bruno-at-the-creek.png" alt="" />
        <PawPrint />
      </span>
      <span className="macros-copy">
        <small className="eyebrow">Helpin&apos; animals</small>
        <strong id="animals-title">Animal Advocacy + Pet Retail</strong>
        <span>
          More than 26 years in animal-focused retail, Humane Society board service,
          community work, and trusted local ways to adopt or donate.
        </span>
        <span className="macros-tags" aria-hidden="true">
          <i>Career journey</i>
          <i>Board service</i>
          <i>Adopt local</i>
        </span>
      </span>
      <span className="macros-launch">
        Explore the animals page
        <ArrowUpRight aria-hidden="true" />
      </span>
    </a>
  );
}

function EsportsPortal() {
  return (
    <a
      className="macros-portal esports-portal"
      href="/esports/"
      aria-labelledby="esports-title"
    >
      <span className="esports-icon" aria-hidden="true">
        <img src="/assets/esports-archive/cpl-winner-check.png" alt="" />
      </span>
      <span className="macros-copy">
        <small className="eyebrow">Career origins</small>
        <strong id="esports-title">Competitive Gaming &amp; Esports</strong>
        <span>
          Before leading retail teams, I captained competitive gaming teams, won a CPL
          championship, broadcast matches, and learned how to communicate, adapt, and perform
          under pressure.
        </span>
        <span className="macros-tags" aria-hidden="true">
          <i>CPL Champion</i>
          <i>Team Captain</i>
          <i>Broadcaster</i>
        </span>
      </span>
      <span className="macros-launch">
        Explore my esports history
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
          href="https://battlecreekjobs.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="project-icon" aria-hidden="true">💼</span>
          <span className="project-copy">
            <small>Hiring + onboarding platform</small>
            <strong>Battle Creek Jobs</strong>
            <span>
              When the usual hiring tools were not delivering the right experience for Pet Supplies
              Plus, Chris built a dedicated platform covering the application process through
              onboarding—with room to support other local employers in the future.
            </span>
          </span>
          <span className="project-launch">
            Open project
            <ArrowUpRight aria-hidden="true" />
          </span>
        </a>
        <a
          className="project-card"
          href="https://potty.chrisbrennan.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="project-icon" aria-hidden="true">💩</span>
          <span className="project-copy">
            <small>Human health tracker</small>
            <strong>Poop Tracker</strong>
            <span>
              Log human bowel movements and pee, record Bristol Stool Scale types, and spot
              bathroom patterns over time.
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
          <p>Collaboration, community, tech, fitness, or animal-focused ideas are always welcome.</p>
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
        <AnimalsPortal />
        <EsportsPortal />
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
