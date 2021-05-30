import axios from 'axios';

const BASE_URL = "https://newsapi.org/v2";
const API_KEY = "2f9acf035d8741f5b8e8dce7c69be490";

const API = axios.create({baseURL: BASE_URL});

export const fetchHeadlines = (country, category) => API.get(`/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`);
export const fetchHeadlinesBySource = (sources) => API.get(`/top-headlines?sources=${sources}&apiKey=${API_KEY}`);
export const fetchSources = () => API.get(`/sources?apiKey=${API_KEY}`)