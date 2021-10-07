import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import Button from './ui/Button'
import LocationCard from './ui/card';
import './findme.css'
import LocationPointer from './ui/location';



function Findme() {
    const [position, setPosition] = useState([]);

    console.log(position.lat)

    // useEffect(() => {
    //     getCurrentLocation()
    // }, [position])


    const defaultProps = {
        center: [position.lat || 10.99835602, position.lng || 77.01502627],
        zoom: 11
      };

      const getCurrentLocation = () =>{
          if (navigator.geolocation) {
             navigator.geolocation.getCurrentPosition((position)=>{
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                  }; 
                  setPosition(pos)
             })
          }
      }


    return (
        <div className="row justify-content-center">
            <div className="map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    center={defaultProps.center}
                    zoom={defaultProps.zoom}
                >
                    <LocationPointer lat={position.lat} lng={position.lng} text={'A'} />

                    <Button onClick={getCurrentLocation}  text={'Find me'} />

                    {position.lat && position.lng && <LocationCard lat={position.lat} lng={position.lng} /> }
                </GoogleMapReact>
            </div>
        </div>
    )
}

export default Findme
