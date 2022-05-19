import React, { Fragment } from "react";
import { CommonHero } from "../components";
import { toast } from "react-toastify";
import { Formik, FieldArray } from "formik";
import * as Yup from "yup";
import axios from "../utils/axios";

function ServiceCheck(props) {
  const { value, text, labelFor, onChange, checked, id } = props;
  return (
    <>
      <div className="col-md-6">
        <div className="form-check condition-radio">
          <input
            className="form-check-input"
            type="checkbox"
            id={id}
            value={value}
            name="services"
            onChange={onChange}
            checked={checked}
          />
          <label className="form-check-label" htmlFor={labelFor}>
            {text}
          </label>
        </div>
      </div>
    </>
  );
}

function GetAQuote() {
  const quoteInfo = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    country: "",
    businessNature: "",
    addtionalInformation: "",
    services: [],
  };

  const quoteSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    phone: Yup.string()
      .min(10, "Invalid phone number!")
      .max(13, "Invalid phone number!")
      .required("Phone is required"),
    businessNature: Yup.string().required("Business nature is required"),
    country: Yup.string().required("Country is required"),

    addtionalInformation: Yup.string().required(
      "Addtional inforamtion is required"
    ),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    services: Yup.array(),
  });

  const servicesData = [
    {
      value: "Content Writing",
      label: "Content writing for children books",
    },
    {
      value: "Book Designing",
      label: "Children’s book designing",
    },
    {
      value: "Cover Design",
      label: "Cover Design",
    },
    {
      value: "Interior Design",
      label: "Interior Design",
    },
    {
      value: "Publishing on Amazon",
      label: "Publishing on Amazon",
    },
    {
      value: "Video Animation",
      label: "Video Animation",
    },
    {
      value: "Website Designing",
      label: "Website Design",
    },
    {
      value: "App Designing",
      label: "Mobile Application Design",
    },
  ];

  return (
    <div>
      <CommonHero title="Get A Quote" pageTitle="GET A QOUTE" />
      {/* <!-- Contact Start --> */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-form">
          <div className="row">
            <div className="col-md-4">
              <div className="contact--info-area">
                <h3>Interested!</h3>
                <p>
                  Fill out our form below with the requested information and we
                  will get back to you with a detailed business relation plan
                  along with the terms and conditions.
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <div>
                <Formik
                  initialValues={quoteInfo}
                  validationSchema={quoteSchema}
                  onSubmit={async (values, formikActions) => {
                    const {
                      email,
                      firstName,
                      lastName,
                      phone,
                      country,
                      businessNature,
                      services,
                      addtionalInformation,
                    } = values;
                    try {
                      const response = await axios.post("/getaquote/api", {
                        email,
                        firstName,
                        lastName,
                        phone,
                        country,
                        businessNature,
                        services,
                        addtionalInformation,
                      });

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
                    const {
                      email,
                      firstName,
                      lastName,
                      phone,
                      country,
                      businessNature,
                      services,
                      addtionalInformation,
                    } = values;
                    return (
                      <form onSubmit={handleSubmit} className="row">
                        <div className="col-md-6">
                          <input
                            type="text"
                            name="firstName"
                            onChange={handleChange("firstName")}
                            onBlur={handleBlur("firstName")}
                            value={firstName}
                            placeholder="First Name"
                          />
                          {touched.firstName && errors.firstName && (
                            <div className="text-danger mb-1">
                              {errors.firstName}
                            </div>
                          )}
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            name="lastName"
                            onChange={handleChange("lastName")}
                            onBlur={handleBlur("lastName")}
                            value={lastName}
                            placeholder="Last Name"
                          />
                          {touched.lastName && errors.lastName && (
                            <div className="text-danger mb-1">
                              {errors.lastName}
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
                            name="country"
                            onChange={handleChange("country")}
                            onBlur={handleBlur("country")}
                            value={country}
                            placeholder="Country"
                          />
                          {touched.country && errors.country && (
                            <div className="text-danger mb-1">
                              {errors.country}
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
                            placeholder="Nature of Business"
                          />
                          {touched.businessNature && errors.businessNature && (
                            <div className="text-danger mb-1">
                              {errors.businessNature}
                            </div>
                          )}
                        </div>
                        {/* services section start*/}
                        <div className="col-md-12">
                          <h6 className="mb-10">
                            Services you are interested in
                          </h6>
                        </div>
                        <FieldArray
                          name="services"
                          className="col-md-6"
                          render={(arrayHelpers) => (
                            <>
                              {servicesData.map((service) => (
                                <Fragment key={service.value}>
                                  <ServiceCheck
                                    text={service.label}
                                    value={service.value}
                                    labelFor={service.label}
                                    id={service.label}
                                    checked={services.includes(service.value)}
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        arrayHelpers.push(service.value);
                                      } else {
                                        const idx = services.indexOf(
                                          service.value
                                        );
                                        arrayHelpers.remove(idx);
                                      }
                                    }}
                                  />
                                </Fragment>
                              ))}
                            </>
                          )}
                        />

                        <div className="col-md-12 mt-20">
                          <textarea
                            name="addtionalInformation"
                            value={addtionalInformation}
                            onChange={handleChange("addtionalInformation")}
                            onBlur={handleBlur("addtionalInformation")}
                            placeholder="Addtional Information"
                          ></textarea>
                        </div>

                        <div className="col-md-6">
                          <input
                            type="submit"
                            name="submit"
                            value={isSubmitting ? "Loading..." : "Send Quote"}
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
        </div>
      </section>
      {/* <!-- Contact End --> */}
    </div>
  );
}

export default GetAQuote;
