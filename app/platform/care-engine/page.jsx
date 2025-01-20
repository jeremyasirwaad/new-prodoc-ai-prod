"use client";

import Image from "next/image";
import landing_section_1 from "../../../assets/landing_section_1.png";

import patient_journey_fact1 from "../../../assets/features/patient-journey/patient_journey_fact_1.jpg";
import patient_journey_fact2 from "../../../assets/features/patient-journey/patient_journey_fact_2.jpg";
import patient_connect_hero from "../../../assets/features/patient-connect/patient_connect_hero.png";
import patient_journey_fact3 from "../../../assets/features/patient-journey/patient_journey_fact_3.jpg";
import patient_journey_fact4 from "../../../assets/features/patient-journey/patient_journey_fact_4.jpg";
import health_care from "../../../assets/platform/health_care.png";
import health_care_2 from "../../../assets/platform/health_care_2.jpg";
import health_care_pg6 from "../../../assets/platform/health_care_pg6.jpg";
import health_care_pg7 from "../../../assets/platform/health_care_pg7.jpg";
import health_care_pg8 from "../../../assets/platform/health_care_pg8.jpg";

import Link from "next/link";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import { useState } from "react";

// app/content/page.jsx
export default function PatientConnect() {
  const [firstVisibility, setFirstVisibility] = useState(true);
  const [secondVisibility, setSecondVisibility] = useState(false);
  const [thirdVisibility, setThirdVisibility] = useState(false);

  const resetFields = () => {
    setFirstVisibility(false);
    setSecondVisibility(false);
    setThirdVisibility(false);
  };
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="sm:text-[50px] text-center  sm:leading-[68px] mt-32 sm:mt-32 mb-20  w-[90vw] xl:w-[75vw] flex flex-col sm:flex-row sm:items-center gap-10 sm:gap-x-10">
        <div className="text-[40] flex flex-col sm:w-[50%]">
          <p className="font-[400] text-center text-[30px] sm:text-[50px]  sm:text-left ">
            <span className="text-primary text-[30px] sm:text-[50px] font-[400]">
              AI CareEngine
            </span>{" "}
            <br />
            Revolutionizing Patient Engagement with Intelligence
          </p>
          <h4 className="sm:text-lg text-sm mt-6 text-center sm:text-left">
            Personalized Patient Engagement and Streamlined Healthcare
            Operations Prodoc AI's AI CareEngine delivers structured,
            intelligent solutions powered by SLMs for healthcare
            specializations, transforming how care is delivered and managed.
          </h4>
          <button className="bg-primary mx-auto sm:mx-0 w-fit h-fit mt-6 text-base text-white px-8 py-4  sm:px-8 sm:py-4 rounded-3xl">
            Schedule a Demo
          </button>
        </div>
        <div className="mt-8 p-8 sm:w-[50%] ">
          <Image src={health_care} alt="alt" />
        </div>
      </div>
      <div className="text-[30px] sm:text-[50px] text-center sm:leading-[68px] mt-32 sm:mt-12 sm:h-[204px] p-2">
        <h1 className="font-[400] sm:tracking-[1px]">
          What is the{" "}
          <span className="text-primary text-[30px] sm:text-[50px] font-[400] sm:tracking-[1px]">
            AI CareEngine
          </span>{" "}
          ?
        </h1>
        <h3 className="text-lg mt-6 flex items-center justify-center">
          <span className="w-[80%] flex wrap text-start text-sm sm:text-lg">
            The AI CareEngine is Prodoc AI's healthcare-specific intelligence
            layer, designed to drive personalized, scalable, and efficient
            patient engagement. Built on Specialized Language Models (SLMs)
            tailored for various medical specializations, it empowers healthcare
            providers to deliver structured, meaningful interactions while
            streamlining operations.
          </span>
        </h3>
      </div>
      <div className="w-full flex items-center justify-center bg-white">
        <div className=" mb-10 mt-10 sm:mt-12 sm:mb-20 w-[90vw] xl:w-[75vw] rounded-2xl">
          <div className="w-full flex flex-col sm:flex-row gap-8 mt-6 sm:mt-14">
            <div className="w-full sm:w-1/2 flex flex-col  p-6 rounded-xl relative shadow-md">
              <Image
                src={health_care_pg6}
                alt="landing_testimonial"
                className="rounded-full absolute sm:right-10 top-5 h-[80px] w-[80px] sm:h-[100px] sm:w-[100px]"
              />
              <span className="text-xl mt-16 sm:mt-12">
                Specialized Language Models (SLMs)
              </span>
              <p className="mt-5">
                <div className="">
                  <span className="font-bold text-[13px]">
                    Tailored for Specializations:{" "}
                  </span>
                  <span className="text-[12px]">
                    Prodoc AI offers SLMs for key medical areas such as
                    cardiology, oncology, pediatrics, ophthalmology, and more,
                    ensuring accurate and relevant patient interactions.
                  </span>
                </div>
                <div className="">
                  <span className="font-bold text-[13px]">
                    Structured Intelligence:{" "}
                  </span>
                  <span className="text-[12px]">
                    Each SLM is fine-tuned to understand and respond to
                    specialization-specific queries, enabling efficient and
                    precise patient engagement.
                  </span>
                </div>
                <div className="">
                  <span className="font-bold text-[13px]">
                    Scalable Care Delivery:{" "}
                  </span>
                  <span className="text-[12px]">
                    Empower healthcare providers to handle complex queries
                    across various specialties seamlessly.
                  </span>
                </div>
              </p>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col  p-6 rounded-xl relative shadow-md">
              <Image
                src={health_care_pg7}
                alt="landing_testimonial"
                className="rounded-full absolute sm:right-10 top-5 h-[80px] w-[80px] sm:h-[100px] sm:w-[100px]"
              />
              <span className="text-xl mt-16 sm:mt-12">
                Business Intelligence
              </span>
              <p className="mt-5">
                <div className="">
                  <span className="font-bold text-[13px]">
                    Healthcare-Specific RAG:{" "}
                  </span>
                  <span className="text-[12px]">
                    Access real-time AI-driven insights tailored to your
                    organization's needs, including patient queries, referral
                    performance, and operational metrics.
                  </span>
                </div>
                <div className="">
                  <span className="font-bold text-[13px]">
                    Actionable Insights:{" "}
                  </span>
                  <span className="text-[12px]">
                    Gain a deeper understanding of patient behavior and system
                    efficiency to optimize care and workflows.
                  </span>
                </div>
                <div className="">
                  <span className="font-bold text-[13px]">
                    Performance Dashboards:{" "}
                  </span>
                  <span className="text-[12px]">
                    Monitor KPIs with customizable reports to track and refine
                    strategies.
                  </span>
                </div>
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col sm:flex-row gap-8 mt-10">
            <div className="w-full sm:w-1/2 flex flex-col  p-10 rounded-xl relative shadow-md">
              <Image
                src={patient_journey_fact3}
                alt="landing_testimonial"
                className="rounded-full absolute sm:right-10 top-5 h-[80px] w-[80px] sm:h-[100px] sm:w-[100px]"
              />
              <span className="text-xl mt-16 sm:mt-20">Personalization</span>
              <p className="mt-5">
                <div className="">
                  <span className="font-bold text-[13px]">
                    AI-Driven Personalization at Scale:{" "}
                  </span>
                  <span className="text-[12px]">
                    Deliver tailored care experiences by leveraging patient
                    data, preferences, and history.
                  </span>
                </div>
                <div className="">
                  <span className="font-bold text-[13px]">
                    Dynamic Adaptability:{" "}
                  </span>
                  <span className="text-[12px]">
                    Provide real-time responses personalized to individual
                    patient needs.
                  </span>
                </div>
                <div className="">
                  <span className="font-bold text-[13px]">
                    Multilingual Communication:{" "}
                  </span>
                  <span className="text-[12px]">
                    Support patients in their preferred language, ensuring
                    inclusivity.
                  </span>
                </div>
              </p>
            </div>

            <div className="w-full sm:w-1/2 flex flex-col  p-10 rounded-xl relative shadow-md">
              <Image
                src={health_care_pg8}
                alt="landing_testimonial"
                className="rounded-full absolute sm:right-10 top-5 h-[80px] w-[80px] sm:h-[100px] sm:w-[100px]"
              />
              <span className="text-xl mt-16 sm:mt-20">Agent Tools</span>
              <p className="mt-5">
                <div className="">
                  <span className="font-bold text-[13px]">
                    Branch and Care Locator:{" "}
                  </span>
                  <span className="text-[12px]">
                    Help patients locate the nearest care center or specialist
                    effortlessly.
                  </span>
                </div>
                <div className="">
                  <span className="font-bold text-[13px]">
                    Discovery Tool:{" "}
                  </span>
                  <span className="text-[12px]">
                    Recommend doctors, clinics, and treatments based on patient
                    needs and specialization-specific insights.
                  </span>
                </div>
                <div className="">
                  <span className="font-bold text-[13px]">
                    Appointment Booking:{" "}
                  </span>
                  <span className="text-[12px]">
                    Simplify scheduling with automated tools for patients and
                    staff.
                  </span>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="w-[90vw] xl:w-[75vw] mt-12 sm:mt-20 mb-16 sm:mb-24 flex flex-col-reverse sm:flex-row items-center sm:justify-between gap-12 sm:gap-0">
          <div className="flex flex-col items-center sm:items-start w-full sm:w-1/2 text-center sm:text-left">
            <h3 className="text-[30px]  sm:text-[45px] xl:text-[50px] mb-6 sm:mb-10">
              Why Choose Prodoc AI{" "}
              <span className="text-primary text-[30px]  sm:text-[45px] xl:text-[50px]">
                CareEngine
              </span>
              ?
            </h3>
            <div className="w-full">
              <p
                onClick={() => {
                  resetFields();
                  setFirstVisibility(!firstVisibility);
                }}
                className="text-base font-semibold mb-2 cursor-pointer gap-x-3 flex items-center sm:text-xl"
              >
                {firstVisibility ? (
                  <IoIosArrowDropdownCircle size={23} color="#1772d2" />
                ) : (
                  <IoIosArrowDroprightCircle size={23} color="#1772d2" />
                )}

                {/* <FaCircleCheck /> */}
                <span className="text-primary  text-base sm:text-xl">
                  Purpose-Built for Healthcare
                </span>
              </p>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  firstVisibility
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {firstVisibility && (
                  <p className="text-left sm:mt-1 text-sm sm:text-xl ml-8 sm:pb-4 sm:mb-1 w-[84%]">
                    Designed to solve the unique challenges of healthcare
                    providers with specialization-specific intelligence.
                  </p>
                )}
              </div>
            </div>
            <div className="w-full">
              <p
                onClick={() => {
                  resetFields();
                  setSecondVisibility(!secondVisibility);
                }}
                className="text-base mb-2 mt-0 flex cursor-pointer items-center gap-x-3 sm:text-lg"
              >
                {secondVisibility ? (
                  <IoIosArrowDropdownCircle size={23} color="#1772d2" />
                ) : (
                  <IoIosArrowDroprightCircle size={23} color="#1772d2" />
                )}
                <span className="text-primary font-semibold cursor-pointer text-base sm:text-xl">
                  Powered by SLMs
                </span>
              </p>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  secondVisibility
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {secondVisibility && (
                  <p className="text-left sm:mt-1 text-sm sm:text-xl ml-8 sm:pb-4 sm:mb-1 w-[84%]">
                    Provides structured and accurate patient engagement across a
                    variety of medical specialties.
                  </p>
                )}
              </div>
            </div>
            <div className="w-full">
              <p
                onClick={() => {
                  resetFields();
                  setThirdVisibility(!thirdVisibility);
                }}
                className="text-base mb-2 cursor-pointer font-semibold mt-0 flex items-center gap-x-3 sm:text-lg"
              >
                {thirdVisibility ? (
                  <IoIosArrowDropdownCircle size={23} color="#1772d2" />
                ) : (
                  <IoIosArrowDroprightCircle size={23} color="#1772d2" />
                )}
                <span className="text-primary cursor-pointer text-base sm:text-xl">
                  Scalable and Flexible
                </span>
              </p>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  thirdVisibility
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {thirdVisibility && (
                  <p className="text-left sm:mt-1 text-sm ml-8 sm:text-xl sm:pb-4 sm:mb-1 w-[84%]">
                    Adapts to healthcare providers of all sizes, from small
                    clinics to large hospital networks.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center sm:justify-end items-center w-full sm:w-1/2">
            <Image
              alt="landing_section_1"
              src={health_care_2}
              className="mx-auto sm:ml-auto w-[300px] sm:w-[400px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
