import axios from "axios";

export const fetchBlogs = async (page = 1, pageSize = 10) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs`, {
      params: {
        populate: 'image',
        pagination: {
          page,
          pageSize
        }
      },
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
      }
    });
    // console.log(response,"response")
    return { error: false, data: response.data };
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return { error: true, message: error };
  }
};
