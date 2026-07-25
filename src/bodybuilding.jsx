import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Brain,
  CalendarDays,
  ClipboardCheck,
  Dumbbell,
  Facebook,
  Goal,
  HeartPulse,
  Instagram,
  Medal,
  MessageCircle,
  Sparkles,
  Target,
  Trophy,
  Youtube,
  Zap
} from 'lucide-react';
import './bodybuilding.css';

const navItems = [
  { label: 'ChrisSpace Home', href: '/' },
  { label: 'Transformation', href: '#transformation' },
  { label: 'The Process', href: '#process' },
  { label: 'The Challenge', href: '#challenge' },
  { label: 'What It Meant', href: '#meaning' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Lessons', href: '#lessons' },
  { label: 'Bio', href: '#bio' },
  { label: 'Contact', href: '#contact' }
];

const storyPillars = [
  {
    icon: Target,
    title: 'Set A Meaningful Goal',
    text: 'I chose a challenge that would require months of preparation, clear standards, and full accountability.'
  },
  {
    icon: ClipboardCheck,
    title: 'Build The System',
    text: 'Training, nutrition, cardio, posing, recovery, and check-ins became a repeatable plan—not a test of daily motivation.'
  },
  {
    icon: MessageCircle,
    title: 'Trust The Team',
    text: 'I relied on Coach Mo\'s experience, communicated honestly, and treated feedback and adjustments as part of the work.'
  },
  {
    icon: Trophy,
    title: 'Follow Through',
    text: 'The lasting accomplishment was honoring the commitment—from the first decision through the final pose onstage.'
  }
];

const timeline = [
  {
    icon: Goal,
    label: 'Choose The Goal',
    text: 'The 2026 NPC Grand Rapids Championships gave the next chapter of my fitness journey a date and a clear standard.'
  },
  {
    icon: CalendarDays,
    label: 'Make The Plan',
    text: 'We organized more than 20 weeks of bodybuilding prep around training, nutrition, cardio, posing, recovery, and check-ins.'
  },
  {
    icon: Dumbbell,
    label: 'Execute Daily',
    text: 'The plan worked because the basic commitments were completed consistently, including on ordinary and demanding days.'
  },
  {
    icon: MessageCircle,
    label: 'Check In Honestly',
    text: 'Progress photos, weight trends, recovery, and direct communication gave my coach the information needed to guide adjustments.'
  },
  {
    icon: Brain,
    label: 'Adapt The System',
    text: 'We responded to results instead of forcing a fixed script. Coachability and continual adjustment kept the project moving.'
  },
  {
    icon: Medal,
    label: 'Finish Together',
    text: 'On May 23, 2026, we reached the NPC stage. The competition day was the visible result of months of shared work.'
  }
];

const gallery = [
  {
    title: 'Front Double Biceps',
    category: 'True Novice / Masters',
    caption: 'A pose shaped by months of practice, feedback, and small technical adjustments.',
    image: '/assets/show/badge1-solo-front-double.jpg'
  },
  {
    title: 'Side Chest',
    category: 'Prejudging Comparison',
    caption: 'Bringing the preparation together through composure, positioning, and presentation.',
    image: '/assets/show/badge1-solo-side-chest.jpg'
  },
  {
    title: 'Side Triceps',
    category: 'Prejudging Comparison',
    caption: 'Applying the details practiced during prep under the judges\' lights.',
    image: '/assets/show/badge1-solo-side-triceps.jpg'
  },
  {
    title: 'Back Double Biceps',
    category: 'Rear Mandatory',
    caption: 'A first-show benchmark and a clear reference point for future improvement.',
    image: '/assets/show/badge1-solo-back-double.jpg'
  },
  {
    title: 'Most Muscular',
    category: 'Final Comparison',
    caption: 'Staying present and completing the final comparison of my first competition.',
    image: '/assets/show/badge1-solo-most-muscular.jpg'
  },
  {
    title: 'The Competition Stage',
    category: 'Men’s Open Comparison',
    caption: 'A wider view of the standard, the setting, and the competitors who shared the stage.',
    image: '/assets/show/badge1-most-muscular.jpg',
    format: 'wide'
  }
];

const goals = [
  {
    icon: ClipboardCheck,
    title: 'Structure Beats Motivation',
    text: 'Motivation can begin a project. A clear system makes consistent execution possible after the excitement wears off.'
  },
  {
    icon: MessageCircle,
    title: 'Accountability Accelerates Progress',
    text: 'Honest check-ins, useful feedback, and great coaching improve decisions and keep ambitious goals grounded.'
  },
  {
    icon: HeartPulse,
    title: 'Health Comes Before Performance',
    text: 'Long-term progress requires paying attention, seeking answers when something feels wrong, and making health the priority.'
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
          From 100 Pounds Down
          <span>To The NPC Stage</span>
        </h1>
        <div className="pulse-line" aria-hidden="true" />
        <p>
          The story of transformation, disciplined execution, teamwork, and finishing what I started.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#transformation">Read My Story</a>
          <a className="button secondary" href="#gallery">View Gallery</a>
        </div>
      </div>
      <a className="scroll-cue" href="#transformation" aria-label="Scroll to my story">
        <ArrowRight aria-hidden="true" />
      </a>
    </section>
  );
}

function Story() {
  return (
    <section className="band story" id="transformation">
      <div className="section-copy">
        <SectionHeader title="A Transformation, Then A Question" />
        <p className="lead">
          Losing more than 100 pounds changed my health, my confidence, and the direction of my life.
          It also left me with a new question: What am I capable of next?
        </p>
        <p>
          That weight loss transformation was built gradually. Better choices became habits, habits
          became a system, and the system produced a personal transformation I once would not have
          believed possible. I did not want the next goal to be a temporary challenge or a
          bucket-list item. I wanted something meaningful enough to test what those habits could
          support.
        </p>
        <p>
          I set my sights on an NPC bodybuilding competition. The stage would be the visible
          destination, but the real measure of success would be the work completed during the months
          before it.
        </p>
        <a className="button secondary compact" href="#process">See The Process</a>
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
    <section className="band timeline-section" id="process">
      <SectionHeader title="Choosing The Goal & Building The Process" />
      <div className="section-intro">
        <p className="lead">
          I chose the 2026 NPC Grand Rapids Championships because it demanded a real commitment:
          more than 20 weeks of planning, accountability, consistent execution, and trust.
        </p>
        <p>
          Preparation became a structured project. Coach Mo provided the experience and outside
          perspective; my job was to communicate honestly and complete the work. We adjusted
          training, food, cardio, posing, and recovery as the data and my progress required.
        </p>
        <p>
          I also had to make the plan fit real life. Throughout prep, I continued leading at work,
          being present as a father, and handling the everyday responsibilities that did not pause
          because I had chosen a difficult fitness goal. That balance made reliability—not physical
          hardship—the defining part of the process.
        </p>
      </div>
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

function UnexpectedChallenge() {
  return (
    <section className="band challenge" id="challenge">
      <SectionHeader title="An Unexpected Challenge" />
      <div className="challenge-layout">
        <article>
          <p className="lead">
            I entered prep in the best health of my life, with no indication that an underlying
            medical issue was developing.
          </p>
          <p>
            Late in prep, posing became unusually difficult. During the final weeks I was far more
            fatigued and short of breath than expected, but we did not yet know why. On competition
            day, my heart rate spiked and even walking around the venue became difficult.
          </p>
          <p>
            I completed the competition and stepped onstage in True Novice, Masters, and Men&apos;s
            Open. Because the experience did not feel consistent with ordinary contest fatigue, I
            arranged bloodwork. Two days after the show, the results identified an underlying issue
            that explained what I had been experiencing.
          </p>
          <p>
            That information is context, not an excuse. It reinforced a lesson more important than
            any placing: discipline also means listening to your body, seeking answers, and taking
            responsibility for your health. Performance matters, but long-term health comes first.
          </p>
        </article>
        <aside className="challenge-summary" aria-label="How I responded">
          <span>How I Responded</span>
          <strong>Paid attention when the experience felt wrong.</strong>
          <strong>Sought objective answers through bloodwork.</strong>
          <strong>Put health and recovery ahead of the next performance goal.</strong>
        </aside>
      </div>
    </section>
  );
}

function Meaning() {
  return (
    <section className="band meaning" id="meaning">
      <SectionHeader title="More Than A Competition" />
      <div className="meaning-layout">
        <p className="meaning-statement">
          We made it to the stage—but the stage was never the whole story.
        </p>
        <div className="section-copy">
          <p>
            Stepping under the lights represented losing more than 100 pounds, years of habit
            building, trusting a coach, accepting accountability, and keeping promises to myself
            when no one else was watching.
          </p>
          <p>
            I am proud that I competed, but the accomplishment I value most is completing what I
            committed to. The placing was one result from one day. Following the plan through the
            full preparation showed me something more lasting about my character.
          </p>
          <p>
            This bodybuilding competition became evidence that ambitious goals can coexist with
            leadership, parenting, work, and everyday responsibility when the plan is clear and the
            commitment is genuine.
          </p>
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ item }) {
  const { title, category, caption, image, format } = item;
  return (
    <figure className={`gallery-card${format === 'wide' ? ' gallery-card--wide' : ''}`}>
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

function Goals() {
  return (
    <section className="band goals" id="lessons">
      <SectionHeader title="Lessons That Extend Beyond Fitness" />
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
            Chris Brennan is a retail leader, father, former professional cyberathlete, and NPC
            bodybuilding competitor based in Portage, Michigan.
          </p>
          <p>
            For more than two decades, Chris has led in high-accountability retail environments.
            His approach is practical: define the goal, build the system, communicate clearly, make
            adjustments, and follow through. His earlier career in professional esports and his
            personal health journey both reinforced the value of preparation, teamwork, and calm
            execution.
          </p>
          <p>
            Bodybuilding was never the destination. It became one of the clearest demonstrations of
            the person Chris strives to be: someone who embraces difficult goals, trusts the
            process, values coaching, adapts when challenges arise, and follows through on
            commitments. Those principles continue to shape how he leads, how he parents, and how he
            supports others pursuing meaningful change.
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
        <p>A personal record of transformation, teamwork, health, and the commitments that shape how I lead.</p>
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
        <h2>Work With Me</h2>
        <p>Open to thoughtful professional conversations, partnerships, and opportunities to help others build sustainable change through structure and accountability.</p>
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
        <UnexpectedChallenge />
        <Meaning />
        <Gallery />
        <Goals />
        <Bio />
      </main>
      <Contact />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
