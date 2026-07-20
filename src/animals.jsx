import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  ExternalLink,
  Gift,
  HandHeart,
  Heart,
  Home,
  MapPin,
  PawPrint,
  ShieldCheck,
  ShoppingBag,
  Store,
  Users
} from 'lucide-react';
import './animals.css';

const navItems = [
  { label: 'Story', href: '#story' },
  { label: 'Career', href: '#career' },
  { label: 'Board Service', href: '#service' },
  { label: 'Community', href: '#community' },
  { label: 'Adopt / Donate', href: '#help' },
  { label: 'Contact', href: '#contact' }
];

const stats = [
  { value: '26+', label: 'Years in animal-focused retail' },
  { value: '14+', label: 'Years at Pet Supplies Plus' },
  { value: '2019', label: 'Joined the HSSCM board' },
  { value: '2 + 2', label: 'Years as Vice Chair + Chair' }
];

const career = [
  {
    company: 'Quality Stores',
    role: 'Sales Team Member',
    dates: 'October 1999 – July 2001',
    icon: ShoppingBag,
    text: 'Where a career serving customers, merchandising, and working around animals and the rural lifestyle first took shape.'
  },
  {
    company: 'Tractor Supply Company',
    role: 'Team Leader → Assistant Manager → Store Manager',
    dates: 'January 2002 – January 2012',
    icon: Store,
    text: 'Promoted through increasingly responsible leadership roles over a ten-year career, leading store operations, team development, merchandising, inventory control, and customer service.',
    feature: {
      title: 'District Inventory Specialist',
      text: 'Prepared stores throughout the district for physical inventories and connected store teams with inventory-counting crews to resolve discrepancies and help secure accurate counts.'
    }
  },
  {
    company: 'Pet Supplies Plus',
    role: 'Store Team Leader',
    dates: 'January 2012 – Present',
    icon: PawPrint,
    text: 'Leading store operations, developing team members, serving neighbors, and helping pet families find the products and guidance they need.'
  }
];

const communityPhotos = [
  {
    src: '/assets/animal-advocacy/hsscm-canine-carnival-volunteering.png',
    alt: 'Chris Brennan volunteering at the Humane Society of South Central Michigan Canine Carnival',
    kicker: 'Show up',
    title: 'Canine Carnival volunteer'
  },
  {
    src: '/assets/animal-advocacy/sabrinas-light-rescue-donation.png',
    alt: 'Chris Brennan presenting a donation to Sabrina’s Light Rescue with a rescue representative and dog',
    kicker: 'Give local',
    title: 'Supporting Sabrina’s Light'
  },
  {
    src: '/assets/animal-advocacy/home-run-dog-park-appreciation.png',
    alt: 'Chris Brennan holding a community appreciation certificate for Pet Supplies Plus of Battle Creek',
    kicker: 'Build community',
    title: 'Home Run Dog Park recognition'
  },
  {
    src: '/assets/animal-advocacy/tractor-supply-celebration.png',
    alt: 'Chris Brennan celebrating with a cake during his Tractor Supply career',
    kicker: 'Grow through it',
    title: 'A chapter at Tractor Supply'
  },
  {
    src: '/assets/animal-advocacy/santa-chris-with-puppy.png',
    alt: 'Chris Brennan dressed as Santa while holding a small puppy',
    kicker: 'Have some fun',
    title: 'Santa Chris and a tiny helper'
  },
  {
    src: '/assets/animal-advocacy/chris-with-two-dogs.png',
    alt: 'Chris Brennan kneeling in a pet store while holding two dogs',
    kicker: 'Love the work',
    title: 'Neighbors come in every size'
  }
];

