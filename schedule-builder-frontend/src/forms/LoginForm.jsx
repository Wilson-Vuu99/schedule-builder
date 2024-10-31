import React from "react";
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../components/Button';



const LoginForm = ({backToRegister}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const onSubmit = (data) => {
        console.log('Logging in:', data);
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex justify-content-center align-items-center mt-4 mb-4">
                <h1 className="text-center">Login</h1>
            </div>
            <div data-mdb-input-init className="form-outline mb-4">
            <input 
                type="email" 
                id="form3Example3" 
                className="form-control form-control-lg border border-light-subtle" 
                placeholder="Enter a valid email address" 
            />
                <label className="form-label" htmlFor="form3Example3">Email address</label>
            </div>

            <div data-mdb-input-init className="form-outline mb-3">
                <input 
                type="password" 
                id="form3Example4" 
                className="form-control form-control-lg border border-light-subtle" 
                placeholder="Enter password" 
            />
            <label className="form-label" htmlFor="form3Example4">Password</label>
            </div>

        {/* <div className="d-flex justify-content-between align-items-center">
            <div className="form-check mb-0">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                </label>
            </div>
            <a href="#!" className="text-body">Forgot password?</a>
        </div> */}
        {/* <div className="text-center text-lg-start mt-4">
            <Button> Login </Button> 
        </div>
        <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a onClick={backToRegister} class="link-danger"> 
            Register</a>
        </p> */}
            <div class="text-center text-lg-start mt-4 pt-2">
                <Button>Login</Button>
                <p class="small fw-bold mt-2 pt-1 mb-4">Don't have an account? <a onClick={backToRegister}
                    class="link-danger">Register</a>
                </p>
            </div>
                              
        </form>
    );
};

export default LoginForm;