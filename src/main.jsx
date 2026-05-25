import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Brain,
  CalendarDays,
  ClipboardCheck,
  Dumbbell,
  Flame,
  Gauge,
  Goal,
  HeartPulse,
  Instagram,
  Medal,
  MessageCircle,
  Mountain,
  Plane,
  Scale,
  Sparkles,
  Target,
  Trophy,
  Utensils,
  Zap
} from 'lucide-react';
import './styles.css';

const navItems = ['My Story', 'Timeline', 'Gallery', 'Behind Scenes', 'Journal', 'Goals', 'Contact'];

const storyPillars = [
  {
    icon: Target,
    title: 'Why I Started',
    text: 'I wanted a challenge that demanded discipline, purpose, and proof that daily standards compound.'
  },
  {
    icon: Mountain,
    title: 'The Challenges',
    text: 'Long days, low energy, plateaus, and learning how to stay consistent when life kept moving.'
  },
  {
    icon: Brain,
    title: 'Mindset Shifts',
    text: 'Prep taught patience, trust in the process, and how identity is built through repeated action.'
  },
  {
    icon: Trophy,
    title: 'What I Learned',
    text: 'The stage was the moment, but the real win was becoming someone I could be proud of every day.'
  }
];

const timeline = [
  {
    icon: Dumbbell,
    label: '12-8 Weeks Out',
    text: 'Foundation work, training intensity, cardio discipline, and consistent check-ins.'
  },
  {
    icon: ClipboardCheck,
    label: '8-4 Weeks Out',
    text: 'Nutrition locked in, posing practice sharpened, and the routine became automatic.'
  },
  {
    icon: HeartPulse,
    label: '4-2 Weeks Out',
    text: 'Details mattered more: recovery, weak-point focus, conditioning, and presentation.'
  },
  {
    icon: Flame,
    label: 'Peak Week',
    text: 'Lower volume, tighter focus, careful execution, and staying calm under pressure.'
  },
  {
    icon: Zap,
    label: 'Show Day',
    text: 'Pump up, tan, stage lights, and turning months of prep into one clear moment.'
  },
  {
    icon: Medal,
    label: 'On Stage',
    text: 'A first-show memory and the first real benchmark for the next version.'
  }
];

const gallery = [
  {
    title: 'Front Comparison',
    category: 'Men’s Bodybuilding',
    caption: 'Badge 1 holding the front comparison under the lights.',
    image: '/assets/show/badge1-front-comparison.jpg'
  },
  {
    title: 'Side Chest',
    category: 'Comparison Round',
    caption: 'A clean side pose from the first comparison callout.',
    image: '/assets/show/badge1-side-chest.jpg'
  },
  {
    title: 'Back Double Biceps',
    category: 'Comparison Round',
    caption: 'Rear comparison with badge 1 in purple trunks.',
    image: '/assets/show/badge1-back-double.jpg'
  },
  {
    title: 'Ab And Thigh',
    category: 'Comparison Round',
    caption: 'Locked in during the ab and thigh call.',
    image: '/assets/show/badge1-ab-thigh.jpg'
  },
  {
    title: 'Most Muscular',
    category: 'Comparison Round',
    caption: 'Finishing the callout with a hard squeeze.',
    image: '/assets/show/badge1-most-muscular.jpg'
  },
  {
    title: 'Side Profile',
    category: 'Comparison Round',
    caption: 'Profile view from the opening comparison.',
    image: '/assets/show/badge1-side-profile.jpg'
  }
];

const behindScenes = [
  { icon: Utensils, title: 'Meals', text: 'Prep meals, tracking, sodium, water, and the boring parts that worked.' },
  { icon: Dumbbell, title: 'Pump Room', text: 'Bands, focus, nerves, and the minutes before stepping out.' },
  { icon: Scale, title: 'Check-ins', text: 'Photos, weight trends, adjustments, and coach feedback.' },
  { icon: MessageCircle, title: 'Coach Moments', text: 'The conversations that kept the plan clear and the mindset steady.' },
  { icon: Plane, title: 'Travel & Show Day', text: 'Packing, logistics, backstage timing, and staying ready.' }
];

const journalPosts = [
  ['What I’d Do Differently', 'The lessons I learned the hard way and what I would change next time.'],
  ['Lessons From Prep', 'Discipline, patience, hunger, and showing up when motivation faded.'],
  ['Post-Show Reflections', 'What it felt like after the tan faded and the stage lights went off.'],
  ['How Bodybuilding Changed Me', 'More than a physique, it changed my standards and identity.']
];

function BrandLogo() {
  return (
    <a className="brand" href="#top" aria-label="Brennan home">
      <img src="/assets/logo-square.png" alt="" />
      <span>BRENNAN</span>
    </a>
  );
}

