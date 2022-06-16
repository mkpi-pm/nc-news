import "../App.css";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {getTopics} from "../utils/api";

const Nav = () => {
  const [topics, setTopics] = useState([])
  
  useEffect(() => {
    getTopics().then(({topics}) => {
      setTopics(topics)
    });
  }, []);

  return (
    <nav className="Nav">
      <ul className="Nav-list" >
      <li>Home</li>
        <li>Articles</li>
        <li>Users</li>
        <br/>
        <h3>CHOOSE A TOPIC:</h3>
        {topics.map((topic) => {
          return (
            <li key={topic.slug}>
              <Link to={`/${topic.slug}`}> {topic.slug} </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav;
