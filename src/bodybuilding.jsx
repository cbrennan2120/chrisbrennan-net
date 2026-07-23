import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Brain,
  CalendarDays,
  Car,
  ClipboardCheck,
  Dumbbell,
  Facebook,
  Flame,
  Gauge,
  Goal,
  HeartPulse,
  Instagram,
  MapPin,
  Medal,
  MessageCircle,
  Mountain,
  Scale,
  Sparkles,
  Target,
  Trophy,
  Utensils,
  Youtube,
  Zap
} from 'lucide-react';
import './bodybuilding.css';

const navItems = [
  { label: 'ChrisSpace Home', href: '/' },
  { label: 'My Story', href: '#story' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Journal', href: '#journal' },
  { label: 'Goals', href: '#goals' },
  { label: 'Bio', href: '#bio' },
  { label: 'Contact', href: '#contact' }
];

const storyPillars = [
  {
    icon: Target,
    title: 'The Decision',
    text: 'I picked a show because I needed a hard target. Not a vague goal, not someday, but a date on the calendar that forced me to act.'
  },
  {
    icon: Mountain,
    title: 'The Real Life Part',
    text: 'Prep happened around work, fatherhood, fatigue, medical appointments, and the normal responsibilities that do not pause for ambition.'
  },
  {
    icon: Brain,
    title: 'The Process',
    text: 'Training, food, recovery, check-ins, bloodwork awareness, and consistency became the system. The goal was progress without pretending life was perfect.'
  },
  {
    icon: Trophy,
    title: 'The Lesson',
    text: 'The stage was not a finish line for attention. It was proof that you can build yourself in real life, even when conditions are imperfect.'
  }
];

const storyArc = [
  {
    step: '01',
    title: 'The Problem',
    text: 'Anemia, fatigue, real responsibilities, and the feeling that my body had limits I could not just outwork.'
  },
  {
    step: '02',
    title: 'The Decision',
    text: 'Choosing the NPC Grand Rapids stage gave the rebuild a deadline. It turned "I should" into a date, a plan, and accountability.'
  },
  {
    step: '03',
    title: 'The Process',
    text: 'Training, food, recovery, medical awareness, and daily execution had to work together. Some days were heavy. The standard stayed simple: do the next right thing.'
  },
  {
    step: '04',
    title: 'The Stage',
    text: 'It was not "look at me." It was "I made it here." The lights, the tan, the posing, and Chelsea being there made the work real.'
  },
  {
    step: '05',
    title: 'The Lesson',
    text: 'You do not need perfect conditions to start rebuilding. You need honesty, help, structure, and enough stubborn consistency to keep showing up.'
  }
];

const realLifePhotos = [
  {
    image: '/assets/show/story/starting-point.png',
    title: 'Starting Point',
    text: 'Before the stage version, there was real life: fatherhood, work, extra weight, and the first version of the rebuild already quietly beginning.'
  },
  {
    image: '/assets/show/story/hospital-double-biceps.png',
    title: 'Still Building',
    text: 'Hospital wristband, infusion room, double biceps. Not glamorous, but honest: some chapters are about rebuilding where you are.'
  },
  {
    image: '/assets/show/story/post-show-meal.png',
    title: 'After The Work',
    text: 'The post-show meal hit different because it came after months of structure, nerves, low-energy days, and staying with the plan.'
  }
];

const timeline = [
  {
    icon: Dumbbell,
    label: '20+ Week Prep',
    text: 'Contest prep became a long, controlled build toward the 2026 NPC Grand Rapids Championships.'
  },
  {
    icon: ClipboardCheck,
    label: 'Training Split',
    text: 'High-intensity, data-tracked hypertrophy work focused on progressive overload while Coach Mo managed lean tissue retention.'
  },
  {
    icon: HeartPulse,
    label: 'Cardio Changes',
    text: 'Fasted steady-state cardio scaled upward as needed to break metabolic plateaus and sharpen conditioning.'
  },
  {
    icon: Flame,
    label: 'Peak Week',
    text: 'Learning to manage water, sodium and how my body responds to the stress while tightening for the final look.'
  },
  {
    icon: Zap,
    label: 'Show Day',
    text: 'May 23, 2026: Pro Tan, bands backstage, and the focus before walking out for True Novice, Masters, and Men\'s Open.'
  },
  {
    icon: Medal,
    label: 'First Benchmark',
    text: 'The stage became the first real standard for the next version: more thickness, better shape, and smarter execution.'
  }
];

const gallery = [
  {
    title: 'Front Double Biceps',
    category: 'True Novice / Masters',
    caption: 'Locking in the front double. Twenty weeks of posing drills finally clicking into place.',
    image: '/assets/show/badge1-solo-front-double.jpg'
  },
  {
    title: 'Side Chest',
    category: 'Prejudging Comparison',
    caption: 'One of the strongest poses from the day: chest high, legs locked in, and the stage look starting to click.',
    image: '/assets/show/badge1-solo-side-chest.jpg'
  },
  {
    title: 'Side Triceps',
    category: 'Prejudging Comparison',
    caption: 'A tight side shot showing the triceps, shoulder, and oblique detail under the judges\' lights.',
    image: '/assets/show/badge1-solo-side-triceps.jpg'
  },
  {
    title: 'Back Double Biceps',
    category: 'Rear Mandatory',
    caption: 'Back details holding strong. Bringing the best possible package to my first NPC stage.',
    image: '/assets/show/badge1-solo-back-double.jpg'
  },
  {
    title: 'Most Muscular',
    category: 'Final Comparison',
    caption: 'Pushing through the last callout with every detail squeezed out under the lights.',
    image: '/assets/show/badge1-solo-most-muscular.jpg'
  },
  {
    title: 'Side Profile',
    category: 'Stage Presence',
    caption: 'A first-show moment where the nerves settled and the work started speaking for itself.',
    image: '/assets/show/badge1-solo-profile.jpg'
  }
];

const behindScenes = [
  { icon: Dumbbell, title: 'Pump Room', text: 'Minutes before walking out. Tuning out the noise and getting blood moving with bands and controlled focus.' },
  { icon: Utensils, title: 'Meal Prep', text: 'The silent work: weighed chicken, jasmine rice math, supplement protocols, and zero missed meals.' },
  { icon: Scale, title: 'Check-ins', text: 'Photos, weight trends, conditioning reads, and adjustments that kept the package moving in the right direction.' },
  { icon: ClipboardCheck, title: 'Competitor Meeting', text: 'Sitting in the venue before show day, taking in the stage, the banners, and the reality that the first NPC weekend was here.' },
  { icon: MessageCircle, title: 'Coach Mo', text: 'Huge gratitude to Coach Mo, a master of prep science who backed every adjustment with data.' },
  {
    icon: Sparkles,
    title: 'Hair By Molly Young',
    text: 'Molly Young did an amazing job getting the show-day hair dialed in before the final stretch of the weekend.',
    href: 'https://www.instagram.com/hair_bymollyyoung/'
  },
  {
    icon: Sparkles,
    title: 'OneFitJoker Tanning',
    text: 'Jermichael Pratt and the OneFitJoker Tanning team took great care of me on show day and helped bring the final look together.',
    href: 'https://onefitjoker.com/'
  },
  { icon: Car, title: 'Road Trip', text: 'No flight, just the car ride to Grandville with the gear, meals, nerves, and show-day checklist packed in.' },
  { icon: MapPin, title: 'Mike Vruggink', text: 'Great show by promoter Mike Vruggink, bringing the NPC Grand Rapids stage together with a professional athlete experience.' }
];

const journalPosts = [
  {
    title: 'First Show Recap',
    kicker: 'The NPC Grand Rapids Championships',
    text: 'Two days after stepping onto the NPC Grand Rapids stage, the experience still feels unmatched. Men\'s Open, Masters, and True Novice turned months of tracking, low-energy workdays, fatherhood, and quiet sacrifice into one finished product.'
  },
  {
    title: 'Lessons From Prep',
    kicker: 'Building In Real Life',
    text: 'Prep taught me that discipline is not pretending life is simple. It is building a system around the hard parts: food, training, recovery, bloodwork, fatigue, fatherhood, and still showing up.'
  },
  {
    title: 'Post-Show Transition',
    kicker: 'Rebuilding The Engine',
    text: 'The tan is fading, but the work has not stopped. The next phase is recovery, smarter growth, health markers, and building the next version without losing the reason this mattered.'
  }
];

const goals = [
  {
    icon: Gauge,
    title: 'Physique Improvements',
    text: 'Build overall muscle thickness with special focus on back density and shoulder width to maximize the V-taper in Men\'s Open.'
  },
  {
    icon: Goal,
    title: 'Offseason Priorities',
    text: 'Restore energy, health markers, and training performance, then move into a sustained surplus built for clean tissue accretion.'
  },
  {
    icon: HeartPulse,
    title: 'Nutrition & Recovery',
    text: 'Keep the focus on food quality, sleep, digestion, medical follow-through, and recovery habits that support a full life outside the gym.'
  }
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
      </div>
      <div className="hero-content">
        <h1>
          From First Prep
          <span>To First Stage</span>
        </h1>
        <div className="pulse-line" aria-hidden="true" />
        <p>
          A first contest prep built around work, fatherhood, fatigue, real-life pressure, and the
          decision to rebuild anyway.
        </p>
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
        <p className="lead">
          This was not a bucket-list item. It was a real-life rebuild with a stage date attached to it.
        </p>
        <p>
          Before prep, training was already part of my life. But life was also work, fatherhood,
          fatigue, anemia, appointments, and days where my body did not feel like it matched the
          goals in my head. I did not start from perfect health or perfect timing. I started from
          where I actually was.
        </p>
        <p>
          Choosing the show gave me a line in the sand. Every meal, lift, walk, check-in, posing
          drill, health marker, recovery choice, and tired workday became part of the same question:
          can I keep building when life is not optimized?
        </p>
        <p>
          I could not have done that alone. Coach Mo guided the prep, Chelsea kept the reason close,
          and the nurses at Bronson deserve a real shoutout. Nine iron IVs so far, plus blood
          transfusions when I needed them, made me appreciate how much care happens quietly behind
          the scenes. Nurses are amazing.
        </p>
        <a className="button secondary compact" href="#journal">Read the Journal</a>
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
      <div className="story-arc" aria-label="Story arc">
        {storyArc.map(({ step, title, text }) => (
          <article className="arc-card" key={title}>
            <span>{step}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <div className="real-life-gallery" aria-label="Real life prep moments">
        {realLifePhotos.map(({ image, title, text }) => (
          <figure className="real-life-card" key={title}>
            <img src={image} alt={`${title} from Chris Brennan's bodybuilding story`} loading="lazy" />
            <figcaption>
              <strong>{title}</strong>
              <p>{text}</p>
            </figcaption>
          </figure>
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
      <SectionHeader title="Featured Competition Gallery" action={{ label: 'Contact', href: '#contact' }} />
      <div className={`gallery-grid gallery-count-${gallery.length}`}>
        {gallery.map((item) => (
          <GalleryCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function Journal() {
  return (
    <section className="band journal" id="journal">
      <SectionHeader title="Journal" />
      <div className="journal-grid">
        {journalPosts.map(({ title, kicker, text }, index) => (
          <article className="journal-card" key={title}>
            <CalendarDays size={30} aria-hidden="true" />
            <span>Entry 0{index + 1}</span>
            <h3>{title}</h3>
            <h4>{kicker}</h4>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Goals() {
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

function Bio() {
  return (
    <section className="band bio" id="bio">
      <SectionHeader title="Bio & Credits" />
      <div className="bio-layout">
        <article>
          <h3>Chris Brennan</h3>
          <p className="lead">
            Chris Brennan is a competitive NPC bodybuilder, former professional cyberathlete, and
            veteran pet retail manager based in Portage, Michigan.
          </p>
          <p>
            For over two decades, Chris has operated in high-execution environments. As a veteran
            store manager at Pet Supplies Plus, he has mastered operational efficiency, leadership,
            and logistical execution. Long before stepping onto the bodybuilding stage, he honed his
            competitive drive in the digital arena, learning that elite performance requires
            obsession, analysis, and acute attention to detail.
          </p>
          <p>
            At age 41, Chris transitioned that competitive framework into a 20+ week contest
            preparation for his debut at the 2026 NPC Grand Rapids Championships. The journey also
            included anemia, fatigue, medical follow-through, and a deeper respect for recovery,
            which made the stage less about attention and more about rebuilding with honesty. He
            balances that pursuit with his most important role: being a dedicated father to Chelsea,
            who was there for one of the most meaningful moments of the weekend.
          </p>
        </article>
        <aside className="credits">
          <div>
            <span>Coach</span>
            <strong>
              <a href="https://www.instagram.com/alfaraj7134/" target="_blank" rel="noreferrer">Coach Mo / @alfaraj7134</a>
            </strong>
          </div>
          <div>
            <span>Gym</span>
            <strong>
              <a href="https://www.instagram.com/hocgym2024/" target="_blank" rel="noreferrer">House of Champions Gym / @hocgym2024</a>
            </strong>
          </div>
          <div>
            <span>Promoter</span>
            <strong>
              <a href="https://www.instagram.com/vrugginkmike/" target="_blank" rel="noreferrer">Mike Vruggink</a>
            </strong>
          </div>
          <div>
            <span>Tanning</span>
            <strong>
              <a href="https://onefitjoker.com/" target="_blank" rel="noreferrer">Jermichael Pratt / OneFitJoker Tanning</a>
            </strong>
          </div>
          <div>
            <span>Hair</span>
            <strong>
              <a href="https://www.instagram.com/hair_bymollyyoung/" target="_blank" rel="noreferrer">Molly Young / @hair_bymollyyoung</a>
            </strong>
          </div>
          <div>
            <span>Stage Photography</span>
            <strong>
              <a href="https://www.instagram.com/stagetimephoto/" target="_blank" rel="noreferrer">Jeff Robinson / @StageTimePhoto</a>
            </strong>
          </div>
          <div>
            <span>Competition</span>
            <strong>NPC Grand Rapids Championships</strong>
          </div>
          <div>
            <span>Date</span>
            <strong>May 23, 2026</strong>
          </div>
          <div>
            <span>Location</span>
            <strong>Grandville High School, Grandville, MI</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer className="site-footer" id="contact">
      <div>
        <BrandLogo />
        <p>Documentary, polished, dark, and high contrast. The gritty reality of building yourself in real life.</p>
      </div>
      <div>
        <h2>Let&apos;s Connect</h2>
        <ul className="socials">
          <li><a href="https://www.instagram.com/cbrennan2120" target="_blank" rel="noreferrer"><Instagram size={17} aria-hidden="true" /> Instagram</a></li>
          <li><a href="https://www.tiktok.com/@hypertrophychris" target="_blank" rel="noreferrer"><Sparkles size={17} aria-hidden="true" /> TikTok</a></li>
          <li><a href="https://www.youtube.com/@cbrennan2120" target="_blank" rel="noreferrer"><Youtube size={17} aria-hidden="true" /> YouTube</a></li>
          <li><a href="https://x.com/stickgod" target="_blank" rel="noreferrer"><Zap size={17} aria-hidden="true" /> X</a></li>
          <li><a href="https://www.facebook.com/ChrisAdamBrennan" target="_blank" rel="noreferrer"><Facebook size={17} aria-hidden="true" /> Facebook</a></li>
        </ul>
      </div>
      <div>
        <h2>Collaborations</h2>
        <p>Open to content partnerships around training, transformation, health-aware discipline, community, and useful tools.</p>
        <a className="button secondary compact" href="mailto:cbrennan2120@gmail.com">Work With Me</a>
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
          {navItems.map(({ label, href }) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </header>
      <main>
        <Hero />
        <Story />
        <PrepTimeline />
        <Gallery />
        <Journal />
        <Goals />
        <Bio />
      </main>
      <Contact />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
