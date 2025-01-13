"use client";

import Image from "next/image";

import smart_consult_hero from "../../../assets/features/smart-consult/smart_consult_hero.jpg";

import smart_consult_step1 from "../../../assets/features/smart-consult/smart_consult_step1.png";
import smart_consult_step2 from "../../../assets/features/smart-consult/smart_consult_step2.png";

import { FaCircleCheck } from "react-icons/fa6";
import smart_consult_section from "../../../assets/features/smart-consult/smart_consult_section.png";
import Link from "next/link";
// app/content/page.jsx
export default function SmartConsultaion() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="text-[30px] sm:text-[50px] text-center sm:text-left leading-[48px] sm:leading-[68px] mt-32 sm:mt-64 mb-10 sm:mb-20 sm:w-[90vw] xl:w-[75vw] flex flex-col sm:flex-row items-center gap-y-10 sm:gap-x-10">
        {/* Left Section */}
        <div className="text-[30px] sm:text-[50px] lg:text-[50px] flex flex-col w-[90vw] sm:w-[50%]">
          <h1 className="font-[400] sm:text-left">
            Real-Time Q&A{" "}
            <span className="text-primary text-[30px] sm:text-[50px] font-[400]">
              with Prodoc AI
            </span>
            <br />
          </h1>
          <h3 className="text-lg sm:text-lg mt-4 sm:mt-6 text-center sm:text-left">
            Prodoc AI's Q&A feature transforms patient interactions with
            real-time chat capabilities on WhatsApp and website bots.
            <br />
            <br />
            Designed to simplify query resolution, it bridges the gap between
            patients and doctors while ensuring secure and seamless
            communication.
          </h3>
          <button className="bg-primary w-fit h-fit mt-6 text-sm sm:text-base text-white px-6  sm:px-8 py-5 sm:py-4 rounded-3xl self-center sm:self-start">
            Schedule a Demo
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-[50%] bg-red p-6 sm:p-8">
          <Image src={smart_consult_hero} alt="alt" className="rounded-3xl" />
        </div>
      </div>
      <div className="w-full bg-white flex items-center justify-center">
        <div className="mt-10 sm:mt-16 mb-10 sm:mb-28 w-[90vw] xl:w-[75vw] flex flex-col gap-y-10 sm:gap-y-20">
          {/* Step 1 */}
          <div className="relative flex flex-col items-center">
            <div className="flex flex-col sm:flex-row items-center justify-center">
              <div className="w-full sm:w-[50%] bg-red flex items-center justify-center mb-6 sm:mb-0">
                <Image
                  src={smart_consult_step1}
                  alt="alt"
                  className="w-[100%] sm:w-auto"
                />
              </div>
              <div className="text-[30px] sm:text-[50px] flex flex-col w-full sm:w-[50%] sm:ml-14">
                <h1 className="font-[400] sm:text-left">
                  Patient asks a question
                </h1>
                <h3 className="text-sm sm:text-lg mt-4 sm:mt-6  sm:text-left">
                  Patients can initiate conversations on WhatsApp or the website
                  bot for instant answers to their queries.
                  <br />
                  <br />
                  If a patient’s concern requires medical expertise, Prodoc AI
                  detects the need and begins building a case summary by asking
                  disease-specific questions.
                  <br />
                  <br />
                  The case summary is securely sent to the relevant doctor via
                  WhatsApp.
                </h3>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-center">
            <div className="flex flex-col sm:flex-row items-center justify-center">
              <div className="w-full sm:w-[50%] bg-red flex items-center justify-center mb-6 sm:mb-0">
                <Image
                  src={smart_consult_step2}
                  alt="alt"
                  className="w-[100%] sm:w-auto"
                />
              </div>
              <div className="text-[30px] sm:text-[50px] flex flex-col w-full sm:w-[50%] sm:ml-10">
                <h1 className="font-[400]  sm:text-left">Doctor Engagement</h1>
                <h3 className="text-sm sm:text-lg mt-4 sm:mt-6  sm:text-left">
                  Doctors can review and address patient concerns without
                  sharing their personal contact details.
                  <br />
                  <br />
                  Prodoc AI ensures the doctor’s feedback is relayed directly to
                  the patient, maintaining clarity and privacy.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroller End */} {/* Left Section */}
      <div className="w-[90vw] gap-2 sm:gap-3 flex flex-col sm:flex-row items-start justify-start sm:w-[75vw]  mt-10 mb-10 sm:mb-8">
        <div>
          <h3 className="text-2xl sm:text-5xl mb-6 sm:mb-10 text-left">
            Why Choose Prodoc AI Q&A?
          </h3>
          <h3 className=" text-base mb-6 flex items-start gap-8 sm:gap-8 sm:text-lg">
            <FaCircleCheck className="text-xl" color="#1772d2" />{" "}
            <span>
              Always on, ensuring patients get the help they need anytime
            </span>
          </h3>

          <h3 className="text-base mb-6 items-start  flex  gap-8 sm:gap-8  sm:text-lg">
            <FaCircleCheck className="text-xl" color="#1772d2" />
            <span>
              Disease-specific, AI-driven questions for better context
            </span>
          </h3>
          <h3 className="text-base mb-6 flex items-start gap-8 sm:gap-8  sm:text-lg">
            <FaCircleCheck className="text-xl" color="#1772d2" />
            <span>
              Secure communication without disclosing personal numbers
            </span>
          </h3>
          <h3 className="text-base mb-6 flex items-start gap-8 sm:gap-8 sm:text-lg">
            <FaCircleCheck className="text-xl" color="#1772d2" />
            <span>
              Reduces doctor workload with ready-to-use case summaries
            </span>
          </h3>

          <h3 className="text-base mb-6 flex items-start gap-8 sm:gap-8 sm:text-lg">
            <FaCircleCheck className="text-xl" color="#1772d2" />
            <span>Quick, clear, and professional responses</span>
          </h3>
        </div>
        <div className=" hidden sm:flex sm:mt-6 justify-center sm:justify-end items-center w-full sm:w-1/2">
          <Image
            alt="patient_outreact_section_1"
            src={smart_consult_section}
            className="w-[80%]  h-auto object-contain"
          />
        </div>
      </div>
      {/* Right Section (Image) */}
      <div className="w-full bg-white relative flex items-center justify-center">
        <div className="mt-10 mb-10 sm:mt-20 sm:mb-20">
          <div className="">
            <h3 className="text-2xl sm:text-4xl text-black text-center">
              Empowers you to deliver exceptional outpatient care
              <br className="hidden sm:block" />
              <span className="text-2xl sm:text-4xl font-normal sm:mt-2 block">
                With{" "}
                <span className="text-primary text-2xl sm:text-4xl">
                  intelligent automation
                </span>{" "}
                for better patient outcomes
              </span>
            </h3>
            <div className="flex items-center justify-center mt-8">
              <Link
                href={"/book-a-demo"}
                className="bg-primary w-fit text-white px-8 py-4 rounded-3xl"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
