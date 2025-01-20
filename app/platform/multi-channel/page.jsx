"use client";
// app/content/page.jsx
import Image from "next/image";
import patient_connect_hero from "../../../assets/features/patient-connect/patient_connect_hero.png";
import smart_consult_hero from "../../../assets/features/smart-consult/smart_consult_hero.jpg";

import smart_consult_step1 from "../../../assets/features/smart-consult/smart_consult_step1.png";
import smart_consult_step2 from "../../../assets/features/smart-consult/smart_consult_step2.png";
import solution_hospital_fact1 from "../../../assets/solutions/hospitals/solution_hospital_fact1.jpg";
import solution_hospital_fact1_2 from "../../../assets/solutions/hospitals/solution_hospital_fact1_2.jpg";
import solution_hospital_fact1_3 from "../../../assets/solutions/hospitals/solution_hospital_fact1_3.jpg";
import solution_hospital_fact1_4 from "../../../assets/solutions/hospitals/solution_hospital_fact1_4.jpg";
import patient_connect_fact1 from "../../../assets/features/patient-connect/patient_connect_fact_1.jpg";
import patient_connect_fact2 from "../../../assets/features/patient-connect/patient_connect_fact_2.jpg";
import patient_connect_fact3 from "../../../assets/features/patient-connect/patient_connect_fact_3.jpg";
import patient_connect_fact4 from "../../../assets/features/patient-connect/patient_connect_fact_4.jpg";
import health_care_pg3 from "../../../assets/platform/health_care_pg3.png";
import landing_section_1 from "../../../assets/landing_section_1.png";

import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useState } from "react";

