import React from "react";
import Card, { ProjectCardProps } from "./ui/Card";

const projects: ProjectCardProps[] = [
  {
    title: "Discuss",
    description:
      "Complete Discord clone, features servers and channels. Supports real-time communication. Secure Login via email+password or QR code and user's phone. Supports link highlighting and expanded images. Users can configure their phones and online status. Server admins can add user roles and configure permissions.",
    imgLink:
      "https://raw.githubusercontent.com/SusieValdez/discuss/main/screenshot.png",
    skills: ["JavaScript", "React", "WebSockets", "Databases", "Node"],
    codeLink: "https://github.com/SusieValdez/discuss",
  },
  {
    title: "React Movie Database",
    description:
      "Netflix/IMDB clone. Pulls movie data from TheMovieDB API. Supports searching for movies by name or description.",
    imgLink:
      "https://raw.githubusercontent.com/SusieValdez/React-Movie-Database/main/screenshot.png",
    skills: ["JavaScript", "React"],
    codeLink: "https://github.com/SusieValdez/React-Movie-Database",
  },
  {
    title: "Bard",
    description:
      "Wrote a CLI to track programming articles that I read. CLI POSTs the article info to a custom Github Action. The Github Action scans the article's metadata to display info and image, then stores it in a JSON file in a Github repo. My website fetches the JSON file and renders the articles.",
    imgLink:
      "https://raw.githubusercontent.com/SusieValdez/bard/main/screenshot.png",
    skills: ["JavaScript", "Node"],
    codeLink: "https://github.com/SusieValdez/bard",
  },
  {
    title: "Reddit / Discord Bot",
    description:
      "Pulls random images from a subreddit and posts it to discord.",
    imgLink:
      "https://raw.githubusercontent.com/SusieValdez/reddit-bot/main/screenshot.png",
    skills: ["JavaScript", "Node"],
    codeLink: "https://github.com/SusieValdez/reddit-bot",
  },
  {
    title: "Cartographer",
    description:
      "Supports drawing pictures and store them in Postgres. Supports large browser canvas, with panning and zooming.",
    imgLink:
      "https://raw.githubusercontent.com/SusieValdez/cartographer/main/screenshot.png",
    skills: ["TypeScript", "React", "Golang", "Databases"],
    codeLink: "https://github.com/SusieValdez/cartographer",
  },
  {
    title: "Instant Coffee",
    description:
      "A game where the player collects items while avoiding the AI. Built AI's pathfinding and behaviour with a State Machine",
    imgLink:
      "https://raw.githubusercontent.com/SusieValdez/Instant-Coffee/main/assets/background/banner-title.png",
    skills: ["Godot"],
    codeLink: "https://github.com/SusieValdez/Instant-Coffee",
  },
  {
    title: "Gokemon",
    description:
      "Web based Pokemon card collection and trading game. Supports user accounts, friend lists and login base rewards.",
    imgLink:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Pok%C3%A9mon_GO_logo.svg/1200px-Pok%C3%A9mon_GO_logo.svg.png",
    skills: ["TypeScript", "React", "Golang", "Databases"],
    codeLink: "https://github.com/SusieValdez/gokemon",
  },
  {
    title: "TIM N' RAVS",
    description:
      "Fast-paced 2D game where the player has to collect items, while avoiding deadly obstacles. Used this as an opportunity to learn collaborative work on git.",
    imgLink:
      "https://raw.githubusercontent.com/SusieValdez/Tim-n-RAVS/main/screenshot.png",
    skills: ["Godot"],
    codeLink: "https://github.com/SusieValdez/Tim-n-RAVS",
  },
  {
    title: "Singing Kittens",
    description:
      "A web-based sequencer, which plays various sound effects. User can configure which sounds to play on which beats.",
    imgLink:
      "https://raw.githubusercontent.com/SusieValdez/singing-kittens/main/screenshot.png",
    skills: ["JavaScript", "React"],
    codeLink: "https://github.com/SusieValdez/singing-kittens",
  },
  {
    title: "100 Days of Code Challenge",
    description:
      "Self-imposed challenge to write code everyday, to learn faster. Displays commit history in pretty grid, using Github's API. Cached results to fit withing Github restrictive API call limits. Wrote backend API to store cached commit info.",
    imgLink:
      "https://raw.githubusercontent.com/SusieValdez/100-days-code-challenge/main/screenshot.png",
    skills: ["JavaScript", "HTML"],
    codeLink: "https://github.com/SusieValdez/100-days-code-challenge",
  },
  {
    title: "DIY-Lang",
    description:
      "A turing complete functional programming language. Wrote a parser, evaluater and REPL. Supports extending its standard library in it's own language.",
    imgLink: "https://imgs.xkcd.com/comics/lisp.jpg",
    skills: ["Python"],
    codeLink: "https://github.com/SusieValdez/diy-lang",
  },
  {
    title: "Minesweeper",
    description:
      "A complete Minesweeper clone using tkinter library. Supports player counter to show how many cells are left to uncover. Features Game-Over after clicking on a mine. Algorithm to scan neighboring cells for mines.",
    imgLink:
      "https://raw.githubusercontent.com/SusieValdez/minesweeper/main/screenshot.png",
    skills: ["Python"],
    codeLink: "https://github.com/SusieValdez/diy-lang",
  },
  {
    title: "E-Commerce-Platform",
    description:
      "E-commerce website using React and TS. Features display of products, location of shops.",
    imgLink:
      "https://americasmi.com/wp-content/uploads/2019/11/mexico-e-commerce-market-research-data-2019.jpg",
    skills: ["TypeScript", "React"],
    codeLink: "https://github.com/SusieValdez/e-commerce-platform",
  },
];

const About = () => {
  return (
    <div id="projects" className="pt-16">
      <h3 className="text-2xl font-bold text-pink-300 mb-3">My Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
        {projects.map((project) => (
          <Card {...project} />
        ))}
      </div>
    </div>
  );
};

export default About;
