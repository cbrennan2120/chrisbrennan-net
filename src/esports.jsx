import React from 'react';
import { createRoot } from 'react-dom/client';
import './esports.css';

const teams = ['Vindicate', 'Check-Six', 'Wat¿', 'DoP', 'OESM', 'cDD', 'Xeno', 'Pyroclastic Flow'];

const archivePhotos = [
  {
    src: '/assets/esports-archive/vindicate-cpl-winter-2002.png',
    alt: 'Team Vindicate after winning first place in Team Fortress Classic at CPL Winter 2002',
    caption: 'First place — CPL Winter 2002 Team Fortress Classic. Team Vindicate.',
    className: 'archive-photo--wide'
  },
  {
    src: '/assets/esports-archive/cpl-winner-check.png',
    alt: 'Chris Brennan holding a Team Fortress Classic championship prize check',
    caption: 'Championship secured: the TFC winner’s check.'
  },
  {
    src: '/assets/esports-archive/vindicate-awards-stage.png',
    alt: 'Team Vindicate receiving the Team Fortress Classic championship award on the CPL stage',
    caption: 'Vindicate on the CPL stage receiving the Winter 2002 championship check.'
  },
  {
    src: '/assets/esports-archive/stickgod-cpl-medal.png',
    alt: 'Chris st1ckg0d Brennan seated in a large chair and holding up his CPL medal',
    caption: 'st1ckg0d with his CPL medal after the championship run.'
  },
  {
    src: '/assets/esports-archive/everlan-boston-prizes.png',
    alt: 'Chris stickgod Brennan standing behind computer hardware prizes at EverLAN in Boston',
    caption: 'EverLAN in Boston—stickgod with the tournament prizes.'
  },
  {
    src: '/assets/esports-archive/stickgod-ross-everlan.png',
    alt: 'Chris stickgod Brennan gaming with his local friend Ross at EverLAN in Boston',
    caption: 'stickgod and Ross, his local gaming buddy, at EverLAN in Boston.'
  },
  {
    src: '/assets/esports-archive/l4-engineer-guild.png',
    alt: 'Chris Brennan with BluR and Captain Ron at an esports event',
    caption: 'The L4 Engineer guild: st1ckg0d with BluR and Captain Ron—the other two best Engineers in TFC.'
  },
  {
    src: '/assets/esports-archive/byoc-tfc-champions.png',
    alt: 'The first BYOC Team Fortress Classic championship team before Vindicate',
    caption: 'The first BYOC TFC championship team before Vindicate—with Focus, Solo, rent, Kid Knight, and teammates.'
  },
  {
    src: '/assets/esports-archive/team-wat-cpl.png',
    alt: 'Team Wat¿ together at a CPL event with Halo PCs behind them',
    caption: 'Team Wat¿ at CPL Winter 2003—including Gryp, Kron, and st1ckg0d—third place globally in Halo PC.',
    className: 'archive-photo--wide'
  },
  {
    src: '/assets/esports-archive/team-wat-in-action.png',
    alt: 'Team Wat¿ wearing headsets and competing side by side on Halo PCs',
    caption: 'Team Wat¿ in action on the Halo PC tournament floor.'
  },
  {
    src: '/assets/esports-archive/fireblade-and-stkgd.png',
    alt: 'Fireblade and stkgd together wearing Team Wat¿ shirts',
    caption: 'Fireblade and stkgd representing Team Wat¿.'
  },
  {
    src: '/assets/esports-archive/wat-halo-carnage-report.png',
    alt: 'Halo postgame carnage report showing Wat¿ stkgd in first place with 35 kills',
    caption: 'Postgame carnage report: Wat¿ stkgd takes first with 35 kills.',
    className: 'archive-photo--game'
  },
  {
    src: '/assets/esports-archive/team-xeno-halo.png',
    alt: 'Members of Halo team Xeno relaxing together',
    caption: '[xeno] Halo roster—Kaexo, Oplaid, Jeebus, st1ckg0d, and teammate.'
  },
  {
    src: '/assets/esports-archive/stkgd-wow-paladin.png',
    alt: 'World of Warcraft raid screenshot from healing Paladin stkgd during the Vanilla era',
    caption: 'Healing Paladin stkgd in Vanilla WoW raid progression—one of the few surviving screenshots.',
    className: 'archive-photo--wide archive-photo--game'
  },
  {
    src: '/assets/esports-archive/stickgod-portrait.png',
    alt: 'A young Chris Brennan looking back toward the camera with the name st1ckg0d over the image',
    caption: 'st1ckg0d on the road during the early professional era.'
  }
];

