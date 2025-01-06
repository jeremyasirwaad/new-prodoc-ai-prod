'use client';

import { useState, useEffect } from 'react';
import { fetchBlogs } from '@/helpers/fetchBlogs';
import { CardHoverEffect } from './BlogCards';
import Spinner from '@/helpers/spinner';

export default function BlogList({ initialBlogs, initialPage, pageSize, totalPages }) {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPagesState, setTotalPagesState] = useState(totalPages);
  const [loading, setLoading] = useState(false);

  const fetchAllBlogData = async (page) => {
    try {
      setLoading(true);
      const response = await fetchBlogs(page, pageSize);
      if (response.error) {
        console.log(response.message);
      } else {
        setBlogs(response.data.data);
        setTotalPagesState(response.data.meta.pagination.pageCount);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching blog:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentPage !== initialPage) {
      fetchAllBlogData(currentPage);
    }
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPagesState; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 mx-1 ${i === currentPage ? 'bg-gray-100' : 'bg-gray-50'} rounded-lg`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className=' min-h-[90vh]'>
      {loading ? (
        <div className=' flex justify-center items-center min-h-[90vh]'>
          <Spinner/>
        </div>
      ) : (
        <div>
          <CardHoverEffect items={blogs} className="" />
          <div className="flex justify-center my-5">
            {renderPagination()}
          </div>
        </div>
      )}
    </div>
  );
}
