// src/App.jsx
import "./App.css";
import { useState, useEffect } from "react";
import BaseCard from "./components/BaseCard"; // 1. Import it here!
import Tag from "./components/Tag";
import Title from "./components/Title";
import ExpandableText from "./components/ExpandableText";
import TitleLink from "./components/TitleLink";

import ColoredInstagram from "./assets/colored/Instagram.svg?react";
import ColoredLinkedIn from "./assets/colored/LinkedIn.svg?react";
import ColoredTiktok from "./assets/colored/TikTok.svg?react";
import ColoredTwitter from "./assets/colored/Twitter.svg?react";
import ColoredFacebook from "./assets/colored/Facebook.svg?react";
import ColoredGithub from "./assets/colored/Github.svg?react";
import ColoredWhatsApp from "./assets/colored/WhatsApp.svg?react";

import BlackInstagram from "./assets/black/Instagram.svg?react";
import BlackLinkedIn from "./assets/black/LinkedIn.svg?react";
import BlackTiktok from "./assets/black/TikTok.svg?react";
import BlackTwitter from "./assets/black/Twitter.svg?react";
import BlackFacebook from "./assets/black/Facebook.svg?react";
import BlackGithub from "./assets/black/Github.svg?react";
import BlackWhatsApp from "./assets/black/WhatsApp.svg?react";