const chapters = [
  {
    years: '1999—2003',
    game: 'Team Fortress Classic',
    code: 'TFC_ENGY',
    icon: 'sentry',
    title: 'The defensive anchor',
    body: 'Widely regarded in the competitive TFC community as an elite Engineer, st1ckg0d built the defenses behind some of North America’s most dominant teams. Alongside BluR and Captain Ron—the other two best Engineers in TFC—he was part of the L4 Engineer guild.',
    highlights: [
      'Primary Engineer for Vindicate',
      'CPL Winter 2002 TFC Champion',
      'Check-Six competitor at the CAL-I level',
      'Played with OESM, cDD, and Pyroclastic Flow'
    ]
  },
  {
    years: '2003—2004',
    game: 'Halo PC + UT2004',
    code: 'MAP_CONTROL',
    icon: 'ring',
    title: 'The multi-game transition',
    body: 'When TFC left the major circuit, Chris carried his defensive awareness into new arenas—leading in Halo PC and competing in the CPL Extreme World Championship circuit for Unreal Tournament 2004.',
    highlights: [
      '3rd place globally — CPL Winter 2003, team Wat¿',
      '4th place — CPL Summer 2004, Check-Six',
      'Halo competitor with [xeno] alongside Kaexo, Oplaid, and Jeebus',
      'Professional UT2004 competitor for Domain of Pain',
      'Also competed in Day of Defeat and Counter-Strike 1.6'
    ]
  },
  {
    years: '2005—2006',
    game: 'World of Warcraft',
    code: 'HOLY_CRIT',
    icon: 'shield',
    title: 'The healing-chart era',
    body: 'Playing as stkgd on Alleria, Chris became a pioneering healing Paladin for Surreal during Vanilla WoW—stacking +heal and spell crit, ignoring armor conventions, and consistently finishing atop the healing charts.',
    highlights: [
      'Surreal — Alleria (US)',
      'High-ranking Twin Emperors kill — February 26, 2006',
      'AQ40 and Naxxramas progression',
      'Multiple Alleria server-first accomplishments with Surreal'
    ]
  }
];

function PixelIcon({ type }) {
  return <span className={`pixel-icon pixel-icon--${type}`} aria-hidden="true"><i /><b /><em /></span>;
}

