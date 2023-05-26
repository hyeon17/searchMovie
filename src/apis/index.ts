import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { ResponseValue, Movie } from '@/types/searchMovie';
import { ResponseValue as ResponseValueId, Rating } from '@/types/searchMovieId';

export const useSearchMovie = (title: string, type?: string, year?: number | string, page?: number | string) => {
  const queryKey = ['movies'];
  const queryFn = async () => {
    const url = `${import.meta.env.VITE_APP_BASE_URL}&s=${title}&type=${type}&y=${year}&page=${page}`;
    const response = await axios.get<AxiosResponse<any>>(url);
    return response.data;
  };

  return useQuery<AxiosResponse<any>, AxiosError>({
    queryKey,
    queryFn,
  });
};

export const useSearchMovieId = (id: number) => {
  const queryKey = ['movieId'];
  const queryFn = async () => {
    const url = `${import.meta.env.VITE_APP_BASE_URL}&i=${id}`;
    const response = await axios.get<AxiosResponse<any>>(url);
    return response.data;
  };

  return useQuery<AxiosResponse<any>, AxiosError>({
    queryKey,
    queryFn,
  });
};
