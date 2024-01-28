import HeroBook from '@/components/Books/HeroBook';

const Books = () => {
  return (
    <>
      <main className="h-fit  pb-24">
        {/* <div className="mt-10 flex w-full justify-center">
          <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl">BOOKS</h2>
        </div> */}

        <section className="flex flex-col justify-between gap-10">
          <div className="mx-auto flex w-8/12 flex-col flex-wrap items-center justify-start  gap-6 md:w-3/5 md:flex-row">
            <div className="mt-10">
              <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl">Latest Book</h2>
            </div>
            <HeroBook
              image="https://m.media-amazon.com/images/I/71VwdUci1BL._SY522_.jpg"
              title={'The Monk Who Sold His Ferrari'}
              description="There are several things to consider in order to help your book achieve its greatest potential discoverability. Readers, librarians, and retailers can't purchase a book they can't find, and your book metadata is responsible for whether or not your book pops up when they type in search terms relevant to your book. Book metadata may sound complicated, but it consists of all the information that describes your book, including: your title, subtitle, series name, price, trim size, author name, book description, and more. There are two metadata fields for your book description: the long book description and the short book description. Although both play a role in driving traffic to your book, they have distinct differences.  Take IngramSpark's FREE Online Self-Publishing Course on Optimizing Book Metadata Whether reading the short or long description, both need to be full of what readers want: intrigue. It’s up to you to get readers interested in what you have to say, and while we know you could probably write pages upon pages explaining what your book is about, your space and reader attention span is limited. When creating book metadata, you want to make sure you provide the information needed to help buyers, including consumers, booksellers, and librarians, understand what they're about to purchase and whether they want to. Having the right information in place determines not only whether you attract the attention of your audience, but whether you attract the right audience. "
              bookLink={'#'}
              price={'$99'}
            />
          </div>
          <hr className="border-t-2" />
          <div className="mx-auto flex w-7/12 flex-col flex-wrap  items-center justify-start gap-6 md:flex-row">
            <div>
              <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl">More Books</h2>
            </div>
            <HeroBook
              image="https://m.media-amazon.com/images/I/71VwdUci1BL._SY522_.jpg"
              title={'The Monk Who Sold His Ferrari'}
              description="There are several things to consider in order to help your book achieve its greatest potential discoverability. Readers, librarians, and retailers can't purchase a book they can't find, and your book metadata is responsible for whether or not your book pops up when they type in search terms relevant to your book. Book metadata may sound complicated, but it consists of all the information that describes your book, including: your title, subtitle, series name, price, trim size, author name, book description, and more. There are two metadata fields for your book description: the long book description and the short book description. Although both play a role in driving traffic to your book, they have distinct differences.  Take IngramSpark's FREE Online Self-Publishing Course on Optimizing Book Metadata Whether reading the short or long description, both need to be full of what readers want: intrigue. It’s up to you to get readers interested in what you have to say, and while we know you could probably write pages upon pages explaining what your book is about, your space and reader attention span is limited. When creating book metadata, you want to make sure you provide the information needed to help buyers, including consumers, booksellers, and librarians, understand what they're about to purchase and whether they want to. Having the right information in place determines not only whether you attract the attention of your audience, but whether you attract the right audience. "
              bookLink={'#'}
              price={'$99'}
            />
            <HeroBook
              image="https://m.media-amazon.com/images/I/71VwdUci1BL._SY522_.jpg"
              title={'The Monk Who Sold His Ferrari'}
              description="There are several things to consider in order to help your book achieve its greatest potential discoverability. Readers, librarians, and retailers can't purchase a book they can't find, and your book metadata is responsible for whether or not your book pops up when they type in search terms relevant to your book. Book metadata may sound complicated, but it consists of all the information that describes your book, including: your title, subtitle, series name, price, trim size, author name, book description, and more. There are two metadata fields for your book description: the long book description and the short book description. Although both play a role in driving traffic to your book, they have distinct differences.  Take IngramSpark's FREE Online Self-Publishing Course on Optimizing Book Metadata Whether reading the short or long description, both need to be full of what readers want: intrigue. It’s up to you to get readers interested in what you have to say, and while we know you could probably write pages upon pages explaining what your book is about, your space and reader attention span is limited. When creating book metadata, you want to make sure you provide the information needed to help buyers, including consumers, booksellers, and librarians, understand what they're about to purchase and whether they want to. Having the right information in place determines not only whether you attract the attention of your audience, but whether you attract the right audience. "
              bookLink={'#'}
              price={'$99'}
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Books;
