"use client"
import { useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useGSAP } from '@gsap/react';
import styles from '@/app/page.module.css';
import Clock from '@/components/UI/Clock/Clock';
import Meter from '@/components/UI/Meter';
import { animateSplitTextChars, animHomeBlur, cleanupAnimations } from '@/utils/gsapHelpers';

const CURL_COMMAND = 'curl -s https://arbipilot.vercel.app/skill.md';

export default function HeroSection() {
  const [activePanel, setActivePanel] = useState(null);
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    const splitTextResult = animateSplitTextChars(`.${styles.hero} h1`, {
      duration: 0.75,
      delay: 2.5,
      staggerAmount: 1,
      blur: 20
    });

    const blur1 = animHomeBlur(`.${styles.hero} .${styles.pressure}`, 1.5, 3.25);
    const blur2 = animHomeBlur(`.${styles.hero} .${styles.date}`, 2.5, 3.25);
    const blur3 = animHomeBlur(`.${styles.scrollIndicator}`, 1.5, 3);
    const blur4 = animHomeBlur(`.${styles.roleButtons}`, 1.5, 3.5);

    return () => {
      cleanupAnimations([
        splitTextResult,
        { animation: blur1 },
        { animation: blur2 },
        { animation: blur3 },
        { animation: blur4 }
      ]);
    };
  }, [])

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(CURL_COMMAND);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = CURL_COMMAND;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, []);

  const closePanel = useCallback(() => {
    setActivePanel(null);
    setCopied(false);
  }, []);

  const overlay = activePanel && mounted ? createPortal(
    <div className={styles.roleOverlay} onClick={closePanel}>
      <div className={styles.rolePanel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.rolePanelHeader}>
          <h3>{activePanel === 'agent' ? 'SKILL FILE FOR AI AGENTS' : 'OPEN ARBIPILOT'}</h3>
          <button className={styles.closeBtn} onClick={closePanel}>[ X ]</button>
        </div>

        {activePanel === 'agent' && (
          <>
            <p className={styles.rolePanelDesc}>
              Copy this to your agent:
            </p>
            <div className={styles.curlRow}>
              <code className={styles.curlCode}>{CURL_COMMAND}</code>
              <button className={styles.curlCopyBtn} onClick={handleCopy}>
                {copied ? 'copied' : 'copy'}
              </button>
            </div>
          </>
        )}

        {activePanel === 'human' && (
          <>
            <p className={styles.rolePanelDesc}>
              ArbiPilot helps users move from natural language to safer onchain execution. It parses intent, validates supported actions, explains what will happen, previews risks, and only then prepares deterministic execution on Arbitrum.
            </p>
            <div className={styles.rolePanelSteps}>
              <div className={styles.step}>
                <span className={styles.stepNum}>01</span>
                <div>
                  <strong>PARSE INTENT</strong>
                  <p>Understand what the user wants in plain language</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>02</span>
                <div>
                  <strong>EXPLAIN & VALIDATE</strong>
                  <p>Show route, guardrails, and risk before any signature request</p>
                </div>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNum}>03</span>
                <div>
                  <strong>EXECUTE SAFELY</strong>
                  <p>Constrain final execution to deterministic, allowlisted flows</p>
                </div>
              </div>
            </div>
            <a
              href="https://arbipilot.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.appBtn}
            >
              [ OPEN APP ]
            </a>
            <p className={styles.selfPowered}>
              Built for Arbitrum agentic execution with clarity-first UX.
            </p>
          </>
        )}
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
      <section className={styles.hero} id="home">
        <div className={styles.scrollIndicator}>(X)  [ SCROLL ]</div>
        <span className={styles.middleLine} aria-hidden="true"></span>
        <h1>ARBIPILOT</h1>
        <div className={styles.roleButtons}>
          <button
            className={styles.roleBtn}
            onClick={() => setActivePanel('agent')}
          >
            VIEW SKILL
          </button>
          <button
            className={styles.roleBtn}
            onClick={() => setActivePanel('human')}
          >
            OPEN APP
          </button>
        </div>
        <div className={styles.pressure}>
          <Meter></Meter>
        </div>
        <div className={styles.date}>
          <Clock />
        </div>
      </section>
      {overlay}
    </>
  );
}
