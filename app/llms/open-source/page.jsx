import Image from "next/image";
import { Divider } from "antd";
import { SiHuggingface } from "react-icons/si";
import llm_hero from "../../../assets/llms/llm_hero.jpg";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { FaLink } from "react-icons/fa";
// app/content/page.jsx
export default function LLMOpenSource() {
  return (
    <section className="flex flex-col items-center justify-center">
      {/* <div className="text-[55px] text-center leading-[68px] mt-32 h-[204px]">
        <h1 className="font-[400] tracking-[1px]">
          Explore Our{" "}
          <span className="text-primary text-[55px] font-[400] tracking-[1px]">
            Open Source LLMs
          </span>{" "}
          <br></br>
          and AI Models
        </h1>
        <h3 className="text-lg mt-6">
          Access powerful, production-ready language models and AI solutions{" "}
          <br></br>
          openly available through Prodoc AI's commitment to open source
        </h3>
      </div> */}
      <div className="text-[30px] sm:text-[40px] md:text-[55px] text-center leading-[40px] sm:leading-[55px] md:leading-[68px] pt-24 sm:mt-24 md:mt-32 h-auto ">
        <h1 className="font-[400] tracking-[0.5px] sm:tracking-[1px]">
          Explore Our <br className="sm:hidden"></br>
          <span className="text-primary text-[30px] sm:text-[40px] md:text-[55px] font-[400] tracking-[0.5px] sm:tracking-[1px]">
            Open Source LLMs
          </span>{" "}
          <br />
          and AI Models
        </h1>
        <h3 className=" max-w-[80%] mx-auto text-base sm:text-lg mt-4 sm:mt-6">
          Access powerful, production-ready language models and AI solutions{" "}
          <br />
          openly available through Prodoc AI's commitment to open source
        </h3>
      </div>

      <div className="w-fit mt-10">
        <div className="bg-primary text-white px-8 py-4 rounded-3xl hover:bg-primary/90 transition-colors duration-200 cursor-pointer flex items-center gap-2">
          <span>Explore Our Models</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>

      <div className="w-[90vw] xl:w-[65vw]">
        <Image src={llm_hero} alt="hello" className="mt-10 rounded-3xl" />
      </div>

      {/* <div className="w-[90vw] xl:w-[65vw] rounded-2xl mt-16 ">
        <Divider />
        <h3 className="text-[40px] flex items-center">
          EndConvo SLM{" "}
          <SiHuggingface
            color="#1772d2"
            size={40}
            className="ml-4 cursor-pointer"
          ></SiHuggingface>{" "}
        </h3>
        <div className="flex gap-6">
          <div className="flex items-center justify-start gap-x-2">
            <PiDownloadSimpleBold />
            <span className="">1000+ </span>
          </div>
          <div className="flex items-center justify-start gap-x-2">
            <FaLink />
            <a href="https://huggingface.co/ProdocAI/Intent-classification-1b-GGUF-v1">
              https://huggingface.co/ProdocAI/Intent-classification-1b-GGUF-v1
            </a>
          </div>
        </div>

        <p className="mt-6">
          EndConvo-health-1b-GGUF-v1 is a fine-tuned version of the Llama3.2-1B
          model, trained on a dataset of healthcare-related conversations with
          the purpose of identifying whether a conversation has ended. This
          model helps to avoid unnecessary responses from larger language models
          by detecting closing statements.
        </p>
        <div className="mt-8">
          <div className="p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Model Objective</h4>
            <div className="space-y-4">
              <p>
                The model analyzes healthcare conversations and outputs a binary
                classification:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="font-medium">True</span>
                  </div>
                  <p className="mt-2 text-gray-600">
                    Conversation has reached its natural conclusion
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="font-medium">False</span>
                  </div>
                  <p className="mt-2 text-gray-600">
                    Conversation is still ongoing and active
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Dataset Information</h4>
            <div className="space-y-4">
              <div className="p-4 rounded-lg">
                <h5 className="font-medium mb-2">Training Data Statistics</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Total Conversations: 11,798</li>
                  <li>Chat Count: 94,472</li>
                  <li>Average Chats per Conversation: ~8</li>
                  <li>
                    Custom dataset of 4,000 rows focused on healthcare
                    conversations
                  </li>
                </ul>
              </div>
              <div className="p-4 rounded-lg">
                <h5 className="font-medium mb-2">Dataset Overview</h5>
                <p className="text-gray-600 mb-3">
                  This healthcare-focused conversational dataset includes 11,798
                  unique conversations, with an average of 8 messages per
                  conversation. The dataset consists of conversations in a
                  variety of languages with the following breakdown:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>English (en): 78,404 messages</li>
                  <li>Marathi (mr): 2,092 messages</li>
                  <li>Hindi (hi): 2,857 messages</li>
                  <li>
                    Additional languages included as per Language Map section
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Ollama Integration</h4>
            <div className="space-y-4">
              <div className="p-4 rounded-lg ">
                <p className="text-gray-600 mb-3">
                  Experience seamless integration with Ollama, where the model
                  is fully hosted and ready to run. Simply execute the command
                  below to start utilizing the model's capabilities in
                  identifying conversation endpoints efficiently and
                  effectively.
                </p>
                <div className="bg-gray-100 p-4 rounded-md font-mono text-sm">
                  ollama run Prodoc/endconvo-health-1b
                </div>
                <p className="text-gray-600 mt-3">
                  Enjoy the ease of deployment and the power of advanced
                  conversational analysis with Ollama.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="w-[90vw] xl:w-[65vw] rounded-2xl mt-16 px-4 sm:px-0">
        <Divider />
        <h3 className="text-[30px] sm:text-[40px] flex items-center mt-4">
          EndConvo SLM{" "}
          <SiHuggingface
            color="#1772d2"
            size={30}
            className="ml-4 cursor-pointer sm:size={40}"
          />
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <div className="flex items-center justify-start gap-x-2 text-sm sm:text-base">
            <PiDownloadSimpleBold />
            <span>1000+ </span>
          </div>
          <div className="flex items-center justify-start gap-x-2 text-sm sm:text-base">
            <FaLink />
            <a
              href="https://huggingface.co/ProdocAI/Intent-classification-1b-GGUF-v1"
              className="break-all"
            >
              https://huggingface.co/ProdocAI/Intent-classification-1b-GGUF-v1
            </a>
          </div>
        </div>

        <p className="mt-6 text-sm sm:text-base">
          EndConvo-health-1b-GGUF-v1 is a fine-tuned version of the Llama3.2-1B
          model, trained on a dataset of healthcare-related conversations with
          the purpose of identifying whether a conversation has ended. This
          model helps to avoid unnecessary responses from larger language models
          by detecting closing statements.
        </p>

        <div className="mt-8 space-y-6">
          {/* Model Objective Section */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-sm">
            <h4 className="text-lg sm:text-xl font-semibold mb-4">
              Model Objective
            </h4>
            <div className="space-y-4">
              <p className="text-sm sm:text-base">
                The model analyzes healthcare conversations and outputs a binary
                classification:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg shadow">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="font-medium text-sm sm:text-base">
                      True
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600 text-sm sm:text-base">
                    Conversation has reached its natural conclusion
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg shadow">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="font-medium text-sm sm:text-base">
                      False
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600 text-sm sm:text-base">
                    Conversation is still ongoing and active
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dataset Information Section */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-sm">
            <h4 className="text-lg sm:text-xl font-semibold mb-4">
              Dataset Information
            </h4>
            <div className="space-y-4">
              <div className="p-4 rounded-lg">
                <h5 className="font-medium mb-2">Training Data Statistics</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm sm:text-base">
                  <li>Total Conversations: 11,798</li>
                  <li>Chat Count: 94,472</li>
                  <li>Average Chats per Conversation: ~8</li>
                  <li>
                    Custom dataset of 4,000 rows focused on healthcare
                    conversations
                  </li>
                </ul>
              </div>
              <div className="p-4 rounded-lg">
                <h5 className="font-medium mb-2">Dataset Overview</h5>
                <p className="text-gray-600 mb-3 text-sm sm:text-base">
                  This healthcare-focused conversational dataset includes 11,798
                  unique conversations, with an average of 8 messages per
                  conversation. The dataset consists of conversations in a
                  variety of languages with the following breakdown:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm sm:text-base">
                  <li>English (en): 78,404 messages</li>
                  <li>Marathi (mr): 2,092 messages</li>
                  <li>Hindi (hi): 2,857 messages</li>
                  <li>
                    Additional languages included as per Language Map section
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ollama Integration Section */}
          <div className="p-4 sm:p-6 rounded-lg bg-white shadow-sm">
            <h4 className="text-lg sm:text-xl font-semibold mb-4">
              Ollama Integration
            </h4>
            <div className="space-y-4">
              <div className="p-4 rounded-lg">
                <p className="text-gray-600 mb-3 text-sm sm:text-base">
                  Experience seamless integration with Ollama, where the model
                  is fully hosted and ready to run. Simply execute the command
                  below to start utilizing the model's capabilities in
                  identifying conversation endpoints efficiently and
                  effectively.
                </p>
                <div className="bg-gray-100 p-4 rounded-md font-mono text-xs sm:text-sm">
                  ollama run Prodoc/endconvo-health-1b
                </div>
                <p className="text-gray-600 mt-3 text-sm sm:text-base">
                  Enjoy the ease of deployment and the power of advanced
                  conversational analysis with Ollama.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-[90vw] xl:w-[65vw] rounded-2xl mt-6 mb-5">
        <Divider />
        <h3 className="text-[30px] sm:text-[40px] flex sm:flex-row flex-col items-center">
          Intent Classification SLM{" "}
          <SiHuggingface
            color="#1772d2"
            size={40}
            className="ml-4 cursor-pointer"
          ></SiHuggingface>{" "}
        </h3>
        <div className="flex p-6 flex-col sm:flex-row justify-start gap-6">
          <div className="flex  items-center justify-start gap-x-2">
            <PiDownloadSimpleBold />
            <span className="">500+ </span>
          </div>
          <div className="flex items-center justify-start gap-x-2">
            <FaLink />
            <a href="https://huggingface.co/ProdocAI/Intent-classification-1b-GGUF-v1">
              https://huggingface.co/ProdocAI/Intent-classification-1b-GGUF-v1
            </a>
          </div>
        </div>

        <p className="sm:mt-6 p-6">
          HealthIntent-Classifier-1b-GGUF-v1 is a fine-tuned version of the
          Llama3.2-1B model, trained to classify healthcare-related queries into
          predefined intents. This model is designed to streamline user
          interactions by identifying their specific healthcare-related needs
          efficiently.
        </p>
        <div className="mt-8">
          <div className="p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Model Details</h4>
            <div className="space-y-4">
              <div className="p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Model Name: Intent-classification-1b-GGUF-v1</li>
                  <li>Base Model: Llama3.2-1B</li>
                  <li>Number of Parameters: 1 Billion</li>
                  <li>
                    Dataset: Custom dataset of healthcare-related conversation
                  </li>
                  <li>
                    Languages: Includes en, mr, te, hi, bn, among others
                    (detailed in Language Map section)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Model Objective</h4>
            <div className="space-y-4">
              <p className="text-gray-600">
                The model identifies the intent behind healthcare-related
                queries and classifies them into one of the predefined
                categories. This allows for better routing and handling of user
                requests in healthcare systems.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Supported Intents</h4>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Appointment Booking</li>
                  <li>Surgery Enquiry</li>
                  <li>Emergency Assistance</li>
                  <li>Lab Test Results Inquiry</li>
                  <li>Symptom Consultation</li>
                  <li>Hospital Services Enquiry</li>
                </ul>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Job or Internship Enquiry</li>
                  <li>Complaint or Feedback</li>
                  <li>Health Check-Up Packages</li>
                  <li>Health Insurance Enquiry</li>
                  <li>Irrelevant Query</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-4">Ollama Integration</h4>
            <div className="space-y-4">
              <div className="p-4 rounded-lg">
                <p className="text-gray-600 mb-3">
                  Leverage seamless integration with Ollama, where the model is
                  fully hosted and ready to run. Simply execute the command
                  below to start utilizing the model's intent classification
                  capabilities. Transform your healthcare conversational systems
                  with precision and ease.
                </p>
                <div className="bg-gray-100 p-4 rounded-md font-mono text-sm">
                  ollama run Prodoc/intent-classification-1b
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
