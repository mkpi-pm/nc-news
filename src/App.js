import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import ArticlesList from "./components/ArticlesList";
// import Comments from "./components/Comments";
// import Users from "./components/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <h2>Choose an article!</h2>
        <Nav />
        {/* <Comments />
        <Users /> */}
        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/:topic" element={<ArticlesList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
