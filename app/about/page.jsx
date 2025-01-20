"use client";
// app/content/page.jsx

export default function PatientConnect() {
  return (
    <section className="flex flex-col w-full">
      <div className=" mt-32 sm:mt-32 w-full flex  h-screen flex items-center justify-start">
        <div className="w-1/2 h-full flex flex-col justify-start items-end sm:pt-20">
          <p className="text-primary text-[30px] sm:text-[50px] sm:w-[70%]  sm:text-left w-full">
            Contact Us
          </p>
          <p className="text-sm sm:text-lg  sm:w-[70%]">
            At Prodoc, we're committed to a future where data fuels success for
            all stakeholders: patients, providers, and payers alike. With our
            cutting-edge AI tools, we're revolutionizing healthcare from its
            foundation, ushering in an era of unparalleled efficiency and
            efficacy.
          </p>
        </div>
        <div className="w-1/2 h-full"></div>
      </div>
    </section>
  );
}
