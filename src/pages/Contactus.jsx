import React from "react";
import { CommonHero, Anchor } from "../components";
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Contactus = () => {
  const messageInfo = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    termCheck: false,
  };

  const messageSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    phone: Yup.string()
      .min(10, "Invalid phone number!")
      .max(13, "Invalid phone number!")
      .required("Phone is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    termCheck: Yup.bool().oneOf([true], "Term condition must be checked"),
  });
  return (
    <>
      <CommonHero title="Contact Us" pageTitle="CONTACT US" />

      {/* <!-- Contact Start --> */}
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact--info-area">
                <h3>Get in touch</h3>
                <p>
                  Looking for help? Fill the form and start a new adventure.
                </p>
                <div className="single-info">
                  <h5>Address</h5>
                  <p>
                    <i className="fal fa-home"></i>
                    I/9 street A-39,
                    <br /> Islamabad
                  </p>
                </div>
                <div className="single-info">
                  <h5>Phone</h5>
                  <p>
                    <i className="fal fa-phone"></i>
                    (+92) 3443110881
                    <br />
                    (+92) 3110879239
                  </p>
                </div>
                <div className="single-info">
                  <h5>Support</h5>
                  <p>
                    <i className="fal fa-envelope"></i>
                    hozte77@gmail.com
                    <br />
                    contact@hozte.com
                  </p>
                </div>
                <div className="ab-social">
                  <h5>Follow Us</h5>
                  <Anchor
                    className="fac"
                    href="https://www.facebook.com/Hozte-116700961018080/"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Anchor>
                  <Anchor className="twi" href="https://twitter.com/hozte77">
                    <i className="fab fa-twitter"></i>
                  </Anchor>
                  <Anchor
                    className="you"
                    href="https://www.pinterest.com/hozte77"
                  >
                    <i className="fab fa-pinterest"></i>
                  </Anchor>
                  <Anchor
                    className="lin"
                    href="https://www.linkedin.com/in/ho-zte-68bab7238/"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </Anchor>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="contact-form">
                <h4>Let’s Connect</h4>
                <p>Having any issue let us know.</p>
                <Formik
                  initialValues={messageInfo}
                  validationSchema={messageSchema}
                  onSubmit={async (values, formikActions) => {
                    const {
                      email,
                      firstName,
                      lastName,
                      phone,
                      subject,
                      message,
                    } = values;
                    try {
                      const response = await axios.post(
                        "http://localhost:5000/questions/api",
                        { email, firstName, lastName, phone, subject, message }
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
                      firstName,
                      lastName,
                      phone,
                      message,
                      subject,
                      termCheck,
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
                        <div className="col-md-12">
                          <input
                            type="text"
                            name="subject"
                            onChange={handleChange("subject")}
                            onBlur={handleBlur("subject")}
                            value={subject}
                            placeholder="Subject"
                          />
                          {touched.subject && errors.subject && (
                            <div className="text-danger mb-1">
                              {errors.subject}
                            </div>
                          )}
                        </div>
                        <div className="col-md-12">
                          <textarea
                            name="message"
                            onChange={handleChange("message")}
                            onBlur={handleBlur("message")}
                            value={message}
                            placeholder="How can we help?"
                          ></textarea>
                          {touched.message && errors.message && (
                            <div className="text-danger mb-1">
                              {errors.message}
                            </div>
                          )}
                        </div>
                        <div className="col-md-6">
                          <div className="condition-check">
                            <input
                              id="terms-conditions"
                              type="checkbox"
                              name="termCheck"
                              onChange={handleChange("termCheck")}
                              onBlur={handleBlur("termCheck")}
                              value={termCheck}
                            />
                            <label for="terms-conditions">
                              I agree to the
                              <Anchor href="#">Terms & Conditions</Anchor>
                            </label>
                          </div>
                          {touched.termCheck && errors.termCheck && (
                            <div className="text-danger mb-1">
                              {errors.termCheck}
                            </div>
                          )}
                        </div>
                        <div className="col-md-6 text-right">
                          <input
                            type="submit"
                            name="submit"
                            value={isSubmitting ? "Loading..." : "Send Message"}
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

      {/* <!-- Gamps Start --> */}
      <div className="bisylms-map">
        <iframe src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;coord=39.966528,-75.158284&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&amp;ie=UTF8&amp;t=p&amp;z=16&amp;iwloc=B&amp;output=embed"></iframe>
      </div>
      {/* <!-- Gamps Start --> */}
    </>
  );
};

export default Contactus;
