import "../App.css";
import React from "react";
import {Link} from "react-router-dom";

const ArticleCard = ({article, setArticles}) => {
  return (
    <li className="Article-card">
      <h3>
        <Link to={`/articles/${article.article_id}`}>
          {article.title}
        </Link>
      </h3> 
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
