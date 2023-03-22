import { useState } from "react";
import {
  authEmailandPassword,
  createDocumentFromAuth,
} from "../../util/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpFrom = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password do not match.");
      return;
    }

    try {
      const { user } = await authEmailandPassword(email, password);

      await createDocumentFromAuth(user, { displayName });
      console.log(user);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user, email already exist.");
      }
      console.log("your submit failed: ", error);
    }
  };

  return (
    <div>
      <h1>Sign up with email and password.</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          name="displayName"
          value={displayName}
          type="text"
          required
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          name="email"
          type="email"
          value={email}
          required
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          name="password"
          type="password"
          value={password}
          required
          onChange={handleChange}
        />

        <label>Confirm Password</label>
        <input
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          required
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpFrom;
