import React, { useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "../utils/axios";
import setToken from "../utils/token";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token");

  const userInfo = {
    email: "",
    password: "",
  };

  const userSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required!"),
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <section className="contact-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="contact-form">
              <h4>Login</h4>
              <p>Login to see your latest orders.</p>
              <Formik
                initialValues={userInfo}
                validationSchema={userSchema}
                onSubmit={async (values, formikActions) => {
                  try {
                    const response = await axios.post(
                      "/users/api/authenticate",
                      { ...values }
                    );

                    localStorage.setItem("token", response.data.accessToken);

                    setToken(response.data.accessToken);
                    navigate("/dashboard");

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
                  const { email, password } = values;
                  return (
                    <form onSubmit={handleSubmit} className="row">
                      <div className="col-md-12">
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={handleChange("email")}
                          placeholder="Email Address"
                          onBlur={handleBlur("email")}
                        />
                        {touched.email && errors.email && (
                          <div className="text-danger mb-1">{errors.email}</div>
                        )}
                      </div>
                      <div className="col-md-12">
                        <input
                          type="password"
                          name="password"
                          value={password}
                          onChange={handleChange("password")}
                          placeholder="Your Password"
                        />
                        {touched.password && errors.password && (
                          <div className="text-danger mb-1">
                            {errors.password}
                          </div>
                        )}
                      </div>

                      <div className="col-md-12 text-center">
                        <input
                          type="submit"
                          name="submit"
                          disabled={isSubmitting}
                          value={isSubmitting ? "Loading..." : "Login"}
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
  );
}

export default Login;
