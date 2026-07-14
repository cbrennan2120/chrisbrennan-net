import React from 'react';
import { createRoot } from 'react-dom/client';
import './esports.css';

const asset = (name) => `/assets/esports-archive/${name}`;

const chapters = [
  {
    id: 'tfc-origins',
    number: '01',
    years: '1999–2001',
    kicker: 'TEAM FORTRESS CLASSIC',
    title: 'Becoming st1ckg0d',
    intro: 'I entered competitive gaming through Team Fortress Classic, where I became known as st1ckg0d—an Engineer built around positioning, timing, and making the entire defense harder to break.',
    body: 'Leadership followed me from clan to clan. I was a team captain or part of the leadership group everywhere I played, helping organize lineups, shape strategy, and keep teams composed under pressure. I also led L4, a guild created for top TFC Engineers.',
    highlights: ['Elite defensive Engineer', 'Leader of the L4 Engineer guild', 'Early BYOC TFC champion', 'Competed with OESM, cDD, and Pyroclastic Flow'],
    photos: [
      { name: 'stickgod-portrait.png', alt: 'A young Chris Brennan looking toward the camera with the name st1ckg0d over the image', caption: 'The early competitive era: st1ckg0d on the road.' },
      { name: 'byoc-tfc-champions.png', alt: 'The first BYOC Team Fortress Classic championship team before Vindicate', caption: 'The first BYOC TFC championship team before Vindicate—with Focus, Solo, rent, Kid Knight, and teammates.' },
      { name: 'l4-engineer-guild.png', alt: 'Chris Brennan with BluR and Captain Ron at an esports event', caption: 'L4 Engineer guild members st1ckg0d, BluR, and Captain Ron.' }
    ]
  },
  {
    id: 'vindicate',
    number: '02',
    years: '2002',
    kicker: 'THE CHAMPIONSHIP RUN',
    title: 'Vindicate and the CPL title',
    intro: 'With Vindicate, I became the primary Engineer behind one of the strongest defenses in North American TFC. My job was to read the attack, build the right setup, and give the rest of the team a defense they could trust.',
    body: 'That run culminated at CPL Winter 2002 in Dallas, where Vindicate won the Team Fortress Classic championship. It was the defining TFC tournament of the era and the biggest competitive result of my playing career.',
    highlights: ['CPL Winter 2002 TFC Champion', 'Primary Engineer for Vindicate', 'Defensive strategy and team leadership', 'Continued at the CAL-I level with Check-Six'],
    tone: 'gold',
    photos: [
      { name: 'vindicate-cpl-winter-2002.png', alt: 'Team Vindicate after winning first place in Team Fortress Classic at CPL Winter 2002', caption: 'First place at CPL Winter 2002: Team Vindicate.', lead: true },
      { name: 'cpl-winner-check.png', alt: 'Chris Brennan holding a Team Fortress Classic championship prize check', caption: 'The TFC championship check.' },
      { name: 'vindicate-awards-stage.png', alt: 'Team Vindicate receiving the Team Fortress Classic championship award on the CPL stage', caption: 'Vindicate receiving the championship award.' },
      { name: 'stickgod-cpl-medal.png', alt: 'Chris st1ckg0d Brennan holding up his CPL medal', caption: 'st1ckg0d with his CPL medal.' }
    ]
  },
  {
    id: 'halo',
    number: '03',
    years: '2003–2004',
    kicker: 'HALO PC + UT2004',
    title: 'Leading through the transition',
    intro: 'When TFC left the major tournament circuit, I moved into Halo PC and carried the same habits with me: map control, defensive awareness, preparation, and clear communication.',
    body: 'I helped lead team Wat¿ to third place at CPL Winter 2003 and later finished fourth with Check-Six at CPL Summer 2004. I also competed with [xeno], played Unreal Tournament 2004 for Domain of Pain, and spent time in Day of Defeat and Counter-Strike 1.6.',
    highlights: ['3rd place—CPL Winter 2003 with Wat¿', '4th place—CPL Summer 2004 with Check-Six', 'Halo competitor with [xeno]', 'UT2004 competitor for Domain of Pain'],
    photos: [
      { name: 'team-wat-cpl.png', alt: 'Team Wat¿ together at CPL Winter 2003 with Halo computers behind them', caption: 'Team Wat¿ at CPL Winter 2003—third place globally in Halo PC.', lead: true },
      { name: 'team-wat-in-action.png', alt: 'Team Wat¿ wearing headsets and competing side by side on Halo computers', caption: 'Team Wat¿ in action.' },
      { name: 'wat-halo-carnage-report.png', alt: 'Halo postgame report showing Wat¿ stkgd in first place with 35 kills', caption: 'Wat¿ stkgd takes first with 35 kills.' },
      { name: 'fireblade-and-stkgd.png', alt: 'Fireblade and stkgd together wearing Team Wat¿ shirts', caption: 'Fireblade and stkgd representing Wat¿.' },
      { name: 'team-xeno-halo.png', alt: 'Members of Halo team Xeno relaxing together', caption: '[xeno] Halo roster—Kaexo, Oplaid, Jeebus, st1ckg0d, and teammate.' }
    ]
  },
  {
    id: 'broadcasting',
    number: '04',
    years: 'THE LAN YEARS',
    kicker: 'GBC RADIO',
    title: 'From player to shoutcaster',
    intro: 'Competition also led me behind the microphone. As part of GBC Radio, I shoutcast matches online and live from LAN parties, turning high-level game knowledge into a story the audience could follow.',
    body: 'Shoutcasting took me to events around the country and gave me another way to lead: explaining the game, reading momentum, and helping competitive gaming feel accessible to the people watching.',
    highlights: ['Online match broadcasts', 'Live LAN shoutcasting', 'Member of GBC Radio', 'Attended events across the country'],
    tone: 'yellow',
    photos: [
      { name: 'gbc-radio-shoutcasting.png', alt: 'st1ckg0d broadcasting from the GBC Radio station at a LAN event', caption: 'At the GBC Radio broadcast station.', lead: true },
      { name: 'stickgod-shoutcasting-lan.png', alt: 'stickgod shoutcasting with a microphone on the floor of a LAN event', caption: 'Shoutcasting live from the LAN floor.' }
    ]
  },
  {
    id: 'wow',
    number: '05',
    years: '2005–2006',
    kicker: 'WORLD OF WARCRAFT',
    title: 'Leadership moved into the raid',
    intro: 'Under the name stkgd, I joined Surreal on Alleria during Vanilla World of Warcraft and focused on healing as a Paladin. I prioritized +healing and spell critical strike—even when that meant unconventional cloth or leather gear.',
    body: 'Surreal pushed through AQ40 and Naxxramas progression, including a high-ranking Twin Emperors kill on February 26, 2006. The genre changed, but the role did not: prepare carefully, communicate clearly, and help the group perform as one unit.',
    highlights: ['Healing Paladin—Surreal, Alleria US', 'Twin Emperors kill—February 26, 2006', 'AQ40 and Naxxramas progression', 'Multiple Alleria server-first accomplishments'],
    tone: 'purple',
    photos: [
      { name: 'stkgd-wow-paladin.png', alt: 'World of Warcraft raid screenshot from healing Paladin stkgd during the Vanilla era', caption: 'Healing Paladin stkgd during Vanilla WoW raid progression.', lead: true, pixelated: true }
    ]
  }
];

