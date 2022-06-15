import "../App.css";
import React from "react";

const ArticleCard = ({article, setArticles}) => {
  return (
    <li className="Article-card">
      <h3><span>{article.title}</span></h3> 
        <p>Author: {article.author}</p>
        <p>Topic: {article.topic}</p>
        <p>Created: {article.created_at}</p>
        <p>Comments: {article.comment_count}</p>
        <p>Votes: {article.votes}</p>
        <p>Article Id: {article.article_id}</p>
        <p>Content: {article.body}</p>
    </li>
  );
};

export default ArticleCard;
