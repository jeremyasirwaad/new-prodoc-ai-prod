import axios from "axios";

export const fetchNews = async (page = 1, pageSize = 10) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/company-newss`,
      {
        params: {
          populate: "image",
          pagination: {
            page,
            pageSize,
          },
        },
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_ACCESS_TOKEN}`,
        },
      }
    );
    // console.log(response,"response")
    return { error: false, data: response.data };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { error: true, message: error };
  }
};
