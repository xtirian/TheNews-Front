import Link from "next/link";
import { NewsContainerProps } from "./NewsAttributes";
import { createElement } from "react";
import { APIKeys } from "@/api/interfaceAPI";

export class handleNewsContainer {
  static handleDate(newsDate: string | number | Date) {
    const fullDate = new Date(newsDate);

    const day = fullDate.getDate();
    const month = fullDate.toLocaleDateString("en", { month: "long" });
    const year = fullDate.getFullYear();

    return `${month} ${day}, ${year}`;
  }

  static handleNewsContent(newsContent: string) {
    if (newsContent) {
      const content = newsContent.split(" ");

      const newContent = content.slice(0, content.length - 2);

      return newContent.join(" ");
    } else {
      return "";
    }
  }

  static handleLink(article: APIKeys | any) {
    if (article.content) {
      const content = article.content.split(" ");
      const link = article.url;

      const newContentLink = content.slice(content.length - 2, content.length);

      //HAD TO USE THE CREATE ELEMENT FROM REACT TO CREATE AN ANCHOR SO I COULD RETURN THE LINK
      let returnWithLink = createElement(
        "a",
        {
          href: link,
          target: "_blank",
        },
        newContentLink.join(" ")
      );

      return returnWithLink;
    } else {
      return "";
    }
  }

  static handleTitle(article: APIKeys) {
    const title = article.title;
    const link = article.url;

    //HAD TO USE THE CREATE ELEMENT FROM REACT TO CREATE AN ANCHOR SO I COULD RETURN THE LINK
    let returnWithLink = createElement(
      "a",
      {
        href: link,
        target: "_blank",
      },
      title
    );

    return returnWithLink;
  }
}
