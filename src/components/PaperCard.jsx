// PaperCard.jsx
import './PaperCard.css';

export default function PaperCard({ title, author, abstract, link, year, tags }) {
  return (
    <div className="paper-card">
      <div className="card-header">
        <h3>{title}</h3>
        <p className="author">{author} • {year}</p>
      </div>
      <div className="card-body">
        <p className="abstract">{abstract}</p>
        <div className="tags">
          {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="read-button">
        Read Paper
      </a>
    </div>
  );
}
