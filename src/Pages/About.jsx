import React from "react";
import aboutpic from "../assets/About/aboutpic1.jpg";
import {
  FaGraduationCap,
  FaBriefcase,
  FaUserCheck,
  FaBookOpen,
  FaGlobe,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-6">
          আমাদের সম্পর্কে 🇩🇪
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          আমরা **বিশেষজ্ঞ মেন্টরদের পরিচালনায় একটি জার্মান ভিত্তিক শিক্ষা ও
          কর্মসংস্থানের প্ল্যাটফর্ম**। Ausbildung, ভাষা প্রশিক্ষণ, ভিসা সহায়তা
          এবং জার্মান কোম্পানিতে চাকরি নিশ্চিত করার জন্য আমরা সাহায্য করি।
        </p>
      </div>

      {/* FAQ Section */}
      <div className="mt-12">
        <h3 className="text-3xl font-bold text-black text-center mb-6">
          সাধারণ প্রশ্নসমূহ ❓
        </h3>
        <div className="max-w-2xl mx-auto">
          {[
            {
              question: "জার্মানিতে Ausbildung কী?",
              answer:
                "Ausbildung হল একটি প্রফেশনাল ট্রেনিং প্রোগ্রাম যেখানে শিক্ষার্থীরা শিখতে শিখতেই উপার্জন করতে পারেন।",
            },
            {
              question: "ভিসা প্রসেস কেমন?",
              answer:
                "আমরা সম্পূর্ণ ভিসা প্রক্রিয়া পরিচালনা করি, যাতে আপনার ভিসা আবেদন সফল হয়।",
            },
            {
              question: "কিভাবে ভর্তি হব?",
              answer:
                "প্রথমে আমাদের সাথে যোগাযোগ করুন, আমরা আপনার যোগ্যতা যাচাই করে ভর্তি প্রক্রিয়ার ব্যবস্থা করবো।",
            },
            {
              question: "Ausbildung শেষ হলে চাকরি পাওয়া যাবে?",
              answer:
                "হ্যাঁ, আমরা নিশ্চিত করি যে Ausbildung শেষ করার পরে চাকরির ব্যবস্থা হয়।",
            },
            {
              question: "প্রথম বছরে কত উপার্জন করা যাবে?",
              answer:
                "১ম বছরে আপনি গড়ে **1050 ইউরো** উপার্জন করতে পারেন। ২য় বছরে **1200 ইউরো** এবং ৩য় বছরে **1350 ইউরো**।",
            },
            {
              question: "জার্মানিতে আসার পর কি আমরা থাকার ব্যবস্থা পাব?",
              answer:
                "হ্যাঁ, আমরা **আপনার জন্য নিরাপদ আবাসনের ব্যবস্থা করি** যাতে আপনি উদ্বিগ্ন না থাকেন।",
            },
            {
              question:
                "আমি কি Ausbildung-এর পাশাপাশি Mini Job (450 ইউরো) করতে পারবো?",
              answer:
                "হ্যাঁ, Ausbildung চলাকালীন আপনি **Mini Job (450 ইউরো পর্যন্ত মাসিক উপার্জন)** করতে পারেন।",
            },
            {
              question: "আমরা কি শুধু Ausbildung-এর জন্যই সাহায্য করি?",
              answer:
                "না, আমরা Ausbildung ছাড়াও **বিশ্ববিদ্যালয়ে ভর্তি ও উচ্চশিক্ষার জন্যও সহায়তা করি**।",
            },
          ].map((faq, index) => (
            <details
              key={index}
              className="mb-4 bg-gray-100 p-4 rounded-lg shadow-md"
            >
              <summary className="text-lg font-bold cursor-pointer">
                {faq.question}
              </summary>
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            </details>
          ))}
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

export default About;
