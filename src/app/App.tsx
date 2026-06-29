import HomePage from '@/pages/home/HomePage';
import { Route, Routes } from 'react-router-dom';
import '@/styles/index.css';
import FavoritePage from '@/pages/FavoritePage';
import MovieDetailPage from '@/pages/movieDetail/MovieDetailPage';
import SearchPage from '@/pages/SearchPage';
// import HomeHeroSkeleton from '@/pages/home/sections/HomeHeroSkeleton';
// import NewReleaseSkeleton from '@/pages/home/sections/NewReleaseSkeleton';
// import TrendingNowSkeleton from '@/pages/home/sections/TrendingNowSkeleton';

function App() {
  // TODO: Setup routing dengan React Router
  // TODO: Implement layout structure
  // TODO: Add navigation between pages

  return (
    // <>
    //   <HomeHeroSkeleton />
    //   <TrendingNowSkeleton />
    //   <NewReleaseSkeleton />
    // </>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/movieDetail/:id' element={<MovieDetailPage />} />
      <Route path='/favorite' element={<FavoritePage />} />
      <Route path='/searchMovie' element={<SearchPage />} />
    </Routes>
  );
}

export default App;
