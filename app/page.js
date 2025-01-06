"use client";

import landing_hero from "../assets/landing_hero.jpg";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { FaCircleCheck } from "react-icons/fa6";
import { slider_logo } from "@/assets/logos";
import landing_section_1 from "../assets/landing_section_1.png";
import landing_section_2_4 from "../assets/landing_section_2_4.png";
import landing_testimonial_1 from "../assets/landing_testimonial_1.png";
import landing_testimonial_2 from "../assets/landing_testimonial_2.png";
import landing_testimonial_3 from "../assets/landing_testimonial_3.png";
import landing_certification_meta from "../assets/landing_certification_meta.png";
import landing_certification_hipaa from "../assets/landing_certification_hipaa.png";
import landing_certification_iso from "../assets/landing_certification_iso.png";
import landing_certification_dpdpa from "../assets/landing_certification_dpdpa.png";
import patient_connect_hero from "../assets/features/patient-connect/patient_connect_hero.png";
import landing_section_2_patientoutreach from "../assets/landing_section_2_patientoutreach.png";
import landing_section_3 from "../assets/landing_section_3.jpg";

import { Divider, Input, Form, Button } from "antd";
import Link from "next/link";
// import landing_testimonial_4 from "../assets/landing_testimonial_4.png";

// app/page.jsx
export default function LandingPage() {
  const [form] = Form.useForm();

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="text-[55px] text-center leading-[68px] mt-32 h-[204px]">
        <h1 className="font-[400] tracking-[1px]">
          Enhance{" "}
          <span className="text-primary text-[55px] font-[400] tracking-[1px]">
            healthcare
          </span>{" "}
          with AI-powered <br></br>
          <span className="text-primary text-[55px] font-[400] tracking-[1px]">
            patient engagement
          </span>{" "}
          solution that <br></br>
          transforms medical practice
        </h1>
      </div>
      <div className="w-fit mt-10">
        <div className="bg-primary text-white px-6 py-4 rounded-3xl">
          Schedule a meeting
        </div>
      </div>
      <div className="w-[90vw] xl:w-[75vw] rounded-2xl mt-20 mb-20">
        <Image alt="landing_hero" className="rounded-3xl" src={landing_hero} />
      </div>
      <div className="bg-white w-full py-16 flex  flex-col items-center justify-center">
        <Marquee>
          {slider_logo.map((logo) => {
            return (
              <Image
                className="mr-28 object-contain grayscale"
                src={logo.src}
                alt={logo.name}
                key={logo.name}
                width={170}
                height={100}
              />
            );
          })}
        </Marquee>
        <p className="text-lg mt-14 font-semibold">
          We've helped hundreds of hospitals and clinics since 2021
        </p>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-[90vw] xl:w-[75vw] mt-20 mb-24 flex items-center justify-between ">
          <div className="flex items-start flex-col justify-start w-1/2">
            <h3 className="text-[50px] mb-10">Overcoming challenges</h3>
            <p className="text-lg flex items-center gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Reducing wait times with intelligent appointment scheduling
            </p>
            <p className="text-lg mt-6 flex items-center gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Enabling multilingual patient communication 24/7
            </p>
            <p className="text-lg mt-6 flex items-center gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Automating routine administrative tasks
            </p>
            <p className="text-lg mt-6 flex items-center gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Improving patient satisfaction and retention rates
            </p>
          </div>
          <div className="flex justify-end items-end w-1/2">
            <Image
              alt="landing_section_1"
              src={landing_section_1}
              className="ml-auto w-[400px] h-auto object-contain"
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
      <div className="w-full flex items-center justify-center bg-white">
        <div className="w-[90vw] xl:w-[75vw] mt-20 mb-24 flex flex-col items-center justify-center ">
          <h3 className="text-[45px] text-center">
            Revolutionize Patient Care with <br></br>
            <span className="text-primary text-[45px]">
              AI-Powered Engagement
            </span>
          </h3>
          <div className="flex gap-10 mt-14">
            <div
              className="w-1/3 cursor-pointer"
              onClick={() =>
                (window.location.href = "/features/patient-outreach")
              }
            >
              <Image
                className="rounded-2xl"
                src={landing_section_2_patientoutreach}
                alt="Break down language barriers"
              />
              <p className="mt-6 text-xl">Smart campaign management</p>
              <p className="mt-3">
                Launch targeted outreach campaigns across multiple channels with
                automated workflows and analytics
                <Link href="/features/patient-outreach" className="ml-2">
                  →
                </Link>
              </p>
            </div>
            <div
              className="w-1/3 cursor-pointer"
              onClick={() =>
                (window.location.href = "/features/patient-connect")
              }
            >
              <Image
                className="rounded-2xl"
                src={patient_connect_hero}
                alt="Always-on patient support"
              />
              <p className="mt-6 text-xl">Always-on patient support</p>
              <p className="mt-3">
                Provide exceptional patient service around the clock with our
                24/7 AI-powered chat helpline
                <Link href="/features/patient-connect" className="ml-2">
                  →
                </Link>
              </p>
            </div>
            <div
              className="w-1/3 cursor-pointer"
              onClick={() =>
                (window.location.href = "/features/patient-journey")
              }
            >
              <Image
                className="rounded-2xl"
                src={landing_section_2_4}
                alt="Effortless patient journey"
              />
              <p className="mt-6 text-xl">Effortless patient journey</p>
              <p className="mt-3">
                Empower patients to find what they need quickly and easily with
                Prodoc AI's intuitive search features
                <Link href="/features/patient-journey" className="ml-2">
                  →
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-[90vw] xl:w-[75vw]  mb-24 flex flex-col items-center justify-center ">
          <div className="flex gap-10 mt-14 w-full justify-center items-center">
            <div className="w-1/3">
              <p className="mt-6 text-[65px] text-center">1M+</p>
              <p className="text-xl text-center">Patients Engaged</p>
            </div>
            <div className="w-1/3">
              <p className="mt-6 text-[65px] text-center">10K+</p>
              <p className="text-xl text-center">Daily Interactions</p>
            </div>
            <div className="w-1/3">
              <p className="mt-6 text-[65px] text-center">500+</p>
              <p className="text-xl text-center">Healthcare Providers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full bg-white">
        <div className="text-[50px]  text-center leading-[68px] mt-20 mb-20  w-[90vw] xl:w-[75vw] flex items-center justify-center gap-x-10">
          <div className="text-[50px] flex flex-col w-[50%]">
            <h5 className="text-[50px] text-left">
              Seamless Unified <br></br>
              <span className="text-primary text-[50px]">
                Communication Suite
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
      </div>
      <div className="w-full bg-white  flex items-center justify-center">
        <div className="w-[90vw]  xl:w-[75vw] rounded-2xl mt-20 mb-20">
          <h5 className="text-[50px]">
            Value we have delivered to <br></br> our customers
          </h5>
          <div className="mt-10 flex w-full">
            <div className="flex flex-col border-l-2 p-4 w-1/4">
              <p className="text-[55px] font-semibold text-primary">30%</p>
              <p>increased use of self-service options by patients</p>
            </div>
            <div className="flex flex-col border-l-2 p-4 w-1/4">
              <p className="text-[55px] font-semibold text-primary">75%</p>
              <p>of users experienced boost in agent productivity</p>
            </div>
            <div className="flex flex-col border-l-2 p-4 w-1/4">
              <p className="text-[55px] font-semibold text-primary">40%</p>
              <p>
                boost in patient satisfaction, aiding retention and feedback
              </p>
            </div>
            <div className="flex flex-col border-l-2 p-4 w-1/4">
              <p className="text-[55px] font-semibold text-primary">37.5%</p>
              <p>
                shorter average visit time (visit length dropped from 20 min
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center flex-col">
        <div className="mt-20 w-[90vw] xl:w-[75vw] rounded-2xl flex items-center justify-center flex-col">
          <span className="text-center text-[45px]">
            Book a <span className="text-black text-[45px]">Demo</span>
          </span>
          <p className="text-center">
            Please complete the form and learn how our solutions can enhance
            <br></br> your organization's healthcare goals
          </p>
          <Divider />
          <Form
            layout="vertical"
            className="w-full max-w-md"
            onFinish={(values) => console.log("Form Submitted:", values)}
          >
            <Form.Item
              label="Full name"
              name="fullName"
              rules={[{ required: true, message: "Please enter your name" }]}
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
                { required: true, message: "Please enter your company name" },
              ]}
            >
              <Input size="large" placeholder="Enter company name" />
            </Form.Item>

            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                { required: true, message: "Please enter your phone number" },
              ]}
            >
              <Input size="large" placeholder="Enter phone number" />
            </Form.Item>

            <Form.Item
              label="How can we support your business? (optional)"
              name="support"
            >
              <Input.TextArea size="large" placeholder="Enter your message" />
            </Form.Item>

            <div className="w-fit mt-10">
              <div className="bg-primary text-white px-5 py-3 rounded-3xl">
                Schedule a meeting
              </div>
            </div>
          </Form>
          <Divider className="mt-20" />
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="mt-10 mb-5 w-[90vw] xl:w-[75vw] rounded-2xl">
          <h5 className="text-[50px]">
            Trusted by{" "}
            <span className="text-primary text-[50px]">customers</span>{" "}
            <br></br> loved by many
          </h5>
          <div className="w-full flex gap-8 mt-14">
            <div className="w-1/2 flex flex-col bg-white p-10 rounded-xl relative">
              <Image
                src={landing_testimonial_1}
                alt="landing_testimonial"
                className="rounded-full grayscale absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">Dr.K.K Subbaiah</span>
              <span className="">Orthopedic surgeon, BOSH Hospital</span>
              <p className="mt-5">
                Prodoc AI has transformed our WhatsApp engagement strategy,
                moving beyond just appointment booking to driving lead
                generation, and better patient retention
              </p>
            </div>
            <div className="w-1/2 flex flex-col bg-white p-10 rounded-xl relative">
              <Image
                src={landing_testimonial_2}
                alt="landing_testimonial"
                className="rounded-full grayscale absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">Col. Rakesh Bhardwaj</span>
              <span className="">Group COO United Hospital</span>
              <p className="mt-5">
                Prodoc AI helps us connect with patients better. We don't just
                book appointments—we reach new patients, follow up
                automatically, and engage them in their own language.
              </p>
            </div>
          </div>
          <div className="w-full flex gap-8 mt-10">
            <div className="w-1/2 flex flex-col bg-white p-10 rounded-xl relative">
              <Image
                src={landing_testimonial_3}
                alt="landing_testimonial"
                className="rounded-full grayscale absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">Dr Shilpa Vikas</span>
              <span className="">Director - Provitale Health</span>
              <p className="mt-5">
                Highly recommend Prodoc AI for streamlining lead distribution,
                automating bookings, and boosting patient conversion and
                retention across our clinics.
              </p>
            </div>
            <div className="w-1/2 flex flex-col bg-white p-10 rounded-xl relative">
              <Image
                src={landing_testimonial_1}
                alt="landing_testimonial"
                className="rounded-full grayscale absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">Col. Rakesh Bhardwaj</span>
              <span className="">Group COO United Hospital</span>
              <p className="mt-5">
                Prodoc AI helps us connect with patients better. We don't just
                book appointments—we reach new patients, follow up
                automatically, and engage them in their own language.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
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
      </div>
      <div className="w-full bg-white relative flex items-center justify-center">
        <div className="mt-20 mb-20">
          <div className="">
            <h3 className="text-4xl text-black text-center">
              Empowering 100+ healthcare facilities worldwide
              <br />
              <span className="text-2xl font-normal mt-2 block">
                With{" "}
                <span className="text-primary text-2xl">24/7 multilingual</span>{" "}
                patient engagement
              </span>
            </h3>
            <div className="flex items-center justify-center mt-8">
              <div className="bg-primary w-fit text-white px-8 py-4 rounded-3xl">
                Book a demo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
