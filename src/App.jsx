// src/App.jsx
import "./App.css";
import { useState, useEffect } from 'react';
import BaseCard from "./components/BaseCard"; // 1. Import it here!
import Tag from "./components/Tag";
import Title from "./components/Title";
import ExpandableText from "./components/ExpandableText";
import TitleLink from "./components/TitleLink";




import  ColoredInstagram from './assets/colored/Instagram.svg?react';
import  ColoredLinkedIn from './assets/colored/LinkedIn.svg?react';
import  ColoredTiktok from './assets/colored/TikTok.svg?react';
import  ColoredTwitter from './assets/colored/Twitter.svg?react';
import  ColoredFacebook from './assets/colored/Facebook.svg?react';
import  ColoredGithub from './assets/colored/Github.svg?react';
import  ColoredWhatsApp from './assets/colored/WhatsApp.svg?react';

import  BlackInstagram from './assets/black/Instagram.svg?react';
import  BlackLinkedIn from './assets/black/LinkedIn.svg?react';
import  BlackTiktok from './assets/black/TikTok.svg?react';
import  BlackTwitter from './assets/black/Twitter.svg?react';
import  BlackFacebook from './assets/black/Facebook.svg?react';
import  BlackGithub from './assets/black/Github.svg?react';
import  BlackWhatsApp from './assets/black/WhatsApp.svg?react';


