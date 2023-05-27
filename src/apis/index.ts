import axios from 'axios';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

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


// export const useSearchMovie2 = (title: string, type?: string, year?: number | string) => {
//   const queryKey = ['movies', title, type, year];

//   const fetchMovies = async ({ pageParam = 1 }) => {
//     const url = `${import.meta.env.VITE_APP_BASE_URL}&s=${title}&type=${type}&y=${year}&page=${pageParam}`;
//     const response = await axios.get<AxiosResponse<any>>(url);
//     return response.data;
//   };

//   const { data, error, fetchNextPage, hasNextPage, isFetching, isLoading, isError, isSuccess } = useInfiniteQuery<
//     AxiosResponse<any>,
//     AxiosError
//   >({
//     queryKey,
//     queryFn: fetchMovies,
//     getNextPageParam: (lastPage) => {
//       const { data } = lastPage;
//       const totalPages = Math.ceil(data?.totalResults / 10);
//       return currentPage + 1 <= totalPages ? currentPage + 1 : undefined;
//     },
//   });

//   return {
//     data,
//     error,
//     fetchNextPage,
//     hasNextPage,
//     isFetching,
//     isLoading,
//     isError,
//     isSuccess,
//   };
// };