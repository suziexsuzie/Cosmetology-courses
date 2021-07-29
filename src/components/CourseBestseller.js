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
                name
        }
    }
    }
    `)
        console.log(data);

        return <>

            {data.map(el => (
                <div key={el.i} className="course-bestseller">
                    <div className="info"><h2 className="title" key={el.i}>{el.name}</h2>
                        <p key={el.i}>{el.description}</p></div>
                    <div className="date" key={el.i}>Najbliższe szkolenie: {el.date}
                        <Button key={el.i} href="/kalendarz" text="Zapisz się!"/>
                    </div>

                </div>

            ))}</>
    }
;


export default CourseBestseller;
