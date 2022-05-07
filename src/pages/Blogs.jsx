import React, { Fragment, useEffect, useState } from "react";
import { CommonHero, RecentSection, BlogCard } from "../components";
import axios from "axios";
function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/blogs/api`);
      const { blogs } = response.data;
      if (blogs.length) {
        setBlogs(blogs);
      }

      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  const fetchRecentBlogs = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/blogs/api/recent`
      );
      const { blogs } = response.data;
      if (blogs.length) {
        setRecentBlogs(blogs);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
    fetchRecentBlogs();
  }, [blogs]);

  return (
    <>
      <CommonHero title="Blogs" pageTitle="BLOGS" />

      <section className="blogpage-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <div className="row">
                {blogs.length > 0 ? (
                  blogs.map((blog) => (
                    <Fragment key={blog.content}>
                      {loading ? (
                        <h6>Loading...</h6>
                      ) : (
                        <BlogCard
                          title={blog?.title}
                          date={blog?.createdAt.split("T")[0]}
                          id={blog._id}
                          image={blog?.postImage}
                          totalComment={blog?.comments.length}
                        />
                      )}
                    </Fragment>
                  ))
                ) : (
                  <p>No Blog Found!</p>
                )}
              </div>
            </div>
            {loading ? (
              <h5>Loading...</h5>
            ) : (
              <RecentSection blogs={recentBlogs} />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
