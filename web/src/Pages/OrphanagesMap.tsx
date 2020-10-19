import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus,FiArrowRight} from 'react-icons/fi';
import {Map,TileLayer, Marker, Popup} from 'react-leaflet';
import  'leaflet/dist/leaflet.css';
import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanagesmap.css';
import MapIcon from '../utils/mapIcons';


function OrphanagesMap(){
  return(
      <div id="page-map">
        <aside>
          <header>
            <img src={mapMarkerImg} alt="Happy"/>
            <h2>Escolha um orfanato no mapa</h2>
            <p>Muitas crianças estão esperando a sua visista :) </p>
          </header>
          <footer>
            <strong>Poá</strong>
            <strong>São Paulo</strong>
          </footer>
        </aside>
        <Map 
          center={[-23.5175936, -46.3437824]}
          zoom={15}
          style={{width:'100%', height:'100%'}}
        >
          <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
          <Marker
          icon={MapIcon}
          position={[-23.5175936, -46.3437824]}
          >
            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
              Jardim das crianças
              <Link to="/orphanages/1">
                  <FiArrowRight size={20} color="#FFF"/>
              </Link>
            </Popup>
          </Marker>
          </Map>

            <Link to="/orphanages/create" className="create-orphanage">
            <FiPlus size={32} color="#FFF"/>
            </Link>

      </div>
  );
}
export default OrphanagesMap;