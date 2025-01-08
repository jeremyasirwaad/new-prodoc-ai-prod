import Image from "next/image";
import patient_journey_section from "../../../assets/features/patient-journey/patient_journey_section.png";
import { FaCircleCheck } from "react-icons/fa6";
import patient_journey_fact1 from "../../../assets/features/patient-journey/patient_journey_fact_1.jpg";
import patient_journey_fact2 from "../../../assets/features/patient-journey/patient_journey_fact_2.jpg";
import patient_journey_fact3 from "../../../assets/features/patient-journey/patient_journey_fact_3.jpg";
import patient_journey_fact4 from "../../../assets/features/patient-journey/patient_journey_fact_4.jpg";
import patient_journey_hero from "../../../assets/features/patient-journey/patient_journey_hero.png";
import Link from "next/link";
// app/content/page.jsx
export default function PatientJourney() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="text-[55px] text-center leading-[68px] mt-32 h-[204px]">
        <h1 className="font-[400] tracking-[1px]">
          Transform & Innovate{" "}
          <span className="text-primary text-[55px] font-[400] tracking-[1px]">
            Patient Journey
          </span>{" "}
          <br></br>
          with Intelligent AI Solutions
        </h1>
        <h3 className="text-lg mt-6">
          Meet patients where they are with personalized, multilingual
          engagement. <br></br>
          Deliver instant 24/7 support through AI-guided workflows and
          self-serve channels.
        </h3>
      </div>
      <div className="w-fit mt-10">
        <div className=" text-black px-6 py-4 rounded-3xl border-2 border-primary">
          Let's get started
        </div>
      </div>
      <div className="w-[90vw] xl:w-[65vw] rounded-2xl mt-28 mb-20">
        <Image
          alt="patient_outreach_hero"
          className="rounded-3xl"
          src={patient_journey_hero}
        />
      </div>
      <div className="w-full flex items-center justify-center bg-white">
        <div className="mt-20 mb-20 w-[90vw] xl:w-[75vw] rounded-2xl">
          <h5 className="text-[40px]">
            Discover how Prodoc AI <br></br> enhances
            <span className="text-primary text-[40px]"> patient care</span>{" "}
          </h5>
          <div className="w-full flex gap-8 mt-14">
            <div className="w-1/2 flex flex-col bg-white p-10 rounded-xl relative shadow-md">
              <Image
                src={patient_journey_fact1}
                alt="landing_testimonial"
                className="rounded-full absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">
                Personalized Recovery Guidance
              </span>
              <p className="mt-5">
                Utilize AI to deliver customized instructions and educational
                resources aligned with each patient's condition and treatment
                plan. This fosters active patient engagement in their recovery
                process.
              </p>
            </div>
            <div className="w-1/2 flex flex-col bg-white p-10 rounded-xl relative shadow-md">
              <Image
                src={patient_journey_fact2}
                alt="landing_testimonial"
                className="rounded-full absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">Real-Time Care Updates</span>
              <p className="mt-5">
                Keep patients informed with timely notifications about changes
                in their care plans or medication schedules. Prodoc AI promotes
                transparency and alleviates patient anxiety.
              </p>
            </div>
          </div>
          <div className="w-full flex gap-8 mt-10">
            <div className="w-1/2 flex flex-col bg-white p-10 rounded-xl relative shadow-md">
              <Image
                src={patient_journey_fact3}
                alt="landing_testimonial"
                className="rounded-full absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">
                Optimized Well-being Recommendations
              </span>
              <p className="mt-5">
                Identify and suggest additional services or products that can
                accelerate recovery, such as physiotherapy tools, nutritional
                supplements, or mental health resources.
              </p>
            </div>
            <div className="w-1/2 flex flex-col bg-white p-10 rounded-xl relative shadow-md">
              <Image
                src={patient_journey_fact4}
                alt="landing_testimonial"
                className="rounded-full absolute right-10 top-5 h-[100px] w-[100px]"
              />
              <span className="text-xl mt-12">
                Seamless Patient-Provider Communication
              </span>
              <p className="mt-5">
                Facilitate direct communication between patients and healthcare
                providers. Patients can ask questions, express concerns, and
                receive prompt support through the platform.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-[90vw] xl:w-[75vw] mt-20 mb-24 flex items-center justify-between ">
          <div className="flex items-start flex-col justify-start w-1/2">
            <h3 className="text-[40px] mb-10">Personalized Guidance</h3>
            <p className="text-lg flex items-center gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              AI delivers customized instructions and resources.
            </p>
            <p className="text-lg mt-6 flex items-center gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Real-time updates on care plans.
            </p>
            <p className="text-lg mt-6 flex items-center gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Suggest services for accelerated recovery.
            </p>
            <p className="text-lg mt-6 flex items-center gap-x-3">
              <FaCircleCheck size={26} color="#1772d2" />
              Direct communication with healthcare providers.
            </p>
          </div>
          <div className="flex justify-end items-end w-1/2">
            <Image
              alt="patient_outreact_section_1"
              src={patient_journey_section}
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
              <Link href={'/book-a-demo'} className="bg-primary w-fit text-white px-8 py-4 rounded-3xl">
                Start your campaign
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
