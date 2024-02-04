import { Button } from '@/components/ui/button';
import { SheetTrigger, SheetContent, Sheet } from '@/components/ui/sheet';
import Link from 'next/link';
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from '@/components/ui/collapsible';

export function MobileMenu() {
  return (
    <header className="flex h-16 w-full items-center px-4 md:px-6">
      <Sheet>
        <SheetContent side="left">
          <Link href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                Main Page 1
                <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="-mx-6 grid gap-6 bg-gray-100 p-6 dark:bg-gray-800">
                  <Link className="group grid h-auto w-full justify-start gap-1" href="#">
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      Subpage 1
                    </div>
                  </Link>
                  <Link className="group grid h-auto w-full justify-start gap-1" href="#">
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      Subpage 2
                    </div>
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                Main Page 2
                <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="-mx-6 grid gap-6 bg-gray-100 p-6 dark:bg-gray-800">
                  <Link className="group grid h-auto w-full justify-start gap-1" href="#">
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      Subpage 3
                    </div>
                  </Link>
                  <Link className="group grid h-auto w-full justify-start gap-1" href="#">
                    <div className="text-sm font-medium leading-none group-hover:underline">
                      Subpage 4
                    </div>
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </SheetContent>
      </Sheet>
      <Link className="mr-6 hidden lg:flex" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <div className="ml-auto">
        <Button className="lg:hidden" size="icon" variant="outline">
          <SearchIcon className="h-6 w-6" />
          <span className="sr-only">Search</span>
        </Button>
      </div>
    </header>
  );
}

function MenuIcon(props: any) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

export function ChevronRightIcon(props: any) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function SearchIcon(props: any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
