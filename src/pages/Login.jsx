import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/login.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    console.log("Login form submitted with:", values);
    await login(values); // This should update the user state in your context.
    console.log("After login, user should be set. Navigating to dashboard.");
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        {() => (
          <Form>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <Field type="email" name="email" id="email" placeholder="Enter your email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <Field type="password" name="password" id="password" placeholder="Enter your password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <button type="submit" className="submit-btn">Login</button>
          </Form>
        )}
      </Formik>
      <p>
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
}

export default Login;
