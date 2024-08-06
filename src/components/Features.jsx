import mobileTransform from "../images/mobile/image-transform.jpg";
import desktopTransform from "../images/desktop/image-transform.jpg";
import mobileStandout from "../images/mobile/image-stand-out.jpg";
import desktopStandout from "../images/desktop/image-stand-out.jpg";

const Features = () => {
  return (
    <section>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2">
        <div className="bg-white flex justify-center items-center lg:px-40 px-6 py-16 sm:py-10 md:py-12">
          <div className="flex flex-col lg:items-start items-center gap-10">
            <h2 className="fraunces-900 text-[1.8rem] max-w-[20rem] text-center lg:text-left lg:text-5xl lg:max-w-[25rem]">
              Transform your brand
            </h2>
            <p className="barlow-semibold text-base sm:max-w-[25rem] text-Dark-Grayish-Blue lg:text-[1.1rem] text-center lg:text-left">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <div className="group/item relative">
              <a
                href="#"
                className="absolute text-black uppercase fraunces-900 mt-auto z-50"
              >
                Learn more
                </a>
               <div className=" invisible group-hover/item:visible -z-50 bg-Yellow w-[7.8rem] mx-auto h-2 rounded-full translate-y-[14px]"/>
             
            </div>
          </div>
        </div>
        <img src={mobileTransform} alt="" className="lg:hidden block" />
        <img
          src={desktopTransform}
          alt=""
          className="hidden lg:block w-full"
        />
      </div>
      <div className="flex flex-col lg:flex-row">
        <img src={mobileStandout} alt="" className="lg:hidden block" />
        <img
          src={desktopStandout}
          alt=""
          className="hidden lg:block w-[50%]"
        />
        <div className="bg-white flex justify-center items-center lg:px-40 px-6 py-16 w-full lg:w-[50%]">
          <div className="flex flex-col lg:items-start items-center gap-10">
            <h2 className="fraunces-900 text-[1.8rem] max-w-[20rem] text-center lg:text-left lg:text-5xl lg:max-w-[25rem]">
              Stand out to the right audience
            </h2>
            <p className="barlow-semibold text-base sm:max-w-[25rem] text-Dark-Grayish-Blue lg:text-[1.1rem] text-center lg:text-left">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <div className="group/item relative">
              <a
                href="#"
                className="absolute text-black uppercase fraunces-900 mt-auto z-50"
              >
                Learn more
                </a>
               <div className=" invisible group-hover/item:visible -z-50 bg-Soft-Red w-[7.8rem] mx-auto h-2 rounded-full translate-y-[14px]"/>
             
            </div>
          </div>
            
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-graphic-design-mobile-background lg:bg-graphic-design-desktop-background bg-cover sm:bg-top bg-no-repeat flex items-end justify-center pt-[22rem] pb-[3rem] sm:pt-[35rem] lg:pt-[22rem]">
          <div className="flex flex-col items-center gap-10 px-4">
            <h2 className="fraunces-900 text-[1.8rem] max-w-[20rem] text-center text-Dark-Desaturated-Cyan">
              Graphic Design
            </h2>
            <p className="barlow-semibold text-base text-Dark-Desaturated-Cyan text-center lg:max-w-[22rem]">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>

        <div className="bg-photography-mobile-background lg:bg-photography-desktop-background bg-cover bg-no-repeat flex items-end justify-center pt-[22rem] pb-[3rem] sm:pt-[35rem] lg:pt-[22rem]">
          <div className="flex flex-col items-center gap-10 px-4">
            <h2 className="fraunces-900 text-[1.8rem] max-w-[20rem] text-center text-Dark-Blue">
              Photography
            </h2>
            <p className="barlow-semibold text-base text-Dark-Blue text-center lg:max-w-[22rem]">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
