import { useState } from "react";
import toast from "react-hot-toast";
const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handlinputerrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      //Localstorage
      //Context
      
      toast.success("Account Created Successfully!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading };
};

export default useSignup;

function handlinputerrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !gender) {
    toast.error("All fields are required");
    return false;
  }
  if (confirmPassword !== password) {
    toast.error("Passwords do not match");
    return false;
  }
  if (username.length < 5) {
    toast.error("Username must be at least  5 characters long");
    return false;
  }
  if (password.length < 6) {
    toast.error("password must be at least  6 characters long");
    return false;
  }

  return true;
}
