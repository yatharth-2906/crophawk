import styles from './News.module.css';
import { useState, useEffect } from "react";

function News(){
    const news_api_key = "fca1066e3f0c410b8801a5b2e270d0b3";
    const news_api = `https://newsapi.org/v2/everything?q=farming&sortBy=popularity&pageSize=96&apiKey=${news_api_key}`;

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchNews = async () => {
        try {
          const response = await fetch( news_api );
          const data = await response.json();
          setNews(data.articles);
        } catch (error) {
          console.error("Error fetching news:", error);
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
      </div>);

    // console.log(news);

    return (
        <div className={styles.news_container}>
            {news.map((article, index) => (
                <div className={styles.news_box} style={{ width: '18rem' }} key={index}>
                  <div className={styles.news_image_container}>
                    <img src={article.urlToImage || "./src/assets/default_news_img.jpg"} className={styles.news_image} onError={(e) => e.target.src = "./src/assets/default_news_img.jpg"}/>
                  </div>
                  
                  <div className={styles.news_details_container}>
                    <a href={article.url} target="_blank" rel="noopener noreferrer"><h2 className={styles.news_title}>{article.title}</h2></a>
                    <p className={styles.news_body}>{article.content.split(" [+")[0]}</p>
                  </div>
                </div>
            ))}
        </div>
      );
}

export default News;