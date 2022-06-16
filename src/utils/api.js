import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://be-nc-news-pk.herokuapp.com/api",
});

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data;
  });
};

export const getArticles = (topic) => {
  return newsApi.get("/articles", { params: { topic } }).then((res) => {
    return res.data;
  });
};
