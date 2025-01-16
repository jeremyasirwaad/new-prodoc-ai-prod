import { Divider } from "antd";
import logo_large from "../../assets/logo_large.png";
import Image from "next/image";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full flex items-center flex-col pb-20 justify-center bg-white  sm:px-0">
      <div className="w-full flex items-center flex-col justify-center">
        <div className="bg-blue-100 w-full flex flex-col items-center justify-center">
          {/* Divider Section */}
          <div className="w-[90vw] flex items-start justify-between xl:w-[65vw]">
            <Divider />
          </div>

          {/* Content Section */}
          <div className="w-[90vw] mt-6 sm:mt-16 sm:mb-10 flex flex-wrap gap-8 sm:gap-4 lg:gap-8 sm:flex-nowrap items-start justify-center sm:justify-between xl:w-[65vw]">
            {/* Features Section */}
            <div className="flex flex-col items-center sm:items-start justify-center w-full sm:w-auto">
              <h3 className="text-lg font-semibold text-[#072646]">Features</h3>
              <Link href={"/features/patient-connect"} className="mt-4">
                Patient Connect
              </Link>
              <Link href={"/features/smart-consult"} className="mt-2">
                Smart Consultation
              </Link>
              <Link href={"/features/patient-journey"} className="mt-2">
                Care Navigator
              </Link>
              <Link href={"/features/patient-outreach"} className="mt-2">
                Patient Outreach
              </Link>
            </div>

            {/* Solutions Section */}
            <div className="flex flex-col items-center sm:items-start justify-center w-full sm:w-auto">
              <h3 className="text-lg font-semibold text-[#072646]">
                Solutions
              </h3>
              <Link href={"/solutions/hospital"} className="mt-4">
                For Hospital
              </Link>
              <Link href={"/solutions/insurance"} className="mt-2">
                For Insurance
              </Link>
            </div>

            {/* LLMs Section */}
            <div className="flex flex-col items-center sm:items-start justify-center w-full sm:w-auto">
              <h3 className="text-lg font-semibold text-[#072646]">LLMs</h3>
              <Link href={"/llms/open-source"} className="mt-4">
                Open Sourced LLMs
              </Link>
            </div>

            {/* Resources Section */}
            <div className="flex flex-col items-center sm:items-start justify-center w-full sm:w-auto">
              <h3 className="text-lg font-semibold text-[#072646]">
                Resources
              </h3>
              <Link href={"/blogs"} className="mt-4">
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

        {/* Footer Links Section */}
        <div className="w-[90vw] mt-8 flex flex-col sm:flex-row gap-8 justify-center sm:justify-between xl:w-[65vw]">
          {/* Logo Section */}
          <div className="hidden w-full sm:w-1/4 sm:flex items-center justify-start">
            <Image src={logo_large} className="h-auto w-44" alt="Prodoc Logo" />
          </div>

          {/* Social Icons Section */}
          <div className="w-full  flex flex-col items-center sm:items-end justify-center text-center sm:text-left gap-4">
            <div className="flex gap-6 sm:justify-end">
              <Link href="https://www.facebook.com/prodoc.io/" target="_blank">
                <FaFacebook size={24} />
              </Link>
              <Link href="https://www.instagram.com/prodoc.io/" target="_blank">
                <FaInstagramSquare size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/prodoc-io/"
                target="_blank"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                href="https://www.youtube.com/channel/prodoc-io"
                target="_blank"
              >
                <FaYoutube size={24} />
              </Link>
            </div>

            {/* Legal Links */}
            <div className="mt-4 sm:mt-2 flex flex-col sm:flex-row gap-2 sm:gap-16 text-base text-[#072646]">
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
              <Link href={"/terms-conditions"}>Terms & Conditions</Link>
              <Link href={"/faq"}>FAQs</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
