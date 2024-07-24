import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogData from "../../../Component/BlogPage/Blogdata";
import BlogHerosection from "../../../Component/BlogPage/BlogHerosection";
import Connected from "../../../Component/HomePage/Connected";

const Blog = () => {
  const navigate = useNavigate();

  const truncateText = (text, maxWords) => {
    if (!text) return ""; // Handle cases where text is undefined or null

    const words = text.split(" ");
    if (words.length <= maxWords) return text;

    return words.slice(0, maxWords).join(" ") + "...";
  };

  

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(BlogData.length / blogsPerPage);

  // Get the blogs for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = BlogData.slice(indexOfFirstBlog, indexOfLastBlog);

  // Function to handle page change
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleBlogClick = (blog) => {
    navigate(`/blogpost/${blog.id}`, { state: { blog } });
  };

  return (
    <div>
      <BlogHerosection />
      <section className="2xl:container mx-auto my-24  w-full  overflow-hidden ">
        <div className="px-7 md:px-14 lg:px-20 xl:px-24">
          <div className="flex justify-center mb-6">
            <h1 className="font-body text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold ">
              Recent Blog Post
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7 lg:gap-5 xl:gap-7 ">
            {BlogData.slice(0, 1).map((blog, index) => {
              return (
                <div
                  className="text-start cursor-pointer"
                  key={blog.id}
                  onClick={() => handleBlogClick(blog)}
                >
                  <img
                    src={blog.img}
                    className=" md:h-64 lg:h-72 xl:h-96 w-full object-cover mb-8"
                  />
                  <p className="text-[#000000] xl:text-2xl font-poppins font-semibold mb-2 ">
                    {blog.date}
                  </p>
                  <h3 className="text-[#232536] font-poppins font-normal xl:text-4xl mb-4">
                    {blog.tittle}
                  </h3>
                  <p className="text-[#6D6E76]">{blog.subheading}</p>
                </div>
              );
            })}

            <div className="grid grid-rows-1 gap-5 md:gap-5 lg:gap-5 xl:gap-7 ">
              {BlogData.slice(1, 4).map((blog, index) => {
                return (
                  <div
                    className="md:flex lg:h-40 xl:h-48 cursor-pointer"
                    key={blog.id}
                    onClick={() => handleBlogClick(blog)}
                  >
                    {" "}
                    <img
                      src={blog.img}
                      className="w-full mb-4 md:mb-0 lg:mx-3 object-cover md:w-60 lg:w-56 xl:w-72 lg:h-40 xl:h-48  "
                    />{" "}
                    <div className=" text-start mx-2">
                      <p className="text-[#000000] lg:text-base xl:text-lg font-poppins font-semibold mb-2">
                        {blog.date}
                      </p>{" "}
                      <h3 className="lg:text-sm xl:text-xl font-poppins font-medium text-[#232536] ">
                        {blog.tittle}
                      </h3>{" "}
                      <p className="text-[#6D6E76] lg:text-sm xl:text-base">
                        {truncateText(blog.subheading, 13)}
                      </p>
                    </div>{" "}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="2xl:container mx-auto my-24  w-full  overflow-hidden">
        <div className="px-7 md:px-14 lg:px-20 xl:px-24">
          <div className="justify-center flex">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-body font-semibold mb-8">
              All Blogs
            </h1>
          </div>
          <div className="grid lg:grid-cols-3 gap-5 md:gap-6 lg:gap-6 xl:gap-8 ">
            {currentBlogs.map((blog, index) => {
              return (
                <div
                  key={blog.id}
                  className="flex flex-col cursor-pointer   "
                  onClick={() => handleBlogClick(blog)}
                >
                  <div className="flex mb-6">
                    <img src={blog.img} className="object-cover  w-full  md:h-64 lg:h-full" />
                  </div>
                  <div className="flex flex-col text-start">
                    <p className="text-[#000000] lg:text-base xl:text-lg font-poppins font-semibold mb-2">
                      {blog.date}
                    </p>
                    <h3 className="lg:text-base xl:text-xl font-poppins font-medium text-[#232536]">
                      {blog.tittle}
                    </h3>
                    <p className="text-[#6D6E76] xl:text-base lg:text-sm">
                      {blog.subheading}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pagination flex justify-center mt-16">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 mx-1 rounded ${
                  currentPage === index + 1
                    ? "bg-[#4B726D] text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </section>
      <Connected />
    </div>
  );
};

export default Blog;
