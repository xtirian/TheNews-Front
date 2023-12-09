"use client";
import React, { useState } from "react";
import "./styles.scss";

import axios from "axios";
import { useRouter } from "next/navigation";

const CadastroNoticiaForm = () => {
  const Router = useRouter();

  const [formulario, setFormulario] = useState({
    title: "",
    imgURL: "",
    description: "",
    content: "",
    originalNews: "",
    author: "",
    date: "",
    NewsFrom: "",
  });

  const aoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await axios.post("http://localhost:8080/news", formulario);
      console.log(result.data[1].message);
      Router.push("/page/admin/news/create");
    } catch (err: any) {
      console.log(err.response);
    }
  };

  const aoAlterar = (
    e:
      | React.FormEvent<HTMLInputElement>
      | React.ChangeEventHandler<HTMLTextAreaElement>
      | any
  ) => {
    const { name, value } = e.currentTarget;

    setFormulario({
      ...formulario,

      [name]: value,
    });
  };

  return (
    <form onSubmit={aoSubmit} className="createNewsForm">
      <div>
        <label htmlFor="title">Title</label>

        <input type="text" name="title" id="title" onChange={aoAlterar} required />

        <span className="inputDetail">Set head Title for the news</span>
      </div>

      <div>
        <label htmlFor="imgURL">URL of Img</label>

        <input type="text" name="imgURL" id="imgURL" onChange={aoAlterar} required />

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
          required
        />

        <span className="inputDetail">
          Set a description that Will display bellow the News Image
        </span>
      </div>
      <div>
        <label htmlFor="content">Content</label>

        <textarea name="content" id="content" onChange={aoAlterar} required />

        <span className="inputDetail">
          <ul style={{ listStyleType: "disc" }}>
            <li>Here you will define the main content </li>
            <li>
              If you dont want to type everything, you can put a &apos;...
              [+1096 chars]&apos; `&ldquo at final and define the link to the
              original news
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
          required
        />

        <span className="inputDetail">Tell us where you get that news</span>
      </div>

      <div>
        <label htmlFor="author">Author</label>

        <input type="text" name="author" id="author" onChange={aoAlterar} required />

        <span className="inputDetail">Tell us the author</span>
      </div>

      <div>
        <label htmlFor="date">Date</label>

        <input type="date" name="date" id="date" onChange={aoAlterar} />

        <span className="inputDetail">Define a date for this news.</span>
      </div>
      <div>
        <label htmlFor="NewsFrom">Original news vehicle </label>

        <input type="text" name="NewsFrom" id="NewsFrom" onChange={aoAlterar}  required />

        <span className="inputDetail">Tell where you get that news</span>
      </div>
      <div className="buttonGrid">
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default CadastroNoticiaForm;
