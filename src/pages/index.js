import * as React from "react"

import "../scss/main.scss";
import CourseInfo from "../components/CourseInfo";
import Header from "../components/Header";
import Bestsellers from "../components/Bestsellers";

// markup
const IndexPage = () => {
  return (

    <main>
        <Header />
        <Bestsellers />
      <title>Home Page</title>
    </main>
        )
};

export default IndexPage;
