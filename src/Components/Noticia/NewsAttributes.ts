
export interface NewsListProps {
  articles: NewsContainerProps[];
}


export interface NewsContainerProps {
  originalNews: string;
  newsFrom: string;
  author: string;
  date: string;
  title: string;
  imgURL: string;
  description: string;
  content: string;
}


/*export interface NewsProps {
  article: NewsContainerProps;
}*/