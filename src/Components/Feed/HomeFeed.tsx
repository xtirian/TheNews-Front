import React, { FC } from "react";
import NewsContainer from "../Noticia";
import { APIKeys, APIKeysList } from "@/api/interfaceAPI";

const NewsFeedHome = ({ articles }: APIKeysList) => {
  //shows only 3 news in home screen

  articles.splice(3);

  console.log(articles);

  return (
    <div className="newsFeed_container">
      {articles &&
        articles.map((item, index) => {
          return <NewsContainer key={index} article={item} />;
        })}
    </div>
  );
};

export default NewsFeedHome;
