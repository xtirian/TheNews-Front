"use client";
import React, { useEffect, useState } from "react";
import Menu from "@/Components/Menu/index";
import { NextPage } from "next";
import NewsContainer from "@/Components/Noticia";
import { NewsService } from "@/api/handleAPI";

import "./style.scss";

const Home: NextPage = () => {
  const [newsList, setNewsList] = useState([]);

  const getNews = async () => {
    let {
      data: { articles },
    } = await NewsService.getTopHeadLinesUS();

    setNewsList(articles);
  };

  useEffect(() => {
    //getNews();
  }, []);

  useEffect(() => {
    console.log(newsList);
  }, [newsList]);

  return (
    <section className="home_pageContainer">
      <Menu />

      {/* <div className="home_newsContainer">
        {newsList&& newsList.map((i, index) => (
          <NewsContainer key={index} originalNews={i.url} newsFrom={i.source.name} author={i.author} date={i.publishedAt} title={i.title} imgURL={i.urlToImage} description={i.description} content={i.content?i.content:""} />          
        ))}
      </div> */}

          {/* TODO: REMOVE THIS IN THE FUTURE */}
      <NewsContainer
        title="Dolphins vs. Raiders score: Live updates, game stats, highlights, analysis for NFL Week 11 game - CBS Sports"
        imgURL={
          "https://sportshub.cbsistatic.com/i/r/2023/11/06/11a6b98e-881a-41d0-82eb-8eb2d7352dd9/thumbnail/1200x675/92842412c2e73b6bb1700d084aa04b5d/josh-jacobs-raiders-usatsi.jpg"
        }
        description={
          "Live scores, highlights and updates from the Dolphins vs. Raiders football game"
        }
        content={
          "The Las Vegas Raiders and Miami Dolphins have taken the field in Hard Rock Stadium, as this Week 11 AFC matchup is underway. The Dolphins have been dominant at home this season, as they are 4-0 and a… [+1096 chars]"
        }
        originalNews={
          "https://www.cbssports.com/nfl/news/dolphins-vs-raiders-score-live-updates-game-stats-highlights-analysis-for-nfl-week-11-game/live/"
        }
        author={"Jordan Dajani"}
        date={"2023-11-19T18:42:43Z"}
        newsFrom={"CBS Sports"}
      />
    </section>
  );
};

export default Home;
