import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signInWithGoogle } from './firebase.js'; // Adjust the path as needed

const Login: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [hyper, setHyper] = useState(false);

    const handleGoogleSignIn = async () => {
        setLoading(true);
        try {
            const user = await signInWithGoogle();
            if (user) {
                const email = user.email || '';
                console.log("User email:", email);
                window.location.href = '/home';
            } else {
                throw new Error("Failed to retrieve user information");
            }
        } catch (error) {
            toast.error("Failed to sign in with Google");
            console.error("Failed to sign in with Google", error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="relative flex justify-center items-center min-h-screen bg-gray text-white" style={{ backgroundImage: 'url(/canteen_bg.jpg)' ,backgroundSize: '100% 100%', }}>
            <ToastContainer />
            <div className="relative z-10 bg-no-repeat bg-gray-800  bg-center p-4 shadow-lg border border-orange rounded " style={{backgroundImage: 'url(/lo_bg.png)' , backgroundSize:'100% 100%'}} >
  <div className="flex justify-center space-x-2 mb-5">
  <button
    className={`px-4 py-3  font-bold font-serif bg-gray bg-opacity-70 border ${hyper ? 'text-white' : 'text-orange'} w-full rounded-lg`}
    onClick={() => setHyper(true)}
>
      Customer
    </button>
    <button className={`px-4 py-3  font-bold font-serif bg-gray bg-opacity-70 border ${hyper ? 'text-orange' : 'text-white'} w-full rounded-lg`} onClick={() => setHyper(false)}>
      Admin
    </button>
  </div>
                {hyper ?  <> <div className="text-center mb-6">
                LOGIN HERE
                </div>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">Email or Phone Number</label>
                        <input type="email" id="email" className="w-full p-2 bg-gray-800 bg-opacity-75 rounded mt-1" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium">Password</label>
                        <input type="password" id="password" className="w-full p-2 bg-gray-800 bg-opacity-75 rounded mt-1" />
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2 text-sm">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-custom underline">Forgot password?</a>
                    </div>
                    <button type="submit" className="w-full bg-lime-500 text-black py-2 rounded">Log in</button>
                    <div className="text-center mt-4">
                        <p className="flex items-center justify-center">
                            <span className="flex-1 border-b border-custom"></span>
                            <span className="mx-4 text-custom">or continue with</span>
                            <span className="flex-1 border-b border-custom"></span>
                        </p>
                        <div className="flex justify-center space-x-4 mt-2">
                            <button
                                type="button"
                                className="btn-with-icon flex items-center justify-center bg-gray-800 p-2 rounded"
                                onClick={handleGoogleSignIn}
                                disabled={loading}
                            >
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
                                    <path fill="#EA4335" d="M24 9.5c3.3 0 6.2 1.1 8.5 3.2l6.4-6.4C34.2 3 29.3 1 24 1 14.8 1 7.1 7.6 4.2 16.1l7.5 5.8C13.6 14.1 18.3 9.5 24 9.5z"></path>
                                    <path fill="#34A853" d="M24 44c5.4 0 10-1.8 13.6-4.8l-6.4-5.1c-2.1 1.4-4.8 2.3-7.3 2.3-5.4 0-10-3.5-11.7-8.4l-7.4 5.8C6.5 38.6 14.5 44 24 44z"></path>
                                    <path fill="#4A90E2" d="M44.5 24c0-1.4-.1-2.8-.4-4.2H24v8h11.6c-.5 2.3-1.7 4.3-3.5 5.8l7.4 5.8C43 35.8 44.5 30.2 44.5 24z"></path>
                                    <path fill="#FBBC05" d="M12.7 28.8c-.9-2.5-.9-5.3 0-7.8l-7.4-5.8C2.6 18.6 1 21.2 1 24s1.6 5.4 4.3 8.1l7.4-5.8z"></path>
                                </svg>
                                {loading ? 'Signing in...' : 'Google account'}
                            </button>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <span className="text-custom">Don't have an account?</span>
                        <a href="/signup" className="link-white" > Sign up</a>
                    </div>
                </form> </> :   <>  <div className="text-center mb-6">
                LOGIN HERE
                </div>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">Doctor Id</label>
                        <input type="email" id="email" className="w-full p-2 bg-gray-800 bg-opacity-75 rounded mt-1" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium">Password</label>
                        <input type="password" id="password" className="w-full p-2 bg-gray-800 bg-opacity-75 rounded mt-1" />
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <input type="checkbox" className="form-checkbox" />
                            <span className="ml-2 text-sm">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-custom underline">Forgot password?</a>
                    </div>
                    <button type="submit" className="w-full bg-lime-500 text-black py-2 rounded">Log in</button>
                    <div className="text-center mt-4">
                        <span className="text-custom">Don't have an account?</span>
                        <a href="/register" className="link-white" > Sign up</a>
                    </div>
                </form></> }
            </div>
        </div>
    );
};

export default Login;
