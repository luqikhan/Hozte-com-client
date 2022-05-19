import React from "react";
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "../utils/axios";

const NewBlog = () => {
  const orderInfo = {
    title: "",
    content: "",
    postImage: "",
  };

  const orderSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content is required"),
    postImage: Yup.string().required("Image is required!"),
  });
  return (
    <>
      {/* <!-- Contact Start --> */}
      <section className="contact-section">
        <div className="container pt-45">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="contact-form">
                <h4>New Blog</h4>
                <p>Create a new blog post.</p>
                <Formik
                  initialValues={orderInfo}
                  validationSchema={orderSchema}
                  onSubmit={async (values, formikActions) => {
                    const { title, content, postImage } = values;

                    try {
                      const formData = new FormData();
                      formData.append("postImage", postImage);
                      formData.append("title", title);
                      formData.append("content", content);
                      const response = await axios.post(
                        "/blogs/api/create-post",
                        formData
                      );

                      toast.success(response.data.message, {
                        position: toast.POSITION.TOP_RIGHT,
                      });

                      formikActions.setSubmitting(false);
                      formikActions.resetForm({});
                    } catch (error) {
                      toast.error(error.message ? error.message : error, {
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
                    setFieldValue,
                    handleSubmit,
                  }) => {
                    const { title, content } = values;
                    return (
                      <form
                        onSubmit={handleSubmit}
                        className="row align-items-center"
                      >
                        <div className="col-md-12">
                          <input
                            type="text"
                            name="title"
                            onChange={handleChange("title")}
                            onBlur={handleBlur("title")}
                            value={title}
                            placeholder="Post Title"
                          />
                          {touched.title && errors.title && (
                            <div className="text-danger mb-1">
                              {errors.title}
                            </div>
                          )}
                        </div>

                        <div className="col-md-12">
                          <textarea
                            name="content"
                            onChange={handleChange("content")}
                            onBlur={handleBlur("content")}
                            value={content}
                            placeholder="Post Content"
                          ></textarea>
                          {touched.content && errors.content && (
                            <div className="text-danger mb-1">
                              {errors.content}
                            </div>
                          )}
                        </div>
                        <div className="form-group col-md-12">
                          <input
                            type="file"
                            className="form-control-file"
                            accept="image/png, image/gif, image/jpeg"
                            name="postImage"
                            onChange={(e) => {
                              setFieldValue(
                                "postImage",
                                e.currentTarget.files[0]
                              );
                            }}
                          />
                          {touched.postImage && errors.postImage && (
                            <div className="text-danger mb-1">
                              {errors.postImage}
                            </div>
                          )}
                        </div>

                        <div className="col-md-6">
                          <input
                            type="submit"
                            name="submit"
                            value={isSubmitting ? "Loading..." : "Create Post"}
                            disabled={isSubmitting}
                          />
                        </div>
                      </form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact End --> */}
    </>
  );
};

export default NewBlog;
