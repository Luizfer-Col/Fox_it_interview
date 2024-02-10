import axios from 'axios';
import {NewsProps} from './types';
const apiKey = '53b00e98bf9d4ff79841fdefd6d526d3';

export const fetchNews = async (
  page: number,
  pageSize: number,
): Promise<NewsProps[]> => {
  try {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;

    const response = await axios.get(url);
    const data = response.data;
    let newsResponse = [];
    if (data.articles.length > 0) {
      newsResponse = data.articles;
    }
    return newsResponse;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
