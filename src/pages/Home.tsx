import Hero from '../components/Hero';
import HomeProducts from '../components/HomeProducts';
import ImpactMetrics from '../components/ImpactMetrics';
import MediaAndInsights from '../components/MediaAndInsights';
import SDGCommitment from '../components/SDGCommitment';
import Transformation from '../components/Transformation';
import OurPartners from '../components/OurPartners';

const Home = () => {
  return (
    <>
      <Hero />
      <ImpactMetrics />
      <HomeProducts />
      <OurPartners />
      <MediaAndInsights />
      <SDGCommitment />
      <Transformation />
    </>
  );
};

export default Home;
