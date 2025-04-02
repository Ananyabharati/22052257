import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const credentials = {
    email: "22052275@kiit.ac.in",
    name: "ananya bharati",
    rollNo: "22052275",
    accessCode: "nwpwrZ",
    clientID: "da772630-cba3-42e1-bbcb-2936b0e43ff0",
    clientSecret: "JKUXVyDJBxzVSpQn"
};

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://20.244.56.144/evaluation-service/auth",
        credentials
      );

      console.log("Login Successful:", response.data);
      alert("Login Successful!");

      // Navigate to another page after login (e.g., Top Users)
      navigate("/top-users");
    } catch (err) {
      setError("Login Failed. Please try again.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;
