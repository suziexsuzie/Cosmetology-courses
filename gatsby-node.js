//
// exports.createPages = async ({graphql, actions}) => {
//     const {data: {allDatoCmsAboutcourse: {nodes}}} = await graphql(`
//
//     {
//        allDatoCmsAboutcourse {
//
//           nodes {
//             slug
//             id
//           }
//       }
//     }
//     `);
//
//
//     nodes.forEach(({id, slug}) => createPages({
//         path: `/szkolenia/${slug}`,
//         component: require.resolve(`./src/templates/course-info.js`),
//         context: {
//             id
//         }
//     }))
//
//
//
// };