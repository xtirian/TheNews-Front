/*export interface APIKeys {
  url: string;
  source: {
    name: string;
  };
  author: string;
  publishedAt: string;
  title: string;
  urlToImage: string;
  description: string;
  content: string;
}

export interface APIKeysList {
  articles: APIKeys[];
}

export interface APIKeysArticle {
  article: APIKeys;
}*/

export interface BackendKeys {
  nome: string;
  imgURL: string;
  title: string;
  content: string;
  description: string;
  originalNews: string;
  author: string;
  date: string;
  NewsFrom: string;
}


export interface APIKeysList {
  articles: BackendKeys[];
}

export interface APIKeysArticle {
  article: BackendKeys;
}

