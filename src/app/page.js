"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight, BadgeCheck, Bot, ShieldCheck, Sparkles, Workflow } from "lucide-react";

import styles from "@/app/page.module.css";

const pillars = [
  {
    title: "Intent becomes structured",
    body: "ArbiPilot translates natural language into a reviewable action plan instead of letting the model invent execution freely.",
    icon: Workflow,
  },
  {
    title: "Execution becomes bounded",
    body: "Validation, allowlists, route checks, and deterministic execution boundaries keep onchain actions constrained and legible.",
    icon: ShieldCheck,
  },
  {
    title: "Signing becomes clearer",
    body: "Users see what will happen, why it is supported, and what risk applies before the wallet prompt becomes the point of commitment.",
    icon: BadgeCheck,
  },
];

const layers = [
  {
    index: "01",
    title: "Interpret intent",
    body: "The user speaks in natural language. ArbiPilot extracts a constrained execution objective.",
  },
  {
    index: "02",
    title: "Validate the path",
    body: "Only supported routes, assets, and actions move forward into execution preparation.",
  },
  {
    index: "03",
    title: "Explain before signing",
    body: "The system previews the route, boundaries, and risk surface before the final transaction is prepared.",
  },
  {
    index: "04",
    title: "Execute deterministically",
    body: "ArbiPilot turns validated intent into deterministic, reviewable onchain execution on Arbitrum.",
  },
];

export default function Home() {
  useGSAP(() => {
    gsap.fromTo(
      `.${styles.arbiHero} .${styles.reveal}`,
      { opacity: 0, y: 24, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <main className={styles.arbiPage}>
      <section className={styles.arbiHero}>
        <div className={styles.heroGlowA} />
        <div className={styles.heroGlowB} />

        <header className={`${styles.arbiNav} ${styles.reveal}`}>
          <div className={styles.brandBlock}>
            <div className={styles.brandIcon}>
              <Bot size={18} />
            </div>
            <div>
              <p className={styles.brandName}>ARBIPILOT</p>
              <p className={styles.brandSub}>Clarity for agentic execution</p>
            </div>
          </div>

          <nav className={styles.heroLinks}>
            <a href="#pillars">Pillars</a>
            <a href="#layers">Layers</a>
            <a href="#about">About</a>
          </nav>
        </header>

        <div className={styles.heroContent}>
          <div className={styles.heroCopy}>
            <div className={`${styles.eyebrow} ${styles.reveal}`}>
              <Sparkles size={14} />
              Explain first. Execute second.
            </div>

            <h1 className={`${styles.heroTitle} ${styles.reveal}`}>
              ArbiPilot makes AI-assisted onchain execution clearer, safer, and deterministic.
            </h1>

            <p className={`${styles.heroDescription} ${styles.reveal}`}>
              Today, onchain execution is either too technical for users or too opaque when delegated to AI.
              ArbiPilot bridges that gap by turning natural language intent into explained, validated, deterministic execution on Arbitrum.
            </p>

            <div className={`${styles.heroActions} ${styles.reveal}`}>
              <a href="https://arbipilot.vercel.app" target="_blank" rel="noreferrer" className={styles.primaryBtn}>
                Open App <ArrowRight size={16} />
              </a>
              <a href="/skill.md" target="_blank" rel="noreferrer" className={styles.secondaryBtn}>
                View Skill
              </a>
            </div>
          </div>

          <div className={`${styles.heroPanel} ${styles.reveal}`}>
            <div className={styles.panelLabel}>Execution Thesis</div>
            <div className={styles.panelGrid}>
              <div className={styles.infoCard}>
                <span>Network</span>
                <strong>Arbitrum Sepolia</strong>
              </div>
              <div className={styles.infoCard}>
                <span>Mode</span>
                <strong>Explain → Validate → Execute</strong>
              </div>
              <div className={styles.infoCard}>
                <span>Current Action</span>
                <strong>Deterministic swap flow</strong>
              </div>
              <div className={styles.infoCard}>
                <span>Identity</span>
                <strong>Registry-ready agent</strong>
              </div>
            </div>
            <p className={styles.panelFooter}>
              ArbiPilot is not a chatty wallet bot. It is a clarity layer between user intent and money-moving execution.
            </p>
          </div>
        </div>
      </section>

      <section id="pillars" className={styles.pillarSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.sectionEyebrow}>Core pillars</p>
          <h2>Built to reduce black-box trust in AI-assisted wallet execution.</h2>
        </div>

        <div className={styles.pillarGrid}>
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className={styles.pillarCard}>
                <div className={styles.pillarIcon}>
                  <Icon size={22} />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="layers" className={styles.layerSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.sectionEyebrow}>Execution layers</p>
          <h2>ArbiPilot turns flexible language into constrained onchain action.</h2>
        </div>

        <div className={styles.layerGrid}>
          {layers.map((layer) => (
            <article key={layer.index} className={styles.layerCard}>
              <span>{layer.index}</span>
              <h3>{layer.title}</h3>
              <p>{layer.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className={styles.aboutSectionNew}>
        <div className={styles.aboutBlock}>
          <p className={styles.sectionEyebrow}>About ArbiPilot</p>
          <h2>Natural language convenience without black-box signing.</h2>
          <p>
            ArbiPilot is an Arbitrum-native execution clarity layer. It parses intent, validates supported actions,
            previews risks, and only then prepares deterministic execution. The goal is simple: make AI-assisted
            onchain actions easier to understand before users sign anything.
          </p>
        </div>

        <div className={styles.aboutMeta}>
          <div>
            <span>Stack</span>
            <strong>Next.js · React · Wagmi · Viem · GSAP</strong>
          </div>
          <div>
            <span>Focus</span>
            <strong>Trust, clarity, validation, deterministic execution</strong>
          </div>
          <div>
            <span>Challenge</span>
            <strong>ArbiLink Challenge — Agentic Bounty</strong>
          </div>
        </div>
      </section>
    </main>
  );
}
