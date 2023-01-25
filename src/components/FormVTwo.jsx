import { useFormik } from "formik";
import React from "react";

const FormVTwo = () => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      name: "velican",
      surname: "evli",
      email: "vlcn1998@gmail.com",
      password: "",
      gender: "male",
      hobbies: [],
      country: "Turkey",
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h1>Giriş Yap</h1>
      <form>
        <input
          id="name"
          name="name"
          placeholder="name"
          value={values.name}
          onChange={handleChange}
        />
        <br />
        <input
          id="surname"
          name="surname"
          placeholder="surname"
          value={values.surname}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          value={values.email}
          onChange={handleChange}
        />
        <br />
        <input
          id="password"
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <br />
        <span>erkek</span>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
          checked={values.gender === "male"}
        />
        <span>kadın</span>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
          checked={values.gender === "female"}
        />

        <div>
          <input
            type="checkbox"
            name="hobbies"
            value="Cinema"
            onChange={handleChange}
          ></input>
          Cinema
        </div>
        <div>
          <input
            type="checkbox"
            name="hobbies"
            value="Football"
            onChange={handleChange}
          ></input>
          Football
        </div>
        <div>
          <input
            type="checkbox"
            name="hobbies"
            value="Play guitar"
            onChange={handleChange}
          ></input>
          Play guitar
        </div>
        <br />
        <br />
        <select name="country" value={values.country} onChange={handleChange}>
          <option value="Turkey">Turkey</option>
          <option value="England">England</option>
          <option value="Usa">Usa</option>
        </select>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Kaydol
        </button>
        <br />
        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  );
};

export default FormVTwo;
