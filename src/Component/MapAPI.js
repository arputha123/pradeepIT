import { Component } from "react";
import { Map, GoogleApiWrapper,Marker  } from 'google-maps-react';
class MapContainer extends Component {
render() {
    return(
<Map
          google={this.props.google}
          zoom={8}
          style={{width:'100%',height:'60vh'}}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
          <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
    )
}
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD1raAaes_WSGmC6Tn91HdLvRzKky9TEOg'
  })(MapContainer);
