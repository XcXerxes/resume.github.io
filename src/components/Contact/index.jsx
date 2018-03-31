import React from 'react'
import './index.scss'
import SubTitle from '../SubTitle'

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 14.5469601, lng: 121.0454635 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 14.5469601, lng: 121.0454635 }} />}
  </GoogleMap>
))

export default class Contact extends React.PureComponent {
  constructor (args) {
    super(args)
  }
  componentDidMount () {
    // const script = document.createElement('script')
    // script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCtZKs3m2AaJeIaNHSLDG5mg1ZhKv7Lm30&callback=${this.initMap}`
    // document.body.appendChild(script)
  }
  render () {
    return (
      <section className="resume-container">
        <SubTitle title="联系我" />
        <div className="resume-contact">
          <div ref="map"></div>
          <MyMapComponent
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </section>
    )
  }
}