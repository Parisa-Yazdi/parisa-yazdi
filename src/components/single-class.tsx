import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function SingleClass() {
  // py-12 md:py-24 lg:py-32
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Full Stack Web</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Learn to build and deploy impressive web applications using the latest technologies.
                This course covers HTML, CSS, JavaScript, React, Node.js, MongoDB, and more.
              </p>
            </div>
            <ul className="grid gap-2 py-4">
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                12-week intensive course.
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Live online classes with experienced instructors.
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Interactive coding exercises and projects.
              </li>
              <li>
                <CheckIcon className="mr-2 inline-block h-4 w-4" />
                Career support and job placement assistance.
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Book Your Class</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Select your preferred course dates and pay securely online.
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="course-dates">Course Dates</Label>
                <Input id="course-dates" required type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="payment">Payment</Label>
                <Input id="payment" placeholder="Enter amount" required type="number" />
              </div>
              <Button className="w-full" type="submit">
                Book Class
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
