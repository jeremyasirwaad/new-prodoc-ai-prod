import Image from "next/image";
import patient_outreach_hero from "../../../assets/features/patient-outreach/patient_outreach_hero.png";
import { FaCircleCheck } from "react-icons/fa6";
import patient_outreach_fact1 from "../../../assets/features/patient-outreach/patient_outreach_fact1.jpg";
import patient_outreach_fact2 from "../../../assets/features/patient-outreach/patient_outreach_fact2.jpg";
import patient_outreach_fact3 from "../../../assets/features/patient-outreach/patient_outreach_fact3.jpg";
import patient_outreach_fact4 from "../../../assets/features/patient-outreach/patient_outreach_fact4.jpg";
import patient_outreact_section_1 from "../../../assets/features/patient-outreach/patient_outreact_section_1.png";
import Link from "next/link";
// app/content/page.jsx
export default function PatientOutreach() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className=" text-[30px] sm:text-[50px] text-center sm:leading-[68px] mt-28  sm:mt-32 h-[204px]">
        <h1 className="font-[400] tracking-[1px]">
          Empower <br className="sm:hidden"></br>
          <span className="text-primary text-[30px] sm:text-[50px] font-[400] tracking-[1px]">
            Patient Engagement
          </span>{" "}
          <br></br>
          with Targeted Outreach
        </h1>
        <h3 className="text-lg mt-4 sm:mt-6">
          Drive preventive care, improve health outcomes, and achieve
          value-based <br></br> care success with Prodoc AI's patient outreach
          solutions.
        </h3>
      </div>
      <div className="w-fit mt-20 sm:mt-10">
        <div className="bg-primary text-white px-6 py-4 rounded-3xl">
          Let's get started
        </div>
      </div>
      <div className="w-[90vw] xl:w-[65vw]  mt-20 mb-20">
        <Image
          alt="patient_outreach_hero"
          src={patient_outreach_hero}
        />
      </div>
      <div className="w-full flex items-center justify-center bg-white">
        <div className="mt-10 sm:mt-20 mb-10 w-[90vw] xl:w-[75vw] rounded-2xl">
          <h5 className=" text-center text-[30px] sm:text-[40px]">
            Empowers you to <br className="sm:hidden"></br> deliver{" "}
            <br className="hidden sm:block"></br> exceptional
            <span className="text-primary text-[30px] sm:text-[40px]">
              {" "}
              patient outreach
            </span>{" "}
          </h5>
          <div className="w-full flex sm:flex-row flex-col gap-8 mt-14">
            <div className="sm:w-1/2 flex flex-col bg-white p-10 rounded-xl relative shadow-md">
              <Image
                src={patient_outreach_fact1}
                alt="landing_testimonial"
                className="rounded-full absolute sm:right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-20 sm:mt-12">
                Expand Patient Reach
              </span>
              <p className="mt-5">
                Utilize automated campaigns and chatbots to efficiently connect
                with diverse patient populations.
              </p>
            </div>
            <div className="sm:w-1/2 flex flex-col bg-white p-10 rounded-xl relative shadow-md">
              <Image
                src={patient_outreach_fact2}
                alt="landing_testimonial"
                className="rounded-full absolute sm:right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-20 sm:mt-12">Close Care Gaps</span>
              <p className="mt-5">
                Prompt patients to schedule preventive screenings and wellness
                visits, addressing unmet healthcare needs.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col sm:flex-row gap-8 mt-10">
            <div className="sm:w-1/2 flex flex-col bg-white p-10 rounded-xl relative shadow-md">
              <Image
                src={patient_outreach_fact3}
                alt="landing_testimonial"
                className="rounded-full absolute sm:right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-20 sm:mt-12">Targeted Outreach</span>
              <p className="mt-5">
                Tailor campaigns to reach specific patient demographics and
                health conditions using advanced conditional logic.
              </p>
            </div>
            <div className="sm:w-1/2 flex flex-col bg-white p-10 rounded-xl relative shadow-md">
              <Image
                src={patient_outreach_fact4}
                alt="landing_testimonial"
                className="rounded-full absolute sm:right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-20 sm:mt-12">
                Simplify Wellness Visits
              </span>
              <p className="mt-5">
                Proactively engage Medicare patients in crucial wellness visits
                to boost preventive care and practice revenue.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-full flex items-center justify-center">
        <div className="w-[85vw] sm:w-[75vw]  sm:mt-20 mb-24 flex sm:flex-row flex-col items-center justify-between  ">
          <div className="flex sm:items-start items-center   flex-col justify-start sm:w-1/2">
            <h3 className="text-center text-[30px] sm:text-[40px] mb-10">
              Smart Patient <br className="sm:hidden"></br> Outreach
            </h3>
            .
            <p className="text-lg flex items-center gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Enterprise WhatsApp Marketing Suite with Advanced Analytics
            </p>
            <p className="text-lg mt-6 flex items-center gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              AI-Powered Voice Campaigns with Natural Language Understanding
            </p>
            <p className="text-lg mt-6 flex items-center gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Precision Meta Ads Integration with Demographic Targeting
            </p>
            <p className="text-lg mt-6 flex items-center gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Comprehensive Web Campaign Builder with A/B Testing
            </p>
          </div>
          <div className="hidden sm:flex justify-end items-end mt-10 w-1/2">
            <Image
              alt="patient_outreact_section_1"
              src={patient_outreact_section_1}
              className="ml-auto w-[450px] h-auto object-contain"
            />
          </div>
        </div>
      </div> */}
      {/**start */}
      <div className="w-[90vw] gap-2 sm:gap-2 flex flex-col sm:flex-row items-start justify-start sm:w-[75vw]  mt-8 mb-8">
        <div>
          <h3 className="text-center sm:text-left text-[30px] sm:text-[40px] mb-10 m-auto">
            Smart Patient <br className="sm:hidden"></br>{" "}
            <span className="text-primary text-[30px] sm:text-[40px]">
              Outreach
            </span>
          </h3>

          <p className=" text-base mb-6 flex items-center gap-8 sm:gap-8 sm:text-lg">
            <FaCircleCheck className="text-lg" color="#1772d2" />{" "}
            <span>
              Enterprise WhatsApp Marketing Suite with Advanced Analytics
            </span>
          </p>

          <p className="text-base mb-6 flex items-center gap-8 sm:gap-8  sm:text-lg">
            <FaCircleCheck className="text-lg" color="#1772d2" />
            <span>
              AI-Powered Voice Campaigns with Natural Language Understanding
            </span>
          </p>
          <p className="text-base mb-6 flex items-center gap-8 sm:gap-8  sm:text-lg">
            <FaCircleCheck className="text-lg" color="#1772d2" />
            <span>
              Precision Meta Ads Integration with Demographic Targeting
            </span>
          </p>
          <p className="text-base mb-6 flex items-center gap-8 sm:gap-8  sm:text-lg">
            <FaCircleCheck className="text-lg" color="#1772d2" />
            <span> Comprehensive Web Campaign Builder with A/B Testing</span>
          </p>
        </div>
        <div className=" hidden sm:flex sm:mt-6 justify-center sm:justify-end items-center w-full sm:w-1/2">
          <Image
            alt="patient_outreact_section_1"
            src={patient_outreact_section_1}
            className="w-[80%] sm:w-[400px] h-auto object-contain"
          />
        </div>
      </div>
      {/** end */}

      <div className="w-full bg-white relative flex items-center justify-center">
        <div className=" mt-10 mb-5 sm:mt-20 sm:mb-20">
          <div className="">
            <h3 className="text-2xl text-black text-center">
              Transform your patient <br className="sm:hidden"></br> outreach
              campaigns
              <br />
              <span className="text-2xl font-normal sm:mt-2 block">
                With{" "}
                <span className="text-primary text-2xl">
                  AI-powered multichannel
                </span>{" "}
                campaign management
              </span>
            </h3>
            <div className="flex items-center justify-center mt-8">
              <Link
                href={"/book-a-demo"}
                className="bg-primary w-fit text-white px-8 py-4 rounded-3xl"
              >
                Start your campaign
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
