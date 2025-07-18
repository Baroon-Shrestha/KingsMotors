import React from "react";

export default function HomeLocation() {
  const dealers = [
    {
      name: "AIT Thapathali",
      address: "Thapathali, Kathmandu Metropolitan City",
      phone: "01-4245361",
    },
    {
      name: "AIT Dhobighat",
      address: "Dhobighat, Lalitpur Metropolitan City",
      phone: "01-5188490",
    },
    {
      name: "Shree Mangalam Enterprises",
      address: "Ghantaghar, Birgunj Metropolitan City",
      phone: "051-522164",
    },
    {
      name: "Swargadwari Auto Distributors",
      address: "BP Chowk, Ghorahi Sub-Metropolitan City",
      phone: "082-560034",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:flex lg:space-x-8">
        {/* Dealer List */}
        <div className="lg:w-1/3 bg-white shadow-md rounded-xl p-6 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Locate Dealer
          </h2>

          {/* Search Box */}
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Search Dealer..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="bg-red-600 text-white px-4 py-2 rounded-r-lg hover:bg-red-700">
              🔍
            </button>
          </div>

          {/* Dealer Entries */}
          <div className="space-y-4">
            {dealers.map((dealer, index) => (
              <div
                key={index}
                className="border-b pb-4 hover:bg-gray-50 rounded-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-700">
                  {dealer.name}
                </h3>
                <p className="text-gray-500">{dealer.address}</p>
                <p className="text-gray-400">{dealer.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="lg:w-2/3 h-96 lg:h-auto rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Kings Motors Locations"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1131613459625!2d85.32396031506102!3d27.700769982792065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19071b4f8a69%3A0x18c3a9b2db9d2371!2sKings%20Motors!5e0!3m2!1sen!2snp!4v1625640000000!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
