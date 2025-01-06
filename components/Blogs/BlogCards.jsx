import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { dateFormatter } from "@/helpers/dateFormatter";
import { cn } from "@/helpers/utils";

export const CardHoverEffect = ({items, className}) => {
  const router = useRouter();

  return (
    <div className="py-10">
      {items.map((item) => {
        const imageURL = process.env.NEXT_PUBLIC_STRAPI_API_URL + item?.attributes?.image?.data?.attributes?.url;
        
        if (item.attributes.featured) {
          return (
            <div key={item.id} className="relative group block p-2 h-full w-full mb-20">
              <div
                id={item.id}
                onClick={() => router.push(`/blogs/${item.id}`)}
                className={cn("rounded-lg h-full w-full overflow-hidden relative z-20  cursor-pointer flex lg:flex-row flex-col", className)}
              >
                <motion.img
                  src={imageURL}
                  alt={item.attributes.title}
                  className="lg:w-1/2 w-full lg:h-auto h-64 object-cover rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
                <div className="p-4 space-y-2 flex flex-col justify-center lg:w-1/2 w-full">
                  <h5 className="text-gray-600 uppercase font-semibold text-xs">
                    {item.attributes.category}
                  </h5>
                  <h2 className="text-black lg:text-xl font-semibold">
                    {item.attributes.title}
                  </h2>
                  <p className="text-gray-400 text-sm lg:text-base">
                    {item.attributes.desc}
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <p>{dateFormatter(item.attributes.publishedAt)}</p>
                    <p>{item.attributes.read_time} mins read</p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
      <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16", className)}>
        {items.map((item) => {
          if (!item.attributes.featured) {
            const imageURL = process.env.NEXT_PUBLIC_STRAPI_API_URL + item?.attributes?.image?.data?.attributes?.url;
            return (
              <div key={item.id} className="relative group block p-2 h-full w-full">
                <div
                  id={item.id}
                  onClick={() => router.push(`/blogs/${item.id}`)}
                  className={cn("rounded-lg h-full w-full overflow-hidden relative z-20 cursor-pointer", className)}
                >
                  <div className="relative z-50">
                    <motion.img
                      src={imageURL}
                      alt={item.attributes.title}
                      className="w-full h-64 object-cover rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    />
                    <div className="p-4 space-y-2">
                      <h5 className="text-gray-600 uppercase font-semibold text-xs">
                        {item.attributes.category}
                      </h5>
                      <h4 className="text-black lg:text-xl font-semibold">
                        {item.attributes.title}
                      </h4>
                      <p className="text-gray-400 text-sm lg:text-base line-clamp-3 overflow-ellipsis w-full">
                        {item.attributes.desc}
                      </p>
                      <div className="flex justify-between items-center text-sm">
                        <p>{dateFormatter(item.attributes.publishedAt)}</p>
                        <p>{item.attributes.read_time} mins read</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
