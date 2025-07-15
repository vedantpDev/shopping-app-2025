import React from "react";
import Navbar from "../../components/Navbar";

const Services = () => {
  const services = [
    {
      title: "All Categories in One Place",
      icon: "🛍️",
      description:
        "Explore fashion, electronics, home, beauty, and more — all under one roof.",
    },
    {
      title: "Fast & Reliable Delivery",
      icon: "🚚",
      description:
        "We offer quick shipping with real-time tracking all over India.",
    },
    {
      title: "Easy Returns",
      icon: "🔄",
      description:
        "Changed your mind? Return items easily within 7 days, no questions asked.",
    },
    {
      title: "Secure Payments",
      icon: "🔐",
      description:
        "All payments are encrypted and 100% safe. We support UPI, Cards, Wallets, COD.",
    },
    {
      title: "24/7 Customer Support",
      icon: "💬",
      description:
        "Our support team is available anytime via chat or email to help you.",
    },
    {
      title: "Deals & Discounts",
      icon: "💰",
      description:
        "Get access to exclusive flash sales, coupons, and seasonal offers.",
    },
  ];
  return (
    <div>
      <Navbar />{" "}
      <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-center text-lg mb-10">
          At <strong>ShopZone</strong>, we go beyond just products — we deliver
          trust, speed, and satisfaction.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-6 hover:shadow-md transition"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-medium mb-4">
            Need help or have questions?
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-6 rounded"
          >
            Contact Our Support Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
