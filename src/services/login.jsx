import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "./images/login/Gemini_Generated_Image_ph4n63ph4n63ph4n.png";


import './login.css' ;
import Signup from "../Page/signup";

function Login() {
  const navigate = useNavigate(); // ✅ INSIDE component

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function signup (){
    navigate("/signup")
  }

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:4000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

  localStorage.setItem("token", data.token);


      // ✅ redirect AFTER success
      navigate("/home");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="loginpage"> 
   
    <img  className = "login-image" src={loginImage} alt="login" />
     <div className="loginform">
       <h2 align = "center" className="welcome back" > Welcome Back </h2>
      <input
        className="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="password"
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      New to Quizzo ,
       <button onClick={signup}>signin</button>
      </div>
    </div>
  );
}

export default Login;
