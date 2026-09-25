import React from "react";
import ReactDOM from "react-dom/client";
import { Instagram, Youtube, Activity, Music2, ArrowUpRight } from "lucide-react";
import "./App.css";

const socials = [
  { name: "Instagram", url: "https://instagram.com/", icon: Instagram },
  { name: "TikTok", url: "https://tiktok.com/", icon: Music2 },
  { name: "YouTube", url: "https://youtube.com/", icon: Youtube },
  { name: "Strava", url: "https://strava.com/", icon: Activity },
];

function App() {
  return (
    <main className="page">
      <div className="container">
        <header className="header">
          <a href="/" className="logo">FELIX COCHET</a>
          <span className="location">CANADA</span>
        </header>

        <section className="hero">
          <div className="profile-wrapper">
            <img
              src="/pdp.jpg"
              alt="Felix Cochet"
              className="profile-image"
            />
          </div>

          <p className="eyebrow">PERSONAL JOURNEY</p>

          <h1>
            Trying to become <span>1% better</span> every day.
          </h1>

          <p className="subtitle">
            Sharing what I learn along the way.
          </p>

          <div className="social-links">
            {socials.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <div className="social-left">
                  <Icon size={19} strokeWidth={1.7} />
                  <span>{name}</span>
                </div>
                <ArrowUpRight size={17} strokeWidth={1.7} className="arrow" />
              </a>
            ))}
          </div>
        </section>

        <footer>
          <span>© 2026 FELIX COCHET</span>
          <span>BUILDING • LEARNING • SHARING</span>
        </footer>
      </div>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);