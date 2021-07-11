import React, { useRef, useEffect, useState } from "react"
import mapboxgl from "mapbox-gl"
import bbox from "@turf/bbox"
import { multiPoint } from "@turf/helpers"
import Marker from "./Marker";
import "mapbox-gl/dist/mapbox-gl.css"


const MAPBOX_TOKEN = "pk.eyJ1Ijoic3V6aWV4c3V6aWUiLCJhIjoiY2txdXdrbHJwMDhwZjJ2bzF1YTgwa3VnMCJ9.AN8-jxtB1K1n4DNHySd4_Q";

const marker = [
    {
        name: "Centrum szkoleniowe ECLEST",
        longitude: 52.17481568780512,
        latitude: 21.02113879183354,
    }];

const mapContainerStyle = {
    width: "50%",
    height: "400px",
}
const Map = () => {
    const mapContainerRef = useRef(null)

    const [map, setMap] = useState(null)

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            accessToken: MAPBOX_TOKEN,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [21.02113879183354, 52.174921964860296],
            zoom: 13,
        })
        map.addControl(new mapboxgl.NavigationControl(), "top-right")

        setMap(map)

        return () => map.remove()
    }, [])

    return <div ref={mapContainerRef} style={mapContainerStyle} />
};


export default Map;
