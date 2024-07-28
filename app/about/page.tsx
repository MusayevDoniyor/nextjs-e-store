import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-8 py-12">
      <h1 className="text-5xl font-extrabold mb-6 text-slate-800 text-center animate-fadeIn">
        About E-STORE
      </h1>
      <p className="text-lg mb-10 text-slate-600 text-center animate-fadeIn delay-1s">
        Learn More About Our Journey, Vision, and Values
      </p>

      <section className="mb-12 animate-fadeIn delay-2s">
        <h2 className="text-3xl font-semibold mb-6 text-slate-800">
          Our Story
        </h2>
        <p className="text-slate-600 mb-4">
          E-STORE began as a small idea with a simple goal: to provide an
          exceptional shopping experience that brings together quality, value,
          and convenience. Founded in [Year], we have grown from a local startup
          to a leading online retailer, serving customers across the globe.
        </p>
        <p className="text-slate-600 mb-4">
          Our journey has been fueled by a passion for innovation and a
          commitment to excellence. We continuously strive to enhance our
          offerings, ensuring that each customer finds exactly what they're
          looking for, whether it's the latest tech gadgets, fashionable
          apparel, or unique home decor.
        </p>
        <p className="text-slate-600 mb-4">
          From our humble beginnings, we've expanded our range of products and
          services, embracing new technologies and trends to better serve our
          customers. Our dedicated team works tirelessly to curate a diverse
          selection of high-quality products that meet the evolving needs of our
          clientele.
        </p>
      </section>

      <section className="mb-12 animate-fadeIn delay-3s">
        <h2 className="text-3xl font-semibold mb-6 text-slate-800">
          Our Vision
        </h2>
        <p className="text-slate-600 mb-4">
          At E-STORE, our vision is to create a shopping experience that is not
          only enjoyable but also transformative. We aim to be the go-to
          destination for consumers seeking the best products at unbeatable
          prices, with a seamless and personalized shopping journey.
        </p>
        <p className="text-slate-600 mb-4">
          We are committed to leveraging cutting-edge technology and data-driven
          insights to continually improve our services. Our goal is to make
          online shopping accessible, efficient, and enjoyable for everyone.
        </p>
        <p className="text-slate-600 mb-4">
          Our vision extends beyond just selling products; we strive to build a
          community where customers feel valued and connected. Through our
          innovative approach and customer-first mindset, we aim to make a
          positive impact in the lives of our customers.
        </p>
      </section>

      <section className="mb-12 animate-fadeIn delay-4s">
        <h2 className="text-3xl font-semibold mb-6 text-slate-800">
          Our Values
        </h2>
        <ul className="list-disc pl-5 text-slate-600 space-y-4">
          <li>
            <span className="font-semibold text-slate-800">
              Customer-Centric:
            </span>{" "}
            We put our customers first, ensuring their needs and preferences
            drive everything we do.
          </li>
          <li>
            <span className="font-semibold text-slate-800">Integrity:</span> We
            operate with transparency and honesty, building trust through every
            interaction.
          </li>
          <li>
            <span className="font-semibold text-slate-800">Innovation:</span> We
            embrace change and constantly seek new ways to improve our products
            and services.
          </li>
          <li>
            <span className="font-semibold text-slate-800">Quality:</span> We
            are dedicated to providing high-quality products and exceptional
            value to our customers.
          </li>
          <li>
            <span className="font-semibold text-slate-800">
              Sustainability:
            </span>{" "}
            We are committed to sustainable practices and reducing our
            environmental impact.
          </li>
          <li>
            <span className="font-semibold text-slate-800">Community:</span> We
            believe in giving back to the community and supporting various
            causes that make a positive difference.
          </li>
        </ul>
      </section>

      <section className="mb-12 animate-fadeIn delay-5s">
        <h2 className="text-3xl font-semibold mb-6 text-slate-800">
          Meet the Team
        </h2>
        <p className="text-slate-600 mb-4">
          Our dedicated team is the heart of E-STORE. We are a group of
          passionate individuals committed to delivering excellence and
          innovation. From our skilled developers and designers to our
          customer-focused support staff, everyone at E-STORE plays a crucial
          role in our mission.
        </p>
        <p className="text-slate-600 mb-4">
          Each member of our team brings unique skills and perspectives, working
          collaboratively to achieve our goals. We value creativity, dedication,
          and a shared commitment to providing the best shopping experience for
          our customers.
        </p>
        <p className="text-slate-600 mb-4">
          Our team regularly participates in training and development programs
          to stay ahead of industry trends and ensure that we continuously
          improve our services. We believe in fostering a positive and inclusive
          work environment where innovation and teamwork thrive.
        </p>
      </section>

      <p className="text-center text-lg font-semibold text-slate-800 animate-fadeIn delay-6s">
        Thank you for choosing E-STORE. We look forward to serving you with the
        best shopping experience!
      </p>
    </div>
  );
};

export default About;
