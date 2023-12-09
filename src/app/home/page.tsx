"use client";
import React, { useEffect, useState } from "react";
import Menu from "@/Components/Menu/index";
import { NextPage } from "next";
import NewsContainer from "@/Components/Noticia";
import { BackEndService, NewsService } from "@/api/handleAPI";

import "./style.scss";
import NewsFeedHome from "@/Components/Feed/HomeFeed";

const Home: NextPage = () => {
  const [newsList, setNewsList] = useState([]);

  /*const getNews = async () => {
    let {
      data: { articles },
    } = await NewsService.getTopHeadLinesUS();

    setNewsList(articles);
  };*/

  const getNews = async () => {
    let result = await BackEndService.getNews();

    if( result || result !== null || result !== undefined) {
      setNewsList(result)
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <section className="home_pageContainer">
      <Menu />
      <NewsFeedHome articles={newsList} />

      {/* <div className="home_newsContainer">
        {newsList&& newsList.map((i, index) => (
          <NewsContainer key={index} originalNews={i.url} newsFrom={i.source.name} author={i.author} date={i.publishedAt} title={i.title} imgURL={i.urlToImage} description={i.description} content={i.content?i.content:""} />          
        ))}
      </div> */}

      {/* TODO: REMOVE THIS IN THE FUTURE */}
      
    </section>
  );
};

export default Home;
