"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { IoMdArrowForward } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { IoIosArrowDroprightCircle } from "react-icons/io";

import { FaCircleCheck } from "react-icons/fa6";
// import { plugins_logos, slider_logo } from "@/assets/logos";
import { slider_logo } from "@/assets/logos";
import landing_section_1 from "../assets/landing_section_1.png";
import landing_section_2_4 from "../assets/landing_section_2_4.png";
import landing_testimonial_1 from "../assets/landing_testimonial_1.png";
import landing_testimonial_2 from "../assets/landing_testimonial_2.png";
import landing_testimonial_3 from "../assets/landing_testimonial_3.png";
import landing_testimonial_4 from "../assets/landing_testimonial_4.jpg";
import landing_certification_meta from "../assets/landing_certification_meta.png";
import landing_certification_hipaa from "../assets/landing_certification_hipaa.png";
import landing_certification_iso from "../assets/landing_certification_iso.png";
import landing_certification_dpdpa from "../assets/landing_certification_dpdpa.png";
import patient_connect_hero from "../assets/features/patient-connect/patient_connect_hero.png";
import landing_section_2_patientoutreach from "../assets/landing_section_2_patientoutreach.png";
import landing_section_3 from "../assets/landing_section_3.jpg";
import landing_hero_3 from "../assets/Landing_hero_3.png";
import landing_page from "../assets/landing_page.jpg";
import landing_hero from "../assets/landing_hero.jpg";

import { plugin_logos } from "@/assets/logos";

import { Divider, Input, Form, Button } from "antd";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";

const firstMarqueePluginLogos = plugin_logos.slice(0, 6);
const secondMarqueePluginLogos = plugin_logos.slice(6);

