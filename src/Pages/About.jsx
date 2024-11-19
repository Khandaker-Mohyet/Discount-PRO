import React from "react";

const About = () => {
  return (
    <div className="bg-base-100 text-base-content py-10 px-4 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-primary">About Us</h1>
        <p className="text-lg text-center mb-8">
          Welcome to <span className="font-bold">ShopSmart</span>, your go-to destination for exclusive deals and discounts across a variety of brands and categories!
        </p>
        <div className="flex flex-col gap-8">
          <div className="card bg-base-200 shadow-lg p-6">
            <h2 className="text-2xl font-bold text-primary">What We Offer</h2>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                <strong>Top Brands</strong>: Collaborations with trusted names like Bata, Apex, Infinity, and more.
              </li>
              <li>
                <strong>Exclusive Coupons</strong>: Discounts, free shipping, and special deals tailored to every need.
              </li>
              <li>
                <strong>Wide Categories</strong>: Electronics, clothing, home & living, beauty, fitness, and travel.
              </li>
              <li>
                <strong>Trust & Transparency</strong>: Clear terms for all offers, ensuring a hassle-free experience.
              </li>
            </ul>
          </div>

          <div className="card bg-base-200 shadow-lg p-6">
            <h2 className="text-2xl font-bold text-primary">Why Choose Us?</h2>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>
                <strong>Unbeatable Deals</strong>: Save big on every purchase with curated offers.
              </li>
              <li>
                <strong>User-Friendly Platform</strong>: Easily find deals that match your needs.
              </li>
              <li>
                <strong>Always Updated</strong>: Get access to the latest and greatest offers.
              </li>
            </ul>
          </div>

          <div className="card bg-base-200 shadow-lg p-6">
            <h2 className="text-2xl font-bold text-primary">Contact Us</h2>
            <p className="mt-4">
              Have questions or need support? Reach out to us at{" "}
              <a
                href="mailto:mohyet0007@gmail.com"
                className="text-primary font-bold hover:underline"
              >
                mohyet0007@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
