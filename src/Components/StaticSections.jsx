import React from "react";

const StaticSections = () => {
  return (
    <div className="bg-base-100 text-base-content py-10">
      <section className="max-w-6xl mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">
          Why Choose Discount PRO?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-200 shadow-md p-6">
            <div className="text-4xl text-primary mb-4">
              <i className="fas fa-tags"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Save Money</h3>
            <p>
              Get access to the best coupons and deals to save on your favorite
              brands.
            </p>
          </div>
          <div className="card bg-base-200 shadow-md p-6">
            <div className="text-4xl text-primary mb-4">
              <i className="fas fa-clock"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Time-Saving</h3>
            <p>
              No need to search for coupons manually. Find them all in one
              place!
            </p>
          </div>
          <div className="card bg-base-200 shadow-md p-6">
            <div className="text-4xl text-primary mb-4">
              <i className="fas fa-user"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">User-Friendly</h3>
            <p>
              Simple, intuitive design for a seamless coupon browsing
              experience.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-base-200 shadow-md p-6">
            <div className="text-4xl text-primary mb-4">
              <i className="fas fa-sign-in-alt"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Sign Up or Log In</h3>
            <p>
              Create an account or log in using your email or Google to get
              started.
            </p>
          </div>
          <div className="card bg-base-200 shadow-md p-6">
            <div className="text-4xl text-primary mb-4">
              <i className="fas fa-search"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Browse Coupons</h3>
            <p>
              Explore the best deals from your favorite brands and categories.
            </p>
          </div>
          <div className="card bg-base-200 shadow-md p-6">
            <div className="text-4xl text-primary mb-4">
              <i className="fas fa-copy"></i>
            </div>
            <h3 className="text-xl font-bold mb-2">Copy & Save</h3>
            <p>
              Copy the coupon code with one click and apply it to save money on
              your purchase.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StaticSections;