export default function LandingPage() {
  const [form] = Form.useForm();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [firstVisibility, setFirstVisibility] = useState(false);
  const [secondVisibility, setSecondVisibility] = useState(false);
  const [thirdVisibility, setThirdVisibility] = useState(true);
  const [fourVisibility, setFourVisibility] = useState(false);

  const [transformValue, setTransformValue] = useState(currentIndex * 85);

  useEffect(() => {
    const updateTransform = () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        setTransformValue(currentIndex * 110); // For small screens
      } else if (window.matchMedia("(min-width: 1024px)").matches) {
        setTransformValue(currentIndex * 85); // For large screens
      } else {
        setTransformValue(currentIndex * 70); // For medium screens
      }
    };

    updateTransform(); // Set initial value
    window.addEventListener("resize", updateTransform); // Listen for resize

    return () => {
      window.removeEventListener("resize", updateTransform); // Cleanup
    };
  }, [currentIndex]);

  const resetFields = () => {
    setFirstVisibility(false);
    setSecondVisibility(false);
    setThirdVisibility(false);
    setFourVisibility(false);
  };

  const testimonials = [
    {
      id: 1,
      image: landing_testimonial_4, // Replace with actual image path
      name: "Dr. Rohit Sane",
      position: "CEO, Madhavbaug",
      text: "Prodoc AI enhances our ability to interact, understand patient needs, and connect them to the best care at the nearest Madhavbaug clinic.",
    },
    {
      id: 2,
      image: landing_testimonial_1, // Replace with actual image path
      name: "Dr. K.K Subbaiah",
      position: "CEO, Orthopedic surgeon, BOSH Hospital",
      text: "Prodoc AI has transformed our WhatsApp engagement strategy, moving beyond just appointment booking to driving lead generation, and better patient retention.",
    },
    {
      id: 3,
      image: landing_testimonial_3, // Replace with actual image path
      name: "Dr Shilpa Vikas",
      position: "Director & CEO - Provitale Health",
      text: "Highly recommend Prodoc AI for streamlining lead distribution, automating bookings, and boosting patient conversion and retention across our clinics.",
    },
    {
      id: 4,
      image: landing_testimonial_2, // Replace with actual image path
      name: "Col. Rakesh Bhardwaj",
      position: "Group COO United Hospital",
      text: "Prodoc AI helps us reach new and existing patients, follow up automatically, and engage with them in their own language.",
    },
  ];

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000); // Change this value to adjust the speed

      return () => clearInterval(interval);
    }
  }, [testimonials.length, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
        setIsTransitioning(false);
      }, 300); // Match with the CSS transition duration
    }
  };

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 300); // Match with the CSS transition duration
    }
  };

  return (
    <section className="flex flex-col items-center overflow-hidden justify-center px-4 sm:px-0">
      <div className="text-[28px]  font-[400] text-center h-auto leading-[40px] sm:text-[50px] sm:leading-[75px] mt-40 sm:h-[200px]">
        <h1 className="font-[400] tracking-[0.5px] sm:tracking-[1px]  sm:text-[40px] lg:text-[65px] ">
          Enhance{" "}
          <span className="text-primary text-[28px] sm:text-[35px] lg:text-[65px] font-[400] tracking-[0.5px] sm:tracking-[1px]">
            Healthcare
          </span>{" "}
          outcomes with
          <br />
          <span className="text-primary text-[28px] sm:text-[35px] lg:text-[65px] font-[400] tracking-[0.5px] sm:tracking-[1px]">
            AI-powered
          </span>{" "}
          Patient Engagement
        </h1>
      </div>
      <div className="mt-8 sm:mt-1 lg:mt-20 xl:mt-0">
        <Link
          href="/book-a-demo"
          className="bg-primary text-white px-5 py-4 sm:px-6 sm:py-4 rounded-3xl text-sm sm:text-base"
        >
          Schedule a meeting
        </Link>
      </div>
      <div className="w-[90vw] xl:w-[75vw] flex justify-center items-center rounded-2xl mt-16 sm:mt-26 mb-12 sm:mb-16">
        <Image alt="landing_hero" className="rounded-3xl" src={landing_hero} />
      </div>
      <div className="bg-[#e9f4ff] w-[100vw] py-16 flex flex-col items-center justify-center">
        <Marquee>
          {slider_logo.map((logo) => {
            return (
              <Image
                className="mr-10 sm:mr-28 object-contain grayscale"
                src={logo.src}
                alt={logo.name}
                key={logo.name}
                width={150}
                height={90}
              />
            );
          })}
        </Marquee>
        <p className="mx-4 text-center text-lg mt-6 font-semibold">
          Trusted by hundreds of healthcare providers since 2022
        </p>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-[90vw] xl:w-[75vw] mt-12 sm:mt-20 mb-16 sm:mb-24 flex flex-col-reverse sm:flex-row items-center sm:justify-between gap-12 sm:gap-0">
          <div className="flex flex-col items-center sm:items-start w-full sm:w-1/2 text-center sm:text-left">
            <h3 className="text-[30px] sm:text-[45px] xl:text-[50px] mb-6 sm:mb-10">
              What we solve
            </h3>

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
                  Care Journey Gaps
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
                    Limited support outside hospitals affects patient
                    engagement. Prodoc offers ongoing, personalized interactions
                    to enhance care journeys and outcomes.
                  </p>
                )}
              </div>
            </div>

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
                  Pre-Consultation Challenges
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
                    Patients often struggle to navigate their symptoms and find
                    the right care. Prodoc simplifies this process with
                    AI-powered guidance and symptom assessment.
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
                  Inconsistent Patient Communication
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
                    Prodoc provides consistent, multilingual communication 24/7
                    via voice, WhatsApp, and bots, reducing confusion from
                    multiple channels.
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
                  Referral and Collaboration Bottlenecks
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
                    Coordinating patient referrals with partners is complex.
                    Prodoc simplifies this, boosting efficiency and
                    satisfaction.
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
      <div className="w-[100vw] flex bg-blue-900 text-white p-6 sm:p-12 flex-col relative items-center ">
        <div className="flex flex-col items-center w-full justify-center gap-6 sm:gap-10">
          <div className="">
            <h3 className="leading-tight text-[28px] sm:text-[45px] text-center">
              Transform Patient Communication <br />
              with{" "}
              <span className="text-blue-400 text-[28px] sm:text-[45px]">
                Prodoc AI
              </span>
            </h3>
          </div>

          <div className="w-fit flex items-center justify-center">
            <Link
              href={"/book-a-demo"}
              className="bg-primary text-white px-5 py-4 sm:px-6 sm:py-4 rounded-3xl text-sm sm:text-base"
            >
              Book a demo
            </Link>
          </div>
        </div>

        <Image
          alt="alternative text"
          className="object-contain mt-8 hidden sm:block sm:mt-0 sm:absolute sm:bottom-0 sm:right-0 opacity-50"
          src={landing_hero_3}
          width={250}
          height={200}
        />
      </div>
      <div className="flex mt-5 items-center justify-center w-[100vw]  px-4 sm:px-0">
        <div className="text-[24px] text-center mb-12 gap-8 w-[95vw] flex flex-col sm:leading-[68px] sm:flex-row items-center sm:mt-20 sm:justify-between sm:text-left sm:mb-20 sm:text-[50px] sm:gap-x-10 xl:w-[75vw]">
          <div className="flex flex-col mt-8 w-full sm:w-[50%]">
            <h5 className="text-[24px] sm:text-[50px] leading-[1.4] sm:leading-[1.2]">
              Human-Like Interactions with{" "}
              <span className="text-primary text-[24px] sm:text-[50px]">
                Unified Communication
              </span>
            </h5>

            <h3 className="text-sm mt-6 text-left sm:text-lg leading-relaxed">
              <span className="mb-2 text-primary block sm:inline">
                WhatsApp and Message Integration
              </span>
              <span className="sm:ml-2">
                Enable patient communication through WhatsApp, providing secure
                and convenient interactions.
              </span>
            </h3>
            <h3 className="text-sm  mt-6 text-left sm:text-lg leading-relaxed">
              <span className="mb-2 text-primary block sm:inline">
                Intelligent Web Chatbots
              </span>
              <span className="sm:ml-2">
                AI chatbots that handle inquiries, schedule appointments, and
                provide instant responses 24/7.
              </span>
            </h3>
            <h3 className="text-sm mt-6 text-left sm:text-lg leading-relaxed">
              <span className="mb-2 text-primary block sm:inline">
                Voice Agent Solutions
              </span>
              <span className="sm:ml-2">
                Smart voice agents for automated phone interactions, handling
                appointments and patient support.
              </span>
            </h3>
          </div>
          <div className="w-full sm:w-[50%] p-4 sm:p-10">
            <Image
              src={landing_section_3}
              alt="alt"
              className="rounded-3xl mx-auto sm:mx-0"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap bg-[#e9f4ff] sm:p-10    justify-center sm:gap-32 gap-24 h-auto  items-center w-full ">
        <div className="  text-center">
          <p className="text-[40px] sm:text-[65px] ">1M+</p>
          <p className="text-lg sm:text-xl">Patients Engaged</p>
        </div>

        <div className="  text-center">
          <p className="text-[40px] sm:text-[65px]">10K+</p>
          <p className="text-lg sm:text-xl">Daily Interactions</p>
        </div>

        <div className="  text-center">
          <p className="text-[40px] sm:text-[65px] ">100+</p>
          <p className="text-lg sm:text-xl">Healthcare Providers</p>
        </div>
        {/* </div> */}
      </div>
      <div className="sm:w-full flex flex-col items-center justify-center">
        <div className="w-full sm:w-[90vw] xl:w-[75vw] mb-12 sm:mb-24 flex flex-col items-center justify-center">
          <div className="flex flex-col sm:flex-row gap-10 mt-8 sm:mt-28 items-center justify-center">
            <div
              className="w-[90%] sm:w-1/3 cursor-pointer"
              onClick={() =>
                (window.location.href = "/features/patient-journey")
              }
            >
              <Image
                className="rounded-2xl"
                src={landing_section_2_4}
                alt="Effortless patient journey"
              />
              <p className="mt-6 text-lg sm:text-xl text-center sm:text-left">
                Effortless patient journey
              </p>
              <p className="mt-3 text-sm sm:text-base text-left">
                Empower patients to find what they need quickly and easily with
                Prodoc AI's intuitive search features
                <Link href="/features/patient-journey" className="ml-2">
                  →
                </Link>
              </p>
            </div>

            <div
              className="w-[90%] sm:w-1/3 cursor-pointer"
              onClick={() =>
                (window.location.href = "/features/patient-connect")
              }
            >
              <Image
                className="rounded-2xl"
                src={patient_connect_hero}
                alt="Always-on patient support"
              />
              <p className="mt-6 text-lg sm:text-xl text-center sm:text-left">
                Always-on patient support
              </p>
              <p className="mt-3 text-sm sm:text-base text-left">
                Provide exceptional patient service around the clock with our
                24/7 AI-powered chat helpline
                <Link href="/features/patient-connect" className="ml-2">
                  →
                </Link>
              </p>
            </div>
            <div
              className="w-[90%] sm:w-1/3 cursor-pointer"
              onClick={() =>
                (window.location.href = "/features/patient-outreach")
              }
            >
              <Image
                className="rounded-2xl"
                src={landing_section_2_patientoutreach}
                alt="Break down language barriers"
              />
              <p className="mt-6 text-lg sm:text-xl text-center sm:text-left">
                Smart campaign management
              </p>
              <p className="mt-3 text-sm sm:text-base text-left">
                Launch targeted outreach campaigns across multiple channels with
                automated workflows and analytics
                <Link href="/features/patient-outreach" className="ml-2">
                  →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Divider />

      <div className="w-full flex items-center justify-center">
        <div className="w-[90vw] xl:w-[75vw] rounded-2xl mt-12 sm:mt-20 mb-12 sm:mb-20">
          <h5 className="text-[30px] sm:text-[50px] text-center sm:text-left">
            Value delivered to <br /> our customers
          </h5>
          <div className="mt-10 flex flex-col sm:flex-row w-full gap-6 sm:gap-0">
            <div className="flex flex-col border-l-0 sm:border-l-2 sm:p-4 sm:w-1/4 text-center sm:text-left">
              <p className="text-[40px] sm:text-[55px] font-semibold text-primary">
                30%
              </p>
              <p className=" text-sm  sm:text-base">
                Increase in self-service adoptions
              </p>
            </div>
            <div className="flex flex-col border-l-0 sm:border-l-2 sm:p-4 sm:w-1/4 text-center sm:text-left">
              <p className="text-[40px] sm:text-[55px] font-semibold text-primary">
                75%
              </p>
              <p className="text-sm sm:text-base">
                Boost in overall agent productivity
              </p>
            </div>

            <div className="flex flex-col border-l-0 sm:border-l-2 sm:p-4 sm:w-1/4 text-center sm:text-left">
              <p className="text-[40px] sm:text-[55px] font-semibold text-primary">
                40%
              </p>
              <p className="text-sm sm:text-base">
                Increase in patient satisfaction
              </p>
            </div>

            <div className="hidden sm:flex flex-col border-l-0 sm:border-l-2 sm:p-4 sm:w-1/4 text-center sm:text-left">
              <p className="text-[40px] sm:text-[55px] font-semibold text-primary">
                37%
              </p>
              <p className="text-sm sm:text-base">
                Reduction in average OPD visit time
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-[100vw] bg-[#e9f4ff]">
        <div className="text-[30px] sm:text-[50px] text-center sm:text-left leading-[40px] sm:leading-[68px] mt-10 sm:mt-20 mb-10 sm:mb-20 w-[90vw] xl:w-[75vw] flex flex-col sm:flex-row items-center sm:justify-between gap-12 sm:gap-x-10">
          <div className="flex flex-col w-full sm:w-[50%] ">
            <h5 className="text-[30px] text-center sm:text-left sm:text-[50px]">
              Effortless API
              <br className="" />
              <span className="text-primary text-[30px] sm:text-[50px]">
                Integrations
              </span>
              <br />
            </h5>

            <h3 className="text-sm  text-left mt-6  sm:text-left sm:text-lg">
              Seamlessly integrate with EHRs, patient portals, and custom
              healthcare applications. Enhance efficiency by reducing context
              switching and deliver personalized, patient-centric care and
              support.
            </h3>
          </div>

          <div className="w-[100vw] sm:w-[50%] p-2 sm:p-10 MyGradient">
            <Marquee speed={40} direction="left">
              {firstMarqueePluginLogos.map((logo) => (
                <Image
                  className="mr-6 sm:mr-12 object-contain rounded-2xl bg-[#e9f4ff]"
                  src={logo.src}
                  alt={logo.name}
                  key={logo.name}
                  width={80}
                  height={80}
                />
              ))}
            </Marquee>
            <Marquee speed={40} direction="right" className="mt-6 sm:mt-10">
              {secondMarqueePluginLogos.map((logo) => (
                <Image
                  className="mr-8 sm:mr-14 object-contain rounded-2xl bg-[#e9f4ff]"
                  src={logo.src}
                  alt={logo.name}
                  key={logo.name}
                  width={80}
                  height={80}
                />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 flex items-center justify-center">
        <div className=" mb-8 w-full sm:mb-5 sm:mt-10  flex flex-col items-center  rounded-2xl">
          <h5 className="text-[30px]   w-[75%] text-center  leading-[30px]  sm:text-[50px] sm:text-left  sm:leading-[60px]">
            Trusted by{" "}
            <span className="text-primary text-[30px]  sm:leading-[60px] sm:text-[50px]">
              customers
            </span>
            <br />
            loved by many
          </h5>

          <div className="flex items-center justify-center   mt-20 mb-5  w-full">
            {/* Carousel Wrapper */}
            <div className=" text-center  flex items-center justify-center mr-4">
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className=" text-3xl sm:text-4xl  text-gray-700 hover:text-gray-900 z-10"
              >
                <FaArrowLeft
                  className=" text-blue-500 border-[0.15rem] p-1 border-blue-500 rounded-full"
                  size={30}
                />
              </button>
            </div>
            <div className="flex items-center justify-center w-full  sm:max-w-6xl overflow-hidden">
              {/* Testimonial Content */}
              <div
                className={`flex gap-8 sm:max-w-5xl  w-full  sm:p-4 transform transition-transform duration-300 ease-in-out`}
                style={{
                  transform: `translateX(-${transformValue}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="sm:min-w-[100%] md:min-w-[90%] min-w-full relative   shadow-md flex flex-col  p-4 h-auto sm:p-10 rounded-xl h-auto"
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-full grayscale m-2 sm:absolute sm:right-20 sm:top-16 md:top-16 h-[80px] w-[80px] sm:right-5 md:right-15 sm:h-[150px] sm:w-[150px]"
                    />
                    <span className="text-lg   sm:text-3xl sm:mt-12">
                      {testimonial.name}
                    </span>
                    <span className="text-xl   text-gray-600">
                      {testimonial.position}
                    </span>
                    <p className="mt-4 sm:max-w-[60%]  text-sm sm:text-lg text-gray-700">
                      {testimonial.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
            </div>
            <div className="ml-4 p-3  rounded-[50%]">
              <button onClick={handleNext} className="  text-3xl sm:text-4xl ">
                <FaArrowRight
                  className=" text-blue-500 border-[0.15rem] p-1 border-blue-500 rounded-full"
                  size={30}
                />
              </button>
            </div>

            {/* Dots Navigation */}
          </div>
          <div className="flex justify-center">
            {testimonials.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${
                  index === currentIndex
                    ? "bg-gray-700"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-[90vw] xl:w-[75vw]  sm:mb-5 flex flex-col items-center justify-center">
          <Divider className="text-primary" />
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-8 sm:gap-0 w-full sm:mt-3">
            <Image
              src={landing_certification_meta}
              alt="alt"
              width={150}
              height={80}
              className="grayscale mx-auto sm:mx-0"
            />
            <Image
              src={landing_certification_iso}
              alt="alt"
              width={80}
              height={90}
              className="grayscale mx-auto sm:mx-0"
            />
            <Image
              src={landing_certification_dpdpa}
              alt="alt"
              width={140}
              height={90}
              className="grayscale mx-auto sm:mx-0"
            />
            <Image
              src={landing_certification_hipaa}
              alt="alt"
              width={120}
              height={100}
              className="grayscale mx-auto sm:mx-0"
            />
          </div>
        </div>
      </div>
      <div className="w-[100vw] bg-white relative flex items-center justify-center">
        <div className="mt-20 mb-20">
          <div className="">
            <h3 className="text-[30px] sm:text-[50px] text-black text-center">
              Empowering healthcare facilities worldwide
              <br />
              <span className="text-[30px] sm:text-[50px] font-normal hidden sm:block">
                with{" "}
                <span className="text-primary text-[30px] sm:text-[50px]">
                  24/7 multilingual <br className="sm:hidden"></br>{" "}
                </span>{" "}
                patient engagement
              </span>
            </h3>
            <div className="w-full flex items-center justify-center flex-col">
              <div className="mt-20 w-[90vw] xl:w-[75vw] rounded-2xl flex items-center justify-center flex-col">
                <span className="text-center text-[30px]  sm:text-[45px]">
                  Book a{" "}
                  <span className="text-black  text-center text-[30px]  sm:text-[45px]">
                    Demo
                  </span>
                </span>
                <p className="text-center text-sm sm:text-lg ">
                  Please complete the form and learn how our solutions can
                  enhance your organization's healthcare goals
                </p>
                <Divider />
                <Form
                  layout="vertical"
                  className="w-[80vw] sm:w-full sm:max-w-md "
                  onFinish={(values) => console.log("Form Submitted:", values)}
                >
                  <Form.Item
                    label="Full name"
                    name="fullName"
                    rules={[
                      { required: true, message: "Please enter your name" },
                    ]}
                  >
                    <Input size="large" placeholder="Enter Your name" />
                  </Form.Item>

                  <Form.Item
                    label="Business email"
                    name="businessEmail"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Please enter a valid email" },
                    ]}
                  >
                    <Input size="large" placeholder="Enter email" />
                  </Form.Item>

                  <Form.Item
                    label="Company"
                    name="company"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your company name",
                      },
                    ]}
                  >
                    <Input size="large" placeholder="Enter company name" />
                  </Form.Item>

                  <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your phone number",
                      },
                    ]}
                  >
                    <Input size="large" placeholder="Enter phone number" />
                  </Form.Item>

                  <Form.Item
                    label="How can we support your business? (optional)"
                    name="support"
                  >
                    <Input.TextArea
                      size="large"
                      placeholder="Enter your message"
                    />
                  </Form.Item>

                  <div className="w-fit mt-10">
                    <div className="bg-primary text-white px-5 py-3 rounded-3xl">
                      Schedule a meeting
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
