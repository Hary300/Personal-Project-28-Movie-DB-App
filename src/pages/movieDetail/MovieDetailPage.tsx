import MainLayout from '@/components/layouts/MainLayout';
import HeroSection from './sections/HeroSection';
import OverviewSection from './sections/OverviewSection';
import CastSection from './sections/CastSection';
import Container from '@/components/layouts/Container';

const MovieDetailPage = () => {
  return (
    <MainLayout>
      <Container>
        <main>
          <HeroSection />
          <OverviewSection />
          <CastSection />
        </main>
      </Container>
    </MainLayout>
  );
};

export default MovieDetailPage;
