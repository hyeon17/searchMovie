const inputEl = document.querySelector(".search--input");
const buttonEl = document.querySelector(".search--button");
const moviesEl = document.querySelector(".movies");
const totalresultEl = document.querySelector(".search--result");
const years_selectEl = document.querySelector(".search--select");
const loadingEl = document.querySelector(".loading");

// 즉시 실행 함수
(async () => {
  // 로딩 화면
  loadingEl.style.display = "none";
})();

// 영화 정보 초기값
const searchMovie = {
  title: "",
  year: "",
  page: 1,
  isFirst: false,
};

// 연도창 클릭 시 너비 변경 및 연도 값 저장
years_selectEl.addEventListener("click", function () {
  inputEl.style.width = "40%";
  searchMovie.year = years_selectEl.value;
});

// 검색창에 입력 시 영화 검색
inputEl.addEventListener("input", function () {
  searchMovie.title = inputEl.value;
});

// 입력 후 엔터시 생성
inputEl.addEventListener("keydown", (event) => {
  // event.isComposing는 한글 입력시 필수로 넣어야 함
  if (event.key === "Enter") {
    buttonEl.click();
  }
});

// 검색 버튼 클릭 시 영화 검색
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
    loadingEl.style.display = "flex";
    setTimeout(() => {
      loadingEl.style.display = "none";
      const { Search: movies, totalResults } = json;
      totalCount(totalResults);
      renderMovies(movies);
    }, 1000);
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
    liEl.classList.add("movielist");
    const titleEl = document.createElement("h2");
    titleEl.classList.add("movielist--title");
    const posterEl = document.createElement("img");
    posterEl.classList.add("movielist--poster");
    const yearEl = document.createElement("p");
    yearEl.classList.add("movielist--year");

    titleEl.textContent = movie.Title;
    posterEl.src = movie.Poster;
    yearEl.textContent = movie.Year;
    liEl.append(titleEl, posterEl, yearEl);

    return liEl;
  });
  if (searchMovie.isFirst) {
    moviesEl.innerHTML = "";
  }
  moviesEl.append(...liEls);
}

// 총 영화 개수 출력
function totalCount(totalResults) {
  totalresultEl.innerHTML = `<span style="color:red">${searchMovie.title}</span>에 대해 총&nbsp;<span style="color:red">${totalResults}</span>개의 영화를 찾았습니다.`;
}

// 무한 스크롤
window.addEventListener("scroll", function () {
  if (
    (window.innerHeight + window.scrollY) >= document.body.offsetHeight
  ) {
    if (searchMovie.isFirst) {
      loadingEl.style.display = "flex";
      searchMovie.page ++;
      getMovies();
    }
  }
});