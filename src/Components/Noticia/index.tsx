"use client";
import Link from "next/link";
import React, { FC } from "react";

import "./style.scss";
import '@/scss/global.scss'
import { handleNewsContainer } from "./handleNewsContainer";
import { APIKeysArticle } from "@/api/interfaceAPI";



const NewsContainer = ({article} : APIKeysArticle) => {


  return (
    <div className="news_container">
      <h1 className="news_container-title">{handleNewsContainer.handleTitle(article)}</h1>

      <div className="news_container-publish_info">
        <span className="author">          
          <b>{article.author}</b> from <b>{article.NewsFrom}</b>
        </span>

        <span className="hole_pattern"></span>

        
        <time dateTime={article.date} className="news_container-publishdate">
          {handleNewsContainer.handleDate(article.date)}
        </time>


      </div>


      <img
        src={article.imgURL}
        alt={article.title + "news"}
        className="news_container-img"
      />
      <h3 className="news_container-description">{article.description}</h3>

      <div className="news_container-content_container">
        <p className="content">
          {handleNewsContainer.handleNewsContent(article.content)}{" "}
          <span className="link_to_original">{handleNewsContainer.handleLink(article)}</span>
        </p>
      </div>
    </div>
  );
};

export default NewsContainer;
