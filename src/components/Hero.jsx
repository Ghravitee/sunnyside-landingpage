import iconArrowDown from "../images/icon-arrow-down.svg";

const Hero = () => {
  return (
    <section className="min-h-screen flex justify-center items-start pt-24">
      <div className="flex flex-col gap-10 lg:gap-20 justify-center items-center">
          <h1 className="uppercase fraunces-900 text-white text-4xl text-center lg:text-6xl tracking-[0.15em]">
            We are creatives
          </h1>
          <img
            src={iconArrowDown}
            alt="This arrow is on the hero section and it points downward"
          />
      </div>
    </section>
  );
};

export default Hero;
