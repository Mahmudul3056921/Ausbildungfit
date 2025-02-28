import React from "react";
import Banner from "../Home/Banner";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-white text-black">
      {/* Hero Banner Section */}
      <section className="w-full">
        <Banner />
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-red-600 mb-6">
            আমাদের সেবাসমূহ 🇩🇪
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            আমরা আপনাকে জার্মান ভাষা শেখানো থেকে শুরু করে চাকরি, আবাসন এবং
            পরামর্শদানের মাধ্যমে **জার্মানিতে স্থায়ী হতে সাহায্য করি**।
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div className="card bg-yellow-500 text-black shadow-xl p-6">
            <h3 className="text-2xl font-bold">📚 জার্মান ভাষা প্রশিক্ষণ</h3>
            <p className="mt-2">
              A1, A2, B1, B2 লেভেল পর্যন্ত **সেরা প্রশিক্ষকদের মাধ্যমে জার্মান
              ভাষা শেখা**।
            </p>
          </div>

          <div className="card bg-red-600 text-white shadow-xl p-6">
            <h3 className="text-2xl font-bold">💼 চাকরির সুযোগ</h3>
            <p className="mt-2">
              আমাদের রিক্রুটারদের মাধ্যমে **জার্মানিতে নিশ্চিত চাকরির
              ব্যবস্থা**।
            </p>
          </div>

          <div className="card bg-black text-yellow-500 shadow-xl p-6">
            <h3 className="text-2xl font-bold">🏠 বাসস্থানের ব্যবস্থা</h3>
            <p className="mt-2">
              **নিরাপদ ও সাশ্রয়ী আবাসনের ব্যবস্থা** করতে আমাদের বিশেষ সহায়তা।
            </p>
          </div>

          <div className="card bg-yellow-500 text-black shadow-xl p-6">
            <h3 className="text-2xl font-bold">📝 ভিসা পরামর্শ</h3>
            <p className="mt-2">
              **ভিসা আবেদন ও প্রসেসিং** নিয়ে সঠিক নির্দেশনা ও পরামর্শ।
            </p>
          </div>

          <div className="card bg-red-600 text-white shadow-xl p-6">
            <h3 className="text-2xl font-bold">🎯 ক্যারিয়ার পরামর্শ</h3>
            <p className="mt-2">
              জার্মানিতে **উচ্চশিক্ষা ও ক্যারিয়ারের পরিকল্পনা** নিয়ে পেশাদার
              গাইডলাইন।
            </p>
          </div>

          <div className="card bg-black text-yellow-500 shadow-xl p-6">
            <h3 className="text-2xl font-bold">🤝 ব্যক্তিগত সহায়তা</h3>
            <p className="mt-2">
              **আপনার নির্দিষ্ট চাহিদা অনুযায়ী সম্পূর্ণ সহায়তা প্রদান**।
            </p>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://outlook.office365.com/book/AusbildungfitConsultation@learnnow.today/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn bg-red-600 text-yellow-500 border-2 border-yellow-400 btn-lg hover:bg-black hover:text-yellow-400">
              📩 এখনই যোগাযোগ করুন
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
