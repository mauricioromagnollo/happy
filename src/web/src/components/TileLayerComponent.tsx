import React from 'react';
import { TileLayer } from 'react-leaflet';

/**
 * O objetivo desse componente separado, é poder mudar o layout do Map
 * em um único lugar, alterando todos os lugares que possuem mapa na aplicação.
 * 
 * Facilitando a alteração do Tile utilizado, sendo possível utilizar:
 *  - Mapbox
 *  - Open Street Maps
 *  - ...
 */

export const TileLayerComponent = () => {
  // Open Street Maps:
  const tileLayerUrl = 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png';  
  
  // Mapbox:
  // const tileLayerUrl = `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`;  

  return (
    <TileLayer url={tileLayerUrl}/>
  );
}
