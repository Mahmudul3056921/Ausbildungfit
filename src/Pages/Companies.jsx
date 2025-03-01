import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import img1 from "../assets/Logos/img4.png";
import img2 from "../assets/Logos/img2.png";
import img3 from "../assets/Logos/img3.png";
import img4 from "../assets/Logos/img4.png";
import img5 from "../assets/Logos/img2.png";

const Companies = () => {
  return (
    <div className="flex justify-center items-center my-6">
      <Splide
        options={{
          type: "loop",
          perPage: 5,
          perMove: 1,
          gap: "1rem",
          drag: "free",
          focus: "center",
          arrows: false,
          pagination: false,
          autoScroll: {
            speed: 1, // Adjust speed for a slower scroll
          },
        }}
        extensions={{ AutoScroll }}
        aria-label="Company Logos"
      >
        <SplideSlide>
          <img
            className="h-16 w-16 object-contain"
            src={img1}
            alt="Company 1"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="h-16 w-16 object-contain"
            src={img2}
            alt="Company 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="h-16 w-16 object-contain"
            src={img3}
            alt="Company 3"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="h-16 w-16 object-contain"
            src={img4}
            alt="Company 4"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            className="h-16 w-16 object-contain"
            src={img5}
            alt="Company 5"
          />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Companies;
