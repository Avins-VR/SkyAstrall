import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">
      <div className=" mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          {/* Left Side */}
          <div className="pt-10 pb-3 px-14">
            <h2 className="text-[25px] font-bold text-gray-300">SkyAstrall</h2>
            <p className="text-[16px] mt-1">
              © 2025 SkyAstrall. All rights reserved.
            </p>
          </div>

          {/* Right Side - Icons */}
          <div className="flex space-x-12 mt-8 md:mt-0 px-14">
            <a
              href="https://github.com/"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <i className="bi bi-github text-[25px]"></i>
            </a>
            <a
              href="https://www.linkedin.com/"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin text-[25px]"></i>
            </a>
            <a
              href="http://twitter.com/"
              className="hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <i className="bi bi-twitter text-[25px]"></i>
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700" />

        {/* Bottom Text */}
        <p className="text-center text-[16px] text-gray-400 pb-10 pt-5">
          Powered by innovation • Driven by excellence • Delivering solutions worldwide • Headquartered in India
        </p>
      </div>
    </footer>
  );
}