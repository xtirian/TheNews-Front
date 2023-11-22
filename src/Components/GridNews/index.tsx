import { APIKeysList } from "@/api/interfaceAPI";
import React from "react";
import CardNews from "../CardNoticiaFeed";

import './style.scss';

const GridNoticias = ({ articles }: APIKeysList) => {
  return (
    <div className="gridFeed_container">
      {articles &&
        articles.map((news, index) => <CardNews key={index} article={news} />)}
    </div>
  );
};

export default GridNoticias;
