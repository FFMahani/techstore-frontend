import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [serverError, setServerError] = useState("");

  const onSubmit = async (data) => {
  try {
    setServerError("");

    await new Promise((resolve) => setTimeout(resolve, 1000)); 

    // Simulated users
    const users = [
      { email: "admin@example.com", password: "admin123" },
      { email: "user@example.com", password: "user123" },
    ];

    const userExists = users.some(
      (u) => u.email === data.email && u.password === data.password
    );

    if (!userExists) {
      throw new Error("Invalid credentials");
    }

    alert("Login successful!");
  } catch (err) {
    setServerError(err.message);
  }
};


  return (
    <div className="login-section bg-light fade-in py-5 px-3">
      <div className="container d-flex flex-column align-items-center">
        <h2 className="fw-bold text-dark mb-4 fs-3">Login to Your Account</h2>

        <div className="card login-card shadow-sm border-0">
          <div className="card-body p-4">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Email */}
              <div className="mb-3 text-start">
                <label
                  htmlFor="email"
                  className="form-label text-muted fw-medium"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="example@email.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Enter a valid email",
                    },
                  })}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email.message}</div>
                )}
              </div>

              {/* Password */}
              <div className="mb-3 text-start">
                <label
                  htmlFor="password"
                  className="form-label text-muted fw-medium"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <div className="invalid-feedback">
                    {errors.password.message}
                  </div>
                )}
              </div>

              {/* Server error */}
              {serverError && (
                <div className="alert alert-danger small py-2">
                  {serverError}
                </div>
              )}

              {/* Submit Button */}
              <div className="d-grid mt-4">
                <button
                  type="submit"
                  className="btn btn-pill"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "🔐 Login"}
                </button>
              </div>
            </form>

            <p className="mt-3 mb-0 text-muted text-center small signup-text-wrap">
              Don’t have an account?
              <Link
                to="/signup"
                className="text-signup-link text-decoration-none ms-1"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
