import React, {useState} from "react";
import { useLocation, useParams, useNavigate,  } from 'react-router-dom';
import BlogData from "./Blogdata";
import Connected from "../HomePage/Connected";


const Blogpost = () => {

  const { id } = useParams();
  const location = useLocation();
  const { blog } = location.state || {};
  const navigate = useNavigate();

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  
    
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
        <>
      <section className="2xl:container mx-auto my-24  w-full  overflow-hidden">
        <div className="px-7 md:px-14 lg:px-20 xl:px-24 ">
        <div className="mb-12">
          <h1 className="font-body text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold">{blog.tittle}</h1>
        </div>
        <div className="mb-8">
          <img src={blog.img} className="md:h-96 lg:h-[400px] xl:h-[500px] 2xl:h-[600px] w-full object-fill "/>
        </div>
        <div className="text-start font-poppins">
          <p className="mb-4 text-[#000000] lg:text-lg xl:text-2xl font-semibold">{blog.date}</p>
          <p className="text-[#6D6E76] text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
            Lorem ipsum dolor sit amet consectetur. Etiam sit eu nunc porttitor.
            Tellus id fermentum turpis pretium aliquet mattis sit praesent
            imperdiet. Suspendisse id praesent nullam volutpat egestas praesent.
            Scelerisque accumsan faucibus scelerisque tortor. Egestas mauris
            mollis egestas eros sed. Turpis odio urna fringilla in viverra
            congue magna. Lacus urna augue et pellentesque sed magna elementum
            viverra posuere. Blandit nascetur tristique massa malesuada tortor
            iaculis venenatis consectetur tellus. In arcu nibh lectus facilisis
            at. Cursus vel metus id sit lacus. Enim netus amet sed orci integer.
            Enim feugiat ultrices ultrices tellus elementum posuere. Aenean
            pretium aliquam arcu in. Integer proin quis varius mattis et
            tincidunt quis mauris fermentum. Massa feugiat risus erat lectus
            nibh suspendisse faucibus pharetra. Tincidunt arcu in tellus nunc
            vitae cras sit phasellus. Viverra pellentesque imperdiet sem est
            enim risus hendrerit tempus sed. Consequat posuere euismod in nulla.
            Nec porttitor accumsan morbi accumsan consectetur consequat posuere
            molestie enim. Tempus neque neque urna id sodales sit. Non vitae
            ultrices feugiat a vitae turpis vestibulum fames. Risus ipsum risus
            duis nisl pharetra risus enim. A id quis facilisis ipsum odio
            aliquet ultrices lorem. Proin faucibus vitae sed malesuada nulla sed
            purus. Ridiculus in ac massa amet. Mauris aenean facilisis sed
            tempor parturient ullamcorper et ipsum. Euismod sed tincidunt lorem
            risus. Vel montes elementum aenean proin aliquam. Quam posuere fames
            a neque dignissim ullamcorper mi odio nec. Purus amet in sed
            pharetra mauris sed amet. Malesuada nulla suspendisse diam quisque
            iaculis eget justo maecenas sed. Commodo amet at morbi nunc cursus
            risus vel consequat. Vitae auctor tincidunt mollis urna habitant
            amet. Euismod nulla rhoncus morbi nunc nulla mauris quisque nunc
            magna. Ut quam dui aenean magna in purus. Blandit nisl fermentum non
            mattis massa purus quis malesuada dolor. Pellentesque imperdiet
            vitae velit lectus pretium turpis. Ipsum sit massa nisl nulla
            iaculis posuere. Duis pellentesque quisque sagittis ipsum. Amet
            aliquam tempor nibh auctor tellus dolor. Pellentesque ac lectus
            cursus proin elit lacus tempor. Adipiscing lectus adipiscing
            tristique nulla id at nunc et. Malesuada amet eu ornare adipiscing
            donec proin arcu duis vel. Donec non est varius vestibulum. Egestas
            adipiscing mauris sagittis non bibendum. Nisl arcu tellus diam
            luctus at suspendisse habitasse consectetur ut.
          </p>
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
      <Connected/>
      </>
    
  );
};

export default Blogpost;
