import React from "react";

//INTERFACES
import { APIKeysList } from "@/api/interfaceAPI";

//COMPONENTS
import NewsContainer from "../Noticia";
import Button from "../Button/Button";


//STYLE
import './style.scss';

const NewsFeedHome = ({ articles }: APIKeysList) => {
  //shows only 3 news in home screen

  articles.splice(3);

  return (
    <div className="newsFeed_container">
      {articles &&
        articles.map((item, index) => {
          return <NewsContainer key={index} article={item} />;
        })}

      <div className="buttonContainer">
        <Button>See More...</Button>
      </div>
    </div>
  );
};

export default NewsFeedHome;
