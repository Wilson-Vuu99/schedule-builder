import React from "react";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../components/Button';
import axios from 'axios';
import { validatePassword } from '../utils/loginHelper.js'; // Import your password validation

const LoginForm = ({ backToRegister }) => {
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

        try {
            const response = await axios.post('/api/login', {
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
            
            <div data-mdb-input-init class="form-outline mb-4">
                <input type="email" id="loginEmail" class="form-control form-control-lg"
                placeholder="Enter a valid email address" />
                <label class="form-label" for="form3Example3">Email address</label>
            </div>

            <div data-mdb-input-init class="form-outline mb-3">
                <input type="password" id="form3Example4" class="form-control form-control-lg"
                placeholder="Enter password" />
                <label class="form-label" for="form3Example4">Password</label>
            </div>

            <div className="text-center text-lg-start mt-4 pt-2">
                <Button type="submit">Login</Button>
                <p className="small fw-bold mt-2 pt-1 mb-4">
                    Don't have an account?{" "}
                    <a onClick={backToRegister} className="link-danger">
                        Register
                    </a>
                </p>
            </div>
        </form>
    );
};

export default LoginForm;
