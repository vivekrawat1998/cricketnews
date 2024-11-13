import React from "react";
import { FaAndroid, FaApple } from "react-icons/fa";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="px-6 md:px-20 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo section */}
        <div>
          <h1 className="text-3xl font-bold">TheCricketZone</h1>
        </div>

        {/* Get the app section */}
        <div>
          <h1 className="text-2xl font-semibold uppercase mb-4">Get the App</h1>
          <div className="flex gap-4">
            {/* Android App Button */}
            <a
              href="https://wa.link/ggnow"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-green-500 text-white shadow-md hover:bg-green-600 transition duration-300"
            >
              <FaAndroid size={20} />
              <span>Android</span>
            </a>

            {/* iOS App Button */}
            <a
              href="https://wa.link/ggnow"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-800 text-white shadow-md hover:bg-gray-900 transition duration-300"
            >
              <FaApple size={20} />
              <span>iOS</span>
            </a>
          </div>
        </div>

        {/* Follow us on section */}
        <div>
          <h1 className="text-2xl font-semibold uppercase mb-4">
            Follow us on
          </h1>
          <ul className="list-none space-y-2">
            <li className="flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                alt="YouTube"
                className="w-5 h-5"
              />
              <Button label={"Youtube"} />
            </li>
            <li className="flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="w-5 h-5"
              />
              <Button label={"Facebook"} />
            </li>
            <li className="flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-5 h-5"
              />
              <Button label={"Instagram"} />
            </li>
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h1 className="text-2xl font-semibold uppercase mb-4">Quick Links</h1>
          <ul className="list-none space-y-2">
            <Button label={"Home"} />
            <Button label={"Series"} />
            <Button label={"Videos"} />
            <Button label={"News"} />
          </ul>
        </div>
      </div>

      {/* Terms and conditions */}
      <div className="px-6 md:px-20 py-5 text-center border-t border-gray-700">
        <ul className="flex flex-col md:flex-row gap-4 justify-center text-sm">
          <Button label={"About us"} />
          <Button label={"Terms & Conditions"} />
          <Button label={"Privacy & Policy"} />
        </ul>
      </div>
    </div>
  );
};

export default Footer;
