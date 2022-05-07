import React, { useEffect, useState } from "react";
import { RecentSection } from "../components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";
function SingleBlog() {
  const [blog, setBlog] = useState({});
  const [recentBlogs, setRecentBlogs] = useState([]);
  const { id } = useParams();

  const commentInfo = {
    name: "",
    email: "",
    content: "",
    profession: "",
  };

  const commentSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    profession: Yup.string(),
    content: Yup.string().required("Comment is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const fetchBlog = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/blogs/api/${id}`);
      const { blog } = response.data;
      if (blog) {
        setBlog(blog);
      }
    } catch (error) {
      console.log(error.message);
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
    fetchBlog();
    fetchRecentBlogs();
  }, [id, blog]);

  return (
    <section className="blogpage-section mt-45">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-7">
            <div className="single-post-area">
              <div className="post-thumb">
                <img
                  src={`${blog?.postImage}`}
                  alt="blog-img"
                  style={{ height: 440, width: "100%" }}
                />
              </div>
              <h4 className="article-title">{blog?.title}</h4>
              <p>{blog?.content}</p>
            </div>
            <div className="comment-area">
              <h3>Comment ({blog?.comments?.length})</h3>
              <ol className="comment-list">
                <li>
                  {blog?.comments?.length > 0 ? (
                    <>
                      {blog.comments.map((comment) => (
                        <div className="single-comment" key={comment.content}>
                          <img src="assets/images/single-post/c1.png" alt="" />
                          <h5>{comment?.name}</h5>
                          <span>{blog.createdAt.split("T")[0]}</span>
                          <div className="comment">
                            <p>{comment?.content}</p>
                          </div>
                          <div className="c-border"></div>
                        </div>
                      ))}
                    </>
                  ) : null}
                </li>
              </ol>
            </div>
            <div className="comment-form-area">
              <h3>Post a Comment</h3>
              <p>
                Your email address will not be published. Required fields are
                marked
              </p>
              <div className="comment-form">
                <Formik
                  initialValues={commentInfo}
                  validationSchema={commentSchema}
                  onSubmit={async (values, formikActions) => {
                    try {
                      const response = await axios.put(
                        `http://localhost:5000/blogs/api/comment/${id}`,
                        { ...values }
                      );

                      toast.success(response.data.message, {
                        position: toast.POSITION.TOP_RIGHT,
                      });
                      formikActions.setSubmitting(false);
                      formikActions.resetForm({});
                    } catch (error) {
                      toast.error(
                        error.response && error.response.data.message
                          ? error.response.data.message
                          : error.message,
                        {
                          position: toast.POSITION.TOP_RIGHT,
                        }
                      );
                    }
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    isSubmitting,
                    handleChange,
                    handleSubmit,
                  }) => {
                    const { email, name, content, profession } = values;

                    return (
                      <form className="row" onSubmit={handleSubmit}>
                        <div className="col-md-6">
                          <input
                            type="text"
                            name="name"
                            onChange={handleChange("name")}
                            onBlur={handleBlur("name")}
                            value={name}
                            placeholder="Name"
                          />
                          {touched.name && errors.name && (
                            <div className="text-danger mb-1">
                              {errors.name}
                            </div>
                          )}
                        </div>
                        <div className="col-md-6">
                          <input
                            type="email"
                            name="email"
                            onChange={handleChange("email")}
                            onBlur={handleBlur("email")}
                            value={email}
                            placeholder="Email"
                          />
                          {touched.email && errors.email && (
                            <div className="text-danger mb-1">
                              {errors.email}
                            </div>
                          )}
                        </div>
                        <div className="col-md-12">
                          <input
                            type="text"
                            name="prfession"
                            onChange={handleChange("profession")}
                            onBlur={handleBlur("profession")}
                            value={profession}
                            placeholder="Profession"
                          />
                        </div>
                        <div className="col-md-12">
                          <textarea
                            placeholder="Coment"
                            name="content"
                            onChange={handleChange("content")}
                            onBlur={handleBlur("content")}
                            value={content}
                          ></textarea>
                          {touched.content && errors.content && (
                            <div className="text-danger mb-1">
                              {errors.content}
                            </div>
                          )}
                        </div>
                        <div className="col-md-12">
                          <button
                            type="submit"
                            name="submit"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Loading..." : "Post Comment"}
                          </button>
                        </div>
                      </form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
          <RecentSection blogs={recentBlogs} />
        </div>
      </div>
    </section>
  );
}

export default SingleBlog;
