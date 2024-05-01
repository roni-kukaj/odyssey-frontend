import React from 'react';
import "./LoginSignup.css";


// import user_icon from '../Assets/profile.png'
// import email_icon from '../Assets/email.png'
// import password_icon from '../Assets/password.png'

const LoginSignup = () => {
    return(
        <div className='container'>
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                <div className="input">
                    <input type="text" placeholder="Name" />
                </div>

                <div className="input">
                    <input type="email" placeholder="Email" />
                </div>

                <div className="input">
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
            </div>
        </div>
    )
}

export default LoginSignup