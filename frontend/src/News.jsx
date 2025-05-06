import styles from './News.module.css';
import { useState, useEffect } from "react";

function News() {
  const news_api_key = "fca1066e3f0c410b8801a5b2e270d0b3";
  const news_api = `https://newsapi.org/v2/everything?q=farming&sortBy=popularity&pageSize=93&apiKey=${news_api_key}`;

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(news_api, {
          headers: {
            // NewsAPI v2 requires this header
            'X-Api-Key': news_api_key
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setNews(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return (
    <div className={styles.loading_spinner_box}>
      <div className={styles.spinner_roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      <p className={styles.loading_spinner_msg}>Loading....</p>
    </div>
  );

  if (error) return (
    <div className={styles.error_message}>
      <p>Error loading news: {error}</p>
      <p>Note: NewsAPI free tier only works on localhost or from a server with HTTPS</p>
    </div>
  );

  if (!news || news.length === 0) return (
    <div className={styles.no_news_message}>
      <p>No news articles found.</p>
    </div>
  );

  return (
    <div className={styles.news_container}>
      {news.map((article, index) => (
        <div className={styles.news_box} style={{ width: '18rem' }} key={index}>
          <div className={styles.news_image_container}>
            <img 
              src={article.urlToImage || "./src/assets/default_news_img.jpg"} 
              className={styles.news_image} 
              onError={(e) => e.target.src = "./src/assets/default_news_img.jpg"}
              alt={article.title || "News image"}
            />
          </div>
          
          <div className={styles.news_details_container}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <h2 className={styles.news_title}>{article.title}</h2>
            </a>
            <p className={styles.news_body}>
              {article.content ? article.content.split(" [+")[0] : "No content available"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;