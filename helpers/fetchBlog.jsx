
import axios from "axios";

export const fetchBlog = async (id) => {
    // console.log(id,"iddd")
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs/${id}?populate=image`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
        }
      });
      return {error:false,data:response.data}
    } catch (error) {
      console.error('Error fetching blog:', error);
      return {error:true,message:error}
    }
  };