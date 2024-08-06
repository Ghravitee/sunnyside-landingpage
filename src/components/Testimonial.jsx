import emily from "../images/image-emily.jpg";
import thomas from "../images/image-thomas.jpg";
import jennie from "../images/image-jennie.jpg";

const Testimonial = () => {
  return (
    <section className="bg-white xl:py-32 xl:px-40 px-4 py-10">
      <h3 className="uppercase text-Grayish-Blue fraunces-900 text-center mb-12 tracking-widest text-base lg:text-xl">
        Client Testimonials
      </h3>

      <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-10 items-center justify-center">
            <img
              src={emily}
              alt="this is an avatar of someone named emily"
              className="w-[20%] rounded-full"
            />
            <p className="text-Very-Dark-Grayish-Blue barlow-semibold text-center text-lg">
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <div className="flex flex-col items-center gap-2">
              <h4 className="fraunces-900 text-black text-lg">Emily R.</h4>
              <p className="text-Grayish-Blue barlow-semibold">
                Marketing Director
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-center justify-center">
            <img
              src={thomas}
              alt="this is an avatar of someone named thomas"
              className="w-[20%] rounded-full"
            />
            <p className="text-Very-Dark-Grayish-Blue barlow-semibold text-center text-lg">
              Sunnyside’s enthusiasm coupled with their keen interest in our brand’s
              success made it a satisfying and enjoyable experience.
            </p>
            <div className="flex flex-col items-center gap-2">
              <h4 className="fraunces-900 text-black text-lg">Thomas S.</h4>
              <p className="text-Grayish-Blue barlow-semibold">
                Chief Operating Officer{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-center justify-center">
            <img
              src={jennie}
              alt="this is an avatar of someone named jennie"
              className="w-[20%] rounded-full"
            />
            <p className="text-Very-Dark-Grayish-Blue barlow-semibold text-center text-lg">
              Incredible end result! Our sales increased over 400% when we worked
              with Sunnyside. Highly recommended!
            </p>
            <div className="flex flex-col items-center gap-2">
              <h4 className="fraunces-900 text-black text-lg">Jennie F. </h4>
              <p className="text-Grayish-Blue barlow-semibold">Business Owner</p>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Testimonial;
