import mobileMilkbottle from "../images/mobile/image-gallery-milkbottles.jpg";
import desktopMilkbottle from "../images/desktop/image-gallery-milkbottles.jpg";
import mobileOrange from "../images/mobile/image-gallery-orange.jpg";
import desktopOrange from "../images/desktop/image-gallery-orange.jpg";
import mobileCone from "../images/mobile/image-gallery-cone.jpg";
import desktopCone from "../images/desktop/image-gallery-cone.jpg";
import mobileSugarcube from "../images/mobile/image-gallery-sugar-cubes.jpg";
import desktopSugarcube from "../images/desktop/image-gallery-sugarcubes.jpg";

const Gallery = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="grid grid-cols-2">
            <img
              src={mobileMilkbottle}
              alt="This is a milk bottle"
              className="lg:hidden block w-full"
            />
            <img
              src={desktopMilkbottle}
              alt="This is a milk bottle"
              className="hidden lg:block w-full"
            />
            <div className="">
              <img
                src={mobileOrange}
                alt="This is an orange"
                className="lg:hidden block w-full"
              />
              <img
                src={desktopOrange}
                alt="This is an orange"
                className="hidden lg:block w-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <img
              src={mobileCone}
              alt="This is an ice cream cone"
              className="lg:hidden block w-full"
            />
            <img
              src={desktopCone}
              alt="This is an ice cream cone"
              className="hidden lg:block w-full"
            />
            <div>
              <img
                src={mobileSugarcube}
                alt="This is a sugar cube"
                className="lg:hidden block w-full"
              />
              <img
                src={desktopSugarcube}
                alt="This is an sugar cube"
                className="hidden lg:block w-full"
              />
            </div>
          </div>
      </div>
    </section>
  );
};

export default Gallery;
