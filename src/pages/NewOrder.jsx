import React from "react";
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useLocation } from "react-router-dom";

const NewOrder = () => {
  const orderInfo = {
    fullName: "",
    phone: "",
    email: "",
    businessNature: "",
    addtionalInformation: "",
  };

  const location = useLocation();
  const offer = location.state;

  const orderSchema = Yup.object().shape({
    fullName: Yup.string().required("Name is required"),
    phone: Yup.string()
      .min(10, "Invalid phone number!")
      .max(13, "Invalid phone number!")
      .required("Phone is required"),
    businessNature: Yup.string().required("Business nature is required"),
    addtionalInformation: Yup.string(),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });
  return (
    <>
      {/* <!-- Contact Start --> */}
      <section className="contact-section">
        <div className="container pt-45">
          <div className="row">
            <div className="col-md-4">
              <div className="contact--info-area">
                <h3>Order details</h3>
                <p>Your selected package details.</p>
                <div className="single-info">
                  <p>Package Name:</p>
                  <h5 className="mt-2 text-center">{offer?.title}</h5>
                </div>
                <div className="single-info">
                  <p>Total Price:</p>
                  <h5 className="mt-2 text-center">$ {offer?.price}</h5>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="contact-form">
                <h4>New Order</h4>
                <p>Fill the form and place your order's.</p>
                <Formik
                  initialValues={orderInfo}
                  validationSchema={orderSchema}
                  onSubmit={async (values, formikActions) => {
                    const {
                      fullName,
                      email,
                      phone,
                      businessNature,
                      addtionalInformation,
                    } = values;
                    try {
                      const response = await axios.post(
                        "http://localhost:5000/orders/api",
                        {
                          fullName,
                          email,
                          phone,
                          businessNature,
                          addtionalInformation,
                          offer,
                        }
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
                    const {
                      email,
                      phone,
                      fullName,
                      businessNature,
                      addtionalInformation,
                    } = values;
                    return (
                      <form onSubmit={handleSubmit} className="row">
                        <div className="col-md-6">
                          <input
                            type="text"
                            name="fullName"
                            onChange={handleChange("fullName")}
                            onBlur={handleBlur("fullName")}
                            value={fullName}
                            placeholder="Full Name"
                          />
                          {touched.fullName && errors.fullName && (
                            <div className="text-danger mb-1">
                              {errors.fullName}
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
                            placeholder="Email Address"
                          />
                          {touched.email && errors.email && (
                            <div className="text-danger mb-1">
                              {errors.email}
                            </div>
                          )}
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            name="phone"
                            onChange={handleChange("phone")}
                            onBlur={handleBlur("phone")}
                            value={phone}
                            placeholder="Phone Number"
                          />
                          {touched.phone && errors.phone && (
                            <div className="text-danger mb-1">
                              {errors.phone}
                            </div>
                          )}
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            name="businessNature"
                            onChange={handleChange("businessNature")}
                            onBlur={handleBlur("businessNature")}
                            value={businessNature}
                            placeholder="Business Nature"
                          />
                          {touched.businessNature && errors.businessNature && (
                            <div className="text-danger mb-1">
                              {errors.businessNature}
                            </div>
                          )}
                        </div>
                        <div className="col-md-12">
                          <textarea
                            name="addtionalInformation"
                            onChange={handleChange("addtionalInformation")}
                            onBlur={handleBlur("addtionalInformation")}
                            value={addtionalInformation}
                            placeholder="Addtional Information"
                          ></textarea>
                          {touched.addtionalInformation &&
                            errors.addtionalInformation && (
                              <div className="text-danger mb-1">
                                {errors.addtionalInformation}
                              </div>
                            )}
                        </div>

                        <div className="col-md-6">
                          <input
                            type="submit"
                            name="submit"
                            value="Send Order"
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

export default NewOrder;
