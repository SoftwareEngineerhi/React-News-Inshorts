// src/components/NewsCard.js
import React from "react";
import "./FrontNews.css";

const FrontNews = ({ article, onClick }) => {
  return (
    <div className="news-cards" onClick={() => onClick(article)}>
     <div className="imgs"> 
      <img className="newsImg" src={article.urlToImage} alt={article.title} />
     </div>
      <div className="news-contents">
        <p className="titles">{article.title}</p>
             <p className="auth">short</p> <p className="texts">by {article.author} &nbsp;
               {new Date(article.publishedAt).toDateString()}{" "}</p>
            <p className="desc">{article.description}</p>
            <a className="more" href={article.url} target="_blank" rel="noopener noreferrer">Read More at {article.source.name}</a>
          
      </div>
    </div>
  );
};

export default FrontNews;
