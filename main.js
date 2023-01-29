const inputEl = document.querySelector(".search--input");
const buttonEl = document.querySelector(".search--button");
const moviesEl = document.querySelector(".movies");
const totalresultEl = document.querySelector(".search--result");
const years_selectEl = document.querySelector(".search--select");
const loadingEl = document.querySelector(".loading");


// 영화 정보 초기값
const searchMovie = {
  title: "",
  year: "",
  page: 1,
  isFirst: false,
};

// 검색창에 입력 시 영화 검색
inputEl.addEventListener("input", function () {
  searchMovie.title = inputEl.value;
  searchMovie.year = years_selectEl.value;
});

buttonEl.addEventListener("click", function () {
  getMovies();
});

// 년도 구하기
const thisYear = new Date().getFullYear();
for (let i = thisYear; i >= thisYear - 50; i--) {
  const optionEl = document.createElement("option");
  optionEl.value = i;
  optionEl.textContent = i;
  years_selectEl.append(optionEl);
}


// 영화 api 호출
async function getMovies() {
  // 영화 정보 초기화
  moviesEl.innerHTML = "";
  const s = `&s=${searchMovie.title}`;
  const y = `&y=${searchMovie.year}`;
  const p = `&page=${searchMovie.page}`;

  const res = await fetch(`https://omdbapi.com/?apikey=7035c60c${s}${y}${p}`);
  const json = await res.json();
  if (json.Response === "True") {
    const { Search: movies, totalResults } = json;
    totalCount(totalResults);
    renderMovies(movies);
  }
  // 검색 결과 없을 때
  if (json.Error) {
    totalresultEl.innerHTML =
      searchMovie.title.length < 3
        ? `3글자 이상 입력하세요`
        : `"${searchMovie.title}"에 대한 검색 결과 없음`;
    searchMovie.isFirst = false;
    searchMovie.page = 1;
    moviesEl.innerHTML = "";
  }
}

// 영화 정보 렌더링
function renderMovies(movies) {
  searchMovie.isFirst = true;
  const liEls = movies.map(function (movie) {
    const liEl = document.createElement("li");
    const titleEl = document.createElement("h2");
    const posterEl = document.createElement("img");
    const yearEl = document.createElement("p");

    titleEl.textContent = movie.Title;
    posterEl.src = movie.Poster;
    yearEl.textContent = movie.Year;
    liEl.append(titleEl, posterEl, yearEl);

    return liEl;
  });
  moviesEl.append(...liEls);
}

function totalCount(totalResults) {
  totalresultEl.innerHTML = `총&nbsp;<span style="color:red">${totalResults}</span>개의 영화를 찾았습니다.`;
}