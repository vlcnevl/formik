import { Field, Form, Formik } from "formik";
import React from "react";

const FormExample = () => {
  return (
    <div>
      <h1>Giriş Yap</h1>
      <Formik
        initialValues={{ name: "", surname: "", email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Field id="name" name="name" placeholder="name" /> <br />
          <Field id="surname" name="surname" placeholder="surname" /> <br />
          <Field id="email" name="email" placeholder="email" /> <br />
          <Field id="password" type="password" name="password" placeholder="password" /> <br />
          <button type="submit">Kaydol</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormExample;
