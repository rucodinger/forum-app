// import { useEffect, useState } from 'react'
import "./Header.css";
import "./LoginSection.css";

function AccountLogo() {
}

export function LoginSection() {
    let isLoggedIn = false;

    if (!isLoggedIn) {
        return (
            <div className="header__auth">
                <button itemID="login_btn" className="btn btn--ghost">Sign in</button>
                <button onClick={() => {
                    window.location.assign('/register');
                }} itemID="register_btn" className="btn btn--primary">Register</button>
            </div>
        );
    } else {
        return (
            <AccountLogo />
        );
    }
}
