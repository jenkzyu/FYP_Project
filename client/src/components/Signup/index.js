import React, { useState, useRef } from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
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
  Error,
} from "./SignupElements";

// // TEST REGISTRATION (WORK IN PROGRESS..)
// const SignUp = (submitForm) => {
//   const { handleChange, values, handleSubmit, errors } = useForm(
//     submitForm,
//     validate
//   );

//   return (
//     <>
//       <Container>
//         <FormWrap>
//           <FormContent>
//             <Form action="#" onSubmit={handleSubmit}>
//               <FormH1>Register</FormH1>
//               <FormLabel htmlFor="for">First Name</FormLabel>
//               <FormInput
//                 type="text"
//                 name="firstName"
//                 placeholder="Enter First Name"
//                 value={values.firstName}
//                 onChange={handleChange}
//               />
//               {errors.firstName && <Error>{errors.firstName}</Error>}
//               <FormLabel htmlFor="for">Last Name</FormLabel>
//               <FormInput
//                 type="text"
//                 name="lastName"
//                 placeholder="Enter Last Name"
//                 value={values.lastName}
//                 onChange={handleChange}
//               />
//               {errors.lastName && <Error>{errors.lastName}</Error>}
//               <FormLabel htmlFor="for">Email</FormLabel>
//               <FormInput
//                 type="email"
//                 name="email"
//                 placeholder="Enter Email Address"
//                 value={values.email}
//                 onChange={handleChange}
//               />
//               {errors.email && <Error>{errors.email}</Error>}
//               <FormLabel htmlFor="for">Password</FormLabel>
//               <FormInput
//                 type="password"
//                 name="password"
//                 placeholder="Enter Password"
//                 value={values.password}
//                 onChange={handleChange}
//               />
//               {errors.password && <Error>{errors.password}</Error>}
//               <FormLabel htmlFor="for">Confirm Password</FormLabel>
//               <FormInput
//                 type="password"
//                 name="password2"
//                 placeholder="Confirm Password"
//                 value={values.password2}
//                 onChange={handleChange}
//               />
//               {errors.password2 && <Error>{errors.password2}</Error>}
//               <FormButton type="submit">Submit</FormButton>
//             </Form>
//           </FormContent>
//         </FormWrap>
//       </Container>
//     </>
//   );
// };

// SLIGHTLY WORKING VERSION OF REGISTER FORM
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitRegistration = () => {
    Axios.post("http://localhost:3001/register", {
      firstName,
      lastName,
      email,
      password,
    }).then((response) => {
      console.log(response);
    });
  };

  // const { register, errors, watch } = useForm({});
  // const password = useRef({});
  // password.current = watch("password", "");

  return (
    <>
      <Container>
        <FormWrap>
          {/* <Icon to="/">Formula 1</Icon> */}
          <FormContent>
            <Form action="#">
              <FormH1>Register</FormH1>
              <FormLabel htmlFor="for">First Name</FormLabel>
              <FormInput
                type="text"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                required
              />
              <FormLabel htmlFor="for">Last Name</FormLabel>
              <FormInput
                type="text"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                required
              />
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
                name="password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <FormLabel htmlFor="for">Confirm Password</FormLabel>
              <FormInput type="password" name="confirm_password" required />
              <FormButton onClick={submitRegistration}>Submit</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
