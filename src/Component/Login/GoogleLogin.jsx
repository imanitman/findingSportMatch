import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';
import React from 'react';

export default function BtnGoogleLogin() {
    const CLIENT_ID = '920327711089-hf8j7927dilqkonruu7ba5ud7qevrdfa.apps.googleusercontent.com';

    const handleLoginSuccess = async (resGoogle) => {
        const tokenGo = resGoogle.credential; // Sửa lỗi `CREDENTIAL` thành `credential`
        try {
            const response = await axios.post('http://localhost:8080/auth/google', { token: tokenGo });
            if (response.data) {
                console.log("Verified successfully");
            } else {
                console.log("Server is not running");
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <div className="flex justify-center items-center w-38 h-12 bg-gray-100">
            <GoogleOAuthProvider clientId={CLIENT_ID}>
                <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onFailure={(error) => console.error(error)}
                    render={(renderProps) => (
                        <button
                            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 focus:outline-none"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                        >
                            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google Logo" className="w-5 h-5 mr-2" />
                            Đăng nhập với Google
                        </button>
                    )}
                />
            </GoogleOAuthProvider>
        </div>
    );
}