export default function PatientConnect() {
  const [firstVisibility, setFirstVisibility] = useState(true);
  const [secondVisibility, setSecondVisibility] = useState(false);
  const [thirdVisibility, setThirdVisibility] = useState(false);
  const [fourVisibility, setFourVisibility] = useState(false);
  const [fiveVisibility, setFiveVisibility] = useState(false);

  const resetFields = () => {
    setFirstVisibility(false);
    setSecondVisibility(false);
    setThirdVisibility(false);
    setFourVisibility(false);
    setFiveVisibility(false);
  };
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="sm:text-[50px] text-center  sm:leading-[68px] mt-32 sm:mt-32 mb-20  w-[90vw] xl:w-[75vw] flex flex-col sm:flex-row sm:items-center gap-10 sm:gap-x-10">
        <div className="text-[40] flex flex-col sm:w-[50%]">
          <p className="font-[400] text-center text-[30px] sm:text-[50px]  sm:text-left ">
            Seamless, AI-Powered Engagement Across Every Patient Touchpoint{" "}
            {/* <span className="text-primary text-[30px] sm:text-[50px] ">
              Care Channels
            </span> */}
          </p>
          <h4 className="sm:text-lg text-sm mt-6 text-center sm:text-left">
            Prodoc AI's Omnichannel CareHub integrates intelligent AI agents
            with unified communication tools to deliver personalized, efficient,
            and consistent care across voice, chat, WhatsApp, and beyond.
          </h4>
          <button className="bg-primary mx-auto sm:mx-0 w-fit h-fit mt-6 text-base text-white px-8 py-4  sm:px-8 sm:py-4 rounded-3xl">
            Schedule a Demo
          </button>
        </div>
        <div className="mt-8 sm:w-[50%] ">
          <Image src={patient_connect_hero} alt="alt" />
        </div>
      </div>
      <div className="text-[30px] sm:text-[50px] text-center sm:leading-[68px] mt-32 sm:mt-12 sm:h-[204px] p-2">
        <h1 className="font-[400] sm:tracking-[1px]">
          What Are{" "}
          <span className="text-primary text-[30px] sm:text-[50px] font-[400] sm:tracking-[1px]">
            Care Channels
          </span>{" "}
          ?
        </h1>
        <h3 className="text-lg mt-6 flex items-center justify-center">
          <span className="w-[80%] flex wrap text-start text-sm sm:text-lg">
            Prodoc AI's Care Channels enable healthcare providers to connect
            with patients across multiple platforms. From voice calls to
            WhatsApp chats and web-bots, the channels are designed to provide
            real-time, personalized communication tailored to individual patient
            needs, ensuring no patient is left behind.
          </span>
        </h3>
      </div>

      <div className="relative flex flex-col p-20 items-center">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <div className="w-full sm:w-[50%] bg-red flex items-center justify-center mb-6 sm:mb-0">
            <Image
              src={smart_consult_step1}
              alt="alt"
              className="w-[100%] sm:w-auto"
            />
          </div>
          <div className="text-[30px] sm:text-[50px] flex flex-col w-full sm:w-[50%] sm:ml-14">
            <h1 className="font-[400] sm:text-left">Voice</h1>
            <p className="text-sm sm:text-lg mt-4 sm:mt-6  sm:text-left">
              {" "}
              <span className="font-bold text-sm sm:text-lg">
                AI-Powered Conversations:
              </span>{" "}
              Handle patient calls with human-like interactions for queries,
              scheduling, and follow-ups.<br></br>
              <br></br>
              <span className="font-bold text-sm sm:text-lg">
                Inbound & Outbound Support:
              </span>{" "}
              Manage both incoming and proactive outreach calls to engage
              patients effectively<br></br>
              <br></br>
              <span className="font-bold text-sm sm:text-lg">
                Efficient Query Resolution:
              </span>{" "}
              Provide instant answers, reducing wait times and improving
              satisfaction.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col p-20 items-center">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <div className="text-[30px] sm:text-[50px] flex flex-col w-full sm:w-[50%] sm:ml-14">
            <h1 className="font-[400] sm:text-left">Web-Bot</h1>
            <p className="text-sm sm:text-lg mt-4 sm:mt-6    sm:text-left">
              {" "}
              <span className="font-bold text-lg">24/7 Availability:</span>{" "}
              Offer round-the-clock support for website visitors with
              intelligent chatbots.<br></br>
              <br></br>
              <span className="font-bold text-lg">
                Interactive Guidance:
              </span>{" "}
              Assist patients in navigating services, booking appointments, and
              accessing health information.<br></br>
              <br></br>
              <span className="font-bold text-lg">
                Personalized Engagement:
              </span>{" "}
              Tailor responses based on patient history and preferences.
            </p>
          </div>
          <div className="w-full sm:w-[50%] bg-red flex items-center justify-center mb-6 sm:mb-0">
            <Image
              src={smart_consult_step1}
              alt="alt"
              className="w-[100%] sm:w-auto"
            />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col p-20 items-center">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <div className="w-full sm:w-[50%] bg-red flex items-center justify-center mb-6 sm:mb-0">
            <Image
              src={smart_consult_step1}
              alt="alt"
              className="w-[100%] sm:w-auto"
            />
          </div>
          <div className="text-[30px] sm:text-[50px] flex flex-col w-full sm:w-[50%] sm:ml-14">
            <h1 className="font-[400] sm:text-left">WhatsApp</h1>
            <p className="text-sm sm:text-lg mt-4 sm:mt-6   sm:text-left">
              {" "}
              <span className="font-bold text-lg">Instant Messaging:</span>{" "}
              Engage patients on WhatsApp with secure, real-time communication.
              <br></br>
              <br></br>
              <span className="font-bold text-lg">
                Appointment Reminders:
              </span>{" "}
              Send automated reminders and follow-ups to reduce no-shows.
              <br></br>
              <br></br>
              <span className="font-bold text-lg">
                Rich Media Support:
              </span>{" "}
              Share images, documents, and videos to enhance patient
              understanding.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col p-20 items-center">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <div className="text-[30px] sm:text-[50px] flex flex-col w-full sm:w-[50%] sm:ml-14">
            <h1 className="font-[400] sm:text-left">Chat Clients</h1>
            <p className="text-sm sm:text-lg mt-4 sm:mt-6    sm:text-left">
              {" "}
              <span className="font-bold text-lg">
                Multi-Platform Integration:
              </span>{" "}
              Connect with patients on popular chat platforms like Slack,
              Microsoft Teams, and Telegram.<br></br>
              <br></br>
              <span className="font-bold text-lg">
                Real-Time Assistance:
              </span>{" "}
              Offer instant responses to queries for better accessibility.
              <br></br>
              <br></br>
              <span className="font-bold text-lg">
                Consistent Experience:
              </span>{" "}
              Maintain seamless communication across chat applications.
            </p>
          </div>
          <div className="w-full sm:w-[50%] bg-red flex items-center justify-center mb-6 sm:mb-0">
            <Image
              src={smart_consult_step1}
              alt="alt"
              className="w-[100%] sm:w-auto"
            />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col p-20 items-center">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <div className="w-full sm:w-[50%] bg-red flex items-center justify-center mb-6 sm:mb-0">
            <Image
              src={smart_consult_step1}
              alt="alt"
              className="w-[100%] sm:w-auto"
            />
          </div>
          <div className="text-[30px] sm:text-[50px] flex flex-col w-full sm:w-[50%] sm:ml-14">
            <h1 className="font-[400] sm:text-left">Social Platforms</h1>
            <p className="text-sm sm:text-lg mt-4 sm:mt-6   sm:text-left">
              {" "}
              <span className="font-bold text-lg">Broader Reach:</span> Engage
              with patients on platforms like Facebook Messenger and Instagram.
              <br></br>
              <br></br>
              <span className="font-bold text-lg">
                Proactive Interaction:
              </span>{" "}
              Respond to inquiries, share updates, and provide support directly
              through social media.<br></br>
              <br></br>
              <span className="font-bold text-lg">Brand Visibility:</span>{" "}
              Enhance your presence and accessibility by leveraging popular
              social platforms.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <div className=" mb-20 w-[90vw] xl:w-[75vw] rounded-2xl">
          {/* Heading */}
          <h5 className="text-[28px] sm:text-[36px] lg:text-[40px] text-center">
            How<br className="sm:hidden"></br> <br className="sm:hidden" />
            it works ?
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
                Integrate
              </span>
              <p className="mt-5 text-sm sm:text-base text-center sm:text-left">
                Connect your preferred communication channels seamlessly with
                Prodoc AI.
              </p>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col bg-white  p-6 sm:p-10 rounded-xl relative shadow-md">
              <Image
                src={patient_connect_fact3}
                alt="landing_testimonial"
                className="rounded-full absolute sm:right-10 top-5 h-[80px] w-[80px] sm:h-[100px] sm:w-[100px]"
              />
              <span className="text-lg sm:text-xl mt-20 sm:mt-12 text-center sm:text-left">
                Engage
              </span>
              <p className="mt-5 text-sm sm:text-base text-center sm:text-left">
                Use AI-powered tools to interact with patients in real time
                across voice, web, WhatsApp, and more.
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
                Analyze
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

      <div className="w-full flex  items-center justify-center bg-[#e9f4ff]">
        <div className="w-[90vw] xl:w-[75vw]  mb-24 flex flex-col items-center justify-center ">
          <div className="flex sm:flex-row flex-col gap-10 mt-14 sm:w-full justify-center items-center">
            <div className="sm:w-1/4 flex flex-col items-center justify-center">
              <Image
                src={solution_hospital_fact1}
                alt="landing_testimonial"
                className="rounded-full right-10 top-5 h-[80px] sm:h-[100px] w-[80px] sm:w-[100px]"
              />
              <p className="text-sm text-center mt-4">
                <span className="font-bold text-sm">Personalized Care</span>{" "}
                <br></br>
                <br className="sm:hidden"></br>
                <span className="text-sm">
                  Leverage AI to provide tailored responses and proactive
                  communication, improving patient satisfaction.
                </span>
              </p>
            </div>
            <div className="sm:w-1/4 flex flex-col items-center justify-center">
              <Image
                src={solution_hospital_fact1_2}
                alt="landing_testimonial"
                className="rounded-full right-10 top-5 h-[80px] sm:h-[100px] w-[80px] sm:w-[100px]"
              />
              <p className="text-sm text-center mt-4">
                <span className="font-bold text-sm">Accessibility</span>{" "}
                <br></br>
                <br className="sm:hidden"></br>
                <span className="text-sm">
                  Meet patients where they are, from phone calls to social
                  media, ensuring everyone has access to the care they need.
                </span>
              </p>
            </div>
            <div className="sm:w-1/4 flex flex-col items-center justify-center">
              <Image
                src={solution_hospital_fact1_3}
                alt="landing_testimonial"
                className="rounded-full right-10 top-5 h-[80px] sm:h-[100px] w-[80px] sm:w-[100px]"
              />
              <p className="text-sm text-center mt-4">
                <span className="font-bold text-sm">Efficiency</span> <br></br>
                <br className="sm:hidden"></br>
                <span className="text-sm">
                  Automate responses and tasks across channels to reduce
                  workload and streamline operations.
                </span>
              </p>
            </div>
            <div className="sm:w-1/4 flex flex-col items-center justify-center">
              <Image
                src={solution_hospital_fact1_4}
                alt="landing_testimonial"
                className="rounded-full right-10 top-5 h-[80px] sm:h-[100px] w-[80px] sm:w-[100px]"
              />
              <p className="text-sm text-center mt-4">
                <span className="font-bold text-sm">Real-Time Engagement</span>{" "}
                <br></br>
                <br className="sm:hidden"></br>
                <span className="text-sm">
                  Provide immediate assistance and support, ensuring timely care
                  and improved patient outcomes.
                </span>
              </p>
            </div>
            <div className="sm:w-1/4 flex flex-col items-center justify-center">
              <Image
                src={solution_hospital_fact1_4}
                alt="landing_testimonial"
                className="rounded-full right-10 top-5 h-[80px] sm:h-[100px] w-[80px] sm:w-[100px]"
              />
              <p className="text-sm text-center mt-4">
                <span className="font-bold text-sm">
                  Seamless Omnichannel Communication
                </span>{" "}
                <br></br>
                <br className="sm:hidden"></br>
                <span className="text-sm">
                  Ensure consistent engagement by unifying patient interactions
                  across multiple platforms.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="w-[90vw] xl:w-[75vw] mt-12 sm:mt-20 mb-16 sm:mb-24 flex flex-col-reverse sm:flex-row items-center sm:justify-between gap-12 sm:gap-0">
          <div className="flex flex-col items-center sm:items-start w-full sm:w-1/2 text-center sm:text-left">
            <h3 className="text-[30px] sm:text-[45px] xl:text-[50px] mb-6 sm:mb-10">
              Why Choose Prodoc AI's{" "}
              <span className="text-primary text-[30px] sm:text-[45px] xl:text-[50px]">
                Care Channels
              </span>{" "}
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
                  Multi-Platform Support
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
                    Engage patients across voice, web, WhatsApp, and social
                    platforms effortlessly.
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
                  AI-Driven Interactions
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
                    Ensure personalized, context-aware conversations on every
                    channel.
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
                  Scalable Solutions
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
                    Adapt to the needs of small clinics and large hospital
                    networks alike.
                  </p>
                )}
              </div>
            </div>

            <div className="w-full">
              <p
                onClick={() => {
                  resetFields();
                  setFourVisibility(!fourVisibility);
                }}
                className="text-base mb-2 mt-0 cursor-pointer flex items-center gap-x-3 sm:text-lg"
              >
                {fourVisibility ? (
                  <IoIosArrowDropdownCircle size={23} color="#1772d2" />
                ) : (
                  <IoIosArrowDroprightCircle size={23} color="#1772d2" />
                )}
                <span className="text-primary font-semibold cursor-pointer text-base sm:text-xl">
                  Improved Patient Satisfaction
                </span>
              </p>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  fourVisibility
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {fourVisibility && (
                  <p className="text-left sm:mt-1 text-sm ml-8 sm:text-xl sm:pb-4 sm:mb-1 w-[84%]">
                    Deliver consistent, accessible care that meets patients
                    where they are.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center sm:justify-end items-center w-full sm:w-1/2">
            <Image
              alt="landing_section_1"
              src={health_care_pg3}
              className="mx-auto sm:ml-auto w-[300px] sm:w-[400px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
