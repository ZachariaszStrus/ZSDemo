import axios, { AxiosResponse } from 'axios';
import { API_KEY, API_URL } from '../../config/dev';
import { FetchEventsResult } from './api.types';

const fetchEvents = (
  page: number = 1
): Promise<AxiosResponse<FetchEventsResult>> => {
  const genreId = 'KnvZfZ7vAvF'; // electronic music
  return axios.get(
    `${API_URL}events?apikey=${API_KEY}&locale=*&genreId=${genreId}&page=${page}`
  );
};

export default { fetchEvents };
