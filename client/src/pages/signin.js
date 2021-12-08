import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "../components/Signin";
import NewNavbar from "../components/NewNavbar";
import SignUp from "../components/Signup";
//import FormSuccess from "../components/Signup/FormSuccess";

const SigninPage = () => {
  // (WORK IN PROGRESS) VALIDATION FOR REGISTERING USERS //
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // function submitForm() {
  //   setIsSubmitting(true);
  // }
  return (
    <>
      <Router>
        <NewNavbar />
        <Switch>
          <Route path="/signin" exact>
            <SignIn />
          </Route>
          <Route path="/signup" component={SignUp}>
            {/* WORK IN PROGRESS */}
            {/* {!isSubmitting ? (
              <SignUp submitForm={submitForm} />
            ) : ( */}
            {/* <FormSuccess /> */}
            {/* )} */}
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default SigninPage;
