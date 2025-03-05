import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import bannerImg1 from "../assets/home/banner1.png";
import bannerImg2 from "../assets/home/Banner2.png";
import bannerImg3 from "../assets/home/banner3.png";
import bannerImg4 from "../assets/home/banner1.png";

const Banner = () => {
  return (
    <Carousel
      autoPlay={true} // ✅ AutoPlay Enabled
      interval={5000} // ✅ Slides every 5 seconds
      infiniteLoop={true} // ✅ Keeps looping forever
      showThumbs={false}
      showStatus={false}
      stopOnHover={false} // ✅ Keeps playing even if user hovers
      swipeable={true} // ✅ Allows swiping on mobile
    >
      <div>
        <img src={bannerImg1} alt="Banner 1" />
      </div>
      <div>
        <img src={bannerImg2} alt="Banner 2" />
      </div>
      <div>
        <img src={bannerImg3} alt="Banner 3" />
      </div>
      <div>
        <img src={bannerImg4} alt="Banner 4" />
      </div>
    </Carousel>
  );
};

export default Banner;
