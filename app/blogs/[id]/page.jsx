"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import RichTextRenderer from "@/helpers/RichTextRenderer";
import Head from "next/head";
import { fetchBlog } from "@/helpers/fetchBlog";

function Blog({ params }) {
  const id = params.id;
  const [blog, setBlog] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [link, setLink] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function open() {
    setLink(window.location.href);
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const fetchBlogData = async () => {
    try {
      const response = await fetchBlog(id);
      if (response.error) {
        console.log(response.message);
      } else {
        setBlog(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [id]);

  const formattedDate = new Date(
    blog?.attributes?.publishedAt
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const imageURL = blog?.attributes.image
    ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${blog?.attributes?.image.data.attributes.url}`
    : "";

  // Dynamic Meta Tags
  const metaTitle = blog?.attributes?.title
    ? `${blog.attributes.title} | ProDoc AI Blog`
    : "Loading... | ProDoc AI Blog";
  const metaDescription = blog?.attributes?.desc || "Discover the latest insights on various topics at ProDoc AI.";
  const metaURL = `https://prodoc.ai/blogs/${id}`;
  const metaImage = imageURL || "https://storage.googleapis.com/echs-documents/logo.svg";

  return (
    <div className="relative">
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={metaURL} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={metaImage} />
        <link rel="canonical" href={metaURL} />
      </Head>

      {scrollProgress > 0 && (
        <div className="fixed top-0 left-0 w-full h-2 bg-white">
          <div
            className="h-1 bg-blue-500"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-2 md:pt-10 pb-20">
        <div className="w-full text-left flex justify-between items-center mt-20">
          <div
            onClick={() => {
              window.history.back();
            }}
            className="w-fit flex justify-center items-center gap-x-2 cursor-pointer text-sm p-2 rounded-md hover:bg-[#f7f7f5]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 0 1 0 12h-3"
              />
            </svg>
            Back
          </div>
        </div>

        <div className="space-y-8 lg:space-y-12">
          <div className="space-y-3 mt-5 flex flex-col justify-center items-center">
            <div className="text-black text-2xl lg:text-4xl max-w-4xl font-bold text-left w-full">
              {blog?.attributes?.title}
            </div>
            <div className="max-w-4xl flex items-center text-left w-full text-sm lg:text-base">
              Published on {formattedDate}
              <span className="text-gray-600 ml-5 font-bold text-xs">
                {blog?.attributes?.read_time} mins read
              </span>
            </div>
          </div>

          {blog?.attributes.image && (
            <div className="flex items-center justify-center">
              <motion.img
                src={imageURL}
                alt={blog?.attributes?.image.data.attributes?.name}
                className="w-[90%] object-cover rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          )}

          <div className="flex justify-center items-center">
            <pre className="text-black text-sm lg:text-lg max-w-4xl whitespace-pre-wrap">
              {blog?.attributes?.desc}
            </pre>
          </div>

          <div className="flex justify-center items-center">
            <div className="text-black text-sm lg:text-lg max-w-4xl w-[380px] md:w-[90%]">
              {blog?.attributes?.body ? (
                <RichTextRenderer content={blog?.attributes?.body} />
              ) : (
                "No content available"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
