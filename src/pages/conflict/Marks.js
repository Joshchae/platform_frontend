import { geoNaturalEarth1, geoPath, geoGraticule} from 'd3';

const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();

export const Marks = ({
    worldAtlas: { countries, interiors },
    data,
    colorScale,
    colorValue
}) => {
    console.log('Marks', data)
    return (
    <g className='marks'>
        <path className='sphere' d={path({ type: 'Sphere' })} />
        <path className='graticules' d={path(graticule())} />
        {/* {countries.features.map(feature => (
            <path d={path(feature)} /> 
            ))}
        <path className='interiors' d={path(interiors)} /> */}
        
    </g>
)};