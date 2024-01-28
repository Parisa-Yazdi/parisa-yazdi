import FooterItems from './FooterItems';
import Image from 'next/image';
import { SocialMediaIcons } from '../social-media-icons';
import { BlackSocialMediaIcons } from '../black-social-media-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="w-full overflow-hidden bg-[#014444] p-8 text-white">
        <div className="mx-auto mt-8 items-center justify-center ">
          <div className="flex items-center justify-evenly">
            <div className="mb-4 flex w-full flex-col-reverse justify-start gap-12 pb-5 lg:flex-row ">
              <div className="flex w-8/12  flex-col justify-evenly  lg:flex-row">
                <FooterItems
                  FooterItemName="Expolre"
                  FooterItems={['Home', 'About', 'Articles', 'Art', 'Contact']}
                />
                <FooterItems
                  FooterItemName="Connect"
                  FooterItems={['Home', 'About', 'Articles', 'Art', 'Contact']}
                />
                <FooterItems
                  FooterItemName="Free Resources"
                  FooterItems={['Home', 'About', 'Articles', 'Art', 'Contact']}
                />
                <FooterItems
                  FooterItemName="Newsletter"
                  FooterItems={['Home', 'About', 'Articles', 'Art', 'Contact']}
                />
              </div>
              <hr />
              <div className=" flex flex-col  items-center justify-start">
                <h2 className="mb-8 items-center font-['Cardo'] text-2xl font-medium text-white">
                  Find Parisa elsewhere
                </h2>
                <BlackSocialMediaIcons />
              </div>
            </div>
          </div>
          <div className="border-t border-white pt-8 text-center">
            <p className="text-sm">© {currentYear} Parisa Yazdi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
