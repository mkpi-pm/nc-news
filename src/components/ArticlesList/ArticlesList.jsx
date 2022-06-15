import "./ArticleList.css";
import {useEffect, useState} from "react";
import ArticleCard from "../ArticleCard/ArticleCard";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  fetch("https://be-nc-news-pk.herokuapp.com/api/articles")
  .then((res) => {
    return res.json();
  })
  .then(({articles}) => {
    setArticles(articles);
    setIsLoading(false);
  })

}, [])

if(isLoading) return <p>Loading ...</p>;

  return (
    <ul className="Articles-list">
      {articles.map((article) => {
        return <ArticleCard key={article.title} article={article}/>
      })}
    </ul>
  );
};
export default ArticlesList;
//1201