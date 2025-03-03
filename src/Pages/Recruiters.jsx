import React from "react";
import CountUp from "react-countup";
import { useForm } from "react-hook-form";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Testimonials for Slider
const testimonials = [
  {
    name: "Company A",
    feedback: "We successfully hired skilled candidates through this platform.",
  },
  {
    name: "Company B",
    feedback: "Efficient hiring process with well-trained applicants.",
  },
  {
    name: "Company C",
    feedback: "Highly recommended for recruiting top talent from Bangladesh!",
  },
];

// Slick Slider Settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

// Job Posting Form
const Recruiters = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    alert(
      `Job Posted Successfully!\nPosition: ${data.position}\nCompany: ${data.company}`
    );
    reset();
  };

  return (
    <section className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-6">
          Recruit Skilled Candidates 🇩🇪
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We connect **highly skilled, German-trained professionals** with top
          recruiters in Germany. **Join us and find your next best hire!**
        </p>
      </div>

      {/* Live Stats Section with Animated Counters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center mt-12">
        {[
          { title: "Successful Hires", count: 500, suffix: "+", duration: 3 },
          { title: "Partner Companies", count: 50, suffix: "+", duration: 3 },
          { title: "Job Placement Rate", count: 95, suffix: "%", duration: 3 },
        ].map((stat, index) => (
          <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-4xl font-bold text-red-600">
              <CountUp
                start={0}
                end={stat.count}
                duration={stat.duration}
                suffix={stat.suffix}
              />
            </h3>
            <p className="text-gray-700">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Job Posting Section */}
      <div className="mt-12">
        <h3 className="text-3xl font-bold text-black text-center mb-6">
          Post a Job 🏢
        </h3>
        <div className="max-w-2xl mx-auto bg-white shadow-lg p-6 rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Company Name
              </label>
              <input
                {...register("company")}
                required
                className="input input-bordered w-full"
                placeholder="Company XYZ"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Job Position
              </label>
              <input
                {...register("position")}
                required
                className="input input-bordered w-full"
                placeholder="Software Engineer"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Job Description
              </label>
              <textarea
                {...register("description")}
                required
                className="textarea textarea-bordered w-full"
                placeholder="Enter job details"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn bg-red-600 text-yellow-500 border-2 border-yellow-400 btn-lg hover:bg-black hover:text-yellow-400 transition duration-300"
            >
              📩 Submit Job
            </button>
          </form>
        </div>
      </div>

      {/* Testimonials Section */}
      {/* <div className="mt-12">
        <h3 className="text-3xl font-bold text-black text-center mb-6">
          What Our Recruiters Say 💼
        </h3>
        <div className="max-w-3xl mx-auto">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-md text-center"
              >
                <p className="text-lg text-gray-700">
                  "{testimonial.feedback}"
                </p>
                <h4 className="text-xl font-bold text-red-600 mt-4">
                  {testimonial.name}
                </h4>
              </div>
            ))}
          </Slider>
        </div>
      </div> */}

      {/* Call to Action */}
      <div className="flex justify-center mt-12">
        <a
          href="https://outlook.office365.com/book/AusbildungfitConsultation@learnnow.today/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn bg-red-600 text-yellow-500 border-2 border-yellow-400 btn-lg hover:bg-black hover:text-yellow-400 transition duration-300">
            📩 Partner with Us
          </button>
        </a>
      </div>
    </section>
  );
};

export default Recruiters;