const organizations = [
  {
    name: 'Humane Society of South Central Michigan',
    shortName: 'HSSCM',
    county: 'Calhoun County',
    icon: Heart,
    description: 'The shelter where Chris has served on the Board of Directors since 2019, including terms as Vice Chair and Board Chair.',
    actions: [
      { label: 'Adopt', href: 'https://hsscm.org/?page_id=37' },
      { label: 'Donate', href: 'https://hsscm.org/?page_id=42' },
      { label: 'Volunteer', href: 'https://hsscm.org/?page_id=60' }
    ]
  },
  {
    name: 'Calhoun County Animal Center',
    shortName: 'CCAC',
    county: 'Calhoun County',
    icon: Home,
    description: 'Battle Creek’s city shelter, where stray animals and dogs picked up by animal control are taken. It is frequently at capacity and offers a straightforward adoption process.',
    actions: [
      { label: 'Adopt', href: 'https://www.calhouncountyanimalcenter.org/adoption-info.html' },
      { label: 'Donate', href: 'https://www.calhouncountyanimalcenter.org/donations.html' },
      { label: 'Volunteer', href: 'https://www.calhouncountyanimalcenter.org/volunteers.html' }
    ]
  },
  {
    name: 'Sabrina’s Light',
    shortName: 'Rescue support',
    county: 'Calhoun County',
    icon: HandHeart,
    description: 'Sabrina’s Light is committed to enhancing the lives of dogs, especially Bully Breeds, by partnering with rescues and shelters to deliver vital services such as veterinary care, training, and socialization.',
    actions: [
      { label: 'Donate', href: 'https://www.sabrinaslight.org/donate/' },
      { label: 'Learn More', href: 'https://www.sabrinaslight.org/about/' }
    ]
  },
  {
    name: 'Kitten Konnection',
    shortName: 'Foster rescue',
    county: 'Calhoun County',
    icon: PawPrint,
    description: 'A home-based foster rescue providing safe haven, care, and forever-home placement for lost, stray, and abandoned kittens six months and younger.',
    actions: [
      { label: 'Adopt', href: 'https://kittenkonnection.com/adopting/' },
      { label: 'Donate', href: 'https://kittenkonnection.com/support-our-work/' },
      { label: 'Foster', href: 'https://kittenkonnection.com/fostering/' },
      { label: 'Learn More', href: 'https://kittenkonnection.com/' }
    ]
  },
  {
    name: 'All Species Kinship',
    shortName: 'A.S.K.',
    county: 'Calhoun County',
    icon: HandHeart,
    description: 'Supports wildlife rehabilitation and brings practical, nonjudgmental outreach directly to animals and families in underserved Battle Creek and Calhoun County neighborhoods.',
    actions: [
      { label: 'Donate', href: 'https://allspecieskinship.org/help-us/' },
      { label: 'Learn More', href: 'https://allspecieskinship.org/' }
    ]
  },
  {
    name: 'Animal Rescue Project',
    shortName: 'Chris approved',
    county: 'Kalamazoo County',
    icon: PawPrint,
    description: 'A great Kalamazoo-area place to adopt a dog or cat, providing rescue, rehabilitation, and responsible adoption services. Chris approved.',
    actions: [
      { label: 'Adopt', href: 'https://animalrescueproject.org/Adopt/Application' },
      { label: 'Donate', href: 'https://animalrescueproject.org/Give/Donate' },
      { label: 'Learn More', href: 'https://animalrescueproject.org/' }
    ]
  },
  {
    name: 'Kalamazoo County Animal Services & Enforcement',
    shortName: 'Chris approved',
    county: 'Kalamazoo County',
    icon: Building2,
    description: 'Kalamazoo County’s municipal shelter, caring for lost and stray animals while helping adoptable pets find new homes. Chris approved.',
    actions: [
      { label: 'Adopt', href: 'https://www.petfinder.com/member/us/mi/kalamazoo/kalamazoo-county-animal-services-enforcement-mi520/' },
      { label: 'Learn More', href: 'https://www.kalcounty.gov/168/Animal-Services-Enforcement' }
    ]
  },
  {
    name: 'Animal’s Best Friend Fund',
    shortName: 'Spay + neuter support',
    county: 'Kalamazoo County',
    icon: Heart,
    description: 'Helps reduce stray and unwanted dog and cat populations by funding spay and neuter assistance for qualifying families and feral-cat caretakers.',
    actions: [
      { label: 'Donate', href: 'https://www.animalsbestfriendfund.org/donate' },
      { label: 'Learn More', href: 'https://www.animalsbestfriendfund.org/' }
    ]
  },
  {
    name: 'Cat Nap Lodge',
    shortName: 'Cat rescue • Richland',
    county: 'Kalamazoo County',
    icon: PawPrint,
    description: 'A nonprofit cat rescue in Richland providing safe care, medical support, and adoption help for cats and kittens across Kalamazoo, Battle Creek, and Southwest Michigan.',
    actions: [
      { label: 'Adopt', href: 'https://catnaplodge.com/adoption' },
      { label: 'Donate', href: 'https://catnaplodge.com/donations' },
      { label: 'Learn More', href: 'https://catnaplodge.com/our-story' }
    ]
  }
];

