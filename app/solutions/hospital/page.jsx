"use client";

import Image from "next/image";
import solution_hospital_fact1 from "../../../assets/solutions/hospitals/solution_hospital_fact1.jpg";
import solution_hospital_fact1_2 from "../../../assets/solutions/hospitals/solution_hospital_fact1_2.jpg";
import solution_hospital_fact1_3 from "../../../assets/solutions/hospitals/solution_hospital_fact1_3.jpg";
import solution_hospital_fact1_4 from "../../../assets/solutions/hospitals/solution_hospital_fact1_4.jpg";
import solution_hospital_fact2 from "../../../assets/solutions/hospitals/solution_hospital_fact2.jpg";
import solution_hospital_fact2_2 from "../../../assets/solutions/hospitals/solution_hospital_fact2_2.jpg";
import solution_hospital_fact2_3 from "../../../assets/solutions/hospitals/solution_hospital_fact2_3.jpg";
import solution_hospital_fact2_4 from "../../../assets/solutions/hospitals/solution_hospital_fact2_4.jpg";
import solution_hospital_section from "../../../assets/solutions/hospitals/solution_hospital_section.png";

import { useState } from "react";
import solution_hospital_hero from "../../../assets/solutions/hospitals/solution_hospital_hero.png";
import { FaCircleCheck } from "react-icons/fa6";
import Link from "next/link";
// app/content/page.jsx
export default function ForHospital() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (direction) => {
    if (direction === "up") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? steps.length - 1 : prevIndex - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex === steps.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  return (
    <section className="flex flex-col pt-10 items-center justify-center">
      <div className="text-[30px] sm:text-[50px] text-center sm:text-left  sm:leading-[68px] mt-16 sm:mt-32 mb-10 sm:mb-20 w-[90vw] xl:w-[75vw] flex flex-col sm:flex-row items-center sm:items-center gap-y-10 sm:gap-x-10">
        {/* Left Section */}
        <div className="flex flex-col w-full sm:w-[50%] sm:justify-center">
          <h1 className="text-[30px] sm:text-[50px] font-[400] text-left">
            Empower Patients and <br />
            <span className="text-primary text-[30px] sm:text-[50px] font-[400]">
              Streamline Operations
            </span>
          </h1>
          <h3 className=" sm:text-lg mt-4 sm:mt-6 text-left">
            Hospitals face a unique challenge of fostering patient connections
            while managing complex workflows.
            <br />
            <p className="sm:text-lg mt-4">
              We empower hospitals to nurture patient relationships through
              AI-powered communication, streamlining workflows for efficient
              care.
            </p>
          </h3>
          <button className="bg-primary w-fit h-fit mt-6 text-sm sm:text-base text-white px-6 sm:px-8 py-3 sm:py-4 rounded-3xl">
            Start Now
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-[50%]">
          <Image
            src={solution_hospital_hero}
            alt="alt"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="w-full flex items-center justify-center bg-white">
        <div className="w-[90vw] xl:w-[75vw]  mb-24 flex flex-col items-center justify-center ">
          <div className="flex sm:flex-row flex-col gap-10 mt-14 sm:w-full justify-center items-center">
            <div className="sm:w-1/4 flex flex-col items-center justify-center">
              <Image
                src={solution_hospital_fact1}
                alt="landing_testimonial"
                className="rounded-full right-10 top-5 h-[80px] sm:h-[100px] w-[80px] sm:w-[100px]"
              />
              <p className="text-lg text-center mt-4">
                Personalized Patient <br className="sm:hidden"></br>{" "}
                Communication
              </p>
            </div>
            <div className="sm:w-1/4 flex flex-col items-center justify-center">
              <Image
                src={solution_hospital_fact1_2}
                alt="landing_testimonial"
                className="rounded-full right-10 top-5 h-[80px] sm:h-[100px] w-[80px] sm:w-[100px]"
              />
              <p className="text-lg text-center  mt-4">
                Efficient Interdepartmental <br className="sm:hidden"></br> Communication
              </p>
            </div>
            <div className="sm:w-1/4 flex flex-col items-center justify-center">
              <Image
                src={solution_hospital_fact1_3}
                alt="landing_testimonial"
                className="rounded-full right-10 top-5 h-[80px] sm:h-[100px] w-[80px] sm:w-[100px]"
              />
              <p className="text-lg text-center  mt-4">
                Targeted Campaigns for <br /> Maximum Impact
              </p>
            </div>
            <div className="sm:w-1/4 flex flex-col items-center justify-center">
              <Image
                src={solution_hospital_fact1_4}
                alt="landing_testimonial"
                className="rounded-full right-10 top-5 h-[80px] sm:h-[100px] w-[80px] sm:w-[100px]"
              />
              <p className="text-lg text-center  mt-4">
                Enhanced Community <br /> Engagement
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="mt-10 sm:mt-20 sm:mb-20 w-[90vw] xl:w-[75vw] rounded-2xl">
          {/* Heading */}
          <h5 className="text-[30px] sm:text-[40px] xl:text-[50px] text-center">
            Prodoc opens the door to <br />
            limitless
            <span className="text-primary text-[30px] sm:text-[40px] xl:text-[50px]">
              {" "}
              possibilities
            </span>
          </h5>

          {/* First Row */}
          <div className="w-full flex flex-col sm:flex-row gap-8 lg:gap-12 xl:gap-16 mt-14  sm:justify-around">
            {/* Card 1 */}
            <div className="w-full sm:w-1/2  flex flex-col bg-white p-10 lg:p-12 rounded-xl relative shadow-lg">
              <Image
                src={solution_hospital_fact2}
                alt="landing_testimonial"
                className="rounded-full absolute sm:right-10 top-5 h-[80px] sm:h-[100px] lg:h-[120px] w-[80px] sm:w-[100px] lg:w-[120px]"
              />
              <span className="text-xl sm:text-2xl  mt-16 sm:mt-24">
                AI-powered Patient Engagement
              </span>
              <p className="mt-5 text-base ">
                Personalize patient journeys with automated appointment
                reminders, pre-admission instructions, post-discharge
                follow-ups, and tailored health education materials – all on
                familiar platforms like WhatsApp.
              </p>
            </div>

            {/* Card 2 */}
            <div className="w-full sm:w-1/2  flex flex-col bg-white p-10 lg:p-12 rounded-xl relative shadow-lg">
              <Image
                src={solution_hospital_fact2_2}
                alt="landing_testimonial"
                className="rounded-full absolute sm:right-10 top-5 h-[80px] sm:h-[100px] lg:h-[120px] w-[80px] sm:w-[100px] lg:w-[120px]"
              />
              <span className="text-xl sm:text-2xl  mt-16 sm:mt-24">
                Enhanced Partner Collaboration
              </span>
              <p className="mt-5 text-base">
                Facilitate seamless communication between doctors, nurses,
                specialists, and external partners, ensuring coordinated care
                and efficient workflows.
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div className="w-full flex flex-col sm:flex-row gap-8 lg:gap-12 xl:gap-16 mt-10 sm:justify-around">
            {/* Card 3 */}
            <div className="w-full sm:w-1/2  flex flex-col bg-white p-10 lg:p-12 rounded-xl relative shadow-lg">
              <Image
                src={solution_hospital_fact2_3}
                alt="landing_testimonial"
                className="rounded-full absolute sm:right-10 top-5 h-[80px] sm:h-[100px] lg:h-[120px] w-[80px] sm:w-[100px] lg:w-[120px]"
              />
              <span className="text-xl sm:text-2xl  mt-16 sm:mt-24">
                Community Outreach Made Easy
              </span>
              <p className="mt-5 text-base ">
                Promote preventative care, wellness programs, and hospital
                events through engaging community outreach initiatives on
                WhatsApp and other popular channels.
              </p>
            </div>

            {/* Card 4 */}
            <div className="w-full sm:w-1/2  flex flex-col bg-white p-10 lg:p-12 rounded-xl relative shadow-lg">
              <Image
                src={solution_hospital_fact2_4}
                alt="landing_testimonial"
                className="rounded-full absolute sm:right-10 top-5 h-[80px] sm:h-[100px] lg:h-[120px] w-[80px] sm:w-[100px] lg:w-[120px]"
              />
              <span className="text-xl sm:text-2xl  mt-16 sm:mt-24">
                Improved Patient Satisfaction
              </span>
              <p className="mt-5 text-base">
                Nurture patient relationships, address concerns, and gather
                valuable feedback to continuously improve patient experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full flex items-center justify-center bg-white">
        <div className="w-[90vw] xl:w-[75vw] mt-20 mb-24 flex items-center justify-between ">
          <div className="flex items-start flex-col justify-start w-1/2">
            <h3 className="text-[50px] mb-10">
              Transformative Benefits <br /> for Hospitals
            </h3>
            <p className="text-lg flex items-center gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Drastically Lower Readmission Rates
            </p>
            <p className="text-lg mt-6 flex items-center gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Boosted Financial Performance
            </p>
            <p className="text-lg mt-6 flex items-center gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Seamless Collaboration Across Teams
            </p>
            <p className="text-lg mt-6 flex items-center gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Superior Patient Care & Outcomes
            </p>
          </div>

          <div className="flex justify-end items-end w-1/2">
            <Image
              alt="solution_hospital_section"
              src={solution_hospital_section}
              className="ml-auto w-[400px] h-auto object-contain"
            />
          </div>
        </div>
      </div> */}
      <div className="w-full flex items-center justify-center bg-white ">
        <div className="w-[90vw] xl:w-[75vw] mt-20 mb-10 sm:mb-24 flex flex-col lg:flex-row items-center lg:items-start justify-between">
          {/* Text Section */}
          <div className="flex items-start flex-col justify-start w-full lg:w-1/2">
            <h3 className="text-[30px] sm:text-[50px] mx-auto sm:mx-0 mb-6 sm:mb-10 text-center sm:text-left">
              Transformative Benefits <br /> for Hospitals
            </h3>
            <p className="text-base sm:text-lg flex items-center gap-x-3 text-center lg:text-left">
              <FaCircleCheck className="text-lg" color="#1772d2" />
              Drastically Lower Readmission Rates
            </p>
            <p className="text-base sm:text-lg mt-4 lg:mt-6 flex items-center gap-x-3 text-center lg:text-left">
              <FaCircleCheck className="text-lg" color="#1772d2" />
              Boosted Financial Performance
            </p>
            <p className="text-base sm:text-lg mt-4 lg:mt-6 flex items-center gap-x-3 text-center lg:text-left">
              <FaCircleCheck className="text-lg" color="#1772d2" />
              Seamless Collaboration Across Teams
            </p>
            <p className="text-base sm:text-lg mt-4 lg:mt-6 flex items-center gap-x-3 text-center lg:text-left">
              <FaCircleCheck className="text-lg" color="#1772d2" />
              Superior Patient Care & Outcomes
            </p>
          </div>

          {/* Image Section */}
          <div className="hidden mt-10 lg:mt-0 sm:flex justify-center items-center w-full lg:w-1/2">
            <Image
              alt="solution_hospital_section"
              src={solution_hospital_section}
              className="w-[300px] sm:w-[400px] h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="w-fullrelative flex items-center justify-center">
        <div className="mt-10 mb-10 sm:mt-20 sm:mb-20">
          <div className="">
            <h3 className="text-2xl sm:text-4xl text-black text-center leading-10">
              Empowering Hospitals to <br className="sm:hidden"></br> Achieve
              Outstanding Care
              <br />
              <span className="text-2xl  sm:text-4xl font-normal sm:mt-2 hidden sm:block">
                With{" "}
                <span className="text-primary text-2xl sm:text-4xl">
                  intelligent automation
                </span>{" "}
                that <br></br> drives operational efficiency
                <br className="sm:hidden"></br> and better patient outcomes
              </span>
            </h3>
            <div className="flex items-center justify-center mt-8">
              <div className="bg-primary w-fit text-white px-8 py-4 rounded-3xl">
                <Link href={"/book-a-demo"}>Book a Demo</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
