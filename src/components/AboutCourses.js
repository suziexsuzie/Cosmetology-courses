import React from "react";

import {useStaticQuery} from "gatsby";
import {graphql} from "gatsby";

const AboutCourses = () => {
    const {
        allDatoCmsAboutcourse: {
            nodes: data
        }
    } = useStaticQuery(graphql`
    {
       allDatoCmsAboutcourse {
       
          nodes {
            practice
            program
            terms
            time
            title
            cost
            id
            hasztag
          }
      }
    }
  `)

    // const getElements = (textObj) => {
    //     switch (textObj.type) {
    //         case "paragraph":
    //             return <p></p>
    //     }
    // }

    return (
        <section className="about-courses">
            <div className="container">
                {data.map(el => (
                    <div>
                        <h1 className="title" key={el.id} id={el.hasztag}>{el.title}</h1>
                        <h2 className="time" key={el.id}>Godziny szkolenia:</h2>
                        <div className="el">{el.time}</div>
                        <h2 className="price" key={el.id}>Cena:</h2>
                        <div className="el">{el.cost} zł</div>
                        <h2>Forma szkolenia:</h2>
                        <div className="el">ćwiczenia praktyczne poprzedzone wykładem</div>
                        <h2>Miejsce szkolenia</h2>
                        <div className="el">Centrum Szkoleniowe EvoMy ul. Irysowa 7, Warszawa</div>
                        <h2>Warunki uczestnictwa:</h2>
                        <div className="el" key={el.id}>{el.terms}</div>
                        <h2>Program szkolenia:</h2>
                        <div className="el" key={el.id}>{el.practice}</div>
                        <h2>Część praktyczna:</h2>
                        <div className="el" key={el.id}>{el.practice}</div>
                    </div>
                ))}</div>
        </section>)
};


export default AboutCourses;
