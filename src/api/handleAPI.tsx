import axios from "axios";

//https://newsapi.org/v2/top-headlines?country=us&apiKey=f456f8dd484f4f12a826b85db1a04596

const BASE_URL = 'https://newsapi.org/v2/';
const API_KEY = 'f456f8dd484f4f12a826b85db1a04596';

const searchBaseUrl = (path: string) => `${BASE_URL}${path}&apiKey=${API_KEY}`

export class NewsService {
  static getTopHeadLinesUS(){
    return axios(searchBaseUrl("top-headlines?country=us"))
  }
}


export class BackEndService{
  static async getNews(){
    try {
      const { data } = await axios.get("http://localhost:8080/news");
      
      console.log(data[1].message);
      return data
    } catch (err: any) {
      console.log(err);
      return;
    }
  }
}