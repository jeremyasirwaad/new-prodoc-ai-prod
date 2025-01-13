"use client";

import Image from "next/image";
import partner_fact_1 from "../../assets/partner/partner_fact_1.jpg";
import partner_fact_2 from "../../assets/partner/partner_fact_2.jpg";
import partner_fact_3 from "../../assets/partner/partner_fact_3.jpg";
import partner_fact_4 from "../../assets/partner/partner_fact_4.jpg";
import partner_fact_5 from "../../assets/partner/partner_fact_5.jpg";
import partner_fact_6 from "../../assets/partner/partner_fact_6.jpg";
import partner_section from "../../assets/partner/partner_section.png";

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
    <section className="pt-12 flex flex-col items-center justify-center">
      <div className="text-[40px] sm:text-[55px]  text-center leading-[40px] sm:leading-[70px]  pt-16 sm:pt-0 sm:mt-16 mb-3 sm:mb-16 md:mb-20 w-[90vw] xl:w-[75vw] flex flex-col md:flex-row items-center gap-y-10 md:gap-x-10">
        {/* Text Section */}
        <div className="flex flex-col w-full md:w-[50%]">
          <p className="sm:text-left text-[20px] sm:text[30px]">
            Prodoc Affiliate Partnership Program
          </p>
          <h1 className="font-[400] text-[30px] sm:text-[55px] sm:text-left">
            Empower Businesses
            <br />
            <span className="text-primary text-[30px] sm:text-[55px] font-[400]">
              Earn Rewards
            </span>
          </h1>
          <h3 className="text-sm sm:text-base md:text-lg mt-4 sm:mt-6 text-center sm:text-left">
            The Prodoc Affiliate Partnership Program allows you to promote our
            innovative patient engagement platform and earn exciting rewards for
            every successful referral or sale.
          </h3>
          <div className="flex w-full items-center justify-center sm:justify-start">
            <button className="bg-primary w-fit h-fit mt-4 sm:mt-6 text-sm sm:text-base text-white px-6 sm:px-8 py-3 sm:py-4 rounded-3xl">
              Enroll as a Partner
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[50%] bg-red">
          <Image
            src={solution_hospital_hero}
            alt="alt"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="sm:mt-10 sm:mb-20 w-[90vw] xl:w-[75vw] rounded-2xl">
          <Divider />
          <h5 className="text-[30px] sm:text-[30px] md:text-[40px] mt-10 text-center">
            Why Partner with
            <span className="text-primary text-[30px] sm:text-[40px]">
              {" "}
              Prodoc?
            </span>
          </h5>

          {/* First Row */}
          <div className="w-full flex flex-wrap sm:flex-nowrap gap-6 sm:gap-8 mt-10 sm:mt-14">
            <div className="w-full sm:w-1/2 flex flex-col bg-[#e9f4ff] p-6 sm:p-10 rounded-xl relative shadow-md">
              <Image
                src={partner_fact_1}
                alt="landing_testimonial"
                className="rounded-full absolute right-6 sm:right-10 top-5 h-[80px] sm:h-[100px] w-[80px] sm:w-[100px]"
              />
              <span className="text-lg sm:text-xl mt-8 sm:mt-12">
                AI Marketing Tech
              </span>
              <p className="mt-4 sm:mt-5 text-sm sm:text-base">
                Prodoc AI to empower you to deliver results. Grow your practice
                and your clients' businesses.
              </p>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col bg-[#e9f4ff] p-6 sm:p-10 rounded-xl relative shadow-md">
              <Image
                src={partner_fact_2}
                alt="landing_testimonial"
                className="rounded-full absolute right-6 sm:right-10 top-5 h-[80px] sm:h-[100px] w-[80px] sm:w-[100px]"
              />
              <span className="text-lg sm:text-xl mt-8 sm:mt-12">
                Dedicated Support
              </span>
              <p className="mt-4 sm:mt-5 text-sm sm:text-base">
                Our dedicated affiliate team is always available to answer your
                questions and support your success.
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div className="w-full flex sm:flex-nowrap flex-wrap gap-6 sm:gap-8 mt-8 sm:mt-10">
            <div className="w-full sm:w-1/2 flex flex-col bg-[#e9f4ff] p-6 sm:p-10 rounded-xl relative shadow-md">
              <Image
                src={partner_fact_3}
                alt="landing_testimonial"
                className="rounded-full absolute right-6 sm:right-10 top-5 h-[80px] sm:h-[100px] w-[80px] sm:w-[100px]"
              />
              <span className="text-lg sm:text-xl mt-8 sm:mt-12">
                Tiered Reward Structure
              </span>
              <p className="mt-4 sm:mt-5 text-sm sm:text-base">
                Top-performing affiliates unlock exclusive benefits like
                business introductions, access to credits and coupons, dedicated
                training, and priority support.
              </p>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col bg-[#e9f4ff] p-6 sm:p-10 rounded-xl relative shadow-md">
              <Image
                src={partner_fact_4}
                alt="landing_testimonial"
                className="rounded-full absolute right-6 sm:right-10 top-5 h-[80px] sm:h-[100px] w-[80px] sm:w-[100px]"
              />
              <span className="text-lg sm:text-xl mt-8 sm:mt-12">
                Seamless Tracking
              </span>
              <p className="mt-4 sm:mt-5 text-sm sm:text-base">
                Our robust tracking system ensures you receive credit for every
                referral, making it easy to monitor your earnings.
              </p>
            </div>
          </div>

          {/* Third Row */}
          <div className="w-full flex sm:flex-nowrap flex-wrap gap-6 sm:gap-8 mt-8 sm:mt-10">
            <div className="w-full sm:w-1/2 flex flex-col bg-[#e9f4ff] p-6 sm:p-10 rounded-xl relative shadow-md">
              <Image
                src={partner_fact_5}
                alt="landing_testimonial"
                className="rounded-full absolute right-6 sm:right-10 top-5 h-[80px] sm:h-[100px] w-[80px] sm:w-[100px]"
              />
              <span className="text-lg sm:text-xl mt-16 sm:mt-12">
                Proven Marketing Materials
              </span>
              <p className="mt-4 sm:mt-5 text-sm sm:text-base">
                We provide you with high-quality marketing materials, including
                banners, social media templates, and blog post ideas, to help
                you promote Prodoc effectively.
              </p>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col bg-[#e9f4ff] p-6 sm:p-10 rounded-xl relative shadow-md">
              <Image
                src={partner_fact_6}
                alt="landing_testimonial"
                className="rounded-full absolute right-6 sm:right-10 top-5 h-[80px] sm:h-[100px] w-[80px] sm:w-[100px]"
              />
              <span className="text-lg sm:text-xl mt-8 sm:mt-12">
                Lucrative Commissions
              </span>
              <p className="mt-4 sm:mt-5 text-sm sm:text-base">
                Earn competitive commissions on every qualified lead or sale
                generated through your unique affiliate link.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center bg-[#e9f4ff] px-4 sm:px-0">
        <div className="w-[90vw] xl:w-[75vw] mt-10 sm:mt-20 mb-16 sm:mb-24 flex flex-col lg:flex-row items-center lg:items-start justify-between">
          {/* Text Section */}
          <div className="flex flex-col items-start justify-start w-full lg:w-1/2">
            <h3 className="text-[30px] sm:text-[40px] lg:text-[50px] mb-6 sm:mb-10 text-center lg:text-left">
              Top Performer{" "}
              <span className="text-primary text-[30px] sm:text-[40px]">
                Advantages
              </span>
            </h3>
            <p className="text-sm sm:text-base lg:text-lg flex items-start gap-x-3 text-center lg:text-left">
              <FaCircleCheck size={22} color="#1772d2" />
              Expand your reach with leads generated by Prodoc, offering growth
              opportunities.
            </p>
            <p className="text-sm sm:text-base lg:text-lg mt-4 sm:mt-6 flex items-start gap-x-3 text-center lg:text-left">
              <FaCircleCheck size={22} color="#1772d2" />
              Access specialized marketing materials and training to excel in
              the healthcare industry.
            </p>
            <p className="text-sm sm:text-base lg:text-lg mt-4 sm:mt-6 flex items-start gap-x-3 text-center lg:text-left">
              <FaCircleCheck size={22} color="#1772d2" />
              Receive personalized support and guidance from our dedicated team
              to ensure your success.
            </p>
            <p className="text-sm sm:text-base lg:text-lg mt-4 sm:mt-6 flex items-start gap-x-3 text-center lg:text-left">
              <FaCircleCheck size={22} color="#1772d2" />
              Deliver superior patient care and achieve outstanding outcomes.
            </p>
          </div>

          {/* Image Section */}
          <div className="mt-10 lg:mt-0 flex justify-center lg:justify-end items-center w-full lg:w-1/2">
            <Image
              alt="solution_hospital_section"
              src={partner_section}
              className="w-[300px] sm:w-[400px] lg:w-[450px] h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="w-[90vw] relative flex items-center justify-center">
        <div className="sm:mt-20 sm:mb-20">
          <div className=" w-[90vw]">
            <h3 className="text-3xl text-black text-center">
              Who should join us ?
            </h3>
            <div className="relative  w-[90vw] h-20 flex justify-center items-center overflow-hidden">
              <div className="relative  w-[90vw]">
                {texts.map((text, index) => (
                  <div
                    key={index}
                    className={`absolute w-[90vw] text-3xl text-primary text-center  transition-opacity duration-500 ease-in-out ${
                      index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {text}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-center mt-6">
              If you answered yes, then you are the Prodoc Affiliate Partner
              we've been searching for!
            </p>
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
