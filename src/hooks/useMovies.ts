import { useQuery } from '@tanstack/react-query';
import { movieService, type TimeWindow } from '@/services/movieService';
import { QUERY_KEYS } from '@/lib/constants';

// TODO: Create custom hooks using React Query
// Reference: https://tanstack.com/query/latest/docs/framework/react/overview

/** ====
 * 1
 =======*/
export const useTrendingMovies = (timeWindow: TimeWindow = 'week') => {
  return useQuery({
    queryKey: QUERY_KEYS.movies.trending(timeWindow),
    queryFn: () => {
      return movieService.getTrendingMovies(timeWindow);
    },
  });
};

/** ====
 * 2
 =======*/
// Example: Hook to fetch popular movies
export const usePopularMovies = (page: number = 1) => {
  // TODO: Implement useQuery hook
  // Hint: Use movieService.getPopularMovies as queryFn
  return useQuery({
    queryKey: QUERY_KEYS.movies.popular(page),
    queryFn: () => {
      // TODO: Call your movie service function
      return movieService.getPopularMovies(page);
    },
  });
};

/** ====
 * 3
 =======*/
export const useNowPlayingMovies = (page: number = 1) => {
  return useQuery({
    queryKey: QUERY_KEYS.movies.nowPlaying(page),
    queryFn: () => {
      return movieService.getNowPlayingMovies(page);
    },
  });
};

/** ====
 * 4
 =======*/
export const useSearchMovie = (keyword: string) => {
  return useQuery({
    queryKey: ['movies', 'search', keyword],
    queryFn: () => {
      return movieService.searchMovies(keyword);
    },
  });
};

/** ====
 * 5
 =======*/
export const useMovieFullDetails = (movieId: string) => {
  return useQuery({
    queryKey: ['movies', 'movieDetails', movieId],
    queryFn: () => {
      return movieService.getMovieFullDetails(movieId);
    },
  });
};

// TODO: Add more hooks for different endpoints
// Examples: useMovieDetails, useSearchMovies, useNowPlayingMovies
