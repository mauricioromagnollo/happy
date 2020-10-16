import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import mapMarker from '../assets/images/map-marker.svg';
import { TileLayerComponent } from '../components/TileLayerComponent';

import '../assets/styles/pages/orphanages-map.css';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarker,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
});

export const OrphanagesMap = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt="Happy Marker Logo"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Minas Gerais</strong>
          <span>Ponte Nova</span>
        </footer>
      </aside>

      <Map
        center={[-23.4998629, -46.8543619]}
        zoom={15}
        style={{
          width: '100%',
          height: '100%'
        }}
      >
        <TileLayerComponent />
        
        <Marker 
          icon={mapIcon}
          position={[-23.4998629, -46.8543619]}
        >
          <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>
            Lar das Meninas
            <Link to='/orphanages/1'>
              <FiArrowRight size={20} color="#FFF"/>
            </Link>
          </Popup>
        </Marker>
      
      </Map> 

      <Link to='/orphanages/create' className='create-orphanage'>
        <FiPlus size={32} color='#FFF' />
      </Link>
    </div>
  );
}
