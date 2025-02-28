import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import bannerImg1 from "../assets/home/banner1.png";
import bannerImg2 from "../assets/home/banner1.png";
import bannerImg3 from "../assets/home/banner1.png";
import bannerImg4 from "../assets/home/banner1.png";

const Banner = () => {
  return (
    <Carousel
      autoPlay
      interval={5000}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
    >
      <div>
        <img src={bannerImg1} />
      </div>
      <div>
        <img src={bannerImg2} />
      </div>
      <div>
        <img src={bannerImg3} />
      </div>
      <div>
        <img src={bannerImg4} />
      </div>
    </Carousel>
  );
};

export default Banner;
