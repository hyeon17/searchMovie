import axios, { AxiosError } from 'axios';

export const searchMovie = async (title: string, type?: string, year?: number | string, page?: number) => {
  try {
    const url = `${import.meta.env.VITE_APP_BASE_URL}&s=${title}&type=${type}&y=${year}&page=${page}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error: any) {
    throw new AxiosError(error);
  }
};

export const searchMovieId = async (id: string) => {
  try {
    const url = `${import.meta.env.VITE_APP_BASE_URL}&i=${id}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error: any) {
    throw new AxiosError(error);
  }
};