function App() {
  return (
    <div className="arcade-shell">
      <header className="arcade-header">
        <a href="/" className="back-link">← CHRISSPACE 2.0</a>
        <span className="header-status"><i /> CAREER FILE ONLINE</span>
      </header>

      <main>
        <section className="player-card" aria-labelledby="career-title">
          <div className="engineer-portrait" role="img" aria-label="ChrisSpace Engineer character representing Chris Brennan's Team Fortress Classic career">
            <span className="portrait-scanline" aria-hidden="true" />
            <span className="portrait-label">CLASS: ENGINEER</span>
          </div>
          <div className="player-copy">
            <span className="insert-coin">PLAYER ONE // RETIRED PRO</span>
            <h1 id="career-title"><span>CHRIS BRENNAN</span>st1ckg0d</h1>
            <p className="alias-line">AKA “STICKGOD” · STKGD · CHRIS HILL</p>
            <p className="lede">World champion Engineer. Tactical leader. Multi-game professional. Progression raider.</p>
            <div className="player-stats" aria-label="Career specialties">
              <span><small>DEFENSE</small><strong>99</strong></span>
              <span><small>LEADERSHIP</small><strong>96</strong></span>
              <span><small>ADAPT</small><strong>98</strong></span>
              <span><small>ERA</small><strong>1999</strong></span>
            </div>
          </div>
        </section>

        <section className="champion-banner" aria-labelledby="champion-title">
          <span className="pixel-trophy" aria-hidden="true">★</span>
          <div>
            <span>ACHIEVEMENT UNLOCKED</span>
            <h2 id="champion-title">CPL Winter 2002 Champion</h2>
            <p>Team Fortress Classic · Vindicate · Dallas, Texas</p>
          </div>
          <strong>WORLD<br />CHAMPION</strong>
        </section>

        <section className="lan-archive" aria-labelledby="archive-title">
          <div className="section-title">
            <span>ORIGINAL SCREENSHOTS // LAN MEMORY</span>
            <h2 id="archive-title">The LAN Archive</h2>
          </div>
          <div className="archive-grid">
            {archivePhotos.map((photo, index) => (
              <figure className={`archive-photo ${photo.className || ''}`} key={photo.src}>
                <div className="archive-image-wrap">
                  <img src={photo.src} alt={photo.alt} loading={index > 1 ? 'lazy' : 'eager'} />
                  <span aria-hidden="true">IMG_{String(index + 1).padStart(2, '0')}</span>
                </div>
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="career-log" aria-labelledby="career-log-title">
          <div className="section-title">
            <span>SELECT STAGE</span>
            <h2 id="career-log-title">Career Log</h2>
          </div>
          <div className="timeline">
            {chapters.map((chapter, index) => (
              <article className="era-card" key={chapter.game}>
                <div className="era-rail" aria-hidden="true"><span>{String(index + 1).padStart(2, '0')}</span></div>
                <div className="era-main">
                  <div className="era-heading">
                    <PixelIcon type={chapter.icon} />
                    <div>
                      <span>{chapter.years} // {chapter.code}</span>
                      <h3>{chapter.game}</h3>
                    </div>
                  </div>
                  <h4>{chapter.title}</h4>
                  <p>{chapter.body}</p>
                </div>
                <ul className="achievement-list">
                  {chapter.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="broadcast-panel" aria-labelledby="broadcast-title">
          <div className="broadcast-copy">
            <span className="insert-coin">BONUS STAGE // GBC RADIO</span>
            <h2 id="broadcast-title">From player to shoutcaster</h2>
            <p>
              Chris also built a small career behind the microphone, shoutcasting matches online
              and live at LAN parties as part of GBC Radio. The role took him to LAN events across
              the country, translating high-level game knowledge into the story of the match.
            </p>
          </div>
          <div className="broadcast-photos">
            <figure>
              <img src="/assets/esports-archive/gbc-radio-shoutcasting.png" alt="stickgod broadcasting from the GBC Radio station at a LAN event" loading="lazy" />
              <figcaption>st1ckg0d at the GBC Radio broadcast station.</figcaption>
            </figure>
            <figure>
              <img src="/assets/esports-archive/stickgod-shoutcasting-lan.png" alt="stickgod shoutcasting with a microphone on the floor of a LAN event" loading="lazy" />
              <figcaption>stickgod shoutcasting live from the LAN floor.</figcaption>
            </figure>
          </div>
        </section>

        <section className="team-roster" aria-labelledby="teams-title">
          <div className="section-title section-title--compact">
            <span>CLAN HISTORY</span>
            <h2 id="teams-title">Teams & Guilds</h2>
          </div>
          <div className="team-grid">
            {teams.map((team, index) => <span key={team}><i>{String(index + 1).padStart(2, '0')}</i>{team}</span>)}
            <span className="team-surreal"><i>09</i>Surreal — Alleria</span>
          </div>
        </section>

        <section className="legacy-panel" aria-labelledby="legacy-title">
          <span className="legacy-kicker">FINAL SCORE</span>
          <h2 id="legacy-title">Built to adapt.</h2>
          <p>
            From a championship TFC defense to top-four Halo finishes and high-end Vanilla WoW
            progression, st1ckg0d’s career crossed three genres without losing the same core edge:
            preparation, map awareness, calm leadership, and making the whole team better.
          </p>
          <a href="/">Return to ChrisSpace <span aria-hidden="true">→</span></a>
        </section>
      </main>

      <footer>
        <span>© 2026 Chris Brennan</span>
        <span>PRESS START TO REMEMBER</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
