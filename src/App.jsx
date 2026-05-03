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
      <Title>Welcome to my Portfolio</Title>
      <BaseCard>
        <TitleLink as="h1" onClick={() => handleTitleClick("https://www.facebook.com/javer.benito")}>
          Javer D Benito
        </TitleLink>
        <h2>WEB, GAME & SOFTWARE DEVELOPER </h2>
        <p>
          A passionate web, game, and software developer with a strong foundation
          in Java, JavaScript, TypeScript, Lua, Tailwind CSS, and Vite. I have
          a proven track record of successfully migrating legacy web game
          architectures to robust Java-based frameworks (libGDX). With a keen
          eye for detail and a commitment to delivering high-quality solutions,
          I am dedicated to creating engaging and efficient applications that
          meet the needs of users and clients alike.
        </p>
      </BaseCard>
      <Title>Technical Profile</Title>
      <BaseCard>
        <h3>CORE STACK:</h3>
        <p>
          Java, JavaScript (React, Phaser.js), TypeScript, Lua, Tailwind CSS,
          and Vite. Currently specialized in migrating legacy web game
          architectures to robust Java-based frameworks (libGDX)
        </p>
        <Tag>Java</Tag>
        <Tag>JavaScript</Tag>
        <Tag>TypeScript</Tag>
        <Tag>Lua</Tag>
        <Tag>Tailwind CSS</Tag>
        <Tag>Vite</Tag>
      </BaseCard>
      <Title>Key Projects</Title>
      <div className="projects-container">
      <BaseCard>
        <TitleLink  onClick={() => handleTitleClick("https://catcooks.github.io/WordzForWizdom/")}>Wordz For Wizdom</TitleLink>
        <ExpandableText>
          A web-based word puzzle game built with React and Phaser.js, designed
          to enhance vocabulary and critical thinking skills. The game features
          multiple levels of increasing difficulty, engaging graphics, and a
          user-friendly interface. It has been well-received for its educational
          value and entertainment factor.
        </ExpandableText>
        <Tag>Phaser.js</Tag>
        <Tag>JavaScript</Tag>
      </BaseCard>
      <BaseCard>
        <TitleLink  onClick={() => handleTitleClick("https://adminfee1.netlify.app/")}>
          Admin Fee
        </TitleLink>
        <ExpandableText>
          An interactive web application developed using Vanilla JavaScript and CSS, 
          aimed at streamlining administrative fee management for small businesses. 
          The app allows users to easily track, calculate, and manage various 
          administrative fees, providing a user-friendly interface and real-time updates. 
          It has been praised for its efficiency and ease of use in handling complex fee structures. 
        </ExpandableText>
        <Tag>JavaScript</Tag>
        <Tag>CSS</Tag>
      </BaseCard>
      <BaseCard>
        <TitleLink  onClick={() => handleTitleClick("https://github.com/catcooks/phaser-editor")}>
          Phaser-Editor
        </TitleLink>
        <ExpandableText>
          An Interactive editor for creating and editing Phaser.js games. This tool provides a visual interface 
          for designing game levels, managing assets, and scripting game logic using Phaser.js. It has been widely 
          adopted by indie game developers for its ease of use and powerful features that streamline the game development 
          process. It is designed to match the UI of VScode and is built based on hierarchy to match the versitility of Godot and Unity.
        </ExpandableText>
        <Tag>Phaser.js</Tag>
        <Tag>TypeScript</Tag>
        <Tag>Vue</Tag>
        <Tag>Panda-CSS</Tag>
        <Tag>Tauri</Tag>
        <Tag>Rust</Tag>
      </BaseCard>
      </div>
    </div>
  );
}

export default App;
