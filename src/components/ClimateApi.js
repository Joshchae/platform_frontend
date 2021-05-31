import { useState, useEffect } from 'react'
// import axios from 'axios'

//++++++++++++FETCH BACKEND API+++++++++++++++++
function ClimateApi() {
  const [locationData, setLocationData] = useState([]);
  
    useEffect(() => {
        fetch('http://localhost:5000/locations/')
        .then(res => res.json())
        .then((json) => {
          setLocationData(json.data.data);
          console.log(json.data)
        })
        .catch(console.log('request failed, useApi'));
      }, [])

      return {locationData}
}
export default ClimateApi

