import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-100 p-8 text-neutral-800 font-['Proxima_Nova']">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-blue-200">
        {/* E-Comm Info */}
        <div>
          <span className="text-blue-500 font-bold text-xl font-['Poppins']">E-Comm</span>
          <p className="text-sm mt-4 leading-relaxed text-neutral-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-bold font-['Poppins'] mb-4">Follow Us</h3>
          <p className="text-sm mb-4 text-neutral-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </p>
          <div className="flex space-x-4">{/* Social icons */}</div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold font-['Poppins'] mb-4">Contact Us</h3>
          <p className="text-sm mb-2 text-neutral-600">E-Comm, 4578 Marmora Road,</p>
          <p className="text-sm text-neutral-600">Glasgow D04 89GR</p>
          <p className="text-sm text-neutral-600">Free Phone: +1 800 559 6580</p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-x-8">
          <div><h3 className="text-lg font-bold font-['Poppins'] mb-4">Information</h3></div>
          <div><h3 className="text-lg font-bold font-['Poppins'] mb-4">Service</h3></div>
          <div><h3 className="text-lg font-bold font-['Poppins'] mb-4">My Account</h3></div>
          <div><h3 className="text-lg font-bold font-['Poppins'] mb-4">Our Offers</h3></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex justify-between items-center pt-8 text-sm text-neutral-600">
        <span>© 2018 Ecommerce theme by www.bootstrapmb.com</span>
        <div className="flex space-x-2">{/* Payment icons */}</div>
      </div>
    </footer>
  );
}
