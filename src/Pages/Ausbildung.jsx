import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// YouTube Video Embed Component
const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className="relative w-full pb-[56.25%] h-0">
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Ausbildung Explained"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

// Carousel Responsive Settings
const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  tablet: { breakpoint: { max: 768, min: 640 }, items: 1 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

// List of Ausbildung Programs
const ausbildungPrograms = [
  {
    title: "👨‍⚕️ নার্সিং (Nursing)",
    description: "হাসপাতালে কাজের সুযোগ, সহজ অনবোর্ডিং",
  },
  {
    title: "💻 আইটি স্পেশালিস্ট (IT Specialist)",
    description: "সফটওয়্যার ডেভেলপমেন্ট ও সাইবার সিকিউরিটি",
  },
  {
    title: "🔧 অটোমোবাইল মেকানিক (Automobile Mechanic)",
    description: "গাড়ি ও ইঞ্জিন মেরামত শেখা",
  },
  {
    title: "🏨 হোটেল ম্যানেজমেন্ট (Hotel Management)",
    description: "আন্তর্জাতিক হোটেল ব্যবস্থাপনা ও গেস্ট সার্ভিস",
  },
  {
    title: "🏗️ ইলেক্ট্রিশিয়ান (Electrician)",
    description: "বিদ্যুৎ ও প্রযুক্তি সংক্রান্ত কাজ",
  },
];

const Ausbildung = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-6">
          জার্মানিতে Ausbildung 🇩🇪
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Ausbildung হল **প্রফেশনাল ট্রেনিং প্রোগ্রাম** যেখানে আপনি **শিখতে
          শিখতেই উপার্জন করবেন**। এটি **সরকার স্বীকৃত ট্রেনিং** যা শেষ করার পর
          **জার্মানিতে স্থায়ী চাকরি** পাওয়ার সুযোগ রয়েছে!
        </p>
      </div>

      {/* YouTube Video */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold text-black text-center mb-4">
          🎥 Ausbildung কীভাবে কাজ করে?
        </h3>
        <YouTubeEmbed videoId="dQw4w9WgXcQ" />
      </div>

      {/* Ausbildung We Offer */}
      <div className="mt-12">
        <h3 className="text-3xl font-bold text-black text-center mb-6">
          আমরা যে Ausbildung প্রোগ্রাম অফার করি
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ausbildungPrograms.map((program, index) => (
            <li
              key={index}
              className="card bg-white shadow-lg p-6 text-center hover:shadow-xl transition duration-300"
            >
              <h4 className="text-xl font-bold text-red-600">
                {program.title}
              </h4>
              <p className="text-gray-700 mt-2">{program.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Easy Onboarding Programs Carousel */}
      <div className="mt-12">
        <h3 className="text-3xl font-bold text-black text-center mb-6">
          📊 সহজ অনবোর্ডিং Ausbildung
        </h3>
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
        >
          {ausbildungPrograms.slice(0, 4).map((program, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 m-4 text-center rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <h4 className="text-xl font-bold text-red-600">
                {program.title}
              </h4>
              <p className="text-gray-700 mt-2">{program.description}</p>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Call to Action */}
      <div className="flex justify-center mt-12">
        <a
          href="https://outlook.office365.com/book/AusbildungfitConsultation@learnnow.today/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn bg-red-600 text-yellow-500 border-2 border-yellow-400 btn-lg hover:bg-black hover:text-yellow-400 transition duration-300">
            📩 এখনই যোগাযোগ করুন
          </button>
        </a>
      </div>
    </section>
  );
};

export default Ausbildung;
