
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@/components/Layout';
import NotFound from '@/pages/NotFound';
import SearchPage from '@/pages/Search';
import MoviePage from '@/pages/Movie';
import AboutPage from '@/pages/About';


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<SearchPage />} />
          <Route path="/movie" element={<MoviePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
