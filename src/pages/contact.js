import React from "react";


import Map from "../components/Map";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Template from "../components/Template";

// const location = {
//     address: 'Centrum Szkoleniowe ECLEST',
//     lat: 52.17481568780512,
//     lng: 21.02113879183354,
// };

function Contact() {
    return (
        <Template>
            <section id="kontakt">
                <div className="container">
                    <div className="info">
                        <div className="address">ul. Irysowa 7, 00-234 Warszawa
                        </div>
                        <div className="phone">123 456 789</div>
                        <div className="contact">Zapraszamy do kontaktu poprzez formularz:</div>
                        <ContactForm/>
                    </div>
                    <Map/>
                </div>
            </section>
        </Template>
       )
}

export default Contact;