import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "../App.css";

const Signup = () => {
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

      if (data.password !== data.confirmPassword) {
        throw new Error("Passwords do not match");
      }

      alert("Signup successful!");
    } catch (err) {
      setServerError(err.message);
    }
  };

  return (
    <div className="login-section bg-light fade-in py-5 px-3">
      <div className="container d-flex flex-column align-items-center">
        <h2 className="fw-bold text-dark mb-4 fs-3">Create an Account</h2>

        <div className="card login-card shadow-sm border-0">
          <div className="card-body p-4">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Email */}
              <div className="mb-3 text-start">
                <label
                  htmlFor="email"
                  className="form-label text-muted fw-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="example@email.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/,
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
                  placeholder="At least 6 characters"
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

              {/* Confirm Password */}
              <div className="mb-3 text-start">
                <label
                  htmlFor="confirmPassword"
                  className="form-label text-muted fw-medium"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className={`form-control ${
                    errors.confirmPassword ? "is-invalid" : ""
                  }`}
                  placeholder="Repeat your password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.confirmPassword && (
                  <div className="invalid-feedback">
                    {errors.confirmPassword.message}
                  </div>
                )}
              </div>

              {/* Server Error */}
              {serverError && (
                <div className="alert alert-danger small py-2">
                  {serverError}
                </div>
              )}

              {/* Submit */}
              <div className="d-grid mt-4">
                <button
                  type="submit"
                  className="btn btn-pill"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing up..." : "📝 Sign Up"}
                </button>
              </div>
            </form>

            <p className="mt-3 mb-0 text-muted text-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-signup-link text-decoration-none"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
