import React from "react"
import {graphql, useStaticQuery} from "gatsby";



const CourseInfo = ({data: {allDatoCmsAboutcourse: {nodes},},}) => (
    <>
       <h1>{nodes.title}</h1>
        <div>Cena: {nodes.cost}</div>
        <div>{nodes.practice}</div>
    </>

);

export const pageQuery = graphql`
query CoursePageQuery($id: ID!) {
allDatoCmsAboutcourse(where: {id: $id}) {
    title
    cost 
    practice
}


export default CourseInfo;



