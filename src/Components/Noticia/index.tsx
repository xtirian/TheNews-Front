"use client";
import Link from "next/link";
import React, { FC } from "react";

import "./style.scss";
import '@/scss/global.scss'

interface NewsContainerProps {
  originalNews: string;
  newsFrom: string;
  author: string;
  date: string;
  title: string;
  imgURL: string;
  description: string;
  content: string;
}

const NewsContainer: FC<NewsContainerProps> = (news): JSX.Element => {
  const handleDate = (newsDate: string | number | Date) => {
    const fullDate = new Date(newsDate);

    const day = fullDate.getDate();
    const month = fullDate.toLocaleDateString("en", { month: "long" });
    const year = fullDate.getFullYear();

    return `${month} ${day}, ${year}`;
  };
  const handleNewsContent = (newsContent: string) => {
    const content = newsContent.split(" ");

    const newContent = content.slice(0, content.length - 2);

    return newContent.join(" ");
  };
  const handleLink = (newsContent: string) => {
    const content = newsContent.split(" ");

    const newContentLink = content.slice(content.length - 2, content.length);

    return (
      <Link href={`${news.originalNews}`} target="_blank">{newContentLink.join(" ")}</Link>
    );
  };

  return (
    <div className="news_container">
      <h1 className="news_container-title">{news.title}</h1>

      <div className="news_container-publish_info">
        <span className="author">          
          <b>{news.author}</b> from <b>{news.newsFrom}</b>
        </span>

        <span className="hole_pattern"></span>

        
        <time dateTime={news.date} className="news_container-publishdate">
          {handleDate(news.date)}
        </time>


      </div>


      <img
        src={news.imgURL}
        alt={news.title + "news"}
        className="news_container-img"
      />
      <h3 className="news_container-description">{news.description}</h3>

      <div className="news_container-content_container">
        <p className="content">
          {handleNewsContent(news.content)}{" "}
          <span className="link_to_original">{handleLink(news.content)}</span>
        </p>
      </div>
    </div>
  );
};

export default NewsContainer;

// Nome do Jornal
// Titulo
// Descrição rápida
//
