import React from "react";

const Steps = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-20"
      style={{
        backgroundImage:
          "url('https://images.alphacoders.com/798/thumb-1920-798022.jpg')",
      }}
    >
      <div className="container mx-auto px-6 bg-black bg-opacity-70 rounded-lg py-12 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-yellow-500 mb-6">
            আমাদের সাথে জার্মানিতে যাওয়ার ধাপসমূহ 🇩🇪
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            সহজ এবং পেশাদার পদক্ষেপ অনুসরণ করে **আপনার ক্যারিয়ার গড়ুন
            জার্মানিতে**। **প্রতিটি ধাপে আমরা আপনার পাশে আছি!**
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="mt-12 flex flex-col space-y-8">
          {/* Step 1 */}
          <div className="flex items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white font-bold">
              1
            </div>
            <div className="ml-6">
              <h3 className="text-2xl font-bold text-yellow-500">
                📂 আপনার ডকুমেন্ট যাচাই করুন
              </h3>
              <p className="text-gray-300 mt-2">
                আমাদের বিশেষজ্ঞদের মাধ্যমে আপনার **সঠিক যোগ্যতা ও কাগজপত্র
                পরীক্ষা করুন**।
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-black font-bold">
              2
            </div>
            <div className="ml-6">
              <h3 className="text-2xl font-bold text-red-500">
                📖 আমাদের থেকে জার্মান শিখুন
              </h3>
              <p className="text-gray-300 mt-2">
                **A1-B2 পর্যন্ত জার্মান ভাষার প্রশিক্ষণ নিন** এবং প্রস্তুতি নিন।
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-yellow-500 font-bold">
              3
            </div>
            <div className="ml-6">
              <h3 className="text-2xl font-bold text-yellow-500">
                🤝 রিক্রুটারদের সাথে বসুন
              </h3>
              <p className="text-gray-300 mt-2">
                **ভাষা পরীক্ষায় উত্তীর্ণ হওয়ার পর** আমরা আপনাকে **জার্মান
                নিয়োগদাতাদের সাথে সংযুক্ত করব**।
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white font-bold">
              4
            </div>
            <div className="ml-6">
              <h3 className="text-2xl font-bold text-yellow-500">
                📑 জার্মান দূতাবাসে ভিসা আবেদন
              </h3>
              <p className="text-gray-300 mt-2">
                আপনার সমস্ত **ভিসার কাগজপত্র প্রস্তুত করুন এবং আমাদের সহায়তায়
                জমা দিন**।
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-black font-bold">
              5
            </div>
            <div className="ml-6">
              <h3 className="text-2xl font-bold text-red-500">
                🎉 জার্মানিতে স্বাগতম!
              </h3>
              <p className="text-gray-300 mt-2">
                **আপনার স্বপ্নপূরণ হল!** এখন জার্মানিতে কাজ এবং ক্যারিয়ার গড়ার
                যাত্রা শুরু করুন!
              </p>
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
      </div>
    </section>
  );
};

export default Steps;
