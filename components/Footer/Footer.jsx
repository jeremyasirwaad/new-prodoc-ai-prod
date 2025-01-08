import { Divider } from "antd";
import logo_large from "../../assets/logo_large.png";
import Image from "next/image";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

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
            <Link href={"/features/patient-connect"} className="mt-6">
              Patient Connect
            </Link>
            <Link href={"/features/smart-consult"} className="mt-2">
              Smart Consultation
            </Link>
            <Link href={"/features/care-navigator"} className="mt-2">
              Care Navigator
            </Link>
            <Link href={"/features/patient-outreach"} className="mt-2">
              Patient Outreach
            </Link>
          </div>
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-lg font-semibold text-[#072646]">Solutions</h3>
            <Link href={"/solutions/hospital"} className="mt-6">
              For Hospital
            </Link>
            <Link href={"/solutions/insurance"} className="mt-2">
              For Insurance
            </Link>
          </div>
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-lg font-semibold text-[#072646]">LLMs</h3>
            <Link href={"/llms/open-source"} className="mt-6">
              Open Sourced LLMs
            </Link>
          </div>
          <div className="flex flex-col items-start justify-center">
            <h3 className="text-lg font-semibold text-[#072646]">Resources</h3>
            <Link href={"/blogs"} className="mt-6">
              Blogs
            </Link>
            <Link href={"/faq"} className="mt-2">
              FAQs
            </Link>
            <Link href={"/partner"} className="mt-2">
              Become a Partner
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-start mt-10 justify-between w-[90vw] xl:w-[65vw] ">
        <div className="logo">
          <Image src={logo_large} alt="logo" className="h-auto w-44" />
        </div>
        <div className="flex flex-col items-end">
          <div className="flex gap-x-6">
            {" "}
            <Link href={"https://www.linkedin.com/company/prodoc-io/"}>
              <FaLinkedin size={24} />
            </Link>
            <Link href={"https://www.instagram.com/prodoc.io/"}>
              <FaInstagramSquare size={24} />
            </Link>
            <Link href={"https://www.facebook.com/prodoc.io/"}>
              {" "}
              <FaFacebook size={24} />
            </Link>
          </div>
          <div className="flex gap-x-10 mt-8 ">
            <Link href={'/privacy-policy'} className="text-sm text-gray-700">Privacy Policy</Link >
            <Link href={'/terms-conditions'} className="text-sm text-gray-700">Term & Conditions</Link>
            <Link href={'/faq'}  className="text-sm text-gray-700">FAQs</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
