const getDeaths = (obj) => {
    return (
      obj.deaths_a + obj.deaths_b + obj.deaths_civilians + obj.deaths_unknown
    );
  };
  
  const group = (objectArray, property) => {
    return objectArray.reduce((acc, obj) => {
      const key = obj[property];
      if (!acc[key]) {
        return {
          ...acc,
          [key]: {
            conflicts: 1,
            deaths: getDeaths(obj),
            countryName: obj.country
          }
        };
      }
  
      return {
        ...acc,
        [key]: {
          ...acc[key],
          conflicts: acc[key].conflicts + 1
        }
      };
    }, {});
  };
  
  const fetchConflicts = async () => {
    const res = await fetch(
      "https://ucdpapi.pcr.uu.se/api/gedevents/20.1?pagesize=1000"
    );
    const json = await res.json();
    const data = json.Result.map((item) => ({
      ...item,
      countryCode: item.relid.substring(0, 2)
    }));
    console.log(group(data, "countryCode"));
  };
  
  fetchConflicts();




// import React, { useState, useEffect } from 'react';
// import { json } from 'd3';
// import { topojson } from 'topojson-client';

// const jsonUrl = 'https://ucdpapi.pcr.uu.se/api/gedevents/20.1?pagesize=100&page=1'

// const row = d => {
//     // d.result = + d.best;
//     return d;
// }
// export const useData = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         json(jsonUrl, row).then(res=>setData(res.Result)); //replace res.Result with coords \{ ...res.Result, coords: <value> }
//     }, []);
//     console.log(data)
//     return {data, setData}
// };







// export const useUCDP = () => {
//     const [data, useData] = useState(null);

//     // const jsonUrl = () => {

// const [country, setCountry] = useState([]);
// const [isLoading, setIsLoading] = useState(true);

// useEffect(() => {
//    fetch('https://ucdpapi.pcr.uu.se/api/gedevents/20.1?pagesize=1000')
// 	.then((response) => response.json())
// 	.then((json) => {
// 	setIsLoading(false);
// 	setCountry(json);
// 	})
// 	.catch(() => console.log("Request failed"));
// }, []);
// console.log(country[0]);
// console.log(country[6]);
// return (
// <div className="App">
// 	{isLoading
// 	? "loading..."
// 	: country.map(({ name, capital }, index) => (
// 		<div className="Country" key={index}>
// 		<div className="CountryName">{name}</div>
// 		<div className="Capital">{capital}</div>
// 		</div>
		
// 	))}
// </div>
// );
// }
