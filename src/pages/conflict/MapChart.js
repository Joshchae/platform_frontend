import React, { useEffect, useState } from "react";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

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
    const res = await fetch(
      "https://ucdpapi.pcr.uu.se/api/gedevents/20.1?pagesize=1000"
    );
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

  return (
    <ComposableMap
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 147
      }}
      data-tip=""
    >
      <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
      <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const countryCode = geo.properties.ISO_A3;
            const d = data[countryCode];
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={d ? colorScale(d.conflicts) : "#F5F4F6"}
                onMouseEnter={() => {
                  const { NAME } = geo.properties;

                  try {
                    setTooltipContent(`${NAME} — ${d.conflicts || 0}`);
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
  );
};

export default MapChart;
