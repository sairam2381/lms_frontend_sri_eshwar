import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
const UserLoginPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userDetails = await axios.post(
        "http://localhost:21000/api/v1/User/userLogin",
        {
          email: e.target.email.value,
          password: e.target.password.value,
        }
      );
      if (userDetails.data.success === true) {
        toast.success("User logged in successfully");
        localStorage.setItem(
          "userDetails",
          JSON.stringify(userDetails.data.userDetails)
        );
        localStorage.setItem("token", userDetails.data.token);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>User login page</h2>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="password">Password</label>
      <input type="text" id="password" name="password" />
      <button type="submit">Submit</button>
    </form>
  );
};
export default UserLoginPage;
