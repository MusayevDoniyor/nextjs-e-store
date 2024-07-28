import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto px-8 py-8">
      <h1 className="text-4xl font-bold mb-4 text-slate-800">
        Welcome to E-STORE
      </h1>
      <p className="text-lg mb-8 text-slate-600">
        Discover the Best Deals on Top Products
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-slate-800">
          Our Top Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-slate-100 p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer">
            <img
              src="/electronics.jpg"
              alt="Electronics"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-slate-800">
              Electronics
            </h3>
            <p className="text-slate-600">
              Stay ahead with the latest in technology. From smartphones and
              laptops to home appliances, explore our wide selection of
              electronics designed to enhance your life.
            </p>
          </div>

          <div className="bg-slate-100 p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer">
            <img
              src="/fashion.jpg"
              alt="Fashion"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-slate-800">
              Fashion
            </h3>
            <p className="text-slate-600">
              Refresh your wardrobe with our trendy and affordable clothing
              options. Find styles for every season and occasion.
            </p>
          </div>

          <div className="bg-slate-100 p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer">
            <img
              src="/home-kitchen.jpg"
              alt="Home & Kitchen"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-slate-800">
              Home & Kitchen
            </h3>
            <p className="text-slate-600">
              Upgrade your living space with our curated collection of home and
              kitchen products. Discover everything from furniture to kitchen
              gadgets.
            </p>
          </div>

          <div className="bg-slate-100 p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105 cursor-pointer">
            <img
              src="/health-beauty.jpg"
              alt="Beauty & Health"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-slate-800">
              Beauty & Health
            </h3>
            <p className="text-slate-600">
              Pamper yourself with our range of beauty and health products. From
              skincare to supplements, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-slate-800">
          Why Shop with Us?
        </h2>
        <ul className="list-disc pl-5 text-slate-600 space-y-2">
          <li>
            <span className="font-semibold text-slate-800">
              Unbeatable Prices:
            </span>{" "}
            We work hard to ensure you get the best deals on the market.
          </li>
          <li>
            <span className="font-semibold text-slate-800">
              High-Quality Products:
            </span>{" "}
            We source our products from trusted brands to guarantee quality and
            reliability.
          </li>
          <li>
            <span className="font-semibold text-slate-800">
              Customer Satisfaction:
            </span>{" "}
            Your satisfaction is our priority. We offer a hassle-free return
            policy and 24/7 customer support.
          </li>
          <li>
            <span className="font-semibold text-slate-800">
              Fast and Secure Shipping:
            </span>{" "}
            Enjoy fast and reliable shipping to your doorstep. We ensure your
            orders are delivered safely and on time.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-slate-800">
          Join Our Community
        </h2>
        <p className="mb-6 text-slate-600">
          Sign up for our newsletter and be the first to know about exclusive
          deals, new arrivals, and special promotions. Follow us on social media
          for daily updates and inspiration.
        </p>
      </section>

      <p className="text-center text-lg font-semibold text-slate-800">
        Shop with Confidence at E-STORE - Your One-Stop Shop for All Your Needs!
      </p>
    </div>
  );
};

export default Home;
