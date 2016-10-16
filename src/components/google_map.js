// https://github.com/tomchentw/react-google-maps
// https://github.com/tomchentw/react-google-maps/tree/v5.1.0#documentation
// https://github.com/tomchentw/react-google-maps/tree/v4.7.1

import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

/*
GOOGLE MAPS: LNG
OPENWEATHER API: LON
*/
export default (props) => {
  return (
    <GoogleMapLoader
      containerElement={ <div style={{height: '100%'}} /> }
      googleMapElement={
        <GoogleMap
          defaultZoom={12}
          defaultCenter={{lat: props.lat, lng: props.lon}}
        />
      }
    />
  );

}
