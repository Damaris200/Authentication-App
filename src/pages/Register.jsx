import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";  // Import Link for navigation
import "../styles/register.css";

// Validation schema
const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too short").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too short").required("Required"),
});

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="register-container">  {/* Add a container for styling */}
      <h2>Register</h2>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          register(values);
          navigate("/login"); // Redirect to login page after successful registration
        }}
      >
        {() => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <Field type="text" name="name" id="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <Field type="email" name="email" id="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <Field type="password" name="password" id="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button type="submit" className="submit-btn">Register</button>
          </Form>
        )}
      </Formik>

      <p>
        Already have an account? <Link to="/">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
