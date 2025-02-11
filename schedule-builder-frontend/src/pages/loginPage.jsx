import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "../forms/LoginForm";
import RegisterForm from "../forms/RegisterForm";

/*************  ✨ Codeium Command 🌟  *************/
const LoginPage = () => {
    const [isRegistering, setRegistering] = useState(false);
    const toRegisterClick = () => {
        setRegistering(true); //register
    };

    const toLoginClick = () => {
        setRegistering(false); //show login
    };

    return (
        <section className="vh-100">
            <div className="container-fluid h-100">
                <div className="row d-flex justify-content-center align-items-center h-100 ">
                    <div className="col-md-9 col-lg-6 col-xl-5 bg-dark ">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid"
                            alt="Sample image"
                        />
                    </div>
                    <div className="col-md-9 col-lg-6 col-xl-5 offset-xl-1 bg-light">
                        {isRegistering ? (
                            <RegisterForm backToLogin={toLoginClick} />
                        ) : (
                            <LoginForm backToRegister={toRegisterClick} />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
