import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../api.js';

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] =useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
  });
  const [error, setError] = useState("");
  
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const frontendUrl = process.env.REACT_APP_FRONTEND_URL;
  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    
    const endpoint = isLogin ? `${backendUrl}/api/auth/login` :`${backendUrl}/api/auth/register`;
    
    
    const payload = isLogin 
      ? { email: formData.email, password: formData.password } 
      : formData;

    try {
      const response = await api.post(endpoint, payload);

      if (isLogin) {
        
        const { accessToken, refreshToken } = response.data;
        
        
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        
        window.location.href = '/'; 
        // navigate('/')
      } else {
       
        setIsLogin(true);
        setFormData({ ...formData, password: "" }); 
      }
    } catch (err) {
      
      const errorMessage = err.response?.data?.message || "Something went wrong. Please try again.";
      setError(errorMessage);
    }
  };
  return (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
    <div className="bg-white w-90 h-100  p-6 rounded-xl shadow-lg relative">

      <button
        onClick={ ()=>window.location.href = `${frontendUrl}`}
        className="absolute top-4 right-4 text-xl text-gray-500 hover:text-slate-500"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      <h2 className="text-2xl  text-slate-700 font-semibold text-center mb-6">
        {isLogin ? "Login" : "Sign Up"}
      </h2>
      {error && <div className="text-red-900 text-center">{error}</div>}
      <form onSubmit={handleSubmit}
       className="flex flex-col gap-4 mb-3">
        {!isLogin && (
           <> <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="first Name"
            className="border rounded-md p-2 border-slate-400"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="last Name"
            className="border rounded-md p-2 border-slate-400"
            required
          />
         </>  
        )}

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@gmail.com"
          className="border rounded-md p-2 border-slate-400"
          required
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          className="border rounded-md p-2 border-slate-400"
          required
        />

        <button
          type="submit"
          className="bg-red-600 text-white p-2 rounded-md hover:bg-red-400"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <p className="text-center mt-5">
        {isLogin
          ? "Don't have an account?"
          : "Already have an account?"}

        <span
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-500 cursor-pointer ml-1"
        >
          {isLogin ? "Sign Up" : "Login"}
        </span>
      </p>

    </div>
  </div>
);
}

export default SignUp
