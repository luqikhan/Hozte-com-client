import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ChangePassword() {
  const navigate = useNavigate();
  const userInfo = {
    currentPass: "",
    newPass: "",
    confirmPass: "",
  };

  const userSchema = Yup.object().shape({
    currentPass: Yup.string().required("Current Password is required!"),
    newPass: Yup.string().required("New Password is required!"),
    confirmPass: Yup.string().oneOf(
      [Yup.ref("newPass"), null],
      "Passwords must match"
    ),
  });

  return (
    <section className="contact-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="contact-form">
              <h4>Change Password</h4>
              <p>Reset your dashboard password now.</p>
              <Formik
                initialValues={userInfo}
                validationSchema={userSchema}
                onSubmit={async (values, formikActions) => {
                  const { newPass, currentPass } = values;
                  const token = localStorage.getItem("token");
                  try {
                    const response = await axios.put(
                      "/users/api/change-password",
                      { newPass, currentPass },
                      {
                        headers: {
                          authorization: `Bearer ${token}`,
                        },
                      }
                    );
                    const { message } = response.data;
                    toast.success(message, {
                      position: toast.POSITION.TOP_RIGHT,
                    });

                    localStorage.removeItem("token");
                    navigate("/");

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
                  const { currentPass, newPass, confirmPass } = values;
                  return (
                    <form onSubmit={handleSubmit} className="row">
                      <div className="col-md-12">
                        <input
                          type="password"
                          name="currentPass"
                          value={currentPass}
                          onChange={handleChange("currentPass")}
                          placeholder="Current Password"
                          onBlur={handleBlur("currentPass")}
                        />
                        {touched.currentPass && errors.currentPass && (
                          <div className="text-danger mb-1">
                            {errors.currentPass}
                          </div>
                        )}
                      </div>
                      <div className="col-md-12">
                        <input
                          type="password"
                          name="newPass"
                          value={newPass}
                          onChange={handleChange("newPass")}
                          placeholder="New Password"
                          onBlur={handleBlur("newPass")}
                        />
                        {touched.newPass && errors.newPass && (
                          <div className="text-danger mb-1">
                            {errors.newPass}
                          </div>
                        )}
                      </div>
                      <div className="col-md-12">
                        <input
                          type="password"
                          name="confirmPass"
                          value={confirmPass}
                          onChange={handleChange("confirmPass")}
                          placeholder="Confirm Password"
                        />
                        {touched.confirmPass && errors.confirmPass && (
                          <div className="text-danger mb-1">
                            {errors.confirmPass}
                          </div>
                        )}
                      </div>

                      <div className="col-md-12 text-center">
                        <input
                          type="submit"
                          name="submit"
                          disabled={isSubmitting}
                          value={
                            isSubmitting ? "Loading..." : "Change Password"
                          }
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

export default ChangePassword;
