import React, { useState, useEffect } from "react";
import { Links } from "../components/links";
import { useRouter } from "next/router";

function Login() {
  // these values are hardcoded since our main.go api only accepts this auth combo
  const initialValues = { 
    email: "rickety_cricket@example.com", 
    password: "shhh!", 
  };

  const [inputs, setInputs] = useState(initialValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(initialValues.email == inputs.email){
        useEffect(()=>{
            useRouter().push('/')
        }, [to])
    }
  };

  const handleInputChange = (e) => {
    e.persist();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return <>
    <Links />
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email"
               id="email"
               name="email"
               onChange={handleInputChange}
               value={inputs.email}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password"
               id="password"
               name="password"
               onChange={handleInputChange}
               value={inputs.password}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </>;
}

export default Login;