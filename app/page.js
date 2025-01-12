"use client";

import landing_hero from "../assets/landing_hero.jpg";
import Image from "next/image";
import Marquee from "react-fast-marquee";
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

import { plugin_logos } from "@/assets/logos";

import { Divider, Input, Form, Button } from "antd";
import Link from "next/link";

const firstMarqueePluginLogos = plugin_logos.slice(0, 6);
const secondMarqueePluginLogos = plugin_logos.slice(6);

export default function LandingPage() {
  const [form] = Form.useForm();

  return (

    <section className="flex flex-col items-center justify-center px-4 sm:px-0">
      <div className="mt-28  text-[28px]  font-[400] text-center h-auto leading-[40px] sm:text-[50px] sm:leading-[68px] sm:mt-32  sm:h-[200px]">
        <h1 className="font-[400] tracking-[0.5px] sm:tracking-[1px] sm:text-[50px] ">
          Enhance{" "}
          <span className="text-primary text-[28px] sm:text-[50px] font-[400] tracking-[0.5px] sm:tracking-[1px]">
            healthcare
          </span>{" "}
          with
          <br />
          AI-powered{" "}
          <span className="text-primary text-[28px] sm:text-[50px] font-[400] tracking-[0.5px] sm:tracking-[1px]">
            patient engagement
            <br />
          </span>{" "}
          for better outcomes
        </h1>
      </div>
      <div className="mt-10 sm:mt-20">
        <Link
          href="/book-a-demo"
          className="bg-primary text-white px-5 py-4 sm:px-6 sm:py-4 rounded-3xl text-sm sm:text-base"
        >
          Schedule a meeting
        </Link>
      </div>

      <div className="w-[90vw] xl:w-[75vw] rounded-2xl mt-16 mb-12 sm:mb-16">
        <Image alt="landing_hero" className="rounded-3xl" src={landing_hero} />
      </div>
      <div className="bg-white w-full py-5 flex flex-col items-center justify-center">
        <Marquee>
          {slider_logo.map((logo) => {
            return (
              <Image
                className="mr-28 object-contain grayscale"
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
          Trusted by hundreds of hospitals and clinics since 2022
        </p>
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="w-[90vw] xl:w-[75vw] mt-12 sm:mt-20 mb-16 sm:mb-24 flex flex-col-reverse sm:flex-row items-center sm:justify-between gap-12 sm:gap-0">
          {/* Left Section (Text) */}
          <div className="flex flex-col items-center sm:items-start w-full sm:w-1/2 text-center sm:text-left">
            <h3 className="text-[30px] sm:text-[45px] xl:text-[50px] mb-6 sm:mb-10">
              What we solve
            </h3>
            <div className="w-full">
              <p className="text-base mb-2 flex items-center gap-x-3  sm:text-lg">
                <FaCircleCheck size={22} color="#1772d2" />
                <span className="text-primary text-base sm:text-lg">
                  Pre-Consultation Challenges
                </span>
              </p>
              <p className="text-left sm:mt-1 text-sm">
                Patients often struggle to navigate their symptoms and find the
                right care. Prodoc simplifies this process with AI-powered
                guidance and symptom assessment.
              </p>
            </div>
            <div className="w-full">
              <p className="text-base mb-2  mt-6 flex items-center gap-x-3 sm:text-lg">
                <FaCircleCheck size={22} color="#1772d2" />
                <span className="text-primary text-base sm:text-lg">
                  Inconsistent Patient Communication
                </span>
              </p>
              <p className="text-left sm:mt-1 text-sm">
                Prodoc provides consistent, multilingual communication 24/7 via
                voice, WhatsApp, and bots, reducing confusion from multiple
                channels.
              </p>
            </div>
            <div className="w-full">
              <p className="text-base mb-2 mt-6 flex items-center gap-x-3 sm:text-lg">
                <FaCircleCheck size={22} color="#1772d2" />
                <span className="text-primary text-base sm:text-lg">
                  Care Journey Gaps
                </span>
              </p>
              <p className="text-left sm:mt-1 text-sm">
                Limited support outside hospitals affects patient engagement.
                Prodoc offers ongoing, personalized interactions to enhance care
                journeys and outcomes.
              </p>
            </div>
            <div className="w-full">
              <p className="text-base mb-2 mt-6 flex items-center gap-x-3 sm:text-lg">
                <FaCircleCheck size={22} color="#1772d2" />
                <span className="text-primary text-base sm:text-lg">
                  Referral and Collaboration Bottlenecks
                </span>
              </p>
              <p className="text-left sm:mt-1 text-sm">
                Coordinating patient referrals with partners is complex. Prodoc
                simplifies this, boosting efficiency and satisfaction.
              </p>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="flex justify-center sm:justify-end items-center w-full sm:w-1/2">
            <Image
              alt="landing_section_1"
              src={landing_section_1}
              className="mx-auto sm:ml-auto w-[300px] sm:w-[400px] h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* <div className="w-full  flex items-center justify-center bg-white">
        <div className="w-[90vw]  xl:w-[75vw] rounded-2xl  mb-20">
          <h5 className="text-[50px] mt-20">
            Seamless Unified <br></br>
            <span className="text-primary text-[50px]">
              Communication Suite
            </span>
          </h5>
          <div className="flex gap-10 mt-14">
            <div className="w-1/3">
              <Image
                className="rounded-2xl"
                src={landing_channels_whatsapp}
                alt="WhatsApp and Message Integration"
              />
              <p className="mt-6 text-xl">WhatsApp & Message Integration</p>
              <p className="mt-3">
                Enable patient communication through WhatsApp, providing secure
                and convenient interactions
              </p>
            </div>
            <div className="w-1/3">
              <Image
                className="rounded-2xl"
                src={landing_channels_web}
                alt="AI-Powered Chatbots"
              />
              <p className="mt-6 text-xl">Intelligent Web Chatbots</p>
              <p className="mt-3">
                AI chatbots that handle inquiries, schedule appointments, and
                provide instant responses 24/7
              </p>
            </div>
            <div className="w-1/3">
              <Image
                className="rounded-2xl"
                src={landing_channels_voice}
                alt="Voice Agent Solutions"
              />
              <p className="mt-6 text-xl">Advanced Voice Agents</p>
              <p className="mt-3">
                Smart voice agents for automated phone interactions, handling
                appointments and patient support
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* commented below */}
      {/* <div className="w-full flex items-center justify-center bg-white">
        <div className="w-[90vw] xl:w-[75vw]   flex flex-col items-center justify-center ">
          <div className="flex bg-blue-900 text-white p-12 w-[98.7vw] items-center gap-9 relative">
            <div className="sm:flex sm:flex-col sm:items-center sm:w-full sm:justify-center my-0 mx-auto flex flex-col gap-24">
              <h3 className="leading-tight text-[45px] text-center ">
                Transform Patient Communication <br></br>
                with{" "}
                <span className="text-blue-400 text-[45px]"> Prodoc AI</span>
              </h3>
              <div className="w-fit ">
                <Link
                  href={"/book-a-demo"}
                  className="bg-primary text-white px-6 py-4 rounded-3xl"
                >
                  Get in touch
                </Link>
              </div>
            </div>

            <Image
              alt="alternative text"
              className=" object-contain absolute bottom-0 right-0 opacity-50"
              src={landing_hero_3}
              width={350}
              height={250}
            />
          </div>
        </div>
      </div> */}

      {/* <div className="flex bg-blue-900 text-white p-12  w-full  sm:items-center sm:gap-9 flex-col relative">
        <div className="sm:flex sm:flex-col sm:items-center sm:w-full sm:justify-center my-0 mx-auto flex flex-col gap-24">
          <h3 className="leading-tight text-[45px] text-center ">
            Transform Patient Communication <br></br>
            with <span className="text-blue-400 text-[45px]"> Prodoc AI</span>
          </h3>
          <div className="w-fit ">
            <Link
              href={"/book-a-demo"}
              className="bg-primary text-white px-6 py-4 rounded-3xl"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <Image
          alt="alternative text"
          className=" object-contain absolute bottom-0 right-0 opacity-50"
          src={landing_hero_3}
          width={350}
          height={250}
        />
      </div> */}
      <div className="w-full flex bg-blue-900 text-white p-6 sm:p-12  flex-col relative items-center gap-12">
        <div className="flex flex-col items-center w-full justify-center gap-12 sm:gap-24">
          <h3 className="leading-tight text-[28px] sm:text-[45px] text-center">
            Transform Patient Communication <br />
            with{" "}
            <span className="text-blue-400 text-[28px] sm:text-[45px]">
              Prodoc AI
            </span>
          </h3>
          <div className="w-fit">
            <Link
              href={"/book-a-demo"}
              className="bg-primary text-white px-4 py-3 sm:px-6 sm:py-4 rounded-3xl text-sm sm:text-base"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <Image
          alt="alternative text"
          className="object-contain mt-8 sm:mt-0 sm:absolute sm:bottom-0 sm:right-0 opacity-50"
          src={landing_hero_3}
          width={250}
          height={200}
        />
      </div>

      <div className="sm:w-full flex flex-col items-center justify-center">
        <div className="w-full sm:w-[90vw] xl:w-[75vw] mb-12 sm:mb-24 flex flex-col items-center justify-center">
          <div className="flex flex-col sm:flex-row gap-10 mt-8 sm:mt-28 items-center justify-center">
            {/* Card 1 */}
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

            {/* Card 2 */}
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

            {/* Card 3 */}
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

      {/* <div className="w-full flex items-center justify-center">
        <div className="w-[90vw] xl:w-[75vw]  mb-24 flex flex-col items-center justify-center ">
          <Divider />
          <div className="flex gap-10 mt-4 w-full justify-center items-center">
            <div className="w-1/3">
              <p className="mt-6 text-[65px] text-center">1M+</p>
              <p className="text-xl text-center">Patients Engaged</p>
            </div>
            <div className="w-1/3">
              <p className="mt-6 text-[65px] text-center">10K+</p>
              <p className="text-xl text-center">Daily Interactions</p>
            </div>
            <div className="w-1/3">
              <p className="mt-6 text-[65px] text-center">100+</p>
              <p className="text-xl text-center">Healthcare Providers</p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="w-full flex items-center justify-center"> */}
      {/* <div className="w-[90vw] xl:w-[75vw] mb-16 sm:mb-24 flex flex-col items-center justify-center"> */}
      <Divider />
      <div className="flex flex-col   justify-between  items-center w-[65vw] sm:flex-row ">
        <div className="  text-center">
          <p className="text-[40px] sm:text-[65px] mt-4 sm:mt-6">1M+</p>
          <p className="text-lg sm:text-xl">Patients Engaged</p>
        </div>

        <div className="  text-center">
          <p className="text-[40px] sm:text-[65px] mt-4 sm:mt-6">10K+</p>
          <p className="text-lg sm:text-xl">Daily Interactions</p>
        </div>

        <div className="  text-center">
          <p className="text-[40px] sm:text-[65px] mt-4 sm:mt-6">100+</p>
          <p className="text-lg sm:text-xl">Healthcare Providers</p>
        </div>
        {/* </div> */}
      </div>
      {/* </div> */}

      {/* <div className="flex items-center justify-center w-full bg-white">
        <div className="text-[50px]  text-center leading-[68px] mt-20 mb-20  w-[90vw] xl:w-[75vw] flex items-center justify-center gap-x-10">
          <div className="text-[50px] flex flex-col w-[50%]">
            <h5 className="text-[50px] text-left">
              Human-Like <br></br> Interactions with <br></br>
              <span className="text-primary text-[50px]">
                Unified Communication
              </span>
            </h5>
            <h3 className="text-lg mt-6 text-left">
              <span className="text-lg text-primary">
                WhatsApp and Message Integration:
              </span>{" "}
              Enable patient communication through WhatsApp, providing secure
              and convenient interactions
            </h3>
            <h3 className="text-lg mt-6 text-left">
              <span className="text-lg text-primary">
                Intelligent Web Chatbots:
              </span>{" "}
              AI chatbots that handle inquiries, schedule appointments, and
              provide instant responses 24/7
            </h3>
            <h3 className="text-lg mt-6 text-left">
              <span className="text-lg text-primary">
                Voice Agent Solutions:{" "}
              </span>
              Smart voice agents for automated phone interactions, handling
              appointments and patient support
            </h3>
          </div>
          <div className="w-[50%] bg-red p-10">
            <Image src={landing_section_3} alt="alt" className="rounded-3xl" />
          </div>
        </div>
      </div> */}

      <div className="flex mt-14 items-center justify-center w-full bg-white px-4 sm:px-0">
        <div className="text-[24px] text-center mb-12 gap-8 w-[95vw] flex flex-col sm:leading-[68px] sm:flex-row items-center sm:mt-20 sm:justify-between sm:text-left sm:mb-20 sm:text-[50px] sm:gap-x-10 xl:w-[75vw]">
          {/* Left Section */}
          <div className="flex flex-col mt-8 w-full sm:w-[50%]">
            <h5 className="text-[24px] sm:text-[50px] leading-[1.4] sm:leading-[1.2]">
              Human-Like Interactions with{" "}
              <span className="text-primary text-[24px] sm:text-[50px]">
                Unified Communication
              </span>
            </h5>
            {/* WhatsApp and Message Integration */}
            <h3 className="text-sm mt-6 text-left sm:text-lg leading-relaxed">
              <span className="mb-2 text-primary block sm:inline">
                WhatsApp and Message Integration
              </span>
              <span className="sm:ml-2">
                Enable patient communication through WhatsApp, providing secure
                and convenient interactions.
              </span>
            </h3>
            {/* Intelligent Web Chatbots */}
            <h3 className="text-sm  mt-6 text-left sm:text-lg leading-relaxed">
              <span className="mb-2 text-primary block sm:inline">
                Intelligent Web Chatbots
              </span>
              <span className="sm:ml-2">
                AI chatbots that handle inquiries, schedule appointments, and
                provide instant responses 24/7.
              </span>
            </h3>
            {/* Voice Agent Solutions */}
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

          {/* Right Section */}
          <div className="w-full sm:w-[50%] p-4 sm:p-10">
            <Image
              src={landing_section_3}
              alt="alt"
              className="rounded-3xl mx-auto sm:mx-0"
            />
          </div>
        </div>
      </div>

      {/* 
      <div className="w-full  flex items-center justify-center">
        <div className="w-[90vw]  xl:w-[75vw] rounded-2xl mt-20 mb-20">
          <h5 className="text-[50px]">
            Value delivered to <br></br> our customers
          </h5>
          <div className="mt-10 flex w-full">
            <div className="flex flex-col border-l-2 p-4 w-1/4">
              <p className="text-[55px] font-semibold text-primary">30%</p>
              <p> Increase in self-service adoptions </p>
            </div>
            <div className="flex flex-col border-l-2 p-4 w-1/4">
              <p className="text-[55px] font-semibold text-primary">75%</p>
              <p>Boost in overall agent productivity</p>
            </div>
            <div className="flex flex-col border-l-2 p-4 w-1/4">
              <p className="text-[55px] font-semibold text-primary">40%</p>
              <p>Increase in patient satisfaction</p>
            </div>
            <div className="flex flex-col border-l-2 p-4 w-1/4">
              <p className="text-[55px] font-semibold text-primary">37%</p>
              <p>Reduction in average OPD visit time</p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="w-full flex items-center justify-center">
        <div className="w-[90vw] xl:w-[75vw] rounded-2xl mt-12 sm:mt-20 mb-12 sm:mb-20">
          <h5 className="text-[30px] sm:text-[50px] text-center sm:text-left">
            Value delivered to <br /> our customers
          </h5>
          <div className="mt-10 flex flex-col sm:flex-row w-full gap-6 sm:gap-0">
            {/* Card 1 */}
            <div className="flex flex-col border-l-0 sm:border-l-2 sm:p-4 sm:w-1/4 text-center sm:text-left">
              <p className="text-[40px] sm:text-[55px] font-semibold text-primary">
                30%
              </p>
              <p className=" text-sm  sm:text-base">
                Increase in self-service adoptions
              </p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col border-l-0 sm:border-l-2 sm:p-4 sm:w-1/4 text-center sm:text-left">
              <p className="text-[40px] sm:text-[55px] font-semibold text-primary">
                75%
              </p>
              <p className="text-sm sm:text-base">
                Boost in overall agent productivity
              </p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col border-l-0 sm:border-l-2 sm:p-4 sm:w-1/4 text-center sm:text-left">
              <p className="text-[40px] sm:text-[55px] font-semibold text-primary">
                40%
              </p>
              <p className="text-sm sm:text-base">
                Increase in patient satisfaction
              </p>
            </div>
            {/* Card 4 */}
            <div className="hidden sm:block flex flex-col border-l-0 sm:border-l-2 sm:p-4 sm:w-1/4 text-center sm:text-left">
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

      {/* <div className="flex items-center justify-center w-full bg-white">
        <div className="text-[50px]  text-center leading-[68px] mt-20 mb-20  w-[90vw] xl:w-[75vw] flex items-center justify-center gap-x-10">
          <div className="text-[50px] flex flex-col w-[50%]">
            <h5 className="text-[50px] text-left">
              Effortless API{" "}
              <span className="text-primary text-[50px]"> Integrations </span>{" "}
              <br></br>
            </h5>

            <h3 className="text-lg mt-6 text-left">
              Seamlessly integrate with EHRs, patient portals, and custom
              healthcare applications. Enhance efficiency by reducing context
              switching and deliver personalised, patient-centric care and
              support.
            </h3>
          </div>
          <div className="w-[50%] bg-red p-5 MyGradient">
            <Marquee speed={40} direction="left">
              {firstMarqueePluginLogos.map((logo) => {
                return (
                  <Image
                    className="mr-12 object-contain rounded-2xl"
                    src={logo.src}
                    alt={logo.name}
                    key={logo.name}
                    width={100}
                    height={100}
                  />
                );
              })}
            </Marquee>
            <Marquee speed={40} direction="right" className="mt-10">
              {secondMarqueePluginLogos.map((logo) => {
                return (
                  <Image
                    className="mr-14 object-contain rounded-2xl"
                    src={logo.src}
                    alt={logo.name}
                    key={logo.name}
                    width={100}
                    height={100}
                  />
                );
              })}
            </Marquee>
          </div>
        </div>
      </div> */}
      <div className="flex items-center justify-center w-full bg-white">
        <div className="text-[30px] sm:text-[50px] text-center sm:text-left leading-[40px] sm:leading-[68px] mt-10 sm:mt-20 mb-12 sm:mb-20 w-[90vw] xl:w-[75vw] flex flex-col sm:flex-row items-center sm:justify-between gap-12 sm:gap-x-10">
          {/* Left Section */}
          <div className="flex flex-col w-full sm:w-[50%] ">
            {/* <h5 className="text-[30px] mx-24 sm:text-[50px] xs:text-center sm:text-left">
              Effortless API <span className="text-primary text-[30px]  sm:text-[50px]  ">Integrations</span>
              <br />
            </h5> */}
            <h5 className="text-[30px] text-center sm:text-left sm:text-[50px]">
              Effortless API {/* Add conditional line break */}
              <br className="block sm:hidden" />
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

          {/* Right Section */}
          <div className="w-full sm:w-[50%] p-2 sm:p-10 MyGradient">
            <Marquee speed={40} direction="left">
              {firstMarqueePluginLogos.map((logo) => (
                <Image
                  className="mr-6 sm:mr-12 object-contain rounded-2xl"
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
                  className="mr-8 sm:mr-14 object-contain rounded-2xl"
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

      <div className="w-full mt-8 flex items-center justify-center">
        <div className=" mb-8 w-[90vw] sm:mb-5 sm:mt-10 xl:w-[75vw] rounded-2xl">
          <h5 className="text-[30px] text-center  leading-[30px]  sm:text-[50px] sm:text-left  sm:leading-[60px]">
            Trusted by{" "}
            <span className="text-primary text-[30px]  sm:leading-[60px] sm:text-[50px]">
              customers
            </span>
            <br /> loved by many
          </h5>

          <div className="flex flex-col sm:flex-row w-full gap-6 sm:gap-8 mt-10 sm:mt-14">
            <div className="w-full  flex flex-col bg-white p-6 sm:w-1/2 sm:p-10 rounded-xl relative">
              <Image
                src={landing_testimonial_4}
                alt="landing_testimonial"
                className="rounded-full grayscale absolute right-5  top-5 h-[80px] w-[80px] sm:h-[100px] sm:right-10  sm:w-[100px]"
              />
              <span className="text-lg mt-14 sm:text-xl  sm:mt-12">
                Dr. Rohit Sane
              </span>
              <span className="text-sm">CEO, Madhavbaug</span>
              <p className="mt-4 text-sm sm:text-base">
                Prodoc AI enhances our ability to interact, understand patient
                needs, and connect them to the best care at the nearest
                Madhavbaug clinic.
              </p>
            </div>

            <div className="w-full sm:w-1/2 flex flex-col bg-white p-6 sm:p-10 rounded-xl relative">
              <Image
                src={landing_testimonial_1}
                alt="landing_testimonial"
                className="rounded-full grayscale absolute right-5 sm:right-10 top-5 h-[80px] sm:h-[100px] w-[80px] sm:w-[100px]"
              />
              <span className="text-lg mt-14 sm:text-xl  sm:mt-12">
                Dr. K.K Subbaiah
              </span>
              <span className="text-sm">
                CEO, Orthopedic surgeon, BOSH Hospital
              </span>
              <p className="mt-4 text-sm sm:text-base">
                Prodoc AI has transformed our WhatsApp engagement strategy,
                moving beyond just appointment booking to driving lead
                generation, and better patient retention.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row w-full gap-6 sm:gap-8 mt-8 sm:mt-10">
            <div className="w-full sm:w-1/2 flex flex-col bg-white p-6 sm:p-10 rounded-xl relative">
              <Image
                src={landing_testimonial_3}
                alt="landing_testimonial"
                className="rounded-full grayscale absolute right-5 sm:right-10 top-5 h-[80px] sm:h-[100px] w-[80px] sm:w-[100px]"
              />
              <span className="text-lg mt-14 sm:text-xl sm:mt-12">
                Dr Shilpa Vikas
              </span>
              <span className="text-sm">Director & CEO - Provitale Health</span>
              <p className="mt-4 text-sm sm:text-base">
                Highly recommend Prodoc AI for streamlining lead distribution,
                automating bookings, and boosting patient conversion and
                retention across our clinics.
              </p>
            </div>

            <div className="w-full sm:w-1/2 flex flex-col bg-white p-6 sm:p-10 rounded-xl relative">
              <Image
                src={landing_testimonial_2}
                alt="landing_testimonial"
                className="rounded-full grayscale absolute right-5 sm:right-10 top-5 h-[80px] sm:h-[100px] w-[80px] sm:w-[100px]"
              />
              <span className="text-lg mt-14 sm:text-xl sm:mt-12">
                Col. Rakesh Bhardwaj
              </span>
              <span className="text-sm">Group COO United Hospital</span>
              <p className="mt-4 text-sm sm:text-base">
                Prodoc AI helps us reach new and existing patients, follow up
                automatically, and engage with them in their own language.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full flex items-center justify-center">
        <div className="w-[90vw] xl:w-[75vw] mt-20 mb-24 flex flex-col items-center justify-center ">
          <Divider className="text-primary" />
          <div className="flex items-center justify-between w-full">
            <Image
              src={landing_certification_meta}
              alt="alt"
              width={230}
              height={120}
              className="grayscale"
            />
            <Image
              src={landing_certification_iso}
              alt="alt"
              width={115}
              height={130}
              className="grayscale"
            />
            <Image
              src={landing_certification_dpdpa}
              alt="alt"
              width={220}
              height={130}
              className="grayscale"
            />
            <Image
              src={landing_certification_hipaa}
              alt="alt"
              width={185}
              height={135}
              className="grayscale"
            />
          </div>
        </div>
      </div> */}
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

      <div className="w-full bg-white relative flex items-center justify-center">
        <div className="mt-20 mb-20">
          <div className="">
            <h3 className="text-4xl text-black text-center">
              Empowering 100+ healthcare facilities worldwide
              <br />
              <span className="text-2xl font-normal mt-6 block">
                With{" "}
                <span className="text-primary text-2xl">
                  24/7 multilingual <br className="sm:hidden"></br>{" "}
                </span>{" "}
                patient engagement
              </span>
            </h3>
            <div className="w-full flex items-center justify-center flex-col">
              <div className="mt-20 w-[90vw] xl:w-[75vw] rounded-2xl flex items-center justify-center flex-col">
                <span className="text-center text-[45px]">
                  Book a <span className="text-black text-[45px]">Demo</span>
                </span>
                <p className="text-left sm:text-lg ">
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
