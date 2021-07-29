import React, { useRef, useEffect, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"


const MAPBOX_TOKEN = "pk.eyJ1Ijoic3V6aWV4c3V6aWUiLCJhIjoiY2txdXdrbHJwMDhwZjJ2bzF1YTgwa3VnMCJ9.AN8-jxtB1K1n4DNHySd4_Q";

// const marker = [
//     {
//         name: "Centrum Szkoleniowe EvoMy",
//         longitude: 52.1749579,
//         latitude: 21.0148743,
//     }];

const mapContainerStyle = {
    width: "50%",
    height: "80vh",
}
const Map = () => {
    const mapContainerRef = useRef(null)

    const [map, setMap] = useState(null)

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            accessToken: MAPBOX_TOKEN,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [21.0148743,  52.1749579],
            zoom: 13,
        })
        map.addControl(new mapboxgl.NavigationControl(), "top-right")

        setMap(map)

        return () => map.remove()
    }, [])

    return <div ref={mapContainerRef} style={mapContainerStyle} />
};


export default Map;