function SectionHeader({ title, action }) {
  return (
    <div className="section-header">
      <div>
        <h2>{title}</h2>
        <span className="title-rule" />
      </div>
      {action ? (
        <a className="section-action" href={action.href}>
          {action.label}
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-stage" aria-hidden="true">
        <div className="stage-lights" />
        <div className="stage-floor" />
        <div className="silhouette" />
      </div>
      <div className="hero-content">
        <h1>
          From First Prep
          <span>To First Stage</span>
        </h1>
        <div className="pulse-line" aria-hidden="true" />
        <p>The journey to my first bodybuilding show.</p>
        <div className="hero-actions">
          <a className="button primary" href="#story">My Story</a>
          <a className="button secondary" href="#gallery">View Gallery</a>
        </div>
      </div>
      <a className="scroll-cue" href="#story" aria-label="Scroll to my story">
        <ArrowRight aria-hidden="true" />
      </a>
    </section>
  );
}

function Story() {
  return (
    <section className="band story" id="story">
      <div className="section-copy">
        <SectionHeader title="My Story" />
        <p className="lead">This is not just about stepping on stage. It is about who I became in the process.</p>
        <p>
          From early morning workouts to late-night meals, the doubts, the discipline, and the mindset shifts changed
          everything. This is the story behind the first show.
        </p>
        <a className="button secondary compact" href="#journal">Read the Story</a>
      </div>
      <div className="pillar-grid">
        {storyPillars.map(({ icon: Icon, title, text }) => (
          <article className="pillar" key={title}>
            <Icon size={38} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PrepTimeline() {
  return (
    <section className="band timeline-section" id="timeline">
      <SectionHeader title="Prep Timeline" />
      <div className="timeline">
        {timeline.map(({ icon: Icon, label, text }) => (
          <article className="timeline-item" key={label}>
            <div className="timeline-icon">
              <Icon size={25} aria-hidden="true" />
            </div>
            <h3>{label}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function GalleryCard({ item }) {
  const { title, category, caption, image } = item;
  return (
    <figure className="gallery-card">
      <img src={image} alt={`${title} - ${category}`} loading="lazy" />
      <figcaption>
        <strong>{title}</strong>
        <span>{category}</span>
        <p>{caption}</p>
      </figcaption>
    </figure>
  );
}

function Gallery() {
  return (
    <section className="band gallery-section" id="gallery">
      <SectionHeader title="Featured Competition Gallery" action={{ label: 'View full gallery', href: '#contact' }} />
      <div className="gallery-grid">
        {gallery.map((item, index) => (
          <GalleryCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}

function BehindScenes() {
  return (
    <section className="band behind" id="behind-scenes">
      <SectionHeader title="Behind The Scenes" action={{ label: 'View more', href: '#journal' }} />
      <div className="behind-grid">
        {behindScenes.map(({ icon: Icon, title, text }) => (
          <article className="behind-card" key={title}>
            <div className="behind-image">
              <Icon size={30} aria-hidden="true" />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Journal() {
  return (
    <section className="band journal" id="journal">
      <SectionHeader title="Journal" action={{ label: 'Read all posts', href: '#contact' }} />
      <div className="journal-grid">
        {journalPosts.map(([title, text], index) => (
          <article className="journal-card" key={title}>
            <CalendarDays size={30} aria-hidden="true" />
            <span>Entry 0{index + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <a href="#contact">Read more <ArrowRight size={14} aria-hidden="true" /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Goals() {
  const goals = [
    { icon: Goal, title: 'Next Show', text: 'New division, new stage, and a better version of the same standard.' },
    { icon: Gauge, title: 'Improvements', text: 'More size, sharper symmetry, stronger posing, and cleaner conditioning.' },
    { icon: Dumbbell, title: 'Offseason Focus', text: 'Build, recover, learn, and come back stronger.' }
  ];

  return (
    <section className="band goals" id="goals">
      <SectionHeader title="Future Goals" />
      <div className="goal-grid">
        {goals.map(({ icon: Icon, title, text }) => (
          <article className="goal-item" key={title}>
            <Icon size={42} aria-hidden="true" />
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer className="site-footer" id="contact">
      <div>
        <BrandLogo />
        <p>Discipline. Dedication. Evolution. This is just the beginning.</p>
      </div>
      <div>
        <h2>Let’s Connect</h2>
        <ul className="socials">
          <li><Instagram size={17} aria-hidden="true" /> Instagram</li>
          <li><Sparkles size={17} aria-hidden="true" /> TikTok</li>
          <li><Zap size={17} aria-hidden="true" /> X</li>
          <li><MessageCircle size={17} aria-hidden="true" /> Facebook</li>
        </ul>
      </div>
      <div>
        <h2>Collaborations</h2>
        <p>Open to coaching, partnerships, sponsorships, and projects aligned with the mission.</p>
        <a className="button secondary compact" href="mailto:hello@example.com">Work With Me</a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <header className="site-header">
        <BrandLogo />
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`}>
              {item}
            </a>
          ))}
        </nav>
      </header>
      <main>
        <Hero />
        <Story />
        <PrepTimeline />
        <Gallery />
        <BehindScenes />
        <Journal />
        <Goals />
      </main>
      <Contact />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
