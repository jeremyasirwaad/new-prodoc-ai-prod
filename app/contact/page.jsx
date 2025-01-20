"use client";

import { Button, Form, Input } from "antd";

// app/content/page.jsx

export default function PatientConnect() {
  return (
    <section className="flex flex-col w-full">
      <div className=" mt-32 sm:mt-32 w-full flex wrap  h-screen flex items-center justify-center">
        <div className="w-1/2 h-full flex flex-col justify-start items-end sm:pt-20">
          <p className="text-primary text-[30px] sm:text-[50px] sm:w-[70%]  sm:text-left w-full">
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
        </div>
        <div className="w-1/2 h-full flex flex-col items-center justify-start">
          <div className="flex bg-[#f6f5f4] h-[550px] w-[480px] p-12 pt-6 flex-col">
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
            </Form>
          </div>
          <div className="w-fit mt-3 w-full text-center">
            <Button type="primary">Submit</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