function Brand() {
  return (
    <a className="brand" href="https://chrisbrennan.net/" aria-label="ChrisSpace main site">
      <span className="brand-mark"><PawPrint aria-hidden="true" /></span>
      <span>
        <strong>Chris Brennan</strong>
        <small>Animal advocacy + pet retail</small>
      </span>
    </a>
  );
}

function SectionHeading({ eyebrow, title, intro }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="story" aria-labelledby="hero-title">
      <div className="hero-copy">
        <span className="hero-sticker"><PawPrint aria-hidden="true" /> Animal advocate since before it was a bio</span>
        <h1 id="hero-title">Helpin’ Animals—<span>On the Clock and Off.</span></h1>
        <p>
          Animals have shaped my entire working life. From growing through store leadership to
          serving nearly seven years on a local Humane Society board, the mission has stayed simple:
          take care of the animals, support the people helping them, and leave the community better.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#career">Follow the journey <ArrowRight aria-hidden="true" /></a>
          <a className="button secondary" href="#help">Find a way to help</a>
        </div>
      </div>
      <figure className="hero-photo">
        <img
          src="/assets/animal-advocacy/chris-and-bruno-at-the-creek.png"
          alt="Chris Brennan and his dog Bruno enjoying a wooded creek"
          width="719"
          height="959"
          fetchPriority="high"
        />
        <figcaption><span>Favorite photo</span> Chris + Bruno</figcaption>
        <i className="paw paw-one" aria-hidden="true">🐾</i>
        <i className="paw paw-two" aria-hidden="true">🐾</i>
      </figure>
    </section>
  );
}

