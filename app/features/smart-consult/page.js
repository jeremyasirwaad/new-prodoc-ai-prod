"use client";

import Image from "next/image";

import smart_consult_hero from "../../../assets/features/smart-consult/smart_consult_hero.jpg";

import smart_consult_step1 from "../../../assets/features/smart-consult/smart_consult_step1.png";
import smart_consult_step2 from "../../../assets/features/smart-consult/smart_consult_step2.png";

import { FaCircleCheck } from "react-icons/fa6";
import smart_consult_section from "../../../assets/features/smart-consult/smart_consult_section.png"
import Link from "next/link";
// app/content/page.jsx
export default function SmartConsultaion() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="text-[50px] text-center leading-[68px] mt-32 mb-20  w-[90vw] xl:w-[75vw] flex items-center gap-x-10">
        <div className="text-[50px] flex flex-col w-[50%]">
          <h1 className="font-[400]  text-left">
            Real-Time Q&A{" "}
            <span className="text-primary text-[50px] font-[400]">
              with Prodoc AI
            </span>{" "}
            <br />
          </h1>
          <h3 className="text-lg mt-6 text-left">
            Prodoc AI's Q&A feature transforms patient interactions with
            real-time chat capabilities on WhatsApp and website bots. <br></br>
            <br></br> Designed to simplify query resolution, it bridges the gap
            between patients and doctors while ensuring secure and seamless
            communication
          </h3>
          <button className="bg-primary w-fit h-fit mt-6 text-base text-white px-8 py-4 rounded-3xl">
            Schedule a Demo
          </button>
        </div>
        <div className="w-[50%] bg-red p-8">
          <Image
            src={smart_consult_hero}
            alt="alt"
            className="rounded-3xl"
          />
        </div>
      </div>

      <div className="w-full bg-white flex items-center justify-center">
        <div className="mt-16 mb-28 w-[90vw] xl:w-[75vw] flex flex-col gap-y-20">
          <div className="relative flex flex-col items-center">
            <div className="flex items-center justify-center">
              <div className="w-[50%] bg-red flex items-center justify-center">
                <Image src={smart_consult_step1} alt="alt" />
              </div>
              <div className="text-[50px] flex flex-col w-[50%] ml-14">
                <h1 className="font-[400]  text-left">
                  {"Patient asks a question"}
                </h1>
                <h3 className="text-lg mt-6 text-left">
                  Patients can initiate conversations on WhatsApp or the website
                  bot for instant answers to their queries <br></br>
                  <br></br>
                  If a patient’s concern requires medical expertise, Prodoc AI
                  detects the need and begins building a case summary by asking
                  disease-specific questions.
                  <br></br>
                  <br></br>
                  The case summary is securely sent to the relevant doctor via
                  WhatsApp
                </h3>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="flex flex-row-reverse items-center justify-center">
              <div className="w-[50%] bg-red flex items-center justify-center">
                <Image src={smart_consult_step2} alt="alt" />
              </div>
              <div className="text-[50px] flex flex-col w-[50%] ml-10">
                <h1 className="font-[400]  text-left">{"Doctor Engagement"}</h1>
                <h3 className="text-lg mt-6 text-left">
                  Doctors can review and address patient concerns without
                  sharing their personal contact details <br></br>
                  <br></br>
                  Prodoc AI ensures the doctor’s feedback is relayed directly to
                  the patient, maintaining clarity and privacy
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroller End */}

      <div className="w-full flex items-center justify-center">
        <div className="w-[90vw] xl:w-[75vw] mt-20 mb-24 flex items-center justify-between ">
          <div className="flex items-start flex-col justify-start w-1/2">
            <h3 className="text-[40px] mb-10">Why Choose Prodoc AI Q&A?</h3>
            <p className="text-lg flex items-center gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Always on, ensuring patients get the help they need anytime
            </p>
            <p className="text-lg mt-6 flex items-center gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Disease-specific, AI-driven questions for better context
            </p>
            <p className="text-lg mt-6 flex items-center gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Secure communication without disclosing personal numbers
            </p>
            <p className="text-lg mt-6 flex items-center gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Reduces doctor workload with ready-to-use case summaries
            </p>
            <p className="text-lg mt-6 flex items-center gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Quick, clear, and professional responses
            </p>
          </div>
          <div className="flex justify-end items-end w-1/2 ">
            <Image
              alt="patient_outreact_section_1"
              src={smart_consult_section}
              className="ml-auto w-[400px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-white relative flex items-center justify-center">
        <div className="mt-20 mb-20">
          <div className="">
            <h3 className="text-4xl text-black text-center">
              Empowers you to deliver exceptional outpatient care
              <br />
              <span className="text-2xl font-normal mt-2 block">
                With{" "}
                <span className="text-primary text-2xl">
                  intelligent automation
                </span>{" "}
                for better patient outcomes
              </span>
            </h3>
            <div className="flex items-center justify-center mt-8">
              <Link href={'/book-a-demo'} className="bg-primary w-fit text-white px-8 py-4 rounded-3xl">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
