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
import solution_hospital_section from "../../../assets/solutions/hospitals/solution_hospital_section.png"

import { useState } from "react";
import solution_hospital_hero from "../../../assets/solutions/hospitals/solution_hospital_hero.png";
import { FaCircleCheck } from "react-icons/fa6";
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
    <section className="flex flex-col items-center justify-center">
      <div className="text-[50px] text-center leading-[68px] mt-32 mb-20  w-[90vw] xl:w-[75vw] flex items-center gap-x-10">
        <div className="text-[50px] flex flex-col w-[50%]">
          <h1 className="font-[400]  text-left">
            Empower Patients and <br />
            <span className="text-primary text-[50px] font-[400]">
              Streamline Operations
            </span>{" "}
          </h1>
          <h3 className="text-lg mt-6 text-left">
            Hospitals face a unique challenge of fostering patient connections
            while managing complex workflows.
            <span className="text-primary mt-6 mb-6">
              {" "}
              Prodoc bridges the gap!
            </span>
            <br />
            <p className="mt-4">
              We empower hospitals to nurture patient relationships through
              AI-powered communication, streamlining workflows for efficient
              care.
            </p>
          </h3>
          <button className="bg-primary w-fit h-fit mt-6 text-base text-white px-8 py-4 rounded-3xl">
            Start Now
          </button>
        </div>
        <div className="w-[50%] bg-red">
          <Image src={solution_hospital_hero} alt="alt" />
        </div>
      </div>

      <div className="w-full flex items-center justify-center bg-white">
        <div className="w-[90vw] xl:w-[75vw]  mb-24 flex flex-col items-center justify-center ">
          <div className="flex gap-10 mt-14 w-full justify-center items-center">
            <div className="w-1/4 flex flex-col items-center justify-center">
              <Image
                src={solution_hospital_fact1}
                alt="landing_testimonial"
                className="rounded-full right-10 top-5 h-[100px] w-[100px]"
              />
              <p className="text-xl text-center mt-4">
                Personalized Patient Communication
              </p>
            </div>
            <div className="w-1/4 flex flex-col items-center justify-center">
              <Image
                src={solution_hospital_fact1_2}
                alt="landing_testimonial"
                className="rounded-full right-10 top-5 h-[100px] w-[100px]"
              />
              <p className="text-xl text-center  mt-4">
                Efficient Interdepartmental Communication
              </p>
            </div>
            <div className="w-1/4 flex flex-col items-center justify-center">
              <Image
                src={solution_hospital_fact1_3}
                alt="landing_testimonial"
                className="rounded-full right-10 top-5 h-[100px] w-[100px]"
              />
              <p className="text-xl text-center  mt-4">
                Targeted Campaigns for <br /> Maximum Impact
              </p>
            </div>
            <div className="w-1/4 flex flex-col items-center justify-center">
              <Image
                src={solution_hospital_fact1_4}
                alt="landing_testimonial"
                className="rounded-full right-10 top-5 h-[100px] w-[100px]"
              />
              <p className="text-xl text-center  mt-4">
                Enhanced Community <br /> Engagement
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="mt-20 mb-20 w-[90vw] xl:w-[75vw] rounded-2xl">
          <h5 className="text-[40px]">
            Prodoc opens the door to <br />
            limitless
            <span className="text-primary text-[40px]"> possibilities</span>
          </h5>
          <div className="w-full flex gap-8 mt-14">
            <div className="w-1/2 flex flex-col bg-white p-10 rounded-xl relative shadow-md">
              <Image
                src={solution_hospital_fact2}
                alt="landing_testimonial"
                className="rounded-full absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">
                AI-powered Patient Engagement
              </span>
              <p className="mt-5">
                Personalize patient journeys with automated appointment
                reminders, pre-admission instructions, post-discharge
                follow-ups, and tailored health education materials – all on
                familiar platforms like WhatsApp.
              </p>
            </div>
            <div className="w-1/2 flex flex-col bg-white p-10 rounded-xl relative shadow-md">
              <Image
                src={solution_hospital_fact2_2}
                alt="landing_testimonial"
                className="rounded-full absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">
                Enhanced Partner Collaboration
              </span>
              <p className="mt-5">
                Facilitate seamless communication between doctors, nurses,
                specialists, and external partners, ensuring coordinated care
                and efficient workflows.
              </p>
            </div>
          </div>
          <div className="w-full flex gap-8 mt-10">
            <div className="w-1/2 flex flex-col bg-white p-10 rounded-xl relative shadow-md">
              <Image
                src={solution_hospital_fact2_3}
                alt="landing_testimonial"
                className="rounded-full absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">
                Community Outreach Made Easy
              </span>
              <p className="mt-5">
                Promote preventative care, wellness programs, and hospital
                events through engaging community outreach initiatives on
                WhatsApp and other popular channels.
              </p>
            </div>
            <div className="w-1/2 flex flex-col bg-white p-10 rounded-xl relative shadow-md">
              <Image
                src={solution_hospital_fact2_4}
                alt="landing_testimonial"
                className="rounded-full absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">
                Improved Patient Satisfaction
              </span>
              <p className="mt-5">
                Nurture patient relationships, address concerns, and gather
                valuable feedback to continuously improve patient experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center bg-white">
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
      </div>
      <div className="w-fullrelative flex items-center justify-center">
        <div className="mt-20 mb-20">
          <div className="">
            <h3 className="text-4xl text-black text-center">
              Empowering Hospitals to Achieve Outstanding Care
              <br />
              <span className="text-2xl font-normal mt-2 block">
                With{" "}
                <span className="text-primary text-2xl">
                  intelligent automation
                </span>{" "}
                that drives operational efficiency and better patient outcomes
              </span>
            </h3>
            <div className="flex items-center justify-center mt-8">
              <div className="bg-primary w-fit text-white px-8 py-4 rounded-3xl">
                Enhance Your Hospital's Care Today
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
