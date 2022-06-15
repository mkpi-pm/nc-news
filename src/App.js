import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import ArticlesList from "./components/ArticlesList/ArticlesList";
// import Comments from "./components/Comments";
// import Users from "./components/Users";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <ArticlesList />
      {/* <Comments />
      <Users /> */}
    </div>
  );
};

export default App;
