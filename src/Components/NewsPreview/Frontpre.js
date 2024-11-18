// src/components/NewsPreview.js
import React from "react";
import "./Frontpre.css";

const Frontpre = ({ article, closePreview }) => {
  if (!article) return null;

  return (
    <div className="news-preview-contents">
      <button className="close-btns" onClick={closePreview}>
        X
      </button>
      <h2>{article.title}</h2>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read full article
      </a>
    </div>
  );
};

export default Frontpre;
