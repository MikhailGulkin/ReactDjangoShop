import React from "react";
import { Link } from "react-router-dom";
import { paths } from "@/routing/config";

export const Signup = () => {
  return (
    <div className="container mt-4">
      <h1>Sign Up</h1>
      <p>Create into your account now.</p>

      <p className="mt-3">
        Have an account? <Link to={paths.login}>Sign In</Link>
      </p>
    </div>
  );
};
