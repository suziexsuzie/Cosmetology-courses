// import React from "react"
// import { Link, graphql } from "gatsby"
// import {useStaticQuery} from "gatsby";

// export default function CreatePage(props) {
//     return (
//         <ul>
//             {props.data.allDatoCmsAboutCourse.nodes.map(product => (
//                 <li key={product.name}>
//                     <Link to={product.productPath}>{product.name}</Link>
//
//                 </li>
//             ))}
//         </ul>
//     )
// }
// export const query = graphql`
//   query {
//     allDatoCmsAboutcourse {
//     nodes {
//       title
//       productPath: gatsbyPath(filePath: "/szkolenia/{Product.title}")
//     }
//   }}
// `
//


//
//
// const pageQuery = graphql`
//     {
//         allDatoCmsAboutcourse {
//             edges {
//                 node {
//                     cost
//                     id
//                     practice
//                     slug
//                     terms
//                     title
//                     program
//                 }
//             }
//         }
//     }
// `
//
// const MakeNew = () => {
// const {allDatoCmsAboutcourse: {nodes}} = useStaticQuery(pageQuery)
//     return (
//         <div>
//             {nodes.map(({slug, ...product}) => (
//                     <Link key={product.slug} to={`/szkolenia/${slug}`}>
//                         {product.title}
//                     </Link>
//                 )
//             )}
//         </div>
//     );
//
// }
//
// export default MakeNew;
