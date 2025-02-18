'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export function GalleryComp({ images = [] }: { images: any[] }) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // ✅ Ensure background color resets correctly
  useEffect(() => {
    document.body.style.backgroundColor = 'black';

    return () => {
      setTimeout(() => {
        document.body.style.backgroundColor = ''; // Delayed reset to prevent React error
      }, 50);
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-7xl bg-black p-4">
      <h2 className="text-4xl font-semibold tracking-tighter text-white sm:text-5xl">GALLERY</h2>

      {images.length === 0 ? (
        <p className="text-center text-white">No images available.</p>
      ) : (
        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {images.map((image: any, i: number) => (
            <div key={i} className="group relative cursor-pointer">
              <Image
                alt={`Art Piece ${i + 1}`}
                className="aspect-square w-full overflow-hidden rounded-lg border border-gray-200 object-cover dark:border-gray-800"
                height={200}
                src={
                  image?.attributes?.art?.data?.[0]?.attributes?.formats?.medium?.url ??
                  '/default-image.jpg'
                }
                width={200}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
