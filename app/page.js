"use client";

import landing_hero from "../assets/landing_hero.jpg";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { FaCircleCheck } from "react-icons/fa6";
import { SimpleButton } from "@/components/Buttons/SimpleButton";
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
    <section className="flex flex-col items-center justify-center">
      <div className="text-[55px] text-center leading-[68px] mt-32 h-[204px]">
        <h1 className="font-[400] tracking-[1px]">
          Enhance{" "}
          <span className="text-primary text-[55px] font-[400] tracking-[1px]">
            healthcare
          </span>{" "}
          with<br></br> AI-powered{" "}
          <span className="text-primary text-[55px] font-[400] tracking-[1px]">
            patient engagement<br></br>
          </span>{" "}
          for Better Outcomes <br></br>
        </h1>
      </div>
      <div className="w-fit mt-10">
        <Link
          href={"/book-a-demo"}
          className="bg-primary text-white px-6 py-4 rounded-3xl"
        >
          Schedule a meeting
        </Link>
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
          Trusted by hundreds of hospitals and clinics since 2022
        </p>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-[90vw] xl:w-[75vw] mt-20 mb-24 flex items-center justify-between ">
          <div className="flex items-start flex-col justify-start w-1/2">
            <h3 className="text-[50px] mb-10">What we solve</h3>
            <div>
              <p className="text-lg flex items-center gap-x-3">
                <FaCircleCheck size={22} color="#1772d2" />

                <span className="text-primary text-base">
                  Pre-Consultation Challenges
                </span>
              </p>
              <p className="mt-1 text-sm">
                Patients often struggle to navigate their symptoms and find the
                right care. Prodoc simplifies this process with AI-powered
                guidance and symptom assessment.
              </p>
            </div>
            <div>
              <p className="text-lg mt-6 flex items-center gap-x-3">
                <FaCircleCheck size={22} color="#1772d2" />
                <span className="text-primary text-base">
                  Inconsistent Patient Communication
                </span>
              </p>
              <p className="mt-1 text-sm">
                Multiple channels and fragmented information create confusion.
                Prodoc ensures consistent, multilingual, and 24/7 communication
                across voice, WhatsApp, and bots.
              </p>
            </div>
            <div>
              <p className="text-lg mt-6 flex items-center gap-x-3">
                <FaCircleCheck size={22} color="#1772d2" />
                <span className="text-primary text-base">
                  Care Journey Gaps
                </span>
              </p>
              <p className="mt-1 text-sm">
                Limited support outside hospital premises hinders patient
                engagement. Prodoc provides continuous, personalized
                interactions to improve care journeys and outcomes.
              </p>
            </div>
            <div>
              <p className="text-lg mt-6 flex items-center gap-x-3">
                <FaCircleCheck size={22} color="#1772d2" />
                <span className="text-primary text-base">
                  Referral and Collaboration Bottlenecks
                </span>
              </p>
              <p className="mt-1 text-sm">
                Managing patient referrals and coordinating with multiple
                partners can be complex. Prodoc streamlines referrals and
                enhances collaboration, driving efficiency and patient
                satisfaction.
              </p>
            </div>
            
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
          
          <div className="flex flex-row bg-blue-900 text-white p-12 w-[98.7vw] items-center gap-9 relative">
            <div className="flex flex-col items-center w-full justify-center">
              <h3 className="leading-tight text-[45px] text-center ">
                Transform Patient Communication <br></br>
                with{" "}
                <span className="text-blue-400 text-[45px]"> Prodoc AI</span>
              </h3>
              <Link href={"/book-a-demo"} className="mt-8">
                <SimpleButton text={"Get in touch"} bgColor={"bg-blue-600"} />
              </Link>
            </div>

            <Image
            alt="alternative text"
              className=" object-contain absolute bottom-0 right-0 opacity-50"
              src={landing_hero_3}
              width={350}
              height={250}
            />
          </div>

          <div className="flex gap-10 mt-14">
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
              <p className="mt-6 text-[65px] text-center">100+</p>
              <p className="text-xl text-center">Healthcare Providers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full bg-white">
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
      </div>
      <div className="w-full bg-white  flex items-center justify-center">
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
      </div>

      <div className="flex items-center justify-center w-full bg-white">
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
                src={landing_testimonial_4}
                alt="landing_testimonial"
                className="rounded-full grayscale absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">Dr. Rohit Sane</span>
              <span className="">CEO, Madhavbaug</span>
              <p className="mt-5">
                Prodoc AI enhances our ability to interact, understand patient
                needs, and connect them to the best care at the nearest
                Madhavbaug clinic.
              </p>
            </div>
            <div className="w-1/2 flex flex-col bg-white p-10 rounded-xl relative">
              <Image
                src={landing_testimonial_1}
                alt="landing_testimonial"
                className="rounded-full grayscale absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">Dr. K.K Subbaiah</span>
              <span className="">CEO, Orthopedic surgeon, BOSH Hospital</span>
              <p className="mt-5">
                Prodoc AI has transformed our WhatsApp engagement strategy,
                moving beyond just appointment booking to driving lead
                generation, and better patient retention
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
              <span className="">Director & CEO - Provitale Health</span>
              <p className="mt-5">
                Highly recommend Prodoc AI for streamlining lead distribution,
                automating bookings, and boosting patient conversion and
                retention across our clinics.
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
                Prodoc AI helps us reach new and existing patients, follow up
                automatically, and engage with them in their own language.
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
            <div className="w-full flex items-center justify-center flex-col">
              <div className="mt-20 w-[90vw] xl:w-[75vw] rounded-2xl flex items-center justify-center flex-col">
                <span className="text-center text-[45px]">
                  Book a <span className="text-black text-[45px]">Demo</span>
                </span>
                <p className="text-center">
                  Please complete the form and learn how our solutions can
                  enhance
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
                <Divider className="mt-20" />
              </div>
            </div>
         
          </div>
        </div>
      </div>
    </section>
  );
}
