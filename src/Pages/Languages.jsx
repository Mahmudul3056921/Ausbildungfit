import React from "react";

const Languages = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-6">
          আমাদের ভাষা প্রশিক্ষণ 🇩🇪
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          আমরা জার্মান ভাষার **A1, A2, B1, B2** লেভেলের প্রশিক্ষণ দিচ্ছি বিশেষ
          ছাড়ে! **এখনই ভর্তি হন** এবং জার্মানিতে ক্যারিয়ার গড়ার প্রথম ধাপ নিন।
        </p>
      </div>

      {/* Language Training Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
        {[
          {
            level: " A1 কোর্স",
            price: "৳১০,০০০",
            oldPrice: "৳১২,০০০",
            duration: "1 মাস",
            classes: "12",
            live: "সপ্তাহে 3 দিন",
          },
          {
            level: " A2 কোর্স",
            price: "৳১০,০০০",
            oldPrice: "৳১২,০০০",
            duration: "1 মাস",
            classes: "12",
            live: "সপ্তাহে 3 দিন",
          },
          {
            level: " B1 কোর্স",
            price: "৳১৫,০০০",
            oldPrice: "৳১৮,০০০",
            duration: "2 মাস",
            classes: "16",
            live: "সপ্তাহে 3 দিন",
          },
          {
            level: " B2 কোর্স",
            price: "৳১৫,০০০",
            oldPrice: "৳১৮,০০০",
            duration: "2 মাস",
            classes: "16",
            live: "সপ্তাহে 3 দিন",
          },
        ].map((course, index) => (
          <div
            key={index}
            className={`card shadow-xl p-6 ${
              index % 2 === 0
                ? "bg-yellow-500 text-black"
                : "bg-red-600 text-white"
            }`}
          >
            <h3 className="text-2xl font-bold">{course.level}</h3>
            <p className="mt-2">
              জার্মান ভাষার দক্ষতা অর্জনের জন্য উপযুক্ত কোর্স
            </p>
            <ul className="mt-3 list-disc list-inside text-sm">
              <li>📆 **মোট ক্লাস:** {course.classes}</li>
              <li>⏳ **সময়কাল:** {course.duration}</li>
              <li>🎥 **লাইভ ক্লাস:** {course.live}</li>
              <li>📚 **পরীক্ষার প্রস্তুতি সেশন**</li>
            </ul>
            <p className="mt-2 text-gray-300 text-lg font-bold line-through">
              {course.oldPrice}
            </p>
            <p className="text-2xl font-bold">{course.price}</p>
            <div className="mt-4 text-center">
              <button className="btn bg-black text-yellow-500 border-2 border-yellow-400 hover:bg-red-600 hover:text-white">
                ভর্তি হন
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
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
  );
};

export default Languages;
