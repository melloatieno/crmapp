// import * as x from 'geolib';

// type geolibType = typeof geolib;
// const theGeolib = (x as any).default as geolibType;

// export { theGeolib as geolib };

import * as x from 'geolib';

type GeolibType = typeof x;
const theGeolib = x as GeolibType;

export { theGeolib as geolib };
