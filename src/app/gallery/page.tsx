import { GalleryComp } from '@/components/gallery-comp';
import { fetchGallery } from '@/lib/utils';

import React from 'react';

export default async function page() {
  const gallery = await fetchGallery();

  return (
    <div className="mx-auto w-11/12">
      <div className="mx-auto mt-5 flex w-full justify-start md:ml-10">
        <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl">GALLERY</h2>
      </div>
      <GalleryComp images={gallery.data} />
    </div>
  );
}
