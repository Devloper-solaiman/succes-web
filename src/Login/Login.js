import React, { useState } from 'react';
import './Login.css'

function Login() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [emailError, setemailError] = useState("");

    const handleValidation = (event) => {
        let formIsValid = true;

        if (!email.match(/\w+@[a-zA-Z_].{2,3}/)) {
            formIsValid = false;
            setemailError("enter valid Email");
            return false;
        } else {
            setemailError("");
            formIsValid = true;
        }

        if (!password.match(/^[a-zA-Z]{8,22}$/)) {
            formIsValid = false;
            setpasswordError(
                "Enter valid password!!"
            );
            return false;
        } else {
            setpasswordError("");
            formIsValid = true;
        }

        return formIsValid;
    };

    const loginSubmit = (e) => {
        e.preventDefault();
        handleValidation();
    };

    return (
        <div className="login-field">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <form onSubmit={loginSubmit}>
                            <div className="form-group mt-4 ">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control mb-4"
                                    aria-describedby="emailHelp"
                                    placeholder="@gmail.com"
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                                <small id="emailHelp" className="text-danger form-text">
                                    {emailError}
                                </small>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control mt-3 "
                                    placeholder="Enter Password"
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                                <small className="text-danger form-text">
                                    {passwordError}
                                </small>
                            </div>
                            <div className="form-group form-check mt-4">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                />
                                <label className="form-check-label">Yes i am agreed</label>
                            </div>
                            <button type="submit" className="btn btn-primary mt-5">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;