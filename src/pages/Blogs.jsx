import React, { Fragment, useEffect, useState } from "react";
import { CommonHero, RecentSection, BlogCard, Spinner } from "../components";
import axios from "../utils/axios";
import { toast } from "react-toastify";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`/blogs/api`);
      const { blogs } = response.data;
      setLoading(false);

      if (blogs.length) {
        setBlogs(blogs);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("mounted!");
    const fetchRecentBlogs = async () => {
      try {
        const response = await axios.get(`/blogs/api/recent`);
        const { blogs } = response.data;
        if (blogs.length) {
          setRecentBlogs(blogs);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchRecentBlogs();

    fetchBlogs();
    return () => console.log("unmounted!");
  }, []);

  const removePost = async (id) => {
    setLoading(true);
    try {
      const response = await axios.delete(`blogs/api/${id}`);
      const { success, message } = response.data;

      if (success) {
        toast.success(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      setBlogs(
        blogs.filter((blog) => {
          return blog._id !== id;
        })
      );

      setRecentBlogs(
        recentBlogs.filter((blog) => {
          return blog._id !== id;
        })
      );

      setLoading(false);
    } catch (error) {
      setLoading(false);

      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <>
      <CommonHero title="Blogs" pageTitle="BLOGS" />

      <section className="blogpage-section">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-8 col-md-7">
              <div className="row">
                {loading ? (
                  <div>
                    <Spinner />
                  </div>
                ) : blogs.length > 0 ? (
                  blogs.map((blog) => (
                    <Fragment key={blog.content}>
                      <BlogCard
                        title={blog?.title}
                        date={blog?.createdAt.split("T")[0]}
                        id={blog._id}
                        image={blog?.postImage}
                        totalComment={blog?.comments.length}
                        removePost={removePost}
                        loading={loading}
                      />
                    </Fragment>
                  ))
                ) : (
                  <div className="text-center">
                    <p>No blog post is avialable! </p>
                  </div>
                )}
              </div>
            </div>
            {!loading && <RecentSection blogs={recentBlogs} />}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
