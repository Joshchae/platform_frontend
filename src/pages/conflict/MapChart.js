import React, { useEffect, useState } from "react";
import { scaleLinear } from "d3-scale";
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from "react-simple-maps";

const geoUrl = './world-110m.json'

const group = (objectArray, property) => {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      return {
        ...acc,
        [key]: {
          conflicts: 1,
          fatalities: obj.best,
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

const MapChart = ({ setTooltipContent }) => {
  const [data, setData] = useState({});
  const [maxConflicts, setMaxConflicts] = useState(0);
  
  const colorScale = scaleLinear()
  .domain([0, maxConflicts])
  .range(["#ffedea", "#ff5233"]);
  
  
  const fetchConflicts = async () => {
    const res = await fetch('/ucdp.json');
    const json = await res.json();
    const data = json.Result.map((item) => ({
      ...item,
      countryCode: item.relid.substring(0, 3)
    }));
    
    const groupedData = group(data, "countryCode");
    const maxConflicts = Object.keys(groupedData).reduce((max, country) =>
    max > groupedData[country].conflicts
    ? max
    : groupedData[country].conflicts
    );
    
    setData(groupedData);
    setMaxConflicts(maxConflicts);
  };
  
  useEffect(() => {
    fetchConflicts();
  }, []);
  
  /* -------- beginning of select -------- */
  const [values, setValues] = useState("")
  const handleChange = e => {
    const { name, value } = e.target;
      setValues({ 
          ...values,
          [name]: value
      });
      console.log(values)
  };
  

  return (
    <div>
      <div>
      {/* Select part */}
        <label htmlFor="type">type_of_violence</label>
          <select id="type" name="type" values={values.type} onChange={handleChange} default=''>
              <option value='state-based'>state-based</option>
              <option value='nonstate'>non-state</option>              
              <option value='onesided'>onesided</option>
          </select>
      </div>

      <ComposableMap projectionConfig={{ rotate: [-10, 0, 0], scale: 147 }} data-tip="" width={1000} height={700} >
        <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
        <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryCode = geo.properties.ISO_A3;
              const d = data[countryCode];
              // if(!d){
              //   console.log(geo.properties.ISO_A3)
              }
              return (
                <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={d ? colorScale(d.conflicts) : "#F5F4F6"}
                onMouseEnter={() => {
                  const { NAME } = geo.properties;
                  
                  try {
                    setTooltipContent(`${NAME} — events: ${d.conflicts || 0} & fatalities: ${d.fatalities || 0}`);
                  } catch {
                    setTooltipContent("");
                  }
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                />
                );
              })
            }
        </Geographies>
      </ComposableMap>
      </div>
  );
};

export default MapChart;



// "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
// 'https://unpkg.com/world-atlas@2.0.2/countries-50m.json'


// const ucdpUrl = 'https://ucdpapi.pcr.uu.se/api/gedevents/20.1?pagesize=1000&page=1'
// const filteredUrl = 'https://ucdpapi.pcr.uu.se/api/gedevents/20.1?StartDate=2000-01-01&EndDate=2007-10-12'
// const ucdpFullUrl = `https://ucdpapi.pcr.uu.se/api/gedevents/20.1?key=${process.env.REACT_APP_UPPSALA_TOKEN}`




// "https://ucdpapi.pcr.uu.se/api/gedevents/20.1?StartDate=2000-01-01&EndDate=2007-10-12"
/*
filter UI - dropdown // select - option : StartDate, EndDate, TypeOfViolence 
pass // const firstFiltered = `${filteredUrl}`/{option}={Date}
2nd filter // ...firstFiltered,
&{option}={Date}
             >> `${filteredUrl}`/{option}={Date}&{option}={Date} >> StartDate=2000-01-01&EndDate=2007-10-12

             const [filtered, setFiltered] = useState(''); 
            
*/


//const filteredData = data.filter(d => d.type_of_violence === selectedType)
// const typesOfViolence = types.filter(d => d.type_of_violence === ${selected Type})
// const dateFilter = date.filter(date => date_start >= ${d.date_start} && date_end <= ${d.date_end})