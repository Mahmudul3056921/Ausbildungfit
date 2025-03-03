import React from "react";

const Contactus = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      {/* Page Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-6">
          যোগাযোগ করুন 📞
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          আমাদের সাথে সরাসরি যোগাযোগ করুন আপনার যেকোনো প্রশ্ন বা তথ্যের জন্য।
        </p>
      </div>

      {/* Contact Information Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Contact Form */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-black mb-4">
            📩 আমাদেরকে মেসেজ করুন
          </h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                আপনার নাম
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="আপনার নাম লিখুন"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                আপনার ইমেইল
              </label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="আপনার ইমেইল লিখুন"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                আপনার বার্তা
              </label>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="আপনার প্রশ্ন বা মন্তব্য লিখুন"
                required
              ></textarea>
            </div>
            <button className="btn bg-red-600 text-yellow-500 border-2 border-yellow-400 w-full hover:bg-black hover:text-yellow-400">
              ✉️ মেসেজ পাঠান
            </button>
          </form>
        </div>

        {/* Contact Details & Map */}
        <div className="bg-gray-100 shadow-lg p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-black mb-4">
            📍 আমাদের ঠিকানা
          </h3>
          <p className="text-gray-700 mb-3">
            📍 **অফিস:** AusbildungFit, Reinickendorf Provinzstr. 115 13409
            Berlin, Germany
          </p>
          <p className="text-gray-700 mb-3">📞 **ফোন:** +49 15151823782</p>
          <p className="text-gray-700 mb-3">
            📧 **ইমেইল:** info@ausbildungfit.com
          </p>
          <p className="text-gray-700 mb-3">
            ⏰ **সময়:** সোমবার - শুক্রবার, সকাল ৯টা - সন্ধ্যা ৬টা
          </p>

          {/* Google Map Embed */}
          <div className="mt-4">
            <iframe
              title="Google Maps"
              className="w-full h-52 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.847589326864!2d13.37833341531692!3d52.51343067981315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c8d5a7d3ff%3A0xa0e4f13f2442a14a!2sBerlin!5e0!3m2!1sen!2sde!4v1634235076557!5m2!1sen!2sde"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="flex justify-center mt-12">
        <a
          href="https://outlook.office365.com/book/AusbildungfitConsultation@learnnow.today/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn bg-red-600 text-yellow-500 border-2 border-yellow-400 btn-lg hover:bg-black hover:text-yellow-400 transition duration-300">
            📅 এখনই অ্যাপয়েন্টমেন্ট নিন
          </button>
        </a>
      </div>
    </section>
  );
};

export default Contactus;