const scrapbook = [
  { name: 'everlan-boston-prizes.png', alt: 'Chris stickgod Brennan standing behind computer hardware prizes at EverLAN in Boston', caption: 'EverLAN in Boston—stickgod with the tournament prizes.' },
  { name: 'stickgod-ross-everlan.png', alt: 'Chris stickgod Brennan gaming with his local friend Ross at EverLAN in Boston', caption: 'stickgod and Ross, his local gaming buddy, at EverLAN.' }
];

const teams = ['Vindicate', 'Check-Six', 'Wat¿', '[xeno]', 'Domain of Pain', 'OESM', 'cDD', 'Pyroclastic Flow', 'Surreal—Alleria'];

function Photo({ photo, eager = false }) {
  return (
    <figure className={`story-photo ${photo.lead ? 'story-photo--lead' : ''} ${photo.pixelated ? 'story-photo--pixelated' : ''}`}>
      <div className="story-photo__frame">
        <img src={asset(photo.name)} alt={photo.alt} loading={eager ? 'eager' : 'lazy'} />
      </div>
      <figcaption>{photo.caption}</figcaption>
    </figure>
  );
}

function CareerChapter({ chapter, index }) {
  return (
    <article id={chapter.id} className={`career-chapter career-chapter--${chapter.tone || 'blue'} ${index % 2 ? 'career-chapter--reverse' : ''}`}>
      <div className="chapter-copy">
        <div className="chapter-marker" aria-hidden="true"><span>{chapter.number}</span></div>
        <p className="chapter-kicker">{chapter.years} // {chapter.kicker}</p>
        <h2>{chapter.title}</h2>
        <p className="chapter-intro">{chapter.intro}</p>
        <p>{chapter.body}</p>
        <ul>
          {chapter.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
      </div>
      <div className="chapter-gallery">
        {chapter.photos.map((photo, photoIndex) => <Photo key={photo.name} photo={photo} eager={index === 0 && photoIndex === 0} />)}
      </div>
    </article>
  );
}

function App() {
  return (
    <div className="career-page">
      <header className="career-header">
        <a href="/" className="back-link">← CHRISSPACE 2.0</a>
        <span className="header-status"><i /> CAREER FILE ONLINE</span>
      </header>

      <main>
        <section className="career-hero" aria-labelledby="career-title">
          <div className="engineer-portrait" role="img" aria-label="ChrisSpace Engineer character representing Chris Brennan's Team Fortress Classic career">
            <span>CLASS // ENGINEER</span>
          </div>
          <div className="hero-copy">
            <p className="eyebrow">RETIRED PROFESSIONAL GAMER · TEAM CAPTAIN · BROADCASTER</p>
            <h1 id="career-title"><span>Chris Brennan</span>st1ckg0d</h1>
            <p className="aliases">ALSO KNOWN AS STICKGOD · STKGD</p>
            <p className="hero-lede">I competed across Team Fortress Classic, Halo PC, Unreal Tournament 2004, and World of Warcraft—serving as a captain or leadership figure with every team I joined.</p>
            <div className="hero-achievements" aria-label="Career highlights">
              <span><strong>2002</strong>CPL TFC Champion</span>
              <span><strong>3rd</strong>CPL Halo PC</span>
              <span><strong>GBC</strong>Radio Shoutcaster</span>
            </div>
          </div>
        </section>

        <nav className="era-nav" aria-label="Jump to a career era">
          {chapters.map((chapter) => <a href={`#${chapter.id}`} key={chapter.id}><span>{chapter.number}</span>{chapter.kicker}</a>)}
        </nav>

        <section className="leadership-note" aria-labelledby="leadership-title">
          <p className="eyebrow">THE THROUGH-LINE</p>
          <h2 id="leadership-title">Lead the team. Read the game. Adapt.</h2>
          <p>Different games demanded different mechanics, but my role stayed consistent: prepare the group, make the tactical call, and give teammates what they needed to succeed.</p>
        </section>

        <section className="career-story" aria-label="Esports career timeline">
          {chapters.map((chapter, index) => <CareerChapter chapter={chapter} index={index} key={chapter.id} />)}
        </section>

        <section className="scrapbook" aria-labelledby="scrapbook-title">
          <div className="section-heading">
            <p className="eyebrow">LAN SCRAPBOOK</p>
            <h2 id="scrapbook-title">The people and places around the competition</h2>
            <p>The wins mattered. So did the road trips, hardware prizes, teammates, and friends who made the LAN era memorable.</p>
          </div>
          <div className="scrapbook-grid">
            {scrapbook.map((photo) => <Photo key={photo.name} photo={photo} />)}
          </div>
        </section>

        <section className="team-history" aria-labelledby="teams-title">
          <div>
            <p className="eyebrow">TEAM HISTORY</p>
            <h2 id="teams-title">Clans, teams, and guilds</h2>
          </div>
          <div className="team-list">
            {teams.map((team, index) => <span key={team}><i>{String(index + 1).padStart(2, '0')}</i>{team}</span>)}
          </div>
        </section>

        <section className="career-close" aria-labelledby="legacy-title">
          <p className="eyebrow">FINAL SCORE</p>
          <h2 id="legacy-title">Built to make the team better.</h2>
          <p>From championship TFC defense to top-four Halo finishes, live broadcasts, and high-end Vanilla WoW progression, the lasting skill was leadership: understanding the game, communicating the plan, and adapting when the plan changed.</p>
          <a href="/">Return to ChrisSpace <span aria-hidden="true">→</span></a>
        </section>
      </main>

      <footer className="career-footer">
        <span>© 2026 Chris Brennan</span>
        <span>GG // CAREER ARCHIVE</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
