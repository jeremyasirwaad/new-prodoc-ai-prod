"use client";
import { Divider, Input, Form } from "antd";
// app/page.jsx
export default function LandingPage() {
  const [form] = Form.useForm();

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-full flex items-center justify-center flex-col">
        <div className="mt-20 w-[90vw] mb-20 xl:w-[75vw] rounded-2xl flex items-center justify-center flex-col">
          <span className="text-center text-[45px]">
            Book a <span className="text-black text-[45px]">Demo</span>
          </span>
          <p className="text-center">
            Please complete the form and learn how our solutions can enhance
            <br></br> your organization's healthcare goals
          </p>
          <Divider />
          <Form
            layout="vertical"
            className="w-full max-w-md"
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
                { required: true, message: "Please enter your company name" },
              ]}
            >
              <Input size="large" placeholder="Enter company name" />
            </Form.Item>

            <Form.Item
              label="Phone"
              name="phone"
              rules={[
                { required: true, message: "Please enter your phone number" },
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

            <div className="w-fit mt-10">
              <div className="bg-primary text-white px-5 py-3 rounded-3xl">
                Schedule a meeting
              </div>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}
