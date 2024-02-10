'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';

export function GalleryComp({ images }: any) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedImage(selectedImage === index ? null : index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigate = (direction: 'prev' | 'next') => {
    if (selectedImage !== null) {
      const newIndex =
        direction === 'next'
          ? (selectedImage + 1) % images.length
          : (selectedImage - 1 + images.length) % images.length;
      setSelectedImage(newIndex);
    }
  };

  useEffect(() => {
    function handleKeyDown(event: any) {
      if (event.key === 'Escape') {
        closeModal();
      } else if (event.key === 'ArrowRight') {
        navigate('next');
      } else if (event.key === 'ArrowLeft') {
        navigate('prev');
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal, navigate]);

  return (
    <div className="mx-auto w-full max-w-7xl p-4">
      <div className="mx-auto mt-5 flex w-full justify-start ">
        <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl">GALLERY</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {images &&
          images.map((image: any, i: number) => (
            <div key={i} className="group relative cursor-pointer" onClick={() => handleClick(i)}>
              <Image
                alt={`Art Piece ${i + 1}`}
                className="aspect-square w-full overflow-hidden rounded-lg border border-gray-200 object-cover dark:border-gray-800"
                height={image.attributes.art.data[0].attributes.formats.medium.height}
                src={image.attributes.art.data[0].attributes.formats.medium.url}
                width={image.attributes.art.data[0].attributes.formats.medium.width}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-lg text-white">{image.attributes.name}</p>
              </div>
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity"
                style={{ visibility: selectedImage === i ? 'visible' : 'hidden' }}
              >
                <p className="text-lg text-white">{image.attributes.name}</p>
              </div>
            </div>
          ))}

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black bg-opacity-75" onClick={closeModal}></div>
            <div className="relative z-10 m-3 flex w-fit max-w-screen-lg items-center justify-center rounded-lg bg-white p-6 shadow-lg md:h-[90%]">
              <button className="absolute left-4 top-4 text-gray-600" onClick={closeModal}>
                <FontAwesomeIcon className="text-3xl hover:text-teal-600" icon={faTimes} />
              </button>
              <button
                className="left-4 top-1/2 mr-5 -translate-y-1/2 transform"
                onClick={() => navigate('prev')}
              >
                <FontAwesomeIcon className="text-3xl hover:text-teal-600" icon={faChevronLeft} />
              </button>
              <div className="relative flex h-full w-auto flex-col items-center justify-center py-3">
                <Image
                  alt={`Art Piece ${selectedImage + 1}`}
                  className="h-full w-full object-contain"
                  src={images[selectedImage].attributes.art.data[0].attributes.formats.medium.url}
                  width={
                    images[selectedImage].attributes.art.data[0].attributes.formats.medium.width
                  }
                  height={
                    images[selectedImage].attributes.art.data[0].attributes.formats.medium.height
                  }
                />
                <p className="mt-4 text-lg text-gray-800">
                  {images[selectedImage].attributes.name}
                </p>
              </div>
              <button
                className="right-4 top-1/2 ml-5 -translate-y-1/2 transform"
                onClick={() => navigate('next')}
              >
                <FontAwesomeIcon className="text-3xl hover:text-teal-600" icon={faChevronRight} />
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 w-full">
        <Link
          className="flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="/"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
