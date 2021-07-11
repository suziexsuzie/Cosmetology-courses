import React from "react";
import {useStaticQuery, graphql} from "gatsby";

import Button from "./Button";

const CourseBestseller = () => {
    const {
        allDatoCmsBestseller: {
            nodes: data
        }
    } = useStaticQuery(graphql`
    {
        allDatoCmsBestseller {
        nodes {
                id
                date
                description
                hasztag
                name
        }
    }
    }
    `)
console.log(data);

    return (<div className="course-bestseller">

        {data.map(el => (
            <>
                <h2 className="title" key={el.i}>{el.name}</h2>
                <p key={el.i}>{el.description}</p>
                <div className="date" key={el.i}>Najbliższe szkolenie: {el.date}</div>
                <Button key={el.i} href={el.hasztag} text="Zapisz się!"/>
            </>

        ))}


    </div>);
};


export default CourseBestseller;
