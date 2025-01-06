import Image from "next/image";
import solution_insurance_hero from "../../../assets/solutions/insurance/solution_insurance_hero.jpg";
import { FaCircleCheck } from "react-icons/fa6";
import solution_insurance_fact1 from "../../../assets/solutions/insurance/solution_insurance_fact1.jpg";
import solution_insurance_fact2 from "../../../assets/solutions/insurance/solution_insurance_fact2.jpg";
import solution_insurance_fact3 from "../../../assets/solutions/insurance/solution_insurance_fact3.jpg";
import solution_insurance_fact4 from "../../../assets/solutions/insurance/solution_insurance_fact4.jpg";
import solution_insurance_section from "../../../assets/solutions/insurance/solution_insurance_section.png"

// app/content/page.jsx
export default function Insurance() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="text-[55px] text-center leading-[68px] mt-32 h-[204px]">
        <h1 className="font-[400] tracking-[1px]">
          Tranforming{" "}
          <span className="text-primary text-[55px] font-[400] tracking-[1px]">
            Insurance Engagement
          </span>{" "}
          <br></br>
          with AI-Driven Healthcare Solutions
        </h1>
        <h3 className="text-lg mt-6">
          Because Every Patient Deserves a Seamless Healthcare Journey
        </h3>
      </div>
      <div className="w-fit mt-8">
        <div className="bg-primary text-white px-6 py-4 rounded-3xl">
          Let's get started
        </div>
      </div>
      <div className="w-[90vw] xl:w-[65vw] rounded-2xl mt-20 mb-20">
        <Image
          alt="patient_outreach_hero"
          className="rounded-3xl"
          src={solution_insurance_hero}
        />
      </div>
      <div className="w-full flex items-center justify-center bg-white">
        <div className="mt-20 mb-20 w-[90vw] xl:w-[75vw] rounded-2xl">
          <h5 className="text-[40px]">
            Empowers you to deliver <br></br> exceptional
            <span className="text-primary text-[40px]">
              {" "}
              patient outreach
            </span>{" "}
          </h5>
          <div className="w-full flex gap-8 mt-14">
            <div className="w-1/2 flex flex-col bg-white p-10 rounded-xl relative shadow-md">
              <Image
                src={solution_insurance_fact1}
                alt="landing_testimonial"
                className="rounded-full absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">
                Discover the Right Care, Effortlessly
              </span>
              <p className="mt-5">
                Patients upload a referral photo on WhatsApp, and our AI instantly matches them with nearby, specialized hospitals. 
                This ensures medical needs are met with convenience and efficiency.
              </p>
            </div>
            <div className="w-1/2 flex flex-col bg-white p-10 rounded-xl relative shadow-md">
              <Image
                src={solution_insurance_fact4}
                alt="landing_testimonial"
                className="rounded-full absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">
                Book Appointments in a Flash
              </span>
              <p className="mt-5">
                Patients can choose from AI-recommended hospitals. Book slots
                directly through WhatsApp—no downloads, no hassle. Receive
                instant confirmations, reminders, and updates to keep them on
                track.
              </p>
            </div>
          </div>
          <div className="w-full flex gap-8 mt-10">
            <div className="w-1/2 flex flex-col bg-white p-10 rounded-xl relative shadow-md">
              <Image
                src={solution_insurance_fact3}
                alt="landing_testimonial"
                className="rounded-full absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">Always-on Virtual Assistant</span>
              <p className="mt-5">
                Available 24/7 to answer patient queries about hospitals,
                services, and procedures. Supports multiple languages to cater
                to diverse patient needs. Provides step-by-step guidance for
                referrals, bookings, and more.
              </p>
            </div>
            <div className="w-1/2 flex flex-col bg-white p-10 rounded-xl relative shadow-md">
              <Image
                src={solution_insurance_fact2}
                alt="landing_testimonial"
                className="rounded-full absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">
                End-to-End Patient Engagement
              </span>
              <p className="mt-5">
                Keep patients informed at every step of the process: Referral
                approvals, Appointment updates & Follow-up notifications.
                Proactively share insights on healthcare options and services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
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
      </div>
      <div className="w-full bg-white relative flex items-center justify-center">
        <div className="mt-20 mb-20">
          <div className="">
            <h3 className="text-4xl text-black text-center">
              Transform your patient outreach campaigns
              <br />
              <span className="text-2xl font-normal mt-2 block">
                With{" "}
                <span className="text-primary text-2xl">
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
