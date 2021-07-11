import React from "react";
import ReactDOM from "react-dom";

import {BrowserRouter} from "react-router-dom";

import Header from "../components/Header";
import Map from "../components/Map";
import ContactForm from "../components/ContactForm";

// const location = {
//     address: 'Centrum Szkoleniowe ECLEST',
//     lat: 52.17481568780512,
//     lng: 21.02113879183354,
// };

function Contact() {
    return (
        <section id="kontakt">
            <Header/>
            {/*<Map location={location} zoomLevel={17} />*/}
            <div className="container">
                <div class="info">
                    <ContactForm />
                </div>

                <Map/>
            </div>
        </section>
    )
}

export default Contact;