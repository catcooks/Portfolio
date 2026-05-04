// src/App.jsx
import "./App.css";
import BaseCard from "./components/BaseCard"; // 1. Import it here!
import Tag from "./components/Tag";
import Title from "./components/Title";
import ExpandableText from "./components/ExpandableText";
import TitleLink from "./components/TitleLink";

function App() {
  const handleTitleClick = (myLink) => {
    window.location.href = myLink;
  }
  return (
    <div className="app-container">
      <header className="hero-section">
        <div className="hero-badge">Available for new opportunities</div>
        <div className="profile-container">
          <div className="profile-image">
           <img src={`${import.meta.env.BASE_URL}javer.jpg`} alt="Javer Benito" />
          </div>
        </div>
        <h1>Javer Benito</h1>
        <h2>Web, Game & Software Developer</h2>
        <BaseCard className="hero-card">
          <p>
            A passionate web, game, and software developer with a strong foundation
            in Java, JavaScript, TypeScript, Lua, Tailwind CSS, and Vite. I have
            a proven track record of successfully migrating legacy web game
            architectures to robust Java-based frameworks (libGDX).
          </p>
          <div className="hero-socials">
            <a href="https://www.facebook.com/javer.benito" target="_blank" rel="noopener noreferrer" className="premium-tag">Facebook</a>
            <a href="https://github.com/catcooks" target="_blank" rel="noopener noreferrer" className="premium-tag">GitHub</a>
          </div>
        </BaseCard>
      </header>

      <section>
        <Title>Technical Profile</Title>
        <BaseCard>
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
        <Title>Key Projects</Title>
        <div className="projects-grid">
          <BaseCard className="project-card">
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

          <BaseCard className="project-card">
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

          <BaseCard className="project-card">
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

          <BaseCard className="project-card">
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
    </div>
  );
}

export default App;
