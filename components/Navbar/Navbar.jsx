"use client";

import React, { useState } from "react";
import { SimpleButton } from "../Buttons/SimpleButton";
import Link from "next/link";
import Image from "next/image";
import logo_large from "../../assets/logo_large.png";
import { IoMdClose } from "react-icons/io";
import { Dropdown, Space } from "antd";

export const Navbar = () => {
  const [isOfferClose, setIsOfferClose] = useState(false);
  const handleOfferClose = () => {
    setIsOfferClose(true);
  };
  return (
    <div>
      <div className="h-[88px] w-full flex items-center px-10">
        <Link href={"/"} className="absolute left-10 cursor-pointer">
          <Image src={logo_large} alt="Prodoc AI" width={200} height={100} />
        </Link>
        <div className="flex gap-6 lg:gap-10 mx-auto">
          <Dropdown
            dropdownRender={() => {
              return (
                <div className="bg-white flex flex-col rounded-3xl p-6 w-[300px] shadow-lg mt-4">
                  <h3 className="font-semibold text-lg mb-2 text-primary">
                    Features
                  </h3>
                  <Link
                    href="/features/patient-connect"
                    className="cursor-pointer p-3 rounded-lg hover:bg-blue-50"
                  >
                    Patient Connect
                  </Link>
                  <Link
                    href={"/features/smart-consult"}
                    className="cursor-pointer p-3 rounded-lg hover:bg-blue-50"
                  >
                    Smart Consultation
                  </Link>
                  <Link
                    href="/features/patient-journey"
                    className="cursor-pointer p-3 rounded-lg hover:bg-blue-50"
                  >
                    Care Navigator
                  </Link>
                  <Link
                    href="/features/patient-outreach"
                    className="cursor-pointer p-3 rounded-lg hover:bg-blue-50"
                  >
                    Patient Outreach
                  </Link>
                </div>
              );
            }}
            placement="bottom"
          >
            <span className="relative cursor-pointer after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-[64px] after:-translate-x-1/2">
              Features
            </span>
          </Dropdown>

          <Dropdown
            dropdownRender={() => {
              return (
                <div className="bg-white flex flex-col rounded-3xl p-6 w-[300px] shadow-lg mt-4">
                  <h3 className="font-semibold text-lg mb-2 text-primary">
                    Solutions
                  </h3>
                  <Link
                    href={"/solutions/hospital"}
                    className="cursor-pointer p-3 rounded-lg hover:bg-blue-50"
                  >
                    For Hospitals
                  </Link>
                  <Link
                    href={"/solutions/insurance"}
                    className="cursor-pointer p-3 rounded-lg hover:bg-blue-50"
                  >
                    For Insurance
                  </Link>
                </div>
              );
            }}
            placement="bottom"
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
          <Dropdown
            dropdownRender={() => {
              return (
                <div className="bg-white flex flex-col rounded-3xl p-6 w-[350px] shadow-lg mt-4">
                  <h3 className="font-semibold text-lg mb-2 text-primary">
                    Resources
                  </h3>
                  <Link
                    href={"/blogs"}
                    className="cursor-pointer p-3 rounded-lg hover:bg-blue-50"
                  >
                    <span>Blogs</span>
                  </Link>
                  <Link
                    href={"/faq"}
                    className="cursor-pointer  p-3 rounded-lg hover:bg-blue-50"
                  >
                    FAQs
                  </Link>
                  <Link
                    href={"/partner"}
                    className="cursor-pointer p-3 rounded-lg hover:bg-blue-50"
                  >
                    Become a Partner
                  </Link>
                </div>
              );
            }}
            placement="bottom"
          >
            <span
              href="/"
              className="relative cursor-pointer after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-[64px] after:-translate-x-1/2"
            >
              Resources
            </span>
          </Dropdown>
          <Link
            href="/book-a-demo"
            className="relative after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-[64px] after:-translate-x-1/2"
          >
            Book a Demo
          </Link>
        </div>
        <Link href={"/book-a-demo"} className="absolute right-10">
          <SimpleButton text={"Get in touch"} />
        </Link>
      </div>
      {!isOfferClose && (
        <div className="w-full bg-[#1771d244] h-[70px] flex justify-center items-center ">
          <span className="text-sm">
            <button className="bg-[#1771d2a0] p-2 px-4  text-white font-semibold rounded-xl mr-4">
              NEW YEAR OFFER
            </button>
            <span className="text-sm">
              Start your journey today with 20% off your first month!
            </span>
          </span>
          <div className="absolute right-10 cursor-pointer" onClick={handleOfferClose}>
            <IoMdClose size={24} />
          </div>
        </div>
      )}
    </div>
  );
};
