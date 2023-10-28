import React from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";

const LocationPin = ({ text }) => (
  <div className="pin">
    <p className="pin-text">{text}</p>
  </div>
);

const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
};

const Map = () => (
  <div className="map">
    <div className="google-map" style={{ width: "100vw", height: "50vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAW3ApmDWXZfP1LF0W6HAb5b5X-jUUNbHs" }}
        defaultCenter={location}
        defaultZoom={17}
      >
        <LocationPin
          lat={18.8714250}
          lng={79.4607640}
          text={"MULKALLA, MDL : HAZIPUR, DIST: MANCHERIAL, T.S, A Musilm Minority Instituion"}
        />
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;
// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAW3ApmDWXZfP1LF0W6HAb5b5X-jUUNbHs",
// })(MapContainer);
