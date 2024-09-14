import * as React from "react";

import { BsGithub, BsStrava, BsYoutube } from "react-icons/bs";

import { slugify } from "../utilities/helpers";

const github = <BsGithub />;
const strava = <BsStrava />;
const youtube = <BsYoutube />;

const links = [
  {
    label: "GitHub",
    url: "https://github.com/AaronRDurant",
    icon: github,
  },
  {
    label: "Strava",
    url: "https://www.strava.com/athletes/70892495",
    icon: strava,
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/@aarondurant80",
    icon: youtube,
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <section className="container">
        <nav>
          <span className="desktop-only">Made by Aaron Durant</span>
        </nav>
        <nav>
          {links.map((link) => (
            <a
              href={link.url}
              title={link.label}
              className={`footer-link ${slugify(link.label)}`}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
            >
              <span>{link.label}</span>
              <span className="link-icon">{link.icon}</span>
            </a>
          ))}
        </nav>
      </section>
    </footer>
  );
};

export default Footer;
