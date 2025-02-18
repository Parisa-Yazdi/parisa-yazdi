import { GalleryComp } from '@/components/gallery-comp';
import { fetchGallery } from '@/lib/utils';

import React from 'react';

export default async function page() {
  const gallery = await fetchGallery();

  // console.log('GALLERY: ', gallery.data.attributes);

  return <div className="mx-auto w-full">{/* <GalleryComp images={gallery.data} /> */}</div>;
}
