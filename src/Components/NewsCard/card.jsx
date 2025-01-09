import React from "react";
import "./card.css";

const Articles = ({ articles }) => {
  return (
    <div className="article-container">
      {articles.map((article, index) => (
        <div className="article-card" key={index}>
          <img src={article.image} alt={article.title} className="article-image" />
          <div className="article-content">
            <h3 className="article-title">{article.title}</h3>
            <p className="article-description">{article.description}</p>
            <a href={article.link} className="article-link">
              Read the article →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articles;
