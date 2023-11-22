import React from 'react'

import CadastroNoticiaForm from '@/Components/CadastroNoticiaForm'
import Menu from '@/Components/Menu'

import './style.scss'

const NewsCreate = () => {
  return (
    <div className='createNewsPage_Container'>
      <Menu />
      <h1 >Create news</h1>
      <CadastroNoticiaForm/>
    </div>
  )
}

export default NewsCreate