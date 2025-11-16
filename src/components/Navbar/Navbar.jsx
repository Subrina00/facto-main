import React, { useState } from "react";
import CasaLogo from "../../assets/logo.png";

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const navLinkStyle =
    "font-roboto text-heading text-[16px] sm:text-[18px] xl:text-[17px] 2xl:text-[18px] px-[3px] leading-[30px] font-normal cursor-pointer";

  const buttonToggle = () => setIsToggle(!isToggle);

  return (
    <header className="py-[14px] sm:py-[20px]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-[18px] xl:gap-[24px]">

          {/* Left / Logo */}
          <div className="flex items-center justify-start gap-[13px] sm:gap-[16px]">
            <div className="w-full max-w-[100px] sm:max-w-[128px] xl:max-w-[140px] 2xl:max-w-[151px]">
              <img
                src={CasaLogo}
                alt="logo"
                className="w-full max-w-[100px] sm:max-w-[128px] xl:max-w-[140px] 2xl:max-w-[151px]"
              />
            </div>
          </div>

          {/* Center / Menu */}
          <div
            className={`bg-white z-50 transition-all xl:transition-none duration-150 xl:duration-[0] 
                        w-[320px] sm:w-[340px] xl:w-auto xl:bg-transparent xl:flex fixed top-0 h-[100vh] xl:h-auto xl:relative
                        ${isToggle ? "left-0 xl:left-0" : "-left-full xl:left-0"}`}
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between gap-[24px] p-[13px] sm:p-[16px] xl:hidden">
              <div className="w-full max-w-[112px] sm:max-w-[130px]">
                <img
                  src={CasaLogo}
                  alt="logo"
                  className="w-full max-w-[112px] sm:max-w-[130px]"
                />
              </div>

              <button
                type="button"
                className="underline font-roboto text-heading text-[15px] sm:text-[16px]"
                onClick={buttonToggle}
              >
                Close
              </button>
            </div>

            {/* Nav Links */}
            <div
              className={`p-[13px] sm:p-[16px] h-[calc(91vh-28px)] sm:h-[calc(87vh)] xl:h-auto xl:p-0 
                          flex flex-col xl:flex-row items-start xl:items-center justify-start xl:justify-center 
                          gap-[22px] sm:gap-[28px] xl:gap-[40px] 2xl:gap-[48px] overflow-auto`}
            >
              <div className={navLinkStyle}>Services</div>
              <div className={navLinkStyle}>How it works</div>
              <div className={navLinkStyle}>Why is different</div>
              <div className={navLinkStyle}>Reviews</div>
              <div className={navLinkStyle}>Pricing</div>
              <div className={navLinkStyle}>Contact</div>
            </div>

            {/* Mobile Sign Up */}
            <div className="block p-[16px] xl:hidden">
              <button
                type="button"
                className="block xl:hidden text-[14px] sm:text-[16px] xl:text-[18px] leading-[22px] sm:leading-[26px] 
                           text-white font-manrope py-[8px] sm:py-[12px] px-[20px] sm:px-[26px] xl:py-[14px] xl:px-[34px] 
                           rounded-[999px] w-full bg-[#141414] font-semibold"
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Overlay for mobile */}
          <div
            className={`block xl:hidden fixed top-0 left-0 w-full h-screen z-40 bg-[#98969665] 
                        transition-all duration-300 ease-linear ${isToggle ? "opacity-100 visible" : "opacity-0 invisible xl:opacity-0 xl:invisible"}`}
            onClick={buttonToggle}
          ></div>

          {/* Right Section */}
          <div className="flex items-center justify-end gap-[12px] sm:gap-[14px] xl:gap-[20px] w-full max-w-[148px] sm:max-w-[181px] xl:max-w-[323px]">
            <button
              type="button"
              className="text-[14px] sm:text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[22px] sm:leading-[26px] text-primary font-manrope py-[7px] sm:py-[12px] px-[20px] sm:px-[26px] xl:py-[14px] xl:px-[34px] 2xl:py-[16px] 2xl:px-[40px] rounded-[999px] max-w-[100px] sm:max-w-[135px] xl:max-w-[145px] w-full block bg-[#DFEDE3] font-semibold"
            >
              Sign In
            </button>

            <button
              type="button"
              className="hidden xl:block text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[26px] text-white font-manrope py-[12px] px-[26px] xl:py-[14px] xl:px-[34px] 2xl:py-[16px] 2xl:px-[40px] rounded-[999px] max-w-[144px] xl:max-w-[154px] w-full block bg-[#141414] font-semibold"
            >
              Sign Up
            </button>

            {/* Hamburger */}
            <button
              className="flex items-center justify-center xl:hidden h-[36px] min-w-[34px] max-w-[36px] sm:h-[48px] sm:min-w-[50px] sm:max-w-[50px] rounded-sm bg-[#141414]"
              type="button"
              onClick={buttonToggle}
            >
              <div className="flex flex-col justify-between gap-[3px] min-w-[19px] max-w-[19px] h-[14px] sm:min-w-[24px] sm:max-w-[24px] sm:h-[17px] md:min-w-[26px] md:max-w-[26px] md:h-[18px] cursor-pointer">
                <span className="bg-white w-full h-[2px] rounded-[10px]"></span>
                <span className="bg-white w-full h-[2px] rounded-[10px]"></span>
                <span className="bg-white w-full h-[2px] rounded-[10px]"></span>
              </div>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
