"use client";
// app/content/page.jsx
import Image from "next/image";
import patient_connect_hero from "../../../assets/features/patient-connect/patient_connect_hero.png";

import patient_outreach_fact1 from "../../../assets/features/patient-outreach/patient_outreach_fact1.jpg";
import patient_outreach_fact2 from "../../../assets/features/patient-outreach/patient_outreach_fact2.jpg";
import patient_outreach_fact3 from "../../../assets/features/patient-outreach/patient_outreach_fact3.jpg";
import patient_outreach_fact4 from "../../../assets/features/patient-outreach/patient_outreach_fact4.jpg";

import smart_consult_step1 from "../../../assets/features/smart-consult/smart_consult_step1.png";
import smart_consult_step2 from "../../../assets/features/smart-consult/smart_consult_step2.png";
import solution_hospital_fact1 from "../../../assets/solutions/hospitals/solution_hospital_fact1.jpg";
import solution_hospital_fact1_2 from "../../../assets/solutions/hospitals/solution_hospital_fact1_2.jpg";
import solution_hospital_fact1_3 from "../../../assets/solutions/hospitals/solution_hospital_fact1_3.jpg";
import solution_hospital_fact1_4 from "../../../assets/solutions/hospitals/solution_hospital_fact1_4.jpg";
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
          What is the{" "}
          <span className="text-primary text-[30px] sm:text-[50px] font-[400] sm:tracking-[1px]">
            Omnichannel
          </span>{" "}
          CareHub ?
        </h1>
        <h3 className="text-lg mt-6 flex items-center justify-center">
          <span className="w-[80%] flex wrap text-start text-sm sm:text-lg">
            The Omnichannel CareHub is a comprehensive, AI-driven solution that
            unifies patient communication across multiple channels. It
            integrates advanced AI agents with powerful tools like conversation
            analytics, rule-based automation, and agent assistance to ensure
            seamless engagement and improved patient satisfaction.
          </span>
        </h3>
      </div>
      <div className="mt-10 sm:mt-20 mb-10 w-[90vw] xl:w-[75vw] rounded-2xl">
        <div className="w-full flex sm:flex-row flex-col gap-8 mt-14">
          <div className="sm:w-1/2 flex flex-col bg-white p-10 rounded-xl relative shadow-md">
            <Image
              src={patient_outreach_fact1}
              alt="landing_testimonial"
              className="rounded-full absolute sm:right-10 top-5 h-[100px] w-[100px]"
            />
            <span className="text-xl mt-20 sm:mt-12">Unified AI Agents</span>
            <p className="mt-5">
              <span className="font-bold text-sm">Voice Agents:</span>{" "}
              <span className="text-sm">
                Utilize automated campaigns and chatbots to efficiently connect
                with diverse patient populations.
              </span>
              <br></br>
              <span className="font-bold text-sm">Chat Agents:</span>{" "}
              <span className="text-sm">
                Engage with patients across chatbots, WhatsApp, and social
                platforms, providing instant responses to questions and guiding
                them through their care journey.
              </span>
              <br></br>
              <span className="font-bold text-sm">
                Personalized Interaction:
              </span>{" "}
              <span className="text-sm">
                AI agents adapt to individual patient needs, leveraging memory
                and context for meaningful conversations.
              </span>
              <br></br>
            </p>
          </div>
          <div className="sm:w-1/2 flex flex-col bg-white p-10 rounded-xl relative shadow-md">
            <Image
              src={patient_outreach_fact2}
              alt="landing_testimonial"
              className="rounded-full absolute sm:right-10 top-5 h-[100px] w-[100px]"
            />
            <span className="text-xl mt-20 sm:mt-12">Unified Agent Assist</span>
            <p className="mt-5">
              <span className="font-bold text-sm">Centralized Interface:</span>{" "}
              <span className="text-sm">
                Give your agents a single platform to manage conversations
                across all channels.
              </span>
              <br></br>
              <span className="font-bold text-sm">
                AI-Powered Recommendations:
              </span>{" "}
              <span className="text-sm">
                Assist agents with suggested responses and actions to resolve
                patient queries faster.
              </span>
              <br></br>
              <span className="font-bold text-sm">
                Productivity Tools:
              </span>{" "}
              <span className="text-sm">
                Automate repetitive tasks, allowing agents to focus on complex
                issues.
              </span>
              <br></br>
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-8 mt-10">
          <div className="sm:w-1/2 flex flex-col bg-white p-10 rounded-xl relative shadow-md">
            <Image
              src={patient_outreach_fact3}
              alt="landing_testimonial"
              className="rounded-full absolute sm:right-10 top-5 h-[100px] w-[100px]"
            />
            <span className="text-xl mt-20 sm:mt-12">
              Conversation Analytics
            </span>
            <p className="mt-5">
              <span className="font-bold text-sm">Actionable Insights:</span>{" "}
              <span className="text-sm">
                Analyze patient interactions to identify trends, gaps, and
                opportunities for improvement.
              </span>
              <br></br>
              <span className="font-bold text-sm">
                Performance Metrics:
              </span>{" "}
              <span className="text-sm">
                Measure key communication metrics, such as resolution time and
                patient satisfaction, to optimize workflows.
              </span>
              <br></br>
              <span className="font-bold text-sm">
                Sentiment Analysis:
              </span>{" "}
              <span className="text-sm">
                Understand patient emotions in conversations to enhance
                engagement and care delivery.
              </span>
              <br></br>
            </p>
          </div>
          <div className="sm:w-1/2 flex flex-col bg-white p-10 rounded-xl relative shadow-md">
            <Image
              src={patient_outreach_fact4}
              alt="landing_testimonial"
              className="rounded-full absolute sm:right-10 top-5 h-[100px] w-[100px]"
            />
            <span className="text-xl mt-20 sm:mt-12">
              Rule Engine for Automation
            </span>
            <p className="mt-5">
              <span className="font-bold text-sm">Workflow Automation:</span>{" "}
              <span className="text-sm">
                Create rules to automate repetitive processes, such as sending
                reminders, escalating urgent queries, or following up with
                patients.
              </span>
              <br></br>
              <span className="font-bold text-sm">
                Customizable Triggers:
              </span>{" "}
              <span className="text-sm">
                Set triggers based on patient actions or conditions to
                streamline operations.
              </span>
              <br></br>
              <span className="font-bold text-sm">
                Consistency and Compliance:
              </span>{" "}
              <span className="text-sm">
                Ensure standardized communication that adheres to healthcare
                regulations.
              </span>
              <br></br>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-[90vw] xl:w-[75vw] mt-12 sm:mt-20 mb-16 sm:mb-24 flex flex-col-reverse sm:flex-row items-center sm:justify-between gap-12 sm:gap-0">
          <div className="flex flex-col items-center sm:items-start w-full sm:w-1/2 text-center sm:text-left">
            <h3 className="text-[30px] sm:text-[45px] xl:text-[50px] mb-6 sm:mb-10">
              Why Choose Prodoc AI's{" "}
              <span className="text-primary text-[30px] sm:text-[45px] xl:text-[50px]">
                Omnichannel
              </span>{" "}
              CareHub ?
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
                  Unified Communication
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
                    Connect with patients seamlessly across multiple channels.
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
                  AI Intelligence
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
                    Leverage advanced AI agents for human-like, personalized
                    interactions.
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
                  Operational Efficiency
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
                    Automate repetitive tasks and optimize workflows.
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
                  Scalable Solutions
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
                    Tailored for healthcare providers of all sizes, from small
                    clinics to large hospital networks.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center sm:justify-end items-center w-full sm:w-1/2">
            <Image
              alt="landing_section_1"
              src={landing_section_1}
              className="mx-auto sm:ml-auto w-[300px] sm:w-[400px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
