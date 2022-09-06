import { useState, useEffect } from "react";
import { useDispatchApi } from "../redux/reduxHooks";
import "../styles/style.css";
import { update } from "../redux/userSlice";
import { Button } from "react-bootstrap";
//
const Login = () => {
  const intialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatchApi();

  const submit = () => {
    const token = [formValues.email, Date.now()];
    console.log(token);
    localStorage.setItem("userX", JSON.stringify(token));
    dispatch(update(formValues));
  };

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  //form validation handler
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Unesi email";
    } else if (!regex.test(values.email)) {
      errors.email = "Neispravan format email adrese";
    }

    if (!values.password) {
      errors.password = "Unesi lozinku!";
    } else if (values.password.length < 6) {
      errors.password = "Lozinka mora imati min. 6 znakova";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);
  //
  return (
    <div className="login-container">
      {Object.keys(formErrors).length === 0 && isSubmitting && (
        <span className="success-msg">Form submitted successfully</span>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
            className={formErrors.email && "input-error"}
          />
          {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
        </div>

        <div className="form-row">
          <label htmlFor="password">Lozinka</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            onChange={handleChange}
            className={formErrors.password && "input-error"}
          />
          {formErrors.password && (
            <span className="error">{formErrors.password}</span>
          )}
        </div>

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
