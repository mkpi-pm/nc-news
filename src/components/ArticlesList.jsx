import "../App.css";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getArticles} from "../utils/api";
import ArticleCard from "./ArticleCard";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let {topic} = useParams();

useEffect(() => {
  getArticles(topic).then((articlesOfApi) => {
    setArticles(articlesOfApi.articles);
    setIsLoading(false);
  })

}, [topic]);

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
