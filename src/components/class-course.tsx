import { CardTitle, CardDescription, CardHeader, Card } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import config from '@/config';

interface classCourseProps {
  title: string;
  description: string;
  img?: any;
}

export default function ClassCourse({ title, description, img }: classCourseProps) {
  return (
    <>
      <Card className="border border-black hover:cursor-pointer hover:shadow-lg">
        <CardHeader>
          <CardTitle className="line-clamp-1">{title}</CardTitle>
          {/* <CardDescription className="mt-2 line-clamp-2">{description}</CardDescription> */}
        </CardHeader>
        {/* <Image
          alt="Book Cover"
          className="aspect-[8/12] w-full rounded-t-lg object-cover hover:cursor-pointer"
          height={100}
          // src="https://janefriedman.com/wp-content/uploads/2015/08/Publishing-101-thumbnail2.png"

          src={`${config.api}${img}`}
          width={100}
        /> */}
      </Card>
    </>
  );
}
