export default function validateInfo(values) {
  let errors = {};

  //First Name
  if (!values.firstName.trim()) {
    errors.firstName = "First Name required";
  }

  //LastName
  if (!values.lastName.trim()) {
    errors.lastName = "Last Name required";
  }

  //Email
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  //Password
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }
  //Confirm Password
  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }

  return errors;
}
