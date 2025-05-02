import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import PopularCourses from '../components/home/PopularCourses';
import WatchTrainers from '../components/home/WatchTrainers';
import FeaturesList from '../components/home/FeaturesList';
import SubscribeSection from '../components/home/SubscribeSection';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>CodeHub - Take the first step to learn with us</title>
      </Helmet>
      
      <Hero />
      <Features />
      <PopularCourses />
      <WatchTrainers />
      <FeaturesList />
      <SubscribeSection />
    </div>
  );
};

export default HomePage;