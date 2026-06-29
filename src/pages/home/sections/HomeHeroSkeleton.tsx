import FadeOverlay from '@/components/ui/app-ui/FadeOverlay';
import { Skeleton } from '@/components/ui/skeleton';

const HomeHeroSkeleton = () => {
  return (
    <section id='hero-home-page-skeleton'>
      <div className='relative h-98 lg:h-170'>
        <Skeleton className='size-full bg-zinc-900' />
        <FadeOverlay
          position='bottom'
          className='h-55.25 lg:h-auto lg:inset-y-0'
        />
      </div>
      <div className='flex flex-col gap-3xl lg:gap-6xl px-4 lg:p-0 -mt-42.25 lg:mt-0 lg:absolute lg:top-74.5 lg:left-8xl xl:left-11xl mx-auto'>
        <div className='flex flex-col gap-3xl'>
          <Skeleton className='h-7 w-70 lg:h-15 rounded-full' />
          <div className='flex flex-col gap-lg'>
            <Skeleton className='h-4 w-full lg:h-5 lg:w-200 rounded-full' />
            <Skeleton className='h-4 w-full lg:h-5 lg:w-200 rounded-full' />
            <Skeleton className='h-4 w-full lg:h-5 lg:w-200 rounded-full' />
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-xl lg:max-w-119 '>
          <Skeleton className='h-9 w-full lg:h-15 rounded-full' />
          <Skeleton className='h-9 w-full lg:h-15 rounded-full' />
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSkeleton;
