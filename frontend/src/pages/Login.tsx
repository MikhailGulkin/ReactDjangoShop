import React from "react";
import { Link } from "react-router-dom";

import { paths } from "@/routing/config";

export const Login: React.FC = () => {
  return (
    <div className="container mt-4">
      <h1>Sign In</h1>
      <p>Log into your account now.</p>
      <p className="mt-3">
        Don't have an account?{" "}
        <Link to={paths.signup} className="caret-blue-500">
          Register
        </Link>
      </p>
    </div>
  );
};
