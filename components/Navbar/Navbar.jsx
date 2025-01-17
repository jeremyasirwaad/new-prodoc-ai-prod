"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SimpleButton } from "../Buttons/SimpleButton";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from "react-icons/io";
import logo_large from "../../assets/logo_large.png";
import { Dropdown } from "antd";

export const Navbar = () => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [offermenu, setoffermenu] = useState(true);

  const toggleMenu = () => {
    setIsHamburgerClicked((prevState) => !prevState);
  };

  const toggleDropdownMobile = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const closeDropdownMob = () => {
    setActiveDropdown(null);
    setIsHamburgerClicked(false);
  };

  const closeDropdownDesktop = () => {
    setActiveDropdown(null);
  };

  return (
    <div>
      {/* Navbar Container */}
      <div className={`z-50 bg-white fixed w-full flex flex-col items-center`}>
        {offermenu && (
          <div className="w-full bg-[#aed4ff] z-50 h-[60px]  flex-col  hidden  sm:flex justify-center items-center">
            <div className="h-[88px] w-full"></div>
            <div className="py-4 relative w-full flex items-center justify-center">
              <span className="text-sm">
                <IoMdClose
                  size={20}
                  className="absolute right-5 top-5 cursor-pointer"
                  onClick={() => {
                    setoffermenu(false);
                  }}
                />
                <button className="bg-[#1771d2a0] p-2 px-4  text-white font-semibold rounded-xl mr-4">
                  NEW YEAR OFFER
                </button>
                <span className="text-sm font-semibold">
                  Start your journey today with 20% off your first month!
                </span>
              </span>
            </div>
          </div>
        )}
        {/* Logo */}
        <div className="flex  items-center h-[88px]">
          <Link
            href="/"
            className="absolute left-10 cursor-pointer"
            onClick={closeDropdownMob}
          >
            <Image
              src={logo_large}
              alt="logo"
              objectFit="cover"
              className="w-auto h-7 sm:h-10"
            />
          </Link>

          {/* Desktop Menu */}
          {typeof window !== "undefined" && window.innerWidth >= 1024 && (
            <div className="gap-6 lg:gap-10 mx-auto hidden lg:ml-10  lg:flex">
              {/* Features Dropdown */}
              <Dropdown
                overlayClassName="p-6"
                dropdownRender={() => (
                  <div className="bg-white flex flex-col rounded-3xl p-6 w-[300px] shadow-lg mt-4">
                    <h3 className="font-semibold text-lg mb-2 text-primary">
                      Features
                    </h3>
                    <Link
                      href="/features/patient-connect"
                      onClick={closeDropdownDesktop}
                      className="cursor-pointer p-3 rounded-lg hover:bg-blue-50"
                    >
                      Patient Connect
                    </Link>
                    <Link
                      href="/features/smart-consult"
                      onClick={closeDropdownDesktop}
                      className="cursor-pointer p-3 rounded-lg hover:bg-blue-50"
                    >
                      Smart Consultation
                    </Link>
                    <Link
                      href="/features/patient-journey"
                      onClick={closeDropdownDesktop}
                      className="cursor-pointer p-3 rounded-lg hover:bg-blue-50"
                    >
                      Care Navigator
                    </Link>
                    <Link
                      href="/features/patient-outreach"
                      onClick={closeDropdownDesktop}
                      className="cursor-pointer p-3 rounded-lg hover:bg-blue-50"
                    >
                      Patient Outreach
                    </Link>
                  </div>
                )}
                placement="bottom"
                open={activeDropdown === "features"}
                onOpenChange={() =>
                  setActiveDropdown((prev) =>
                    prev === "features" ? null : "features"
                  )
                }
              >
                <span className="relative cursor-pointer after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-[64px] after:-translate-x-1/2">
                  Features
                </span>
              </Dropdown>

              {/*Platform Dropdown*/}

              <Dropdown
                dropdownRender={() => (
                  <div className="bg-white flex flex-col rounded-3xl p-6 w-[300px] shadow-lg mt-4">
                    <h3 className="font-semibold text-lg mb-2 text-primary">
                      Platform
                    </h3>
                    <Link
                      href="/platform/care-engine"
                      onClick={closeDropdownDesktop}
                      className="cursor-pointer p-3 rounded-lg hover:bg-blue-50"
                    >
                      AI Care Engine
                    </Link>
                    <Link
                      href="/platform/unified-care"
                      onClick={closeDropdownDesktop}
                      className="cursor-pointer p-3 rounded-lg hover:bg-blue-50"
                    >
                      Unified CareConnect
                    </Link>
                    <Link
                      href="/platform/multi-channel"
                      onClick={closeDropdownDesktop}
                      className="cursor-pointer p-3 rounded-lg hover:bg-blue-50"
                    >
                      Multichannel CareConnect
                    </Link>
                  </div>
                )}
                placement="bottom"
                open={activeDropdown === "platform"}
                onOpenChange={() =>
                  setActiveDropdown((prev) =>
                    prev === "platform" ? null : "platform"
                  )
                }
              >
                <span className="relative cursor-pointer after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-[64px] after:-translate-x-1/2">
                  Platform
                </span>
              </Dropdown>

              {/* Solutions Dropdown */}
              <Dropdown
                dropdownRender={() => (
                  <div className="bg-white flex flex-col rounded-3xl p-6 w-[300px] shadow-lg mt-4">
                    <h3 className="font-semibold text-lg mb-2 text-primary">
                      Solutions
                    </h3>
                    <Link
                      href="/solutions/hospital"
                      onClick={closeDropdownDesktop}
                      className="cursor-pointer p-3 rounded-lg hover:bg-blue-50"
                    >
                      For Hospitals
                    </Link>
                    <Link
                      href="/solutions/insurance"
                      onClick={closeDropdownDesktop}
                      className="cursor-pointer p-3 rounded-lg hover:bg-blue-50"
                    >
                      For Insurance
                    </Link>
                  </div>
                )}
                placement="bottom"
                open={activeDropdown === "solutions"}
                onOpenChange={() =>
                  setActiveDropdown((prev) =>
                    prev === "solutions" ? null : "solutions"
                  )
                }
              >
                <span className="relative cursor-pointer after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-[64px] after:-translate-x-1/2">
                  Solutions
                </span>
              </Dropdown>
              <Dropdown
                dropdownRender={() => {
                  return (
                    <div className="bg-white flex flex-col rounded-3xl p-6 w-[300px] shadow-lg mt-4">
                      <h3 className="font-semibold text-lg mb-2 text-primary">
                        LLMs
                      </h3>
                      <Link
                        href={"/llms/open-source"}
                        className="cursor-pointer p-3 rounded-lg hover:bg-blue-50"
                      >
                        <span> Open Sourced LLMs</span>
                      </Link>
                      <span className="cursor-not-allowed text-gray-400 p-3 rounded-lg hover:bg-blue-50">
                        Experience Center
                      </span>
                    </div>
                  );
                }}
                placement="bottom"
              >
                <span className="relative cursor-pointer after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-[64px] after:-translate-x-1/2">
                  LLMs
                </span>
              </Dropdown>

              {/* Resources Dropdown */}
              <Dropdown
                dropdownRender={() => (
                  <div className=" bg-white  flex flex-col rounded-3xl p-6 w-[350px] shadow-lg mt-4">
                    <h3 className="font-semibold text-lg mb-2 text-primary">
                      Resources
                    </h3>
                    <Link
                      href="/blogs"
                      onClick={closeDropdownDesktop}
                      className="cursor-pointer p-3 rounded-lg hover:bg-blue-50"
                    >
                      Blogs
                    </Link>
                    <Link
                      href="/faq"
                      onClick={closeDropdownDesktop}
                      className="cursor-pointer p-3 rounded-lg hover:bg-blue-50"
                    >
                      FAQs
                    </Link>
                    <Link
                      href="/partner"
                      onClick={closeDropdownDesktop}
                      className="cursor-pointer p-3 rounded-lg hover:bg-blue-50"
                    >
                      Become a Partner
                    </Link>
                  </div>
                )}
                placement="bottom"
                open={activeDropdown === "resources"}
                onOpenChange={() =>
                  setActiveDropdown((prev) =>
                    prev === "resources" ? null : "resources"
                  )
                }
              >
                <span className="relative cursor-pointer after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-[64px] after:-translate-x-1/2">
                  Resources
                </span>
              </Dropdown>
            </div>
          )}

          {/* Get in Touch Button */}
          <Link
            href="/book-a-demo"
            className="hidden lg:block text-sm font-semibold absolute right-10"
          >
            <SimpleButton text={"Get in touch"} />
          </Link>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center absolute  right-5">
            {isHamburgerClicked ? (
              <IoClose
                className="m-3 text-3xl text-gray-800 cursor-pointer"
                onClick={closeDropdownMob}
                aria-label="Close Menu"
              />
            ) : (
              <GiHamburgerMenu
                className="m-3 text-3xl  text-gray-800 cursor-pointer"
                onClick={toggleMenu}
                aria-label="Open Menu"
              />
            )}
          </div>
          {/* Mobile Dropdown Menu */}
          {isHamburgerClicked && (
            <div className="bg-white z-40 top-0 left-0 flex flex-col gap-6 items-center justify-start w-[100vw] h-screen pt-28 overflow-y-auto fixed">
              {/* Features */}
              <div className="absolute top-2 right-2">
                <IoClose
                  className="m-3 text-3xl text-gray-800 cursor-pointer"
                  onClick={closeDropdownMob}
                  aria-label="Close Menu"
                />
              </div>
              <div className="w-[85vw] cursor-pointer">
                <div
                  className="flex items-center justify-between"
                  onClick={() => toggleDropdownMobile("features")}
                >
                  <h3 className="text-lg font-semibold">Features</h3>
                  {activeDropdown === "features" ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </div>
                {activeDropdown === "features" && (
                  <div className="p-4 flex flex-col gap-4">
                    <Link
                      href="/features/patient-connect"
                      onClick={closeDropdownMob}
                      className="cursor-pointer"
                    >
                      Patient Connect
                    </Link>
                    <Link
                      href="/features/smart-consult"
                      onClick={closeDropdownMob}
                      className="cursor-pointer"
                    >
                      Smart Consultation
                    </Link>
                    <Link
                      href="/features/patient-journey"
                      onClick={closeDropdownMob}
                      className="cursor-pointer"
                    >
                      Care Navigator
                    </Link>
                    <Link
                      href="/features/patient-outreach"
                      onClick={closeDropdownMob}
                      className="cursor-pointer"
                    >
                      Patient Outreach
                    </Link>
                  </div>
                )}
              </div>

              {/* Platform */}

              <div className="w-[85vw] cursor-pointer">
                <div
                  className="flex items-center justify-between"
                  onClick={() => toggleDropdownMobile("platform")}
                >
                  <h3 className="text-lg font-semibold">Platform</h3>
                  {activeDropdown === "platform" ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </div>
                {activeDropdown === "platform" && (
                  <div className="p-4 flex flex-col gap-4">
                    <Link
                      href="/platform/care-engine"
                      onClick={closeDropdownMob}
                      className="cursor-pointer"
                    >
                      AI Care Engine
                    </Link>
                    <Link
                      href="/platform/omni-channel"
                      onClick={closeDropdownMob}
                      className="cursor-pointer"
                    >
                      Omnichannel CareHub
                    </Link>
                    <Link
                      href="/platform/multi-channel"
                      onClick={closeDropdownMob}
                      className="cursor-pointer"
                    >
                      Multichannel CareConnect
                    </Link>
                  </div>
                )}
              </div>

              {/* Solutions */}
              <div className="w-[85vw] cursor-pointer">
                <div
                  className="flex items-center justify-between"
                  onClick={() => toggleDropdownMobile("solutions")}
                >
                  <h3 className="text-lg font-semibold">Solutions</h3>
                  {activeDropdown === "solutions" ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </div>
                {activeDropdown === "solutions" && (
                  <div className="p-4 flex flex-col gap-4">
                    <Link
                      href="/solutions/hospital"
                      onClick={closeDropdownMob}
                      className="cursor-pointer"
                    >
                      For Hospitals
                    </Link>
                    <Link
                      href="/solutions/insurance"
                      onClick={closeDropdownMob}
                      className="cursor-pointer"
                    >
                      For Insurance
                    </Link>
                  </div>
                )}
              </div>
              <div className="w-[85vw] cursor-pointer">
                <div
                  className="flex items-center justify-between"
                  onClick={() => toggleDropdownMobile("llms")}
                >
                  <h3 className="text-lg font-semibold">LLMs</h3>
                  {activeDropdown === "llms" ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </div>
                {activeDropdown === "llms" && (
                  <div className="p-4 flex flex-col gap-4">
                    <Link
                      href="/llms/open-source"
                      onClick={closeDropdownMob}
                      className="cursor-pointer"
                    >
                      Open Sourced LLms
                    </Link>
                    <Link
                      href="/"
                      onClick={closeDropdownMob}
                      className="cursor-pointer disabled: "
                    >
                      Experience Center
                    </Link>
                  </div>
                )}
              </div>
              {/* Resources */}
              <div className="w-[85vw] cursor-pointer">
                <div
                  className="flex items-center justify-between"
                  onClick={() => toggleDropdownMobile("resources")}
                >
                  <h3 className="text-lg font-semibold">Resources</h3>
                  {activeDropdown === "resources" ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </div>
                {activeDropdown === "resources" && (
                  <div className="p-4 flex flex-col gap-4">
                    <Link
                      href="/blogs"
                      onClick={closeDropdownMob}
                      className="cursor-pointer"
                    >
                      Blogs
                    </Link>
                    <Link
                      href="/faq"
                      onClick={closeDropdownMob}
                      className="cursor-pointer"
                    >
                      FAQs
                    </Link>
                    <Link
                      href="/partner"
                      onClick={closeDropdownMob}
                      className="cursor-pointer"
                    >
                      Become a Partner
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      {offermenu && <div className="h-[60px]"></div>}
    </div>
  );
};