function App() {
  const handleTitleClick = (myLink) => {
    window.location.href = myLink;
  };
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Check if the browser has already finished loading everything
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      // If not, listen for the window's 'load' event
      const handlePageLoad = () => {
        setLoading(false);
      };

      window.addEventListener("load", handlePageLoad);

      // Cleanup the event listener
      return () => {
        window.removeEventListener("load", handlePageLoad);
      };
    }
  }, []);
  return (
    <div className="app-container">
      <header className="hero-section" id="About">
        <div className="profile-container">
          <div className="hero-badge">Available for new opportunities</div>
          <div className="profile-image">
            <img
              src={`${import.meta.env.BASE_URL}javer.png`}
              alt="Javer Benito"
            />
          </div>
        </div>
        <div className="details-container">
          <Title>
            <div className="typing-container">
              <h1 className="name">Javer Benito</h1>
              <h2
                className="name typing-effect"
                style={{ marginBottom: "0px" }}
              >
                Web, Game & Software Developer
              </h2>
            </div>
          </Title>
          <BaseCard isLoading={loading} className="hero-card details">
            <div>
              <p>
                A passionate web, game, and software developer with a strong
                foundation in Java, JavaScript, TypeScript, Lua, Tailwind CSS,
                and Vite. I have a proven track record of successfully migrating
                legacy web game architectures to robust Java-based frameworks
                (libGDX).
              </p>
            </div>
            <div className="hero-socials">
              <a
                href="https://www.facebook.com/javer.benito"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <ColoredFacebook />
              </a>
              <a
                href="https://x.com/BenitoJaver"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <ColoredTwitter />
              </a>
              <a
                href="https://www.tiktok.com/@javer.benito"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <ColoredTiktok />
              </a>
              <a
                href="https://www.linkedin.com/in/javer-benito-173b002b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <ColoredLinkedIn />
              </a>
              <a
                href="https://www.instagram.com/javerbenito/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <ColoredInstagram />
              </a>
              <a
                href="https://github.com/catcooks"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <ColoredGithub />
              </a>
              <a
                href="https://www.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <ColoredWhatsApp />
              </a>
            </div>
          </BaseCard>
        </div>
      </header>

      <section id="Profile">
        <Title>
          <h3>Technical Profile</h3>
        </Title>
        <BaseCard isLoading={loading}>
          <h3>CORE STACK</h3>
          <p>
            Java, JavaScript (React, Phaser.js), TypeScript, Lua, Tailwind CSS,
            and Vite. Currently specialized in migrating legacy web game
            architectures to robust Java-based frameworks (libGDX)
          </p>
          <div className="tag-container">
            <Tag>Java</Tag>
            <Tag>JavaScript</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Lua</Tag>
            <Tag>Tailwind CSS</Tag>
            <Tag>Vite</Tag>
          </div>
        </BaseCard>
      </section>
      <section id="Services">
        <Title>
          <h3>Services Offered</h3>
        </Title>
        <div className="projects-grid">
          <BaseCard isLoading={loading}>
            <h3>Game Dev</h3>
            <p>Comming soon...</p>
            <div className="tag-container"></div>
          </BaseCard>
          <BaseCard isLoading={loading}>
            <h3>Web Dev</h3>
            <p>Comming soon...</p>
            <div className="tag-container"></div>
          </BaseCard>
          <BaseCard isLoading={loading}>
            <h3>Web Design</h3>
            <p>Comming soon...</p>
            <div className="tag-container"></div>
          </BaseCard>
        </div>
      </section>
      <section id="KeyProjects">
        <Title>
          <h3>Key Projects</h3>
        </Title>
        <div className="projects-grid">
          <BaseCard isLoading={loading} className="project-card">
            <TitleLink
              onClick={() =>
                handleTitleClick("https://catcooks.github.io/WordzForWizdom/")
              }
            >
              Wordz For Wizdom
            </TitleLink>
            <ExpandableText>
              A web-based word puzzle game built with React and Phaser.js,
              designed to enhance vocabulary and critical thinking skills. The
              game features multiple levels of increasing difficulty, engaging
              graphics, and a user-friendly interface.
            </ExpandableText>
            <div className="project-tags">
              <Tag>Phaser.js</Tag>
              <Tag>JavaScript</Tag>
            </div>
          </BaseCard>

          <BaseCard isLoading={loading} className="project-card">
            <TitleLink
              onClick={() => handleTitleClick("https://adminfee1.netlify.app/")}
            >
              Admin Fee
            </TitleLink>
            <ExpandableText>
              An interactive web application developed using Vanilla JavaScript
              and CSS, aimed at streamlining administrative fee management for
              small businesses. The app allows users to easily track, calculate,
              and manage various administrative fees.
            </ExpandableText>
            <div className="project-tags">
              <Tag>JavaScript</Tag>
              <Tag>CSS</Tag>
            </div>
          </BaseCard>

          <BaseCard isLoading={loading} className="project-card">
            <TitleLink
              onClick={() =>
                handleTitleClick("https://github.com/catcooks/phaser-editor")
              }
            >
              Phaser-Editor
            </TitleLink>
            <ExpandableText>
              An Interactive editor for creating and editing Phaser.js games.
              This tool provides a visual interface for designing game levels,
              managing assets, and scripting game logic. Built with Vue and Rust
              (Tauri).
            </ExpandableText>
            <div className="project-tags">
              <Tag>TypeScript</Tag>
              <Tag>Vue</Tag>
              <Tag>Rust</Tag>
              <Tag>Tauri</Tag>
            </div>
          </BaseCard>

          <BaseCard isLoading={loading} className="project-card">
            <TitleLink
              onClick={() =>
                handleTitleClick("https://github.com/catcooks/my-cafe")
              }
            >
              My cafe
            </TitleLink>
            <ExpandableText>
              An Interactive Management WebApp front end Idea for Cafe
              management or cashier, I created this for small cafe business
              intended to help manage and do most of the business work. this
              project have automations, orders, stock inventory updates,
              employee updates etc.
            </ExpandableText>
            <div className="project-tags">
              <Tag>React</Tag>
              <Tag>Vue</Tag>
              <Tag>TypeScript</Tag>
            </div>
          </BaseCard>
        </div>
      </section>
      <section id="Reviews">
        <Title>
          <h3>Top Reviews</h3>
        </Title>
        <div className="projects-grid">
          <BaseCard isLoading={loading}>
            <h3>Top Client's Comments</h3>
            <p>Comming soon...</p>
            <div className="tag-container"></div>
          </BaseCard>
          <BaseCard isLoading={loading}>
            <h3>Top Client's Comments</h3>
            <p>Comming soon...</p>
            <div className="tag-container"></div>
          </BaseCard>
        </div>
      </section>
      <section id="Projects">
        <Title>
          <h3>Other Projects</h3>
        </Title>
        <div className="projects-grid">
          <BaseCard isLoading={loading}>
            <h3>Java</h3>
            <p>Comming soon...</p>
            <div className="tag-container"></div>
          </BaseCard>
          <BaseCard isLoading={loading}>
            <h3>TypeScript</h3>
            <p>Comming soon...</p>
            <div className="tag-container"></div>
          </BaseCard>
          <BaseCard isLoading={loading}>
            <h3>Phaser</h3>
            <p>Comming soon...</p>
            <div className="tag-container"></div>
          </BaseCard>
        </div>
      </section>
      <footer>
        <h3 className="footer-title">Hire me</h3>
        <div className="footer-container">
          <div className="footer-section">
            <h2>Contacts</h2>
            <div className="contact-group">
              <div className="contact-labels">
                <span>Tel: </span>
                <span>Email: </span>
              </div>
              <div className="vertical-divider" />
              <div className="contact-values">
                <span style={{ letterSpacing: "-1px" }}>
                  _____________________
                </span>
                <span>javerbenito@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="footer-section">
            {" "}
            {/* Adjusted padding to match your original */}
            <h2>Social Media</h2>
            <div className="social-grid">
              <a
                href="https://www.facebook.com/javer.benito"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <BlackFacebook className="icon-default" />
                <ColoredFacebook className="icon-hover" />
              </a>
              <a
                href="https://x.com/BenitoJaver"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <BlackTwitter className="icon-default" />
                <ColoredTwitter className="icon-hover" />
              </a>
              <a
                href="https://www.tiktok.com/@javer.benito"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <BlackTiktok className="icon-default" />
                <ColoredTiktok className="icon-hover" />
              </a>
              <a
                href="https://www.linkedin.com/in/javer-benito-173b002b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <BlackLinkedIn className="icon-default" />
                <ColoredLinkedIn className="icon-hover" />
              </a>
              <a
                href="https://www.instagram.com/javerbenito/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <BlackInstagram className="icon-default" />
                <ColoredInstagram className="icon-hover" />
              </a>
              <a
                href="https://github.com/catcooks"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <BlackGithub className="icon-default" />
                <ColoredGithub className="icon-hover" />
              </a>
              <a
                href="https://www.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <BlackWhatsApp className="icon-default" />
                <ColoredWhatsApp className="icon-hover" />
              </a>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="footer-section">
            <h2>Navigation: </h2>
            <ul className="footer-links">
              <li>
                <a href="#About">
                  <p className="nav-link-text">About me</p>
                </a>
              </li>
              <li>
                <a href="#Profile">
                  <p className="nav-link-text">Technical Profile</p>
                </a>
              </li>
              <li>
                <a href="#Services">
                  <p className="nav-link-text">Services Offered</p>
                </a>
              </li>
              <li>
                <a href="#KeyProjects">
                  <p className="nav-link-text">Key Projects</p>
                </a>
              </li>
              <li>
                <a href="#Reviews">
                  <p className="nav-link-text">Top Reviews</p>
                </a>
              </li>
              <li>
                <a href="#Projects">
                  <p className="nav-link-text">Other Projects</p>
                </a>
              </li>
            </ul>
          </div>

          <span className="footer-copyright">
            © 2026 — Made with ୧( ಠ Д ಠ )୨ by Javer Benito
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
