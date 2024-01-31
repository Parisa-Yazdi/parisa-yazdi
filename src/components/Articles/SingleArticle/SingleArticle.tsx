import Image from 'next/image';
import { fetchArticles } from '@/lib/utils';
import config from '@/config';

type ArticleProps = {
  title: string;
  date: string;
  author: string;
  content: string;
  featuredImage: string;
};

const SingleArticle = ({ title, date, author, content, featuredImage }: ArticleProps) => {
  // console.log('CONTENT: ', content);
  // console.log('FEATURED IMAGE: ', featuredImage);
  return (
    <>
      <main className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
        <article className="prose prose-gray dark:prose-invert mx-auto max-w-6xl">
          <div className="not-prose space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{title}</h1>
            <div className="flex flex-col items-start  justify-start ">
              <p className="text-gray-500 dark:text-gray-400">Posted by {author}</p>
              <p className="text-gray-500 dark:text-gray-400">{date}</p>
            </div>
          </div>
          <br />
          <Image
            src={`${featuredImage} `}
            alt="Featured image"
            width="1250"
            height="340"
            priority
            className="mb-8 aspect-video overflow-hidden rounded-lg object-cover"
          />
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </main>
    </>
  );
};

export default SingleArticle;
