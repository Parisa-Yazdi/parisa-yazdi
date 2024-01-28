import { SingleClass } from '@/components/single-class';
import { ClassInformation } from '@/components/class-information';

const Class = () => {
  return (
    <>
      {/* bg-[#e0ebfe] */}
      <main className="mx-auto  flex h-fit w-11/12 flex-col   flex-wrap items-center justify-center gap-3 overflow-hidden pb-24">
        <ClassInformation />
      </main>
    </>
  );
};

export default Class;
