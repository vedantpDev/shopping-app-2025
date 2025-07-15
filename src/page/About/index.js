import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-white text-gray-800 px-6 py-12 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
        <p className="text-center text-lg mb-10">
          Welcome to <strong>ShopZone</strong>, your go-to online store for
          handpicked, high-quality products.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p>
              At ShopZone, our mission is to make your shopping experience
              smooth and enjoyable. We offer products that bring real value to
              your everyday life — from trendsetting fashion to smart gadgets
              and lifestyle accessories.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
            <p>
              Started in 2023, ShopZone began with a passion for quality and
              service. From a small team of two to a growing business serving
              thousands of happy customers, we are proud of our journey and more
              excited about what’s ahead.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Why Shop With Us?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>✅ Handpicked quality products</li>
            <li>🚚 Fast & reliable shipping</li>
            <li>🔐 Secure checkout experience</li>
            <li>💬 Responsive customer support</li>
            <li>🔁 Hassle-free returns</li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4">Got a question or feedback?</p>
          <Link
            to="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-6 rounded"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
