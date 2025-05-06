async function getNews(req, res) {
    const news_api_key = "fca1066e3f0c410b8801a5b2e270d0b3";
    const news_api = `https://newsapi.org/v2/everything?q=farming&sortBy=popularity&pageSize=93&apiKey=${news_api_key}`;

    try {
        const response = await fetch(news_api);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.error("News API fetch error:", error);
        res.status(500).json({ error: "Failed to fetch news" });
    }
}


module.exports = { getNews };