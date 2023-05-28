import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

export const useSearchMovie = (title: string, type?: string, year?: number | string, page?: number | string) => {
  const queryKey = ['movies'];
  const queryFn = async () => {
    const url = `${import.meta.env.VITE_APP_BASE_URL}&s=${title}&type=${type}&y=${year}&page=${page}`;
    const response = await axios.get<AxiosResponse<any>>(url);
    return response;
  };

  return useQuery<AxiosResponse<any>, AxiosError>({
    queryKey,
    queryFn,
    keepPreviousData: true,
    staleTime: 5000,
  });
};

export const useSearchMovieId = (id: number) => {
  const queryKey = ['movieId'];
  const queryFn = async () => {
    const url = `${import.meta.env.VITE_APP_BASE_URL}&i=${id}`;
    const response = await axios.get<AxiosResponse<any>>(url);
    return response;
  };

  return useQuery<AxiosResponse<any>, AxiosError>({
    queryKey,
    queryFn,
  });
};
