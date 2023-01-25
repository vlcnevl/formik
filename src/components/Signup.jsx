import { useFormik } from "formik";
import React from "react";
import validationSchema from "./validations";

const Signup = () => {
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema,
    });
  // console.log(errors);
  return (
    <div>
      <h1>Giriş Yap</h1>
      <form>
        <input
          id="email"
          name="email"
          placeholder="name"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur} // inputtan çıktığında
        />
        {errors.email && touched.email && (
          <div className="error">{errors.email}</div>
        )}

        <br />
        <br />

        <input
          id="password"
          name="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <div className="error">{errors.password}</div>
        )}
        <br />
        <br />

        <input
          id="confirmPassword"
          name="confirmPassword"
          placeholder="confirmPassword"
          value={values.rePassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <div className="error">{errors.confirmPassword}</div>
        )}
        <br />
        <br />

        <button type="submit" onClick={handleSubmit}>
          Kaydol
        </button>
        <br />
        <br />
        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  );
};

export default Signup;
