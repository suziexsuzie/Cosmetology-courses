// import React, { useRef, useEffect } from "react";
// import mapboxgl from "mapbox-gl";
//
// const Marker = ({ map, place }) => {
//     const markerRef = useRef()
//
//     useEffect(() => {
//         const marker = new mapboxgl.Marker(markerRef)
//             .setLngLat([place.longitude, place.latitude])
//             .addTo(map)
//
//         return () => marker.remove()
//     })
//
//     return <div ref={markerRef} />
// };
//
// export default Marker;