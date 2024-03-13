import Hero from '@/components/HeroLanding/Hero';
import LatestClassesAndCourses from '@/components/ClassesAndCourses/LatestClassesAndCourses/LatestClassesAndCourses';
import LatestArticles from '@/components/Articles/LatestArticleLanding/LatestArticles';
import AboutAuthor from '@/components/About/AboutAuthorLanding/AboutAuthor';
import LatestVideos from '@/components/Video/LatestVideoLanding/LatestVideo';
import LatestBooks from '@/components/Books/LatestBookLanding/LatestBooks';
import { RecentClasses } from '@/components/recent-classes';
import { RecentCourses } from '@/components/recent-courses';

export default function Home() {
  return (
    // cmnd+shift+f : "TODO"
    <main className="h-fit w-screen overflow-hidden">
      <Hero />
      <RecentClasses />
      <LatestBooks />
      <RecentCourses />
      <LatestArticles />
      <LatestVideos />
      <AboutAuthor />
    </main>
  );
}
