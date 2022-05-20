import React from "react";
import { CommonHero, Anchor } from "../components";
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "../utils/axios";

const Contactus = () => {
  const messageInfo = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
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
  });
  return (
    <>
      <CommonHero title="Contact Us" pageTitle="CONTACT US" />

      {/* <!-- Contact Start --> */}
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact--info-area mb-4">
                <h3>Get in touch</h3>
                <p>
                  Looking for help? Fill the form and start a new adventure.
                </p>
                <div className="single-info">
                  <h5>Address</h5>
                  <p>
                    <i className="fal fa-home"></i>
                    Duranpur shorkot Pakistan
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
                    className="fac mr-1"
                    href="https://www.facebook.com/Hozte-116700961018080/"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Anchor>
                  <Anchor
                    className="twi mr-1"
                    href="https://twitter.com/hozte77"
                  >
                    <i className="fab fa-twitter"></i>
                  </Anchor>
                  <Anchor
                    className="you mr-1"
                    href="https://www.pinterest.com/hozte77"
                  >
                    <i className="fab fa-pinterest"></i>
                  </Anchor>
                  <Anchor
                    className="lin mr-1"
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
                      const response = await axios.post("/questions/api", {
                        email,
                        firstName,
                        lastName,
                        phone,
                        subject,
                        message,
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
                      message,
                      subject,
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
        <iframe
          title="office-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.9110986955047!2d72.09968501438182!3d30.777074490546767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392366530f29d645%3A0x1649473ad42a3587!2sDuranpur!5e0!3m2!1sen!2s!4v1653021704386!5m2!1sen!2s"
        ></iframe>
      </div>
      {/* <!-- Gamps Start --> */}
    </>
  );
};

export default Contactus;
