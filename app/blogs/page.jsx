import BlogList from '@/components/Blogs/BlogList';
import { fetchBlogs } from '@/helpers/fetchBlogs';
import Head from 'next/head';

export const revalidate = 60;

export default async function BlogsPage({ searchParams }) {
  const page = parseInt(searchParams.page || '1', 10);
  const pageSize = 10;
  const response = await fetchBlogs(page, pageSize);

  if (response.error) {
    return (
      <div>
        <Head>
          <title>Blogs - Error</title>
          <meta name="description" content="Error fetching blogs. Please try again later." />
        </Head>
        <div>Error fetching blogs</div>
      </div>
    );
  }

  const { data, meta } = response.data;

  const metaTitle = `Blogs - Page ${page} | Prodoc AI`;
  const metaDescription = `Explore our latest blogs on various topics. Page ${page} of ${meta.pagination.pageCount}.`;

  return (
    <div>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={`https://prodoc.ai/blogs`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://prodoc.ai/blogs`} />
      </Head>
      
      <div className="max-w-6xl mx-auto px-8 pt-20">
        <BlogList initialBlogs={data} initialPage={page} pageSize={pageSize} totalPages={meta.pagination.pageCount} />
      </div>
    </div>
  );
}