function App() {
  const handleTitleClick = (myLink) => {
    window.location.href = myLink;
  }
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

useEffect(() => {
    // Check if the browser has already finished loading everything
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      // If not, listen for the window's 'load' event
      const handlePageLoad = () => {
        setLoading(false);
      };

      window.addEventListener('load', handlePageLoad);

      // Cleanup the event listener
      return () => {
        window.removeEventListener('load', handlePageLoad);
      };
    }
  }, []);
  return (
    <div className="app-container">
      <header className="hero-section">
        <div className="profile-container">
          <div className="hero-badge">Available for new opportunities</div>
          <div className="profile-image" >
           <img src={`${import.meta.env.BASE_URL}javer.png`} alt="Javer Benito" />
          </div>

        </div>
          <div className="details-container">
            <Title>
              <h1 className="name">Javer Benito</h1>
              <h2 className="name" style={{marginBottom:"0px"}}>Web, Game & Software Developer</h2>
            </Title>
            <BaseCard isLoading={loading} className="hero-card details">
            <p>
              A passionate web, game, and software developer with a strong foundation
              in Java, JavaScript, TypeScript, Lua, Tailwind CSS, and Vite. I have
              a proven track record of successfully migrating legacy web game
              architectures to robust Java-based frameworks (libGDX).
            </p>
            <div className="hero-socials">
              <a href="https://www.facebook.com/javer.benito" target="_blank" rel="noopener noreferrer" className="social-link">
                <BlackFacebook className="icon-default" />
                <ColoredFacebook className="icon-hover" />
              </a>
              <a href="https://x.com/BenitoJaver" target="_blank" rel="noopener noreferrer" className="social-link">
                <BlackTwitter className="icon-default" />
                <ColoredTwitter className="icon-hover" />
              </a>
              <a href="https://www.tiktok.com/@javer.benito" target="_blank" rel="noopener noreferrer" className="social-link">
                <BlackTiktok className="icon-default" />
                <ColoredTiktok className="icon-hover" />
              </a>
              <a href="https://www.linkedin.com/in/javer-benito-173b002b9/" target="_blank" rel="noopener noreferrer" className="social-link">
                <BlackLinkedIn className="icon-default" />
                <ColoredLinkedIn className="icon-hover" />
              </a>
              <a href="https://www.instagram.com/javerbenito/" target="_blank" rel="noopener noreferrer" className="social-link">
                <BlackInstagram className="icon-default" />
                <ColoredInstagram className="icon-hover" />
              </a>
              <a href="https://github.com/catcooks" target="_blank" rel="noopener noreferrer" className="social-link">
                <BlackGithub className="icon-default" />
                <ColoredGithub className="icon-hover" />
              </a>
              <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                <BlackWhatsApp className="icon-default" />
                <ColoredWhatsApp className="icon-hover" />
              </a>
            </div>
          </BaseCard>
          </div>
      </header>

      <section>
        <Title><h3>Technical Profile</h3></Title>
        <BaseCard isLoading={loading}>
          <h3>CORE STACK:</h3>
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
      <section>
        <Title><h3>Services Offered</h3></Title>
        <BaseCard isLoading={loading}>
          <h3>Programming:</h3>
          <p>
            Comming soon...
          </p>
          <div className="tag-container">
          </div>
        </BaseCard>
      </section>
      <section>
        <Title><h3>Key Projects</h3></Title>
        <div className="projects-grid">
          <BaseCard isLoading={loading} className="project-card">
            <TitleLink onClick={() => handleTitleClick("https://catcooks.github.io/WordzForWizdom/")}>
              Wordz For Wizdom
            </TitleLink>
            <ExpandableText>
              A web-based word puzzle game built with React and Phaser.js, designed
              to enhance vocabulary and critical thinking skills. The game features
              multiple levels of increasing difficulty, engaging graphics, and a
              user-friendly interface.
            </ExpandableText>
            <div className="project-tags">
              <Tag>Phaser.js</Tag>
              <Tag>JavaScript</Tag>
            </div>
          </BaseCard>

          <BaseCard isLoading={loading} className="project-card">
            <TitleLink onClick={() => handleTitleClick("https://adminfee1.netlify.app/")}>
              Admin Fee
            </TitleLink>
            <ExpandableText>
              An interactive web application developed using Vanilla JavaScript and CSS, 
              aimed at streamlining administrative fee management for small businesses. 
              The app allows users to easily track, calculate, and manage various 
              administrative fees.
            </ExpandableText>
            <div className="project-tags">
              <Tag>JavaScript</Tag>
              <Tag>CSS</Tag>
            </div>
          </BaseCard>

          <BaseCard isLoading={loading} className="project-card">
            <TitleLink onClick={() => handleTitleClick("https://github.com/catcooks/phaser-editor")}>
              Phaser-Editor
            </TitleLink>
            <ExpandableText>
              An Interactive editor for creating and editing Phaser.js games. This tool provides a visual interface 
              for designing game levels, managing assets, and scripting game logic. Built with Vue and Rust (Tauri).
            </ExpandableText>
            <div className="project-tags">
              <Tag>TypeScript</Tag>
              <Tag>Vue</Tag>
              <Tag>Rust</Tag>
              <Tag>Tauri</Tag>
            </div>
          </BaseCard>

          <BaseCard isLoading={loading} className="project-card">
            <TitleLink onClick={() => handleTitleClick("https://github.com/catcooks/my-cafe")}>
              My cafe
            </TitleLink>
            <ExpandableText>  
              An Interactive Management WebApp front end Idea for Cafe management or cashier, I created this for small cafe
              business intended to help manage and do most of the business work. this project have automations, orders, stock inventory updates,
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
        <section>
        <Title><h3>Top Reviews</h3></Title>
        <BaseCard isLoading={loading}>
          <h3>Top Client's Comments:</h3>
          <p>
            Comming soon...
          </p>
          <div className="tag-container">
          </div>
        </BaseCard>
      </section>
        <section>
        <Title><h3>Other Projects</h3></Title>
        <BaseCard isLoading={loading}>
          <h3>Java</h3>
          <p>
            Comming soon...
          </p>
          <div className="tag-container">
          </div>
        </BaseCard>
      </section>
      <footer>
        <Title><h3>Hire me</h3></Title>
        <div style={{padding:"0 2rem", display:"flex", flexDirection:"row", gap:"2rem"}}>
          <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
            <h2 style={{margin:"0", fontSize:"24px"}}>Contacts:</h2>
            <span>Tel:</span>
            <span>Email:</span>
          </div>
          <div style={{display:"flex", flexDirection:"column", gap:"5px"}}>
            <h2 style={{margin:"0", fontSize:"24px"}}>Social Media:</h2>
            <div style={{display:"flex", gap:"10px", flexDirection:"row",width:"184px", flexWrap:"wrap"}}>
              <a href="https://www.facebook.com/javer.benito" target="_blank" rel="noopener noreferrer" className="social-link">
                <BlackFacebook className="icon-default" />
                <ColoredFacebook className="icon-hover" />
              </a>
              <a href="https://x.com/BenitoJaver" target="_blank" rel="noopener noreferrer" className="social-link">
                <BlackTwitter className="icon-default" />
                <ColoredTwitter className="icon-hover" />
              </a>
              <a href="https://www.tiktok.com/@javer.benito" target="_blank" rel="noopener noreferrer" className="social-link">
                <BlackTiktok className="icon-default" />
                <ColoredTiktok className="icon-hover" />
              </a>
              <a href="https://www.linkedin.com/in/javer-benito-173b002b9/" target="_blank" rel="noopener noreferrer" className="social-link">
                <BlackLinkedIn className="icon-default" />
                <ColoredLinkedIn className="icon-hover" />
              </a>
              <a href="https://www.instagram.com/javerbenito/" target="_blank" rel="noopener noreferrer" className="social-link">
                <BlackInstagram className="icon-default" />
                <ColoredInstagram className="icon-hover" />
              </a>
              <a href="https://github.com/catcooks" target="_blank" rel="noopener noreferrer" className="social-link">
                <BlackGithub className="icon-default" />
                <ColoredGithub className="icon-hover" />
              </a>
              <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                <BlackWhatsApp className="icon-default" />
                <ColoredWhatsApp className="icon-hover" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
