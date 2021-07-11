import React from "react";
import {useStaticQuery, graphql} from "gatsby";

const CourseInfo = () => {
        const {
            allDatoCmsAboutcourse: {
                nodes: data
            }
        } = useStaticQuery(graphql`
    {
      allDatoCmsAboutcourse {
        nodes {
          title
          time
          id
          cost
          description
        }
      }
    }
  `)

        console.log(data)
        return (<div className="course-info">
            {data.map(el => (
                <>
                    <h2 className="title" key={el.id}>{el.title}</h2>
                    <p key={el.id}>{el.description}</p></>

            ))}
        </div>);

    }
;


export default CourseInfo;
