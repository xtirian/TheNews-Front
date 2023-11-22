"use client";
import React, { useState } from "react";
import "./styles.scss";

const CadastroNoticiaForm = () => {
  const [formulario, setFormulario] = useState({
    title: "",
    imgURL: "",
    description: "",
    content: "",
    originalNews: "",
    author: "",
    date: "",
    newsFrom: "",
  });

  const aoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formulario);
  };

  const aoAlterar = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    setFormulario({
      ...formulario,

      [name]: value,
    });
  };

  return (
    <form onSubmit={aoSubmit} className="createNewsForm" >
      <div>
        <label htmlFor="title">Title</label>

        <input type="text" name="title" id="title" onChange={aoAlterar} />

        <span className="inputDetail">Set head Title for the news</span>
      </div>

      <div>
        <label htmlFor="imgURL">URL of Img</label>

        <input type="text" name="imgURL" id="imgURL" onChange={aoAlterar} />

        <span className="inputDetail">
          Tell us what is the URL of the image you want to share in news
        </span>
      </div>

      <div>
        <label htmlFor="description">Description</label>

        <input
          type="text"
          name="description"
          id="description"
          onChange={aoAlterar}
        />

        <span className="inputDetail">
          Set a description that Will display bellow the News Image
        </span>
      </div>
      <div>
        <label htmlFor="content">Content</label>

        <input type="text" name="content" id="content" onChange={aoAlterar} />

        <span className="inputDetail">
          <ul style={{listStyleType: "disc"}}  >
            <li>Here you will define the main content </li>
            <li>
              If you dont want to type everything, you can put a '... [+1096
              chars]' " at final and define the link to the original news
            </li>
          </ul>
        </span>
      </div>

      <div>
        <label htmlFor="originalNews">Original News URL</label>

        <input
          type="text"
          name="originalNews"
          id="originalNews"
          onChange={aoAlterar}
        />

        <span className="inputDetail">Tell us where you get that news</span>
      </div>

      <div>
        <label htmlFor="author">Author</label>
        
        <input type="text" name="author" id="author" onChange={aoAlterar} />

        <span className="inputDetail">Tell us the author</span>
      </div>

      <div>
        <label htmlFor="date">Date</label>
        
        <input type="date" name="date" id="date" onChange={aoAlterar} />

        <span className="inputDetail">Define a date for this news.</span>
      </div>
      <div>
        <label htmlFor="newsFrom">Original news vehicle </label>
        
        <input type="text" name="newsFrom" id="newsFrom" onChange={aoAlterar} />

        <span className="inputDetail">Tell where you get that news</span>
      </div>
      <div className="buttonGrid">
      <button type="submit">Save</button>
      </div>
      
    </form>
  );
};

export default CadastroNoticiaForm;
