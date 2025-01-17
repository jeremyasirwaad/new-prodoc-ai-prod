import Image from "next/image";
import solution_insurance_hero from "../../../assets/solutions/insurance/solution_insurance_hero.jpg";
import { FaCircleCheck } from "react-icons/fa6";
import solution_insurance_fact1 from "../../../assets/solutions/insurance/solution_insurance_fact1.jpg";
import solution_insurance_fact2 from "../../../assets/solutions/insurance/solution_insurance_fact2.jpg";
import solution_insurance_fact3 from "../../../assets/solutions/insurance/solution_insurance_fact3.jpg";
import solution_insurance_fact4 from "../../../assets/solutions/insurance/solution_insurance_fact4.jpg";
import solution_insurance_section from "../../../assets/solutions/insurance/solution_insurance_section.png";

// app/content/page.jsx
export default function Insurance() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="pt-10 sm:pt-0 text-[30px] sm:text-[50px] md:text-[55px] text-center leading-[40px] sm:leading-[55px] md:leading-[68px] mt-16 sm:mt-32  h-auto">
        <h1 className="font-[400] tracking-[0.5px] sm:tracking-[1px]">
          Transforming <br className="sm:hidden"></br>
          <span className="text-primary text-[30px] sm:text-[50px] md:text-[55px] font-[400] tracking-[0.5px] sm:tracking-[1px]">
            Insurance Engagement
          </span>{" "}
          <br />
          with AI-Driven <br className="sm:hidden"></br> Healthcare Solutions
        </h1>
        <h3 className="text-base sm:text-lg mt-4 sm:mt-6">
          Because Every Patient Deserves a Seamless Healthcare Journey
        </h3>
      </div>

      <div className="w-fit mt-8">
        <div className="bg-primary text-white px-6 py-4 rounded-3xl">
          Let's get started
        </div>
      </div>
      <div className="w-[90vw] xl:w-[65vw] rounded-2xl mt-20 sm:mb-20">
        <Image
          alt="patient_outreach_hero"
          className="rounded-3xl"
          src={solution_insurance_hero}
        />
      </div>
      <div className="w-full flex items-center justify-center bg-white">
        <div className="mt-20 mb-20 w-[90vw] xl:w-[75vw] rounded-2xl">
          <h5 className="text-center sm:text-left text-[30px] sm:text[50px]">
            Empowers you to deliver <br></br> exceptional{" "}
            <br className="sm:hidden"></br>
            <span className="text-primary text-[30px] sm:text[50px]">
              {" "}
              patient outreach
            </span>{" "}
          </h5>

          <div className="w-full flex flex-col sm:flex-row gap-8 sm:gap-20 mt-10 sm:mt-10">
            {/* First Row */}
            <div className="w-full flex sm:flex-row flex-wrap gap-8">
              <div className="w-full  flex flex-col bg-white p-6 sm:p-10 rounded-xl relative shadow-md">
                <Image
                  src={solution_insurance_fact1}
                  alt="landing_testimonial"
                  className="rounded-full absolute  sm:right-10 top-5 sm:mt-2 h-[80px] sm:h-[100px] w-[80px] sm:w-[100px]"
                />
                <span className="text-lg sm:text-xl mt-20 sm:mt-24">
                  Discover the Right Care, Effortlessly
                </span>
                <p className="mt-4 sm:mt-5 text-sm ">
                  Patients upload a referral photo on WhatsApp, and our AI
                  instantly matches them with nearby, specialized hospitals.
                  This ensures medical needs are met with convenience and
                  efficiency.
                </p>
              </div>
              <div className="w-full  flex flex-col bg-white p-6 sm:p-10 rounded-xl relative shadow-md">
                <Image
                  src={solution_insurance_fact4}
                  alt="landing_testimonial"
                  className="rounded-full absolute  sm:right-10 top-5 h-[80px] sm:h-[100px] w-[80px] sm:w-[100px]"
                />
                <span className="text-lg sm:text-xl mt-20 sm:mt-12">
                  Book Appointments in a Flash
                </span>
                <p className="mt-4 sm:mt-5 text-sm">
                  Patients can choose from AI-recommended hospitals. Book slots
                  directly through WhatsApp—no downloads, no hassle. Receive
                  instant confirmations, reminders, and updates to keep them on
                  track.
                </p>
              </div>
            </div>

            {/* Second Row */}
            <div className="w-full flex flex-wrap gap-8 sm:mt-4 ">
              <div className="w-full  flex flex-col bg-white p-6 sm:p-10 rounded-xl relative shadow-md">
                <Image
                  src={solution_insurance_fact3}
                  alt="landing_testimonial"
                  className="rounded-full absolute sm:right-10 top-5 h-[80px] sm:h-[100px] w-[80px] sm:w-[100px]"
                />
                <span className="text-lg sm:text-xl mt-20  sm:mt-8">
                  Always-on Virtual Assistant
                </span>
                <p className="mt-4 sm:mt-5 text-sm sm:text-sm">
                  Available 24/7 to answer patient queries about hospitals,
                  services, and procedures. Supports multiple languages to cater
                  to diverse patient needs. Provides step-by-step guidance for
                  referrals, bookings, and more.
                </p>
              </div>
              <div className="w-full  flex flex-col bg-white p-6 sm:p-10 rounded-xl relative shadow-md">
                <Image
                  src={solution_insurance_fact2}
                  alt="landing_testimonial"
                  className="rounded-full absolute  sm:right-10 top-5 h-[80px] sm:h-[100px] w-[80px] sm:w-[100px]"
                />
                <span className="text-lg sm:text-xl mt-20 sm:mt-12">
                  End-to-End Patient Engagement
                </span>
                <p className="mt-4 sm:mt-5 text-sm sm:text-sm">
                  Keep patients informed at every step of the process: Referral
                  approvals, Appointment updates & Follow-up notifications.
                  Proactively share insights on healthcare options and services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full flex items-center justify-center">
        <div className="w-[90vw] xl:w-[75vw] mt-20 mb-24 flex items-center justify-between">
          <div className="flex items-start flex-col justify-start w-1/2">
            <h3 className="text-[40px] mb-10">Why Patients Love Us</h3>
            <p className="text-lg flex items-center gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Accessible on every device, ensuring seamless connectivity
              everywhere
            </p>
            <p className="text-lg mt-6 flex items-center gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Personalized health advice tailored specifically for your needs
            </p>
            <p className="text-lg mt-6 flex items-center gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Easy-to-use interactive platform designed for user-friendliness
            </p>
            <p className="text-lg mt-6 flex items-center gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Quicker claims processing for all, enhancing efficiency and
              satisfaction
            </p>
          </div>
          <div className="flex justify-end items-end w-1/2">
            <Image
              alt="solution_insurance_section"
              src={solution_insurance_section}
              className="ml-auto w-[450px] h-auto object-contain"
            />
          </div>
        </div>
      </div> */}
      <div className="w-full flex items-center justify-center">
        <div className="w-[90vw] xl:w-[75vw] sm:mt-20 sm:mb-24 flex flex-col lg:flex-row items-center lg:items-center justify-between">
          {/* Text Section */}
          <div className="flex flex-col justify-start w-full lg:w-1/2">
            <h3 className="text-[30px] sm:text-[35px] lg:text-[40px] mb-6 lg:mb-10 text-center lg:text-left">
              Why Patients Love Us
            </h3>
            <p className="text-base sm:text-lg flex items-center gap-x-3 text-center lg:text-left">
              <FaCircleCheck className="text-lg" color="#1772d2" />
              Accessible on every device, ensuring seamless connectivity
              everywhere
            </p>
            <p className="text-base sm:text-lg mt-4 lg:mt-6 flex items-center gap-x-3 text-center lg:text-left">
              <FaCircleCheck className="text-lg" color="#1772d2" />
              Personalized health advice tailored specifically for your needs
            </p>
            <p className="text-base sm:text-lg mt-4 lg:mt-6 flex items-center gap-x-3 text-center lg:text-left">
              <FaCircleCheck className="text-lg" color="#1772d2" />
              Easy-to-use interactive platform designed for user-friendliness
            </p>
            <p className="text-base sm:text-lg mt-4 lg:mt-6 flex items-center gap-x-3 text-center lg:text-left">
              <FaCircleCheck className="text-lg" color="#1772d2" />
              Quicker claims processing for all, enhancing efficiency and
              satisfaction
            </p>
          </div>

          {/* Image Section */}
          <div className=" mt-10 lg:mt-0  flex justify-center lg:justify-end items-center w-full lg:w-1/2">
            <Image
              alt="solution_insurance_section"
              src={solution_insurance_section}
              className="w-[300px] sm:w-[400px] lg:w-[450px] h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#e9f4ff] relative flex items-center justify-center">
        <div className="mt-20 mb-8">
          <div className="">
            <h3 className="text-3xl text-black text-center">
              Transform your patient outreach campaigns
              <br />
              <span className="text-3xl font-normal mt-2 block">
                With{" "}
                <span className="text-primary text-3xl">
                  AI-powered multichannel
                </span>{" "}
                campaign management
              </span>
            </h3>
            <div className="flex items-center justify-center mt-8">
              <div className="bg-primary w-fit text-white px-8 py-4 rounded-3xl">
                Start your campaign
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
