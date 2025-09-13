"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Protected = ({ children }) => {
  const [user, setUser] = useState(false);
  useEffect(() => {
    async function loadUser() {
      const me = await axios.get(`http://localhost:8080/api/auth/me`);
      console.log("me", me);
    }
    loadUser();
  }, []);
  return <>{children}</>;
};

export default Protected;
