import { useState } from "react";
import"./signup.css"
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;
function Signup() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async () => {
    try {
      const response = await fetch(`${API_URL}/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          age: Number(formData.age), // backend expects number
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      console.log("Signup success:", data);
        navigate("/home");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="body"> <b className="Quizzo"> QUIZZO</b>
    <div  className="main">
     
      <h2 className="signuptitle">Signup</h2>
<div className="signupform">
     Name <input
        name="name"
        className="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />

    Email  <input
      className="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

     password <input
      className="password"
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

    Age  <input
      className="age"
        name="age"
        type="number"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />
</div>
      Role<select name="role" className="role" value={formData.role} onChange={handleChange}>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
      </select>

      <button onClick={handleSignup} className="signup">Signup</button>
    </div></div>
  );
}

export default Signup;
