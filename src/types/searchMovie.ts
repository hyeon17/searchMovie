export interface IMovieResponse {
  Search: Movie[]; // 검색된 영화 목록, 최대 10개
  totalResults: string; // 검색된 영화 개수
  Response: 'True' | 'False' | string; // 요청 성공 여부
  Error?: string; // 요청 실패 시 에러 메시지
}
export interface Movie {
  Title: string; // 영화 제목
  Year: string; // 영화 개봉연도
  imdbID: string; // 영화 고유 ID
  Type: string; // 영화 타입
  Poster: string; // 영화 포스터 이미지 URL
}

export interface IFavoriteMovie {
  Title: string; // 영화 제목
  Year: string; // 영화 개봉연도
  imdbID: string; // 영화 고유 ID
  Type: string; // 영화 타입
  Poster: string; // 영화 포스터 이미지 URL
  heart: boolean;
}
