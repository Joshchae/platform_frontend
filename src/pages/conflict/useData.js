import React, { useState, useEffect } from 'react';
import { json } from 'd3';
import { topojson } from 'topojson-client';

const jsonUrl = 'https://ucdpapi.pcr.uu.se/api/gedevents/20.1?pagesize=1&page=295'

const row = d => {
    // d.result = + d.best;
    return d;
}
export const useData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        json(jsonUrl, row).then(res=>setData(res.Result)); //replace res.Result with coords \{ ...res.Result, coords: <value> }
    }, []);
    return {data, setData}
};



// export const useUCDP = () => {
//     const [data, useData] = useState(null);

//     // const jsonUrl = () => {
// const [country, setCountry] = useState([]);
// const [isLoading, setIsLoading] = useState(true);

// useEffect(() => {
//    fetch('https://ucdpapi.pcr.uu.se/api/gedevents/20.1?pagesize=1&page=30')
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
