import { GalleryComp } from '@/components/gallery-comp';
import { fetchGallery } from '@/lib/utils';

import React from 'react';

export default async function page() {
  const gallery = await fetchGallery();

  return (
    <div className="mx-auto w-11/12">
      <GalleryComp images={gallery.data} />
    </div>
  );
}
