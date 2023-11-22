'use client';
import GridNoticias from '@/Components/GridNews'
import Menu from '@/Components/Menu';
import { NewsService } from '@/api/handleAPI';
import React, { useEffect, useState } from 'react'

import './style.scss';

const FeedNews = ({params} : any) => {

  const [newsList, setNewsList] = useState([]);

  const getNews = async () => {
    let {
      data: { articles },
    } = await NewsService.getTopHeadLinesUS();

    setNewsList(articles);
  };

  useEffect(() => {
    getNews();
  }, []);
  

  return (
    <section>
      <Menu />
      <h1 className='feedPage_headTitle'>{params.categoria}</h1>
      <GridNoticias articles={newsList} />
    </section>
  )
}

export default FeedNews