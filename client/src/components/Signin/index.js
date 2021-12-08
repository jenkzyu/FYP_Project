import React, { useState } from "react";
import Axios from "axios";

import {
  Container,
  FormWrap,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
} from "./SigninElements";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email,
      password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].firstName);
      }
    });
  };

  return (
    <>
      <Container>
        <FormWrap>
          {/* <Icon to="/">Formula 1</Icon> */}
          <FormContent>
            <Form action="#">
              <FormH1>Sign in</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <FormButton onClick={login}>Submit</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
        <>
          <h1>{loginStatus}</h1>
        </>
      </Container>
    </>
  );
};

export default SignIn;
