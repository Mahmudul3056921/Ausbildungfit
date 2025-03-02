import React from "react";
import {
  FaStar,
  FaUserCheck,
  FaBriefcase,
  FaCalendarCheck,
  FaMoneyBillWave,
} from "react-icons/fa";

const Chancenkarte = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-6">
          চ্যান্সেনকার্টে (Chancenkarte) 🇩🇪
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          **Chancenkarte হল একটি পয়েন্ট-ভিত্তিক জার্মান ওয়ার্ক অপশন**, যা
          **জার্মানিতে প্রবেশ এবং কাজের সুযোগ** দেয়। এটি **১ বছরের জন্য বৈধ**,
          এবং চাকরি খোঁজার সময় **সাপ্তাহিক ২০ ঘন্টা পার্ট-টাইম কাজের অনুমতি**
          দেয়।
        </p>
      </div>

      {/* Who Can Apply Section */}
      <div className="mt-12">
        <h3 className="text-3xl font-bold text-black text-center mb-6">
          কে আবেদন করতে পারবেন? 🤔
        </h3>
        <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-6">
          Chancenkarte-এর জন্য **কমপক্ষে ৬ পয়েন্ট প্রয়োজন**। আপনার শিক্ষাগত
          যোগ্যতা, কাজের অভিজ্ঞতা, ভাষা দক্ষতা এবং বয়সের উপর ভিত্তি করে পয়েন্ট
          নির্ধারণ করা হয়।
        </p>

        {/* Points System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: <FaUserCheck size={50} />,
              title: "শিক্ষাগত যোগ্যতা",
              description: "**জার্মান স্বীকৃত ডিগ্রি থাকলে ৬ পয়েন্ট**।",
            },
            {
              icon: <FaBriefcase size={50} />,
              title: "অভিজ্ঞতা",
              description: "**৩+ বছরের কাজের অভিজ্ঞতা থাকলে ৩ পয়েন্ট**।",
            },
            {
              icon: <FaStar size={50} />,
              title: "ভাষা দক্ষতা",
              description: "**B1 লেভেল জার্মান জানা থাকলে ৩ পয়েন্ট**।",
            },
            {
              icon: <FaCalendarCheck size={50} />,
              title: "বয়স সীমা",
              description: "**৩৫ বছরের কম হলে ২ পয়েন্ট**।",
            },
            {
              icon: <FaMoneyBillWave size={50} />,
              title: "আর্থিক সামর্থ্য",
              description: "**১ বছর থাকা খরচ নিশ্চিত করতে পারলে ১ পয়েন্ট**।",
            },
          ].map((criteria, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-red-600 mb-4">{criteria.icon}</div>
              <h4 className="text-xl font-bold">{criteria.title}</h4>
              <p className="text-gray-700 mt-2">{criteria.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How We Help Section */}
      <div className="mt-12">
        <h3 className="text-3xl font-bold text-black text-center mb-6">
          আমরা কিভাবে সাহায্য করবো? 🤝
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: <FaUserCheck size={50} />,
              title: "পয়েন্ট যাচাই",
              description:
                "**আপনার পয়েন্ট গণনা করে আবেদনযোগ্যতা নিশ্চিত করি**।",
            },
            {
              icon: <FaBriefcase size={50} />,
              title: "ডকুমেন্ট প্রস্তুতি",
              description: "**সঠিকভাবে সমস্ত কাগজপত্র তৈরি করে দিই**।",
            },
            {
              icon: <FaMoneyBillWave size={50} />,
              title: "ভিসা আবেদন",
              description:
                "**জার্মান দূতাবাসে আবেদন প্রক্রিয়া পরিচালনা করি**।",
            },
          ].map((help, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-red-600 mb-4">{help.icon}</div>
              <h4 className="text-xl font-bold">{help.title}</h4>
              <p className="text-gray-700 mt-2">{help.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Step-by-Step Process */}
      <div className="mt-12">
        <h3 className="text-3xl font-bold text-black text-center mb-6">
          📌 আবেদন করার ধাপসমূহ
        </h3>
        <div className="relative">
          <div className="border-l-4 border-red-600 absolute h-full left-8"></div>
          <div className="space-y-8 pl-16">
            {[
              {
                step: "✅ ১ম ধাপ: পয়েন্ট যাচাই",
                description: "আমাদের মাধ্যমে আপনার পয়েন্ট গণনা করুন।",
              },
              {
                step: "✅ ২য় ধাপ: ডকুমেন্টস প্রস্তুতি",
                description: "আবেদনের জন্য সমস্ত কাগজপত্র প্রস্তুত করুন।",
              },
              {
                step: "✅ ৩য় ধাপ: ভিসা আবেদন",
                description: "জার্মান দূতাবাসে ভিসার আবেদন জমা দিন।",
              },
              {
                step: "✅ ৪র্থ ধাপ: জার্মানিতে আগমন",
                description: "সফল হলে জার্মানিতে এসে চাকরি খুঁজুন।",
              },
              {
                step: "✅ ৫ম ধাপ: স্থায়ী কাজ",
                description:
                  "চাকরি পাওয়ার পর **ওয়ার্ক পারমিটের জন্য আবেদন করুন**।",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute left-0 top-1 w-6 h-6 bg-red-600 rounded-full"></div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-red-600">
                    {item.step}
                  </h4>
                  <p className="text-gray-700 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
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

export default Chancenkarte;
