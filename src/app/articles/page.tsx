import ArticleCard from "@/components/Articles/ArticleCard";

const Articles = () => {
  return (
    <>
      <main className="h-fit bg-[#e0ebfe] pb-24">
        <h1 className="relative mb-10  p-5 pb-2 text-center font-['Cardo'] text-6xl font-light leading-[55px] text-[#1B3764]">
          Articles
          <span className="absolute bottom-0 left-1/2 h-1 w-1/3 -translate-x-1/2  bg-yellow-500"></span>
        </h1>

        <div className="mx-auto  flex  w-11/12 flex-wrap justify-center gap-6">
          <ArticleCard
            image="https://picsum.photos/410/326"
            title={"How to make a good first impression"}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, vitae, quisque mauris, sit. "
            articleLink={"#"}
          />
          <ArticleCard
            image="https://picsum.photos/410/326"
            title={"How to make a good first impression"}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, vitae, quisque mauris, sit. "
            articleLink={"#"}
          />
          <ArticleCard
            image="https://picsum.photos/410/326"
            title={"How to make a good first impression"}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, vitae, quisque mauris, sit. "
            articleLink={"#"}
          />
          <ArticleCard
            image="https://picsum.photos/410/326"
            title={"How to make a good first impression"}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, vitae, quisque mauris, sit. "
            articleLink={"#"}
          />
        </div>
      </main>
    </>
  );
};

export default Articles;
