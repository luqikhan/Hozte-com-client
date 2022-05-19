import React, { useEffect, useState, useCallback } from "react";
import { RecentSection, Spinner } from "../components";
import axios from "../utils/axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";
function SingleBlog() {
  const [loading, setLoading] = useState(true);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [blog, setBlog] = useState({});

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

  const fetchBlog = useCallback(() => {
    return axios.get(`/blogs/api/${id}`).then((data) => data);
  }, [id]);

  useEffect(() => {
    let mounted = true;
    fetchBlog()
      .then((res) => {
        setLoading(false);
        if (mounted) {
          setBlog(res.data.blog);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
    return () => (mounted = false);
  }, [id, fetchBlog]);

  useEffect(() => {
    let mounted = true;
    const fetchRecentBlogs = async () => {
      try {
        const response = await axios.get(`/blogs/api/recent`);
        const { blogs } = response.data;
        if (mounted) {
          setRecentBlogs(blogs);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchRecentBlogs();
    return () => (mounted = false);
  }, []);

  return (
    <section className="blogpage-section mt-45">
      <div className="container">
        <div className="row d-flex justify-content-center">
          {loading ? (
            <Spinner />
          ) : (
            <div className="col-lg-8 col-md-7 mb-4">
              {blog.title ? (
                <>
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
                              <div
                                className="single-comment"
                                key={comment.content}
                              >
                                <img
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgR_yEfHF8h1wQvZ4G6DZjNaiFDDwakWrwj6ccZTS513nMYdXAEH6AYNGL_nirsbzs5Ok&usqp=CAU"
                                  alt=""
                                />
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
                      Your email address will not be published. Required fields
                      are marked
                    </p>
                    <div className="comment-form">
                      <Formik
                        initialValues={commentInfo}
                        validationSchema={commentSchema}
                        onSubmit={async (values, formikActions) => {
                          try {
                            const response = await axios.put(
                              `/blogs/api/comment/${id}`,
                              { ...values }
                            );
                            setBlog(response.data.post);
                            toast.success(response.data.message, {
                              position: toast.POSITION.TOP_RIGHT,
                            });
                            formikActions.setSubmitting(false);
                            formikActions.resetForm({});
                          } catch (error) {
                            toast.error(error.message, {
                              position: toast.POSITION.TOP_RIGHT,
                            });
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
                </>
              ) : (
                <div className="d-flex justify-content-center align-items-center">
                  <p>Post not found!</p>
                </div>
              )}
            </div>
          )}
          {!loading && <RecentSection blogs={recentBlogs} />}
        </div>
      </div>
    </section>
  );
}

export default SingleBlog;
