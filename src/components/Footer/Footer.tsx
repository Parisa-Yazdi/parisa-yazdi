import FooterItems from "./FooterItems";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="w-full overflow-hidden bg-[#1B3764] p-8 text-white">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full text-center md:w-1/2 md:text-right"></div>
        </div>
        <div className="mx-auto mt-8 items-center justify-center">
          <div className="mb-4 flex flex-col justify-end gap-24  pb-5 lg:flex-row ">
            <div>
              {/* social media icons */}
              <div className="inline-flex h-[55px] w-[250px] items-center justify-center  gap-2.5 lg:justify-start ">
                <div className="relative h-[55px] w-[55px]">
                  <div className="absolute left-0 top-0 h-[55px] w-[55px] border border-amber-300 " />
                  <div className="font-['Font Awesome 5 Brands'] absolute left-[25%] top-[25%] text-center text-lg font-normal uppercase leading-snug tracking-wide text-white">
                    <Image
                      src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-white-icon.png"
                      width={30}
                      height={30}
                      alt="social media icon"
                    />
                  </div>
                </div>

                <div className="relative h-[55px] w-[55px]">
                  <div className="absolute left-0 top-0 h-[55px] w-[55px] border border-amber-300 " />
                  <div className="font-['Font Awesome 5 Brands'] absolute left-[25%] top-[25%] text-center text-lg font-normal uppercase leading-snug tracking-wide text-white">
                    <Image
                      src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png"
                      width={30}
                      height={30}
                      alt="social media icon"
                    />
                  </div>
                </div>

                <div className="relative h-[55px] w-[55px]">
                  <div className="absolute left-0 top-0 h-[55px] w-[55px] border border-amber-300 " />
                  <div className="font-['Font Awesome 5 Brands'] absolute left-[25%] top-[25%] text-center text-lg font-normal uppercase leading-snug tracking-wide text-white">
                    <Image
                      src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png"
                      width={30}
                      height={30}
                      alt="social media icon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-8/12 flex-col justify-evenly lg:flex-row">
              <FooterItems
                FooterItemName="Expolre"
                FooterItems={["Home", "About", "Articles", "Art", "Contact"]}
              />
              <FooterItems
                FooterItemName="Connect"
                FooterItems={["Home", "About", "Articles", "Art", "Contact"]}
              />
              <FooterItems
                FooterItemName="Free Resources"
                FooterItems={["Home", "About", "Articles", "Art", "Contact"]}
              />
              <FooterItems
                FooterItemName="Newsletter"
                FooterItems={["Home", "About", "Articles", "Art", "Contact"]}
              />
            </div>
          </div>
          <div className="border-t border-white pt-8 text-center">
            <p className="text-sm">
              © 2024 Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