function ImpactStrip() {
  return (
    <section className="impact-strip" aria-label="Career and service highlights">
      {stats.map(({ value, label }) => (
        <div key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </section>
  );
}

function Career() {
  return (
    <section className="section career-section" id="career">
      <SectionHeading
        eyebrow="The long aisle"
        title="A career built around animals and people"
        intro="More than 26 years of learning the business from the sales floor up—and never losing sight of who the work is for."
      />
      <div className="career-timeline">
        {career.map(({ company, role, dates, icon: Icon, text, feature }, index) => (
          <article className="career-card" key={company}>
            <div className="career-number" aria-hidden="true">0{index + 1}</div>
            <span className="career-icon"><Icon aria-hidden="true" /></span>
            <span className="career-dates">{dates}</span>
            <h3>{company}</h3>
            <strong>{role}</strong>
            <p>{text}</p>
            {feature ? (
              <aside className="inventory-note">
                <ShieldCheck aria-hidden="true" />
                <span><strong>{feature.title}</strong>{feature.text}</span>
              </aside>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function BoardService() {
  return (
    <section className="service-section" id="service">
      <div className="service-photo">
        <img
          src="/assets/animal-advocacy/hsscm-mutt-market-volunteering.png"
          alt="Chris Brennan volunteering at HSSCM’s Mutt Market in a board member shirt"
          width="719"
          height="959"
          loading="lazy"
        />
        <span className="photo-label">Board member // since 2019</span>
      </div>
      <div className="service-copy">
        <SectionHeading eyebrow="Beyond the store" title="Serving animals through good governance" />
        <p className="lead">
          Since joining the Humane Society of South Central Michigan’s Board of Directors in 2019,
          I’ve had the opportunity to help guide an organization committed to animals and the people
          who care for them.
        </p>
        <div className="service-roles">
          <div><strong>2 years</strong><span>Vice Chair</span></div>
          <div><strong>2 years</strong><span>Board Chair</span></div>
        </div>
        <p>
          I completed the term limit for both leadership positions and now continue the work through
          the Governance Committee and Animal Welfare Committee—supporting responsible leadership,
          thoughtful policy, and better outcomes for animals throughout the community.
        </p>
        <a className="text-link" href="https://hsscm.org/" target="_blank" rel="noopener noreferrer">
          Visit HSSCM <ExternalLink aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className="section community-section" id="community">
      <SectionHeading
        eyebrow="Receipts from the real world"
        title="Community work, one moment at a time"
        intro="The meaningful parts rarely happen behind a desk. They happen at adoption events, donation drop-offs, store counters, dog parks, and wherever somebody decides to help."
      />
      <div className="photo-wall">
        {communityPhotos.map(({ src, alt, kicker, title }, index) => (
          <figure className={`photo-card photo-card-${index + 1}`} key={src}>
            <img src={src} alt={alt} loading="lazy" />
            <figcaption><span>{kicker}</span><strong>{title}</strong></figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function MyDogs() {
  return (
    <section className="dogs-section" aria-labelledby="dogs-title">
      <div className="dogs-heading">
        <span className="eyebrow">The home team</span>
        <h2 id="dogs-title">Bruno &amp; Barbara</h2>
        <p>The personal side of a life built around animals: muddy paws, long walks, ridiculous photos, and the dogs who make home feel like home.</p>
      </div>
      <figure className="dog-card bruno-card">
        <img src="/assets/animal-advocacy/chris-and-bruno-at-the-creek.png" alt="Chris and Bruno standing in a shallow creek" loading="lazy" />
        <figcaption><strong>Bruno</strong><span>Creek explorer</span></figcaption>
      </figure>
      <figure className="dog-card barbara-card">
        <img src="/assets/animal-advocacy/chris-and-barbara.png" alt="Chris kneeling outdoors with his dog Barbara" loading="lazy" />
        <figcaption><strong>Barbara</strong><span>Trail supervisor</span></figcaption>
      </figure>
    </section>
  );
}

function OrganizationCard({ organization }) {
  const Icon = organization.icon;
  return (
    <article className="organization-card">
      <div className="organization-title">
        <span><Icon aria-hidden="true" /></span>
        <div><small>{organization.shortName}</small><h3>{organization.name}</h3></div>
      </div>
      <p>{organization.description}</p>
      <div className="organization-actions">
        {organization.actions.map(({ label, href }) => (
          <a href={href} target="_blank" rel="noopener noreferrer" key={label}>
            {label} <ExternalLink aria-hidden="true" />
          </a>
        ))}
      </div>
    </article>
  );
}

function HelpDirectory() {
  const calhounOrganizations = organizations.filter(({ county }) => county === 'Calhoun County');
  const kalamazooOrganizations = organizations.filter(({ county }) => county === 'Kalamazoo County');
  return (
    <section className="help-section" id="help">
      <SectionHeading
        eyebrow="Start local"
        title="Where to adopt / how to donate"
        intro="A growing list of organizations I know, trust, or have supported personally. Choose the kind of help you can give, then confirm current needs directly with the organization."
      />
      <div className="county-heading"><MapPin aria-hidden="true" /><span>Calhoun County</span><i>{calhounOrganizations.length} recommendations</i></div>
      <div className="organization-grid">
        {calhounOrganizations.map((organization) => <OrganizationCard organization={organization} key={organization.name} />)}
      </div>
      <div className="county-heading county-heading-kalamazoo"><MapPin aria-hidden="true" /><span>Kalamazoo County</span><i>{kalamazooOrganizations.length} recommendations</i></div>
      <div className="organization-grid">
        {kalamazooOrganizations.map((organization) => <OrganizationCard organization={organization} key={organization.name} />)}
      </div>
      <p className="directory-note">
        <Gift aria-hidden="true" /> Adoption requirements, wish lists, volunteer availability, and donation methods can change. Please verify current details on each organization’s official page before visiting or giving.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact">
      <div>
        <Brand />
        <p>Buildin’ stuff. Helpin’ animals. Gettin’ strong. Havin’ fun.</p>
      </div>
      <div className="footer-contact">
        <span>Have an animal-focused idea?</span>
        <a className="button primary" href="mailto:cbrennan2120@gmail.com">Email Chris <ArrowRight aria-hidden="true" /></a>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Brand />
        <div className="header-actions">
          <nav aria-label="Animal advocacy page navigation">
            {navItems.map(({ label, href }) => <a href={href} key={label}>{label}</a>)}
          </nav>
          <a className="main-site-link" href="https://chrisbrennan.net/">
            <Home aria-hidden="true" /> Back to main site
          </a>
        </div>
      </header>
      <main>
        <Hero />
        <ImpactStrip />
        <Career />
        <BoardService />
        <Community />
        <MyDogs />
        <HelpDirectory />
      </main>
      <Footer />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
