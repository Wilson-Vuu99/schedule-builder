import { useForm } from "react-hook-form";

export const validatePassword = (password,setError) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);

    if (!password){
        setError('password',{message:'Password is required'});
        return false;
    }
    if (password.length < 8) {
        setError('password', { message:'Password must be at least 8 characters'});
        return false;
    }


    if (!hasUpperCase) {
        setError('password', { message:'Password must contain at least one uppercase letter'});
        return false;
    }
   
    if (!hasLowerCase) {
        setError('password', { message:'Password must contain at least one lowercase letter'});
        return false;
    }

    if (!hasNumber) {
        setError('password', { message:'Password must contain at least one number'});
        return false;
    }
    if (!hasSpecialChar) {
        setError('password', { message:'Password must contain at least one special character'});
        return false;
    }

    return true;
};










