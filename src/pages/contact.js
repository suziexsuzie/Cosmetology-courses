import React from "react";
import ReactDOM from "react-dom";

import {BrowserRouter} from "react-router-dom";

import Header from "../components/Header";
import Map from "../components/Map";

// const location = {
//     address: 'Centrum Szkoleniowe ECLEST',
//     lat: 52.17481568780512,
//     lng: 21.02113879183354,
// };

function Contact() {
    return (
        <>
            <Header/>
            {/*<Map location={location} zoomLevel={17} />*/}
        </>
    )
}

export default Contact;