import React from 'react';
import FlipCard from './FlipCard';
import omImg from '../assets/om-pokale.jpeg';
import sachinImg from '../assets/sachin-choure.jpeg';
import rushikeshImg from '../assets/rushikesh.jpg';


const teamData = [
  {
    name: 'Om Pokale',
    image: omImg,
    github: 'https://github.com/alice',
    instagram: 'https://instagram.com/alice',
    linkedin: 'https://linkedin.com/in/alice',
    leetcode: 'https://leetcode.com/alice',
  },
  {
    name: 'Rushikesh Hippargekar',
    image: rushikeshImg,
    github: 'https://github.com/bob',
    instagram: 'https://www.instagram.com/rushstatic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    linkedin: 'https://linkedin.com/in/bob',
    leetcode: 'https://leetcode.com/bob',
  },
  {
    name: 'Sachin Choure',
    image: sachinImg,
    github: 'https://github.com/carol',
    instagram: 'https://instagram.com/carol',
    linkedin: 'https://linkedin.com/in/carol',
    leetcode: 'https://leetcode.com/carol',
  },
];

export default function TeamSection() {
  return (
    <section className="team-section">
      {teamData.map((person, i) => (
        <FlipCard key={person.name} person={person} delay={0.1 + i * 0.2} />
      ))}
    </section>

  );
}
