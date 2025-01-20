"use client";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { Button, Form, Input } from "antd";

// app/content/page.jsx

export default function PatientConnect() {
  return (
    <section className="flex flex-col w-full">
      <div className=" mt-32 sm:mt-32 w-full flex wrap  h-screen flex items-center justify-center">
        <div className="w-[40%] h-full flex    flex-col  items-end sm:pt-20">
          <p className="text-primary text-[30px]   sm:text-[50px] sm:w-[70%]  sm:text-left w-full">
            Contact Us
          </p>
          <p className="text-sm sm:text-lg mt-4 sm:w-[70%]">
            Prodoc AI is an AI-powered patient engagement platform designed to
            transform healthcare communication. We are on a mission to make
            patient engagement effective, autonomous and scalable.
          </p>
          <p className="text-sm sm:text-lg sm:w-[70%] mt-10">
            If you're looking to take your patient engagement to the next level
            or want more information about our innovative AI platform, fill out
            the form. We'd be happy to answer your questions and help enhance
            your healthcare experience!
          </p>
          <div className="mt-6 flex items-center justify-start flex-wrap">
            <div className="h-auto w-auto mr-8 flex items-center p-4 bg-[#f6f5f4]">
              <span className="mr-1">
                <FaPhone />
              </span>
              +91 890 409 3888
            </div>
            <div className="h-auto w-auto flex items-center p-4 bg-[#f6f5f4]">
              <span className="mr-1">
                <MdEmail />
              </span>
              <a
                href="http://"
                className="text-blue-500 hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                contact@prodoc.io
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full flex flex-col items-center justify-start">
          <div className="flex bg-[#f6f5f4] h-[600px] w-[80%] flex-col justify-center items-center p-12 pt-16 flex-col">
            <Form
              layout="vertical"
              className="w-[80vw] sm:w-full sm:max-w-md "
              onFinish={(values) => console.log("Form Submitted:", values)}
            >
              <Form.Item
                label="Full name"
                name="fullName"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input size="large" placeholder="Enter Your name" />
              </Form.Item>

              <Form.Item
                label="Business email"
                name="businessEmail"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input size="large" placeholder="Enter email" />
              </Form.Item>

              <Form.Item
                label="Company"
                name="company"
                rules={[
                  {
                    required: true,
                    message: "Please enter your company name",
                  },
                ]}
              >
                <Input size="large" placeholder="Enter company name" />
              </Form.Item>

              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please enter your phone number",
                  },
                ]}
              >
                <Input size="large" placeholder="Enter phone number" />
              </Form.Item>

              <Form.Item
                label="How can we support your business? (optional)"
                name="support"
              >
                <Input.TextArea size="large" placeholder="Enter your message" />
              </Form.Item>
              <div className="text-center pb-4">
                <Button type="primary">Submit</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
