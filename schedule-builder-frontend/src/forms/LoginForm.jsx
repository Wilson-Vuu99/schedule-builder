<<<<<<< HEAD
import React from "react";
=======
import React, { useEffect } from "react";
>>>>>>> main
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "../components/Button";
import axios from "axios";
import { validatePassword } from "../utils/loginHelper.js"; // Import your password validation

const LoginForm = ({ backToRegister }) => {
    const { register, handleSubmit, setError } = useForm();
<<<<<<< HEAD
=======
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://b26a6875-13e2-4252-9964-8a76c8e6419a-00-rwaecu4n1cap.spock.replit.dev/test/");
                console.log("Data from backend:", response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []); // Runs once when the component mounts
>>>>>>> main

    const onSubmit = async (data) => {
        // Password validation
        const isPasswordValid = validatePassword(data.password, setError);
        if (!isPasswordValid) {
            return; // Stop form submission if validation fails
        }

        try {
            const response = await axios.post("/api/login", {
                username: data.username,
                password: data.password,
            });

            if (response.status === 200) {
                alert("Login successful!");
                console.log("Success:", data.username);
            }
        } catch (error) {
            // Handle specific error responses
            if (error.response) {
                // Customize error message based on response status
                setError("username", { message: "Invalid credentials" });
            } else {
                alert("Network error. Please try again.");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex justify-content-center align-items-center mt-4 mb-4">
                <h1 className="text-center">Login</h1>
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
                    {...register("password", {
                        required: "Password is required",
                    })}
                />
                <label className="form-label">Password</label>
            </div>

            <div className="text-center text-lg-start mt-4 pt-2">
                <Button type="submit">Login</Button>
                <p className="small fw-bold mt-2 pt-1 mb-4">
                    Don't have an account?{" "}
                    <button
                        type="button"
                        onClick={backToRegister}
                        className="link-button"
                    >
                        Register
                    </button>
                </p>
            </div>
        </form>
    );
};

export default LoginForm;
