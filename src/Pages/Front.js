// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Front.css";
import axios from "axios";
import { Sidebar } from "../Components/Sidebar/Sidebar";
import FrontNews from "../Components/NewsList/FrontNews";
import Frontpre from "../Components/NewsPreview/Frontpre";

const Front = () => {
  const [ category, setcate ] = useState('general'); // Get the category from the URL
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

     
  useEffect(() => {
    const fetchNews=async()=>{
      try{const respo=await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=2c912f4a83ed4d6fa7cc4c83cd9b992a`);      
       setArticles(respo.data.articles);
         setLoading(false);
    }catch(error){
      console.error("Error fetching news: ", error);
      setError("Failed to fetch news. Please try again later."); 
    }

    }
    fetchNews();
    
  }, [category]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if(error){
    return <h1>Error</h1>;
  }
  const openPreview = (article) => {
    setSelectedArticle(article);
    setIsPreviewOpen(true);
    
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
    setSelectedArticle(null);
  };

  return (
    <div className="homes">
      <div className="headers">
      <Sidebar setSelectedcate={setcate} />
      <img className="logos" src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"/>
   
      </div>
      <div className="inform">
      <div>For the best experience use inshorts 
      app on your smartphone
      </div>
      
      <div className="applogos">
      <img src="https://assets.inshorts.com/website_assets/images/appstore.png"  alt="inshorts"/>
      <img src="https://assets.inshorts.com/website_assets/images/playstore.png"  alt="inshorts"/>
      </div>
        
     
      </div>
      <div className={`news-lists ${isPreviewOpen ? 'shifteds' : ''}`}>
        {articles.map((article) => (
          <FrontNews key={article.url} article={article} onClick={openPreview} />
        ))}
      </div>

     
      {isPreviewOpen && !window.matchMedia("(max-width: 768px)").matches && (
        <div className="news-previews">
          <Frontpre article={selectedArticle} closePreview={closePreview} />
        </div>
      )}

      {isPreviewOpen && window.matchMedia("(max-width: 768px)").matches && (
        <div className="popup">
          <Frontpre article={selectedArticle} closePreview={closePreview} />
        </div>
      )}
    </div>
  );
};

export default Front;
