import React, { useEffect,useState } from 'react';
import { Row,Col } from 'react-bootstrap';
import axios from 'axios'

import alan_gambar from './alan.jpg';
import lagu_alan from './onmyway.mp3';
import './lagu.css';

const SongComponent = () => {
  const url = process.env.REACT_APP_API_URL;
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const [topic,setTopic] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  useEffect( () => {
      setIsLoading(true)
      axios(`${url}/homepage/topics`)
      .then( response => {
        //console.log(response)
        setTopic(response.data.topic)
      })
      .catch( error => {
        console.warn(error)
      })
      .finally( () =>{ 
        setIsLoading(false)
      })
    },[])

 
  return (
    <div className="container-fluid p-5">

    <div className="row">
      <h2><strong>{topic?.title}</strong></h2>
      <span className='text-muted'>
        {topic?.description}
      </span>
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

export default SongComponent;
