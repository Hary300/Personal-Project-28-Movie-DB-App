import { Skeleton } from '@/components/ui/skeleton';
import MovieCardSkeleton from '@/components/features/MovieCardSkeleton';

const TrendingNowSkeleton = () => {
  return (
    <section
      id='trending-now-home-page-skeleton'
      className='py-5xl flex flex-col gap-3xl lg:gap-5xl'
    >
      <div className='px-xl lg:px-8xl xl:px-11xl'>
        <Skeleton className='h-9 w-50 lg:h-15 lg:w-100 rounded-full' />
      </div>
      <div className='relative flex overflow-x-hidden gap-xl lg:gap-2xl'>
        {Array.from({ length: 15 }).map((_, index) => (
          <div key={index} className='min-w-43.25 lg:min-w-54'>
            <MovieCardSkeleton />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingNowSkeleton;
