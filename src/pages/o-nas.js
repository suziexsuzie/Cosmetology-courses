import React from "react";
import Header from "../components/Header";
import {graphql, useStaticQuery} from "gatsby";
import Template from "../components/Template";
const ONas = () => {
    const {
        allDatoCmsAboutbrand: {
            nodes: data
        }
    } = useStaticQuery(graphql`
    {
      allDatoCmsAboutbrand {
        
          nodes {
            description
            id
            name
            specialization
          }
        
      }
    }
`)
    return <Template>

        <section className="o-nas">
            <div className="container">
                <h1>O firmie</h1>
                <div className="brand">
                    <div className="pic"></div>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto asperiores fugiat inventore laboriosam mollitia porro voluptatem! Accusantium aspernatur corporis eligendi exercitationem, minima perspiciatis quam, quod quos repudiandae sint sit tempora unde voluptate. Alias aliquam atque, delectus ea eum exercitationem fugiat illo laudantium nisi nobis odio officiis quo quod quos reiciendis reprehenderit, velit vero! Aliquam amet cum deserunt ea eum harum ipsam iure minus natus quidem, quisquam sit voluptates. Aliquid aperiam architecto cum cumque deleniti dignissimos distinctio et, eum id, ipsa itaque labore maxime odio omnis porro, quam quasi qui quis recusandae repellat sit vel veniam veritatis vero voluptatibus. A ab accusantium aspernatur beatae cumque dicta dignissimos enim et eum hic laborum laudantium magnam, maxime mollitia necessitatibus reprehenderit sit velit veniam, voluptatem voluptatum! Accusamus ad aperiam autem, consequatur dolor dolores doloribus ea eos error et excepturi exercitationem impedit iste libero maiores nostrum nulla, officiis perspiciatis porro praesentium sequi unde, vitae?</p>
                </div>
                <p></p>
                <h1>Nasi trenerzy:</h1>
                {data.map(el => (
                    <div className="person">
                        <div className="img"></div>
                        <h2 className="name" key={el.id}>{el.name}</h2>
                        <h3 className="specialization" key={el.id}>{el.specialization}</h3>
                        <div className="info" key={el.id}>{el.description}</div>
                    </div>
                ))}
            </div>
        </section>
    </Template>
}

export default ONas;
