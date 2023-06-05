# 프로젝트 소개
## 1. 프로젝트 개요
### 링크
[searchMovie](https://inspiring-cactus-b0f41b.netlify.app)

### 설명
> 영화 제목을 검색하면 해당하는 영화의 정보를 볼 수 있는 사이트 입니다.

- 작업 인원: [장현준](https://github.com/hyeon17)
- 작업 기간: 2023-05-24 ~ 2023-05-31
### 프로젝트 실행 방법
```
1. $ git clone https://github.com/hyeon17/searchMovie.git
2. $ cd searchMovie
3. $ yarn
4. root 경로에 .env 파일 생성 후, 관련 정보 입력
5. $ yarn dev
```
## 2. 프로젝트 스택
- 메인 라이브러리 및 프레임워크: React
- 상태 관리: Zustand
- 서버 통신: React-query
- UI 라이브러리: Ant Design
- CSS: styled-components

## 3. 프로젝트 구조
```
SearchMovie
├─ .eslintrc.cjs
├─ .git
├─ .gitignore
├─ .prettierrc.json
├─ index.html
├─ package.json
├─ public
├─ README.md
├─ src
│  ├─ apis
│  │  └─ index.ts
│  ├─ App.tsx
│  ├─ assets
│  ├─ components
│  │  ├─ Card
│  │  ├─ Content
│  │  ├─ Header
│  │  ├─ Layout
│  │  ├─ Modal
│  │  ├─ Pagination
│  │  ├─ Search
│  │  ├─ SideBar
│  │  └─ Skeleton
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ About.tsx
│  │  ├─ Favorite.tsx
│  │  ├─ NotFound.tsx
│  │  └─ Search.tsx
│  ├─ routes
│  ├─ store
│  ├─ styles
│  ├─ types
│  └─ vite-env.d.ts
├─ tsconfig.json
├─ tsconfig.node.json
├─ vite.config.ts
└─ yarn.lock
```

## 4. 프로젝트 기능
- 추가 검색 옵션(영화 개봉연도, 카테고리)을 통한 필터링 검색
- 페이지네이션으로 다음 페이지 영화를 보기
- 느낌표 아이콘을 클릭하면 영화의 상세정보(제목, 개봉연도, 평점, 장르, 감독, 배우, 줄거리, 포스터 등)를 보기
- 실시간 이미지 리사이징을 통한 영화 포스터를 고해상도로 출력
- 하트 버튼을 눌러 나만의 즐겨찾는 영화 추가하기

## 5. 프로젝트 결과
### 메인
![main](/src/assets/main.png)

### 검색 필터링
![category](/src/assets/category.png)

### 검색 결과
![result](/src/assets/result.png)

### 페이지네이션을 통한 다음 페이지 보기
![nextpage](/src/assets/nextpage.png)

### 상세 보기
![overview](/src/assets/overview.png)

### 하트 버튼을 통한 즐겨 찾기 추가
![heart](/src/assets/heart.png)

### 즐겨 찾기
![favorite](/src/assets/favorite.png)
### 개발자 GitHub 링크
![about](/src/assets/about.png)

### 사이트 성능
![lighthouse](/src/assets/lighthouse.png)


