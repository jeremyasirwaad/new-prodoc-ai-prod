"use client";

import Image from "next/image";
import patient_connect_fact1 from "../../../assets/features/patient-connect/patient_connect_fact_1.jpg";
import patient_connect_fact2 from "../../../assets/features/patient-connect/patient_connect_fact_2.jpg";
import patient_connect_fact3 from "../../../assets/features/patient-connect/patient_connect_fact_3.jpg";
import patient_connect_fact4 from "../../../assets/features/patient-connect/patient_connect_fact_4.jpg";
import patient_step_1 from "../../../assets/features/patient-connect/patient_step_1.png";
import patient_step_2 from "../../../assets/features/patient-connect/patient_step_2.png";
import patient_step_3 from "../../../assets/features/patient-connect/patient_step_3.png";
import patient_step_4 from "../../../assets/features/patient-connect/patient_step_4.png";

import Link from "next/link";
import { useState } from "react";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";
import patient_connect_hero from "../../../assets/features/patient-connect/patient_connect_hero.png";
// app/content/page.jsx
export default function PatientConnect() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const steps = [
    {
      image: patient_step_1,
      title: "Step 1: Business Setup",
      description:
        "Seamlessly integrate your business number with Prodoc's Patient Engagement Platform and receive official verification for enhanced credibility and trust.",
    },
    {
      image: patient_step_2,
      title: "Step 2: AI powered Patient interactions",
      description:
        "Our advanced AI assistant, customized for your healthcare facility, provides instant 24/7 responses to patient inquiries about appointments, services, and more. Deliver reliable information when patients need it most.",
    },
    {
      image: patient_step_3,
      title: "Step 3: Analyse & Monitor",
      description:
        "Access comprehensive analytics through our intuitive dashboard. Track patient interactions, response times, and engagement metrics to continuously improve your patient communication strategy.",
    },
    {
      image: patient_step_4,
      title: "Step 4: Interact & Convert",
      description:
        "Our intelligent system automatically identifies and qualifies promising conversations into leads, assigning priority scores to help you focus on the most valuable opportunities for your practice.",
    },
  ];

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
      <div className="sm:text-[50px] text-center  sm:leading-[68px] mt-32 sm:mt-32 mb-20  w-[90vw] xl:w-[75vw] flex flex-col sm:flex-row sm:items-center gap-10 sm:gap-x-10">
        <div className="text-[40] flex flex-col sm:w-[50%]">
          <h1 className="font-[400] text-center text-[30px] sm:text-[50px]  sm:text-left ">
            Enhance{" "}
            <span className="text-primary text-[30px] sm:text-[50px] font-[400]">
              Patient Experience
            </span>{" "}
            <br />
            with Smart Solutions
          </h1>
          <h3 className="text-lg mt-6 text-center sm:text-left">
            Transform your outpatient care with Prodoc AI's innovative platform{" "}
            designed to go beyond the limitations of traditional EHR portals.
          </h3>
          <button className="bg-primary mx-auto sm:mx-0 w-fit h-fit mt-6 text-base text-white px-8 py-4  sm:px-8 sm:py-4 rounded-3xl">
            Start Now
          </button>
        </div>
        <div className="mt-8 sm:w-[50%] bg-red">
          <Image src={patient_connect_hero} alt="alt" />
        </div>
      </div>

      {/* <div className="w-full bg-[#e9f4ff] flex items-center justify-center">
        <div className="mt-16 mb-28 w-[90vw] xl:w-[75vw] flex flex-col gap-y-28">
          <div className="relative flex flex-col items-center">
            <div className="flex items-center justify-center">
              <div className="w-[50%] bg-red flex items-center justify-center">
                <Image src={steps[0].image} alt="alt" />
              </div>
              <div className="text-[50px] flex flex-col w-[50%] ml-10">
                <h1 className="font-[400]  text-left">{steps[0].title}</h1>
                <h3 className="text-lg mt-6 text-left">
                  {steps[0].description}
                </h3>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="flex flex-row-reverse items-center justify-center">
              <div className="w-[50%] bg-red flex items-center justify-center">
                <Image src={steps[1].image} alt="alt" />
              </div>
              <div className="text-[50px] flex flex-col w-[50%]  mr-10">
                <h1 className="font-[400]  text-left">{steps[1].title}</h1>
                <h3 className="text-lg mt-6 text-left">
                  {steps[1].description}
                </h3>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="flex items-center justify-center">
              <div className="w-[50%] bg-red flex items-center justify-center">
                <Image src={steps[2].image} alt="alt" />
              </div>
              <div className="text-[50px] flex flex-col w-[50%] ml-10">
                <h1 className="font-[400]  text-left">{steps[2].title}</h1>
                <h3 className="text-lg mt-6 text-left">
                  {steps[2].description}
                </h3>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <div className="flex flex-row-reverse items-center justify-center">
              <div className="w-[50%] bg-red  flex items-center justify-center">
                <Image src={steps[3].image} alt="alt" />
              </div>
              <div className="text-[50px] flex flex-col w-[50%]  mr-10">
                <h1 className="font-[400]  text-left">{steps[3].title}</h1>
                <h3 className="text-lg mt-6 text-left">
                  {steps[3].description}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="w-full bg-white flex items-center justify-center">
        <div className="mt-10 mb-20 w-[90vw] xl:w-[75vw] flex flex-col gap-y-12 sm:gap-y-20">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center justify-center`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-[50%] bg-red flex items-center justify-center mb-6 lg:mb-0">
                  <Image
                    src={step.image}
                    alt="alt"
                    className="w-[80%] sm:w-[70%]"
                  />
                </div>
                {/* Text Section */}
                <div className="text-[30px] sm:text-[40px] lg:text-[50px] flex flex-col w-full lg:w-[50%] px-4 lg:px-10">
                  <h1 className="font-[400] text-center lg:text-left">
                    {step.title}
                  </h1>
                  <h3 className="text-base sm:text-lg mt-4 lg:mt-6 text-center lg:text-left">
                    {step.description}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroller End */}

      {/* <div className="w-full flex items-center justify-center">
        <div className="mt-20 mb-20 w-[90vw] xl:w-[75vw] rounded-2xl">
          <h5 className="text-[40px]">
            Empowers you to deliver <br /> exceptional
            <span className="text-primary text-[40px]"> outpatient care</span>
          </h5>
          <div className="w-full flex gap-8 mt-14">
            <div className="w-1/2 flex flex-col bg-[#e9f4ff] p-10 rounded-xl relative shadow-md">
              <Image
                src={patient_connect_fact1}
                alt="landing_testimonial"
                className="rounded-full absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">
                Reduce Calls to Your Call Center
              </span>
              <p className="mt-5">
                Automate routine tasks like appointment scheduling and
                prescription refills, freeing up staff time for more complex
                needs.
              </p>
            </div>
            <div className="w-1/2 flex flex-col bg-[#e9f4ff] p-10 rounded-xl relative shadow-md">
              <Image
                src={patient_connect_fact3}
                alt="landing_testimonial"
                className="rounded-full absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">
                Improve Post-Discharge Follow-Up
              </span>
              <p className="mt-5">
                Schedule automated reminders and check-ins to ensure patients
                adhere to treatment plans and recovery protocols.
              </p>
            </div>
          </div>

          <div className="w-full flex gap-8 mt-10">
            <div className="w-1/2 flex flex-col bg-[#e9f4ff] p-10 rounded-xl relative shadow-md">
              <Image
                src={patient_connect_fact4}
                alt="landing_testimonial"
                className="rounded-full absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">
                Streamline Patient Onboarding
              </span>
              <p className="mt-5">
                Simplify the intake process with digital forms, reducing
                paperwork and expediting care initiation.
              </p>
            </div>
            <div className="w-1/2 flex flex-col bg-[#e9f4ff] p-10 rounded-xl relative shadow-md">
              <Image
                src={patient_connect_fact2}
                alt="landing_testimonial"
                className="rounded-full absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">Close Gaps in Care</span>
              <p className="mt-5">
                Proactively identify and address potential issues, preventing
                complications and improving overall health outcomes.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="w-full flex items-center justify-center">
        <div className="mt-10 mb-10 w-[90vw] xl:w-[75vw] rounded-2xl">
          {/* Heading */}
          <h5 className="text-[28px] sm:text-[36px] lg:text-[40px] text-center">
            Empowers you to <br className="sm:hidden"></br> deliver  exceptional <br className="sm:hidden" />
            <span className="text-primary text-[28px] sm:text-[36px] lg:text-[40px]">
              {" "}
              outpatient care
            </span>
          </h5>

          {/* First Row */}
          <div className="w-full flex flex-col sm:flex-row gap-8 mt-10">
            <div className="w-full sm:w-1/2 flex flex-col bg-white p-6 sm:p-10 rounded-xl relative shadow-md">
              <Image
                src={patient_connect_fact1}
                alt="landing_testimonial"
                className="rounded-full absolute sm:right-10 top-5 h-[80px] w-[80px] sm:h-[100px] sm:w-[100px]"
              />
              <span className="text-lg sm:text-xl mt-20 sm:mt-12 text-center sm:text-left">
                Reduce Calls to Your Call Center
              </span>
              <p className="mt-5 text-sm sm:text-base text-center sm:text-left">
                Automate routine tasks like appointment scheduling and
                prescription refills, freeing up staff time for more complex
                needs.
              </p>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col bg-white  p-6 sm:p-10 rounded-xl relative shadow-md">
              <Image
                src={patient_connect_fact3}
                alt="landing_testimonial"
                className="rounded-full absolute sm:right-10 top-5 h-[80px] w-[80px] sm:h-[100px] sm:w-[100px]"
              />
              <span className="text-lg sm:text-xl mt-20 sm:mt-12 text-center sm:text-left">
                Improve Post-Discharge Follow-Up
              </span>
              <p className="mt-5 text-sm sm:text-base text-center sm:text-left">
                Schedule automated reminders and check-ins to ensure patients
                adhere to treatment plans and recovery protocols.
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div className="w-full flex flex-col sm:flex-row gap-8 mt-10">
            <div className="w-full sm:w-1/2 flex flex-col bg-white  p-6 sm:p-10 rounded-xl relative shadow-md">
              <Image
                src={patient_connect_fact4}
                alt="landing_testimonial"
                className="rounded-full absolute sm:right-10 top-5 h-[80px] w-[80px] sm:h-[100px] sm:w-[100px]"
              />
              <span className="text-lg sm:text-xl mt-20 sm:mt-12 text-center sm:text-left">
                Streamline Patient Onboarding
              </span>
              <p className="mt-5 text-sm sm:text-base text-center sm:text-left">
                Simplify the intake process with digital forms, reducing
                paperwork and expediting care initiation.
              </p>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col bg-white  p-6 sm:p-10 rounded-xl relative shadow-md">
              <Image
                src={patient_connect_fact2}
                alt="landing_testimonial"
                className="rounded-full absolute left-50 sm:right-10 top-5 h-[80px] w-[80px] sm:h-[100px] sm:w-[100px]"
              />
              <span className="text-lg sm:text-xl mt-20 sm:mt-12 text-center sm:text-left">
                Close Gaps in Care
              </span>
              <p className="mt-5 text-sm sm:text-base text-center sm:text-left">
                Proactively identify and address potential issues, preventing
                complications and improving overall health outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#e9f4ff]  relative flex items-center justify-center">
        <div className="mt-10 mb-10 sm:mt-20 sm:mb-20">
          <div className="">
            <h3 className="text-[25px] sm:text-4xl text-black text-center">
              Empowers you to deliver exceptional outpatient care
              <br  />
              <span className="text-[25px] sm:text-4xl font-normal sm:mt-2 block">
                With{" "}
                <span className="text-primary text-[25px] sm:text-4xl">
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
