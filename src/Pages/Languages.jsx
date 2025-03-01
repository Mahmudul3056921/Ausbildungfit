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
        {/* A1 Course */}
        <div className="card bg-yellow-500 text-black shadow-xl p-6">
          <h3 className="text-2xl font-bold">🅰️ A1 কোর্স</h3>
          <p className="mt-2">প্রাথমিক জার্মান শেখার কোর্স</p>
          <ul className="mt-3 list-disc list-inside text-black text-sm">
            <li>📆 **মোট ক্লাস:** 30</li>
            <li>⏳ **সময়কাল:** 2 মাস</li>
            <li>🎥 **লাইভ ক্লাস:** সপ্তাহে 3 দিন</li>
            <li>📚 **পরীক্ষার প্রস্তুতি সেশন**</li>
          </ul>
          <p className="mt-2 text-red-600 text-lg font-bold line-through">
            ৳৭,০০০
          </p>
          <p className="text-2xl font-bold">৳৩,০০০</p>
          <div className="mt-4 text-center">
            <button className="btn bg-black text-yellow-500 border-2 border-yellow-400 hover:bg-red-600 hover:text-white">
              ভর্তি হন
            </button>
          </div>
        </div>

        {/* A2 Course */}
        <div className="card bg-red-600 text-white shadow-xl p-6">
          <h3 className="text-2xl font-bold">🅰️ A2 কোর্স</h3>
          <p className="mt-2">মৌলিক ভাষাগত দক্ষতা উন্নয়ন</p>
          <ul className="mt-3 list-disc list-inside text-white text-sm">
            <li>📆 **মোট ক্লাস:** 35</li>
            <li>⏳ **সময়কাল:** 3 মাস</li>
            <li>🎥 **লাইভ ক্লাস:** সপ্তাহে 3 দিন</li>
            <li>📚 **পরীক্ষার প্রস্তুতি সেশন**</li>
          </ul>
          <p className="mt-2 text-gray-300 text-lg font-bold line-through">
            ৳১২,০০০
          </p>
          <p className="text-2xl font-bold">৳১০,০০০</p>
          <div className="mt-4 text-center">
            <button className="btn bg-black text-yellow-500 border-2 border-yellow-400 hover:bg-yellow-500 hover:text-black">
              ভর্তি হন
            </button>
          </div>
        </div>

        {/* B1 Course */}
        <div className="card bg-black text-yellow-500 shadow-xl p-6">
          <h3 className="text-2xl font-bold">🅱️ B1 কোর্স</h3>
          <p className="mt-2">মধ্যম স্তরের যোগাযোগ দক্ষতা</p>
          <ul className="mt-3 list-disc list-inside text-yellow-500 text-sm">
            <li>📆 **মোট ক্লাস:** 40</li>
            <li>⏳ **সময়কাল:** 4 মাস</li>
            <li>🎥 **লাইভ ক্লাস:** সপ্তাহে 4 দিন</li>
            <li>📚 **পরীক্ষার প্রস্তুতি সেশন**</li>
          </ul>
          <p className="mt-2 text-gray-400 text-lg font-bold line-through">
            ৳১৫,০০০
          </p>
          <p className="text-2xl font-bold">৳১২,০০০</p>
          <div className="mt-4 text-center">
            <button className="btn bg-yellow-500 text-black border-2 border-black hover:bg-red-600 hover:text-white">
              ভর্তি হন
            </button>
          </div>
        </div>

        {/* B2 Course */}
        <div className="card bg-yellow-500 text-black shadow-xl p-6">
          <h3 className="text-2xl font-bold">🅱️ B2 কোর্স</h3>
          <p className="mt-2">উচ্চতর ভাষাগত দক্ষতা</p>
          <ul className="mt-3 list-disc list-inside text-black text-sm">
            <li>📆 **মোট ক্লাস:** 45</li>
            <li>⏳ **সময়কাল:** 5 মাস</li>
            <li>🎥 **লাইভ ক্লাস:** সপ্তাহে 5 দিন</li>
            <li>📚 **পরীক্ষার প্রস্তুতি সেশন**</li>
          </ul>
          <p className="mt-2 text-red-600 text-lg font-bold line-through">
            ৳১৮,০০০
          </p>
          <p className="text-2xl font-bold">৳১৫,০০০</p>
          <div className="mt-4 text-center">
            <button className="btn bg-black text-yellow-500 border-2 border-yellow-400 hover:bg-red-600 hover:text-white">
              ভর্তি হন
            </button>
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
          <button className="btn bg-red-600 text-yellow-500 border-2 border-yellow-400 btn-lg hover:bg-black hover:text-yellow-400">
            📩 এখনই যোগাযোগ করুন
          </button>
        </a>
      </div>
    </section>
  );
};

export default Languages;
