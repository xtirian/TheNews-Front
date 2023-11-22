

export interface APIKeys {
  url: string;
  source: {
    name: string;
  } ;
  author: string;
  publishedAt: string;
  title: string;
  urlToImage: string;
  description: string;
  content: string;
}

export interface APIKeysList {
  
  articles: APIKeys[]
}

export interface APIKeysArticle {
  article: APIKeys
}