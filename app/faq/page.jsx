"use client";

import { Disclosure, Transition } from "@headlessui/react";
import { FaChevronUp } from "react-icons/fa6";
import Head from "next/head";
import { useRouter } from "next/navigation";
import React from "react";
import { faqData } from "../../content/FaqContent";
import { IoIosArrowRoundBack } from "react-icons/io";

function FAQ() {
  const router = useRouter();
  return (
    <div className="w-[95vw] mx-auto  flex flex-col justify-center items-center  md:pt-12">
      <Head>
        <title>FAQ - Prodoc by Growth Hacker Consulting</title>
        <meta
          name="description"
          content="Explore our FAQ section to find answers to all your questions about Prodoc, a product by Growth Hacker Consulting Private Limited. Get help with features, support, and more!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Prodoc, Growth Hacker Consulting, FAQ, Frequently Asked Questions, Support, Help"
        />
        <meta
          property="og:title"
          content="FAQ - Prodoc by Growth Hacker Consulting"
        />
        <meta
          property="og:description"
          content="Discover answers to frequently asked questions about Prodoc by Growth Hacker Consulting. Learn about features, support options, and how to make the most of our services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prodoc.ai/faq" />
        <link rel="canonical" href="https://prodoc.ai/faq" />
      </Head>

      <div className="mx-auto w-full max-w-7xl text-left flex justify-start items-center">
        <div
          onClick={() => {
            window.history.back();
          }}
          className="w-fit flex justify-center items-center gap-x-2 cursor-pointer text-sm p-2 rounded-md hover:bg-[#f7f7f5] "
        >
          <IoIosArrowRoundBack size={25}/> 
          Back
        </div>
      </div>

      <h1 className="text-[30px] sm:text-[40px] mt-14 p-4">
        Frequently Asked Questions
      </h1>

      <div className=" w-full mb-16 ">
        {faqData.map((section) => (
          <div
            key={section.section}
            className="w-full max-w-4xl my-10 mx-auto px-4 sm:px-6 lg:px-8"
          >
            <h2 className="text-xl font-semibold text-left mb-6">
              {section.section}
            </h2>
            {section.items.map((item, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <div>
                    <Disclosure.Button className="flex justify-between items-center w-full px-4 py-3 my-2 text-left font-medium bg-[#f6f5f4] rounded-lg hover:bg-[#fafafa] focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75 gap-x-10">
                      <span>{item.question}</span>
                      <FaChevronUp
                        className={`${
                          open ? "transform rotate-180" : ""
                        } text-lg w-[30px]`}
                      />
                    </Disclosure.Button>

                    <Transition
                      enter="transition duration-500 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-200 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-left bg-[#fcfcfc] text-gray-500">
                        {item.answer}
                      </Disclosure.Panel>
                    </Transition>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;

