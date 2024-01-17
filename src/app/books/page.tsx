import Book from '@/components/Books/Book';
import HeroBook from '@/components/Books/HeroBook';

const Books = () => {
  return (
    <>
      <main className="h-fit  pb-24">
        <h1 className="relative mb-10  p-5 pb-2 text-center font-['Cardo'] text-4xl font-light leading-[55px] text-[#014444]">
          BOOKS
          <span className="absolute bottom-0 left-1/2 h-1 w-[4%] -translate-x-1/2  bg-yellow-500"></span>
          {/* <hr className="" /> */}
        </h1>

        <hr className="border-t-2 " />
        <section className="flex flex-col justify-between gap-20">
          <div className="mx-auto flex w-8/12 flex-col flex-wrap items-center justify-start  gap-6 md:w-3/5 md:flex-row">
            <h1 className="p-5 pb-2 pl-1 text-center font-['Cardo'] text-4xl font-light leading-[55px] text-[#1B3764]">
              Latest Book
            </h1>
            <HeroBook
              image="https://m.media-amazon.com/images/I/71VwdUci1BL._SY522_.jpg"
              title={'The Monk Who Sold His Ferrari'}
              description="There are several things to consider in order to help your book achieve its greatest potential discoverability. Readers, librarians, and retailers can't purchase a book they can't find, and your book metadata is responsible for whether or not your book pops up when they type in search terms relevant to your book. Book metadata may sound complicated, but it consists of all the information that describes your book, including: your title, subtitle, series name, price, trim size, author name, book description, and more. There are two metadata fields for your book description: the long book description and the short book description. Although both play a role in driving traffic to your book, they have distinct differences.  Take IngramSpark's FREE Online Self-Publishing Course on Optimizing Book Metadata Whether reading the short or long description, both need to be full of what readers want: intrigue. It’s up to you to get readers interested in what you have to say, and while we know you could probably write pages upon pages explaining what your book is about, your space and reader attention span is limited. When creating book metadata, you want to make sure you provide the information needed to help buyers, including consumers, booksellers, and librarians, understand what they're about to purchase and whether they want to. Having the right information in place determines not only whether you attract the attention of your audience, but whether you attract the right audience. "
              bookLink={'#'}
              price={'$99'}
            />
          </div>
          <hr className="border-t-2" />
          <div className="mx-auto flex w-[90%] flex-col flex-wrap  items-center justify-center gap-6 md:flex-row">
            <Book
              image="https://m.media-amazon.com/images/I/71VwdUci1BL._SY522_.jpg"
              title={'The Monk Who Sold His Ferrari'}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, vitae, quisque mauris, sit. "
              bookLink={'#'}
              price={'$99'}
            />
            <Book
              image="https://picsum.photos/292/396"
              title={'Atmoic Ones'}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, vitae, quisque mauris, sit. "
              bookLink={'#'}
              price={'$99'}
            />
            <Book
              image="https://picsum.photos/292/396"
              title={'Atmoic Ones'}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, vitae, quisque mauris, sit. "
              bookLink={'#'}
              price={'$99'}
            />
            <Book
              image="https://picsum.photos/292/396"
              title={'Atmoic Ones'}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, vitae, quisque mauris, sit. "
              bookLink={'#'}
              price={'$99'}
            />
            <Book
              image="https://picsum.photos/292/396"
              title={'Atmoic Ones'}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, vitae, quisque mauris, sit. "
              bookLink={'#'}
              price={'$99'}
            />
            <Book
              image="https://picsum.photos/292/396"
              title={'Atmoic Ones'}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, vitae, quisque mauris, sit. "
              bookLink={'#'}
              price={'$99'}
            />
            <Book
              image="https://picsum.photos/292/396"
              title={'Atmoic Ones'}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, vitae, quisque mauris, sit. "
              bookLink={'#'}
              price={'$99'}
            />
            <Book
              image="https://picsum.photos/292/396"
              title={'Atmoic Ones'}
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, vitae, quisque mauris, sit. "
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
