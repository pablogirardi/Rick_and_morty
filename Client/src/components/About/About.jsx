import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import style from "./About.module.css";

function About() {
  return (
    <div className={style.about}>
      <h1>Bienvenidos a mi app de rick y morty</h1>
      <p></p>
    </div>
  );
}

export default About;
