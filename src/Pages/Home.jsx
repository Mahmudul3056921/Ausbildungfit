import React from "react";
import Banner from "../Home/Banner";
import Services from "./Services";
import Companies from "./Companies";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-white text-black">
      {/* Hero Banner Section */}
      <section className="w-full">
        <Banner />
      </section>
      <Services></Services>
      <Companies></Companies>
    </div>
  );
};

export default Home;
