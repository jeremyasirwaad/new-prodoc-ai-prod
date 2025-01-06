import { Divider } from "antd";
import logo_large from "../../assets/logo_large.png";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="w-full flex items-center flex-col pb-20 justify-cente bg-white">
      <div className="w-full flex items-center flex-col justify-center  ">
        <div className="w-[90vw] xl:w-[65vw] flex items-start justify-between">
          <Divider />
        </div>
        <div className="w-[90vw] xl:w-[65vw] mt-16 mb-16 flex items-start justify-between">
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-lg font-semibold text-[#072646]">Features</h3>
            <span className="mt-6">Patient Connect</span>
            <span className="mt-2">Smart Consultation</span>
            <span className="mt-2">Care Navigator</span>
            <span className="mt-2">Patient Outreach</span>
          </div>
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-lg font-semibold text-[#072646]">Solutions</h3>
            <span className="mt-6">For Hospital</span>
            <span className="mt-2">For Insurance</span>
          </div>
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-lg font-semibold text-[#072646]">LLMs</h3>
            <span className="mt-6">Open Sourced LLMs</span>
          </div>
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-lg font-semibold text-[#072646]">Resources</h3>
            <span className="mt-6">Blogs</span>
            <span className="mt-2">FAQs</span>
            <span className="mt-2">Become a Partner</span>
          </div>
        </div>
      </div>

      <div className="flex items-start mt-10 justify-between w-[90vw] xl:w-[65vw] ">
        <div className="logo">
          <Image src={logo_large} className="h-auto w-44" />
        </div>
        <div className="flex flex-col items-end">
          <div className="flex gap-x-6">
            <FaLinkedin size={24} />
            <FaInstagramSquare size={24} />
            <FaYoutube size={24} />
          </div>
          <div className="flex gap-x-10 mt-8 ">
            <span className="text-sm text-gray-700">Privacy Policy</span>
            <span className="text-sm text-gray-700">Term & Conditions</span>
            <span className="text-sm text-gray-700">FAQs</span>
          </div>
        </div>
      </div>
    </div>
  );
};
