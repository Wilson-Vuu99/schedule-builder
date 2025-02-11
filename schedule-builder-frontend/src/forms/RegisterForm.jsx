import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../components/Button";
import axios from "axios";
import { validatePassword } from "../utils/loginHelper.js";

const RegisterForm = ({ backToLogin }) => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        // Password validation
        const isPasswordValid = validatePassword(data.password, setError);
        if (!isPasswordValid) {
            return; // Stop form submission if validation fails
        }

        // Confirm password validation
        if (data.password !== data.confirmPassword) {
            setError("confirmPassword", { message: "Passwords do not match" });
            return; // Stop form submission if passwords do not match
        }

        try {
            const response = await axios.post("/api/register", {
                email: data.email,
                password: data.password,
            });

            if (response.status === 200) {
                alert("Registration successful!");
                console.log("Success:", data.email);
            }
        } catch (error) {
            if (error.response) {
                // Customize the error message based on the error response
                setError("email", {
                    message: "Registration failed. Please try again.",
                });
            } else {
                alert("Network error. Please try again.");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex justify-content-center align-items-center mt-4 mb-4">
                <h1 className="text-center">Register</h1>
            </div>

            <div data-mdb-input-init className="form-outline mb-3">
                <input
                    type="email"
                    id="loginEmail"
                    className="form-control form-control-lg border border-light-subtle"
                    placeholder="Enter a valid email address"
                    autoComplete="loginEmail"
                    {...register("username", { required: "Email is required" })}
                />
                <label className="form-label" htmlFor="loginEmail">
                    Email address
                </label>
            </div>

            <div data-mdb-input-init className="form-outline mb-3">
                <input
                    type="password"
                    id="registerPassword"
                    className="form-control form-control-lg border border-light-subtle"
                    placeholder="Enter password"
                />
                <label className="form-label" htmlFor="registerPassword">
                    Password
                </label>
                {errors.password && (
                    <p className="text-danger">{errors.password.message}</p>
                )}
            </div>

            <div data-mdb-input-init className="form-outline mb-3">
                <input
                    type="password"
                    id="confirmPassword"
                    className="form-control form-control-lg border border-light-subtle"
                    placeholder="Confirm Password"
                    {...register("confirmPassword", {
                        required: "Please confirm your password",
                    })}
                />
                <label className="form-label" htmlFor="confirmPassword">
                    Confirm Password
                </label>
            </div>

            <div className="text-center text-lg-start mt-4 pt-2">
                <Button type="submit">Register</Button>
                <p className="small fw-bold mt-2 pt-1 mb-4">
                    Already have an account?{" "}
                    <button
                        type="button"
                        onClick={backToLogin}
                        className="link-button"
                    >
                        Login
                    </button>
                </p>
            </div>
        </form>
    );
};

export default RegisterForm;
