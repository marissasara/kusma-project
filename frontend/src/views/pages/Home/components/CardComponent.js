import React from 'react';
import { Card, Button } from 'react-bootstrap';
import alan_gambar from './alan.jpg';
import lagu_alan from './onmyway.mp3';
import './lagu.css';

const CardComponent = () => {
 

 

  return (
    <div className="container-fluid p-5 text-center">
    <div className="row">
      <h2><strong>CARTA LAGU</strong></h2>
      <br /><br />

      {/* Kad Lagu 1 */}
      <div className="col-md-6 col-lg-4 col-xl-3 mb-3 mt-5">
        <div className="music-carta-lagu">
          <nav>
            <a id="musikplayerundifont" href="#">
              <div className="circle text-dark">
                <p>Undi</p>
              </div>
            </a>
          </nav>

          <img src={alan_gambar} className="song-img" alt="Alan Walker" />
          <h3><strong>I'm On My Way</strong></h3>
          <p>Alan Walker</p>

          <audio controls>
            <source src={lagu_alan} type="audio/mpeg" />
          </audio>
        </div>
        <br />
      </div>
      {/* Kad Lagu 1 */}
    </div>
  </div>
  );
}

export default CardComponent;
