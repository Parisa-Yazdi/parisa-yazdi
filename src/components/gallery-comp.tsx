import Link from 'next/link';
import Image from 'next/image';

export function GalleryComp({ images }: any) {
  return (
    <div className="mx-auto w-full max-w-7xl p-4">
      <div className="mx-auto mt-5 flex w-full justify-start ">
        <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl">GALLERY</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images &&
          images.map((image: any, i: number) => {
            console.log('IMAGE: ', image.attributes.art.data[0].attributes.formats.large);
            return (
              <div key={i} className={`group relative`}>
                <Image
                  alt="Art Piece 1"
                  className="aspect-square w-full overflow-hidden rounded-lg border border-gray-200 object-cover dark:border-gray-800"
                  height={image.attributes.art.data[0].attributes.formats.large.height}
                  src={image.attributes.art.data[0].attributes.formats.large.url}
                  width={image.attributes.art.data[0].attributes.formats.large.width}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
                  <p className="text-lg text-white">{image.attributes.name}</p>
                </div>
              </div>
            );
          })}
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
