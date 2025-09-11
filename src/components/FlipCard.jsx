import React, { useRef, useEffect } from 'react';
import './FlipCard.css';
import collegeLogo from "../assets/college-logo.png";
import leetcodeLogo from "../assets/leetcode-icon.svg";

export default function FlipCard({ person, delay }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    function handleMouseMove(e) {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      const rotateY = (x / width) * 20 - 10;
      const rotateX = (y / height) * -20 + 10;
      card.style.setProperty('--tiltY', `${rotateY.toFixed(2)}deg`);
      card.style.setProperty('--tiltX', `${rotateX.toFixed(2)}deg`);
    }

    function handleMouseLeave() {
      card.style.setProperty('--tiltX', `0deg`);
      card.style.setProperty('--tiltY', `0deg`);
    }

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="flip-card"
      ref={cardRef}
      style={{ '--delay': `${delay}s` }}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={person.image} alt={person.name} className="profile-pic" />
          <h3>{person.name}</h3>
          <h4>{person.email}</h4>
          <div className="social-links">
            <a href={person.github} target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href={person.instagram} target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href={person.linkedin} target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href={person.leetcode} target="_blank" rel="noreferrer">
              <img
                src={leetcodeLogo}
                alt="LeetCode"
                className="social-icon"
              />
            </a>
          </div>
          <a
            href={person.linkedin}
            target="_blank"
            rel="noreferrer"
            className="connect-btn"
          >
            Connect Me
          </a>
        </div>
        <div className="flip-card-back">
          <img
            src={collegeLogo}
            alt="College Logo"
            className="college-logo"
          />
        </div>
      </div>
    </div>
  );
}
