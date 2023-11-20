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