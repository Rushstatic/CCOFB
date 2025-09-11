// Docs.jsx
import React from 'react';
import { papers } from '../components/papers';
import PaperCard from '../components/PaperCard';
import '../components/Docs.css';

export default function Docs() {
  return (
    <section className="docs-page">
      <h1 className="docs-heading">Research Papers</h1>
      <div className="paper-grid">
        {papers.map((paper, index) => (
          <PaperCard key={index} {...paper} />
          
        ))}
      </div>
    </section>
  );
}
