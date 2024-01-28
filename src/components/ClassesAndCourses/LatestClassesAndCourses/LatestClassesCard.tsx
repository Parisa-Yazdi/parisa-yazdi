import { CardTitle, CardDescription, CardHeader, Card } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface LatestClassAndCourseCardProps {
  className?: string;
  children?: React.ReactNode;
}

const LatestClassesCard = ({ className, children }: LatestClassAndCourseCardProps) => {
  return (
    <Card className=" relative flex w-8/12 items-start border border-black">
      <CardHeader className="border-r border-black p-0 ">
        <Image
          src="https://icons.veryicon.com/png/o/education-technology/online-education-background-management/my-class.png"
          width={400}
          height={400}
          alt="small icon"
        />
      </CardHeader>
      <div className="flex w-11/12 flex-col ">
        <CardHeader className=" w-full ">
          <CardTitle>Mastering JavaScript</CardTitle>
          <CardDescription className="pt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sunt laborum ipsa quae
            veritatis quasi dolor officia placeat, cupiditate libero minima, consequuntur
            voluptatibus laudantium quod atque voluptatum sed eum labore! Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit.
          </CardDescription>
        </CardHeader>
        <div className="flex w-full justify-end  px-7">
          <Button>Learn More</Button>
        </div>
      </div>
    </Card>
  );
};

export default LatestClassesCard;
