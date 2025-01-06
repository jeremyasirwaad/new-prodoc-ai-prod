"use client";

import Image from "next/image";
import partner_fact_1 from "../../assets/partner/partner_fact_1.jpg"
import partner_fact_2 from "../../assets/partner/partner_fact_2.jpg"
import partner_fact_3 from "../../assets/partner/partner_fact_3.jpg"
import partner_fact_4 from "../../assets/partner/partner_fact_4.jpg"
import partner_fact_5 from "../../assets/partner/partner_fact_5.jpg"
import partner_fact_6 from "../../assets/partner/partner_fact_6.jpg"
import partner_section from "../../assets/partner/partner_section.png"


import { useState, useEffect } from "react";
import solution_hospital_hero from "../../assets/partner/partner_hero.png";
import { FaCircleCheck } from "react-icons/fa6";
import { Divider } from "antd";
// app/content/page.jsx
export default function Partners() {
  const texts = [
    "Are you leveraging Google or Meta ads?",
    "Are you working with Healthcare clients?",
    "Are you crushing it on WhatsApp marketing?",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Switch every 2 seconds

    return () => clearInterval(interval); // Clean up the interval when component unmounts
  }, []);

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="text-[50px] text-center leading-[68px] mt-32 mb-20  w-[90vw] xl:w-[75vw] flex items-center gap-x-10">
        <div className="text-[50px] flex flex-col w-[50%]">
          <p className="text-left">Prodoc Affiliate Partnership Program</p>
          <h1 className="font-[400]  text-left">
            Empower Businesses
            <br />
            <span className="text-primary text-[50px] font-[400]">
              Earn Rewards
            </span>{" "}
          </h1>
          <h3 className="text-lg mt-6 text-left">
            The Prodoc Affiliate Partnership Program allows you to promote our
            innovative patient engagement platform and earn exciting rewards for
            every successful referral or sale.
          </h3>
          <button className="bg-primary w-fit h-fit mt-6 text-base text-white px-8 py-4 rounded-3xl">
            Enroll as a Partner
          </button>
        </div>
        <div className="w-[50%] bg-red">
          <Image src={solution_hospital_hero} alt="alt" />
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="mt-10 mb-20 w-[90vw] xl:w-[75vw] rounded-2xl">
          <Divider />
          <h5 className="text-[40px] mt-10">
            Why Partner with
            <span className="text-primary text-[40px]"> Prodoc?</span>
          </h5>
          <div className="w-full flex gap-8 mt-14">
            <div className="w-1/2 flex flex-col bg-white p-10 rounded-xl relative shadow-md">
              <Image
                src={partner_fact_1}
                alt="landing_testimonial"
                className="rounded-full absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">AI Marketing Tech</span>
              <p className="mt-5">
                Prodoc AI to empower you to deliver results. Grow your practice
                and your clients' businesses.
              </p>
            </div>
            <div className="w-1/2 flex flex-col bg-white p-10 rounded-xl relative shadow-md">
              <Image
                src={partner_fact_2}
                alt="landing_testimonial"
                className="rounded-full absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">Dedicated Support</span>
              <p className="mt-5">
                Our dedicated affiliate team is always available to answer your
                questions and support your success.
              </p>
            </div>
          </div>
          <div className="w-full flex gap-8 mt-10">
            <div className="w-1/2 flex flex-col bg-white p-10 rounded-xl relative shadow-md">
              <Image
                src={partner_fact_3}
                alt="landing_testimonial"
                className="rounded-full absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">Tiered Reward Structure</span>
              <p className="mt-5">
                Top-performing affiliates unlock exclusive benefits like
                business introductions, access to credits and coupons, dedicated
                training, and priority support.
              </p>
            </div>
            <div className="w-1/2 flex flex-col bg-white p-10 rounded-xl relative shadow-md">
              <Image
                src={partner_fact_4}
                alt="landing_testimonial"
                className="rounded-full absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">Seamless Tracking</span>
              <p className="mt-5">
                Our robust tracking system ensures you receive credit for every
                referral, making it easy to monitor your earnings.
              </p>
            </div>
          </div>
          <div className="w-full flex gap-8 mt-10">
            <div className="w-1/2 flex flex-col bg-white p-10 rounded-xl relative shadow-md">
              <Image
                src={partner_fact_5}
                alt="landing_testimonial"
                className="rounded-full absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">Proven Marketing Materials</span>
              <p className="mt-5">
                We provide you with high-quality marketing materials, including
                banners, social media templates, and blog post ideas, to help
                you promote Prodoc effectively.
              </p>
            </div>
            <div className="w-1/2 flex flex-col bg-white p-10 rounded-xl relative shadow-md">
              <Image
                src={partner_fact_6}
                alt="landing_testimonial"
                className="rounded-full absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">Lucrative Commissions</span>
              <p className="mt-5">
                Earn competitive commissions on every qualified lead or sale
                generated through your unique affiliate link.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center bg-white">
        <div className="w-[90vw] xl:w-[75vw] mt-20 mb-24 flex items-center justify-between ">
          <div className="flex items-start flex-col justify-start w-1/2">
            <h3 className="text-[50px] mb-10">
              Top Performer{" "}
              <span className="text-primary text-[50px]">Advantages</span>{" "}
            </h3>
            <p className="text-lg flex items-start gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Expand your reach with leads generated by Prodoc, offering growth
              opportunities.
            </p>
            <p className="text-lg mt-6 flex items-start  gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Access specialized marketing materials and training to excel in
              the healthcare industry.
            </p>
            <p className="text-lg mt-6 flex items-start  gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Receive personalized support and guidance from our dedicated team
              to ensure your success.
            </p>
            <p className="text-lg mt-6 flex items-start  gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Deliver superior patient care and achieve outstanding outcomes.
            </p>
          </div>

          <div className="flex justify-end items-end w-1/2">
            <Image
              alt="solution_hospital_section"
              src={partner_section}
              className="ml-auto w-[450px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
      <div className="w-[90vw] relative flex items-center justify-center">
        <div className="mt-20 mb-20">
          <div className=" w-[90vw]">
            <h3 className="text-4xl text-black text-center">
              Who should join us ?
            </h3>
            <div className="relative  w-[90vw] h-20 flex justify-center items-center overflow-hidden">
              <div className="relative  w-[90vw]">
                {texts.map((text, index) => (
                  <div
                    key={index}
                    className={`absolute w-[90vw] text-4xl text-primary text-center  transition-opacity duration-500 ease-in-out ${
                      index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center mt-6">If you answered yes, then you are the Prodoc Affiliate Partner we've been searching for!</p>
            <div className="flex items-center justify-center mt-8">
              <div className="bg-primary w-fit text-white px-8 py-4 rounded-3xl">
                Join us today
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
