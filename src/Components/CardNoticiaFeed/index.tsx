'use client'
import { APIKeysArticle } from '@/api/interfaceAPI'
import React from 'react'

import './style.scss'
import { handleNewsContainer } from '../Noticia/handleNewsContainer'

const CardNews = ({article} : APIKeysArticle ) => {
  return (
    <div className='cardNews_Container'>
      <h2>{handleNewsContainer.handleTitle(article)}</h2>      
      <img src={article.urlToImage} alt={article.title} />
      <p >{handleNewsContainer.handleNewsContent(article.content)}{" "}
          <span className="link_to_original">{handleNewsContainer.handleLink(article)}</span></p>

    </div>
  )
}

export default CardNews