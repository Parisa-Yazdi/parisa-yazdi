import Hero from '@/components/HeroLanding/Hero';
import LatestArticles from '@/components/LatestArticleLanding/LatestArticles';
import AboutAuthor from '@/components/AboutAuthorLanding/AboutAuthor';
import LatestVideos from '@/components/LatestVideoLanding/LatestVideo';
import LatestBooks from '@/components/LatestBookLanding/LatestBooks';

export default function Home() {
  return (
    <main className="h-fit w-screen overflow-hidden">
      <Hero />
      <LatestArticles />
      <LatestVideos />
      <LatestBooks />
      <AboutAuthor />
    </main>
  );
}
