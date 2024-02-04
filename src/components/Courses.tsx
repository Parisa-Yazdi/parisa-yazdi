import { CardTitle, CardDescription, CardHeader, Card } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import config from '@/config';

interface classCourseProps {
  title: string;
  description: string;
  img?: any;
  slug?: string;
}

export default function Course({ title, description, slug }: classCourseProps) {
  return (
    <>
      <Card className="border border-black hover:cursor-pointer hover:shadow-lg">
        <Link href={`/classes-and-courses/course/${slug}`}>
          <CardHeader>
            <CardTitle className="line-clamp-1">{title}</CardTitle>
          </CardHeader>
        </Link>
      </Card>
    </>
  );
}
