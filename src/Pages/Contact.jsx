import React from "react";

export default function Contact() {
  return (
    <div>
      {/* Hero Banner */}
      <section
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1400&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center">
            Get in Touch
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Contact Kings Motors
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We're here to help! Reach out for inquiries, test drives, or
              service requests.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Office */}
              <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4">
                <div className="text-black text-3xl"></div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    Head Office
                  </h3>
                  <p className="text-gray-600">
                    Kings Motors HQ <br />
                    Thapathali, Kathmandu, Nepal
                  </p>
                </div>
              </div>
              {/* Phone */}
              <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4">
                <div className="text-black text-3xl">📞</div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Phone</h3>
                  <p className="text-gray-600">
                    <a
                      href="tel:+977-01-4245361"
                      className="text-black hover:underline"
                    >
                      +977-01-4245361
                    </a>
                  </p>
                </div>
              </div>
              {/* Email */}
              <div className="bg-white p-6 rounded-xl shadow-lg flex items-start gap-4">
                <div className="text-black text-3xl">✉️</div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Email</h3>
                  <p className="text-gray-600">
                    <a
                      href="mailto:info@kingsmotors.com"
                      className="text-black hover:underline"
                    >
                      info@kingsmotors.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    placeholder=" "
                    className="peer w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-3 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-black transition-all"
                  >
                    Full Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    placeholder=" "
                    className="peer w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-black transition-all"
                  >
                    Email Address
                  </label>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    id="message"
                    placeholder=" "
                    rows="5"
                    className="peer w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-3 top-3 text-gray-500 text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs peer-focus:text-black transition-all"
                  >
                    Your Message
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:from-gray-900 hover:to-black hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Kings Motors Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1131613459625!2d85.32396031506102!3d27.700769982792065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19071b4f8a69%3A0x18c3a9b2db9d2371!2sKings%20Motors!5e0!3m2!1sen!2snp!4v1625640000000!5m2!1sen!2snp"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
