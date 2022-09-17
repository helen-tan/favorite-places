import React, { useRef, useEffect } from 'react'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import "./Map.css"

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

const Map = (props) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  //const [lng, setLng] = useState(-70.9);
  //const [lat, setLat] = useState(42.35);
  //const [zoom, setZoom] = useState(9);

  const { lat, lng, zoom } = props;

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  }, [lat, lng, zoom]);

  return (
    <div
      ref={mapContainer}
      className={`map ${props.className}`}
      style={props.style}>
    </div>
  )
}

export default Map
