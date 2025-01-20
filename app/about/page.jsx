import Image from "next/image";

export default function about() {
  return (
    <section className="flex flex-col h-full w-full">
      <div className="w-full h-full relative">
        <div className="min-h-screen flex items-center justify-center relative">
          <img
            src="https://imgs.search.brave.com/6QPdaAVP484INjOCOh_8xU4Ttczb8sjURxNyYICwB4k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMz/Mzg5NjU5OC9waG90/by9iaW9tZXRyaWMt/ZXllLXNjYW4tYW5k/LW5ldHdvcmsuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUtx/TXgya0MwdVozTFJj/NmdZSl9RT2RPRFk0/NG5MV1g4N1NEN0xs/ZUd5T2s9"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
          <div className="relative flex flex-col justify-center items-center z-10">
            <p className="text-white sm:tracking-[1px] text-center font-bold text-[26px] sm:text-[40px] lg:text-[50px] z-10">
              Leading the Transformation
            </p>
            <p className="text-white sm:tracking-[1px] sm:text-[30px] sm:text-[6px] text-center w-[70%] lg:text-[30px] z-10">
              Prodoc helps with data-driven care. We offer a suite of AI-powered
              tools to empower patients, providers, and payers.
            </p>
            <div className="relative flex flex-wrap mt-8 justify-around w-full   p-4 sm:w-[40%] items-center z-10">
              <div className="text-white sm:text-[55px]  ">
                <div className="text-[14px] sm:text-[55px]  font-semibold">
                  1M +
                </div>
                <div className="sm:text-[16px] text-[10px]">
                  Patients Engaged
                </div>
              </div>
              <div className="flex flex-col text-white sm:text-[55px] ">
                <div className="sm:text-[55px] font-semibold"> 10K +</div>
                <div className="sm:text-[16px] text-[10px]">
                  Daily Interactions
                </div>
              </div>
              <div className="flex flex-col text-white sm:text-[55px]">
                <div className="sm:text-[55px] font-semibold">100 +</div>
                <div className="sm:text-[16px] text-[10px]">
                  Healthcare Providers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <div className="sm:p-16 p-4">
          <p className="text-black flex-wrap  text-start flex justify-start items-start sm:text-[18px]  z-10">
            Imagine a healthcare ecosystem where patients find the right care
            confidently, providers deliver it efficiently, and all stakeholders
            gain valuable insights. AI is redefining healthcare, and we're
            leading the charge. Through smarter data and empowered decisions, we
            unlock a future of better health for all.
          </p>
          <p className="text-black pb-4 text-[30px] font-semibold text-blue-500 mt-4">
            Our Story
          </p>
          <p className="text-black flex-wrap pb-8  text-start flex justify-start items-start sm:text-[18px]  z-10">
            Rooted in a personal battle against cancer, Prodoc was born in 2021
            with a vision to redefine the landscape of healthcare. Inspired by
            the challenges faced by a loved one in navigating the intricate
            healthcare maze, one of our founders envisioned a solution fueled by
            data, transparency, and patient-centricity.
          </p>
          <p className="text-black flex-wrap pb-8  text-start flex justify-start items-start sm:text-[18px]  z-10">
            Driven by this vision, we've tirelessly crafted a suite of
            AI-powered tools that simplify medical terminology, offer
            data-driven care alternatives, and seamlessly connect patients with
            appropriate providers. Through strategic alliances with insurers and
            TPAs, we harness the wealth of insights from existing data, forging
            a cohesive ecosystem that optimizes care delivery and fosters
            improved health outcomes for all.
          </p>
          <p className="text-black  text-start flex justify-start items-start sm:text-[18px]  z-10">
            Prodoc represents more than mere technology; it embodies a
            commitment to revolutionize healthcare, making it a journey of
            informed choices, confident decisions, and ultimately, a healthier
            future.
          </p>
          <div className="w-full flex flex-col sm:flex-row items-center justify-center mt-10 gap-4">
            <div className="h-auto sm:p-6 sm:w-1/2 bg-[#f6f5f4] flex flex-col justify-center items-start">
              <p className="text-[25px] font-semibold p-4 pb-1">Vision</p>
              <p className="p-4 pt-2">
                Seamless care for patients, optimized services for providers,
                and data-driven insights for payers. Together, we build a
                healthier future for all.
              </p>
            </div>
            <div className="h-auto p-6 sm:w-1/2 bg-[#f6f5f4] flex flex-col justify-center items-start">
              <p className="text-[25px] font-semibold p-4 pb-1">Mission</p>
              <p className="p-4 pt-2">
                Imagine a world where your health journey is clear, informed,
                and empowering. At Prodoc, we make that world a reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
