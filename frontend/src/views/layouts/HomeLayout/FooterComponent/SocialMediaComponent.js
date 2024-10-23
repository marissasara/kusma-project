import  { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const SocialMediaIcons = () => {
  const url = process.env.REACT_APP_API_URL;
  const hashtag = 'social-media';
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const [footers,setFooters] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const iconStyle = { color: '#fff', fontSize: '1.5rem', margin: '0 1rem' };

  useEffect( () => {
    setIsLoading(true)
    axios(`${url}/homepage/footers/${hashtag}`)
    .then( response => {
      console.log(response)
      setFooters(response.data.footers)
    })
    .catch( error => {
      console.warn(error)
    })
    .finally( () =>{ 
      setIsLoading(false)
    })
  },[])

  const links = () => {

    if (!footers || footers.length === 0) {
        return <div></div>;
    } 

    if (footers.length > 0) {
        return footers.map((footer, index) => {
  
            return (
                 
                <div key={index}>
                  <a href={`${footer.description}`} target="_blank" rel="noopener noreferrer" style={iconStyle}>
                    <i className={`bi bi-${footer.title}`}></i>
                  </a>
                </div>  
                            )
        }) // map
    } // if
} // links


  return (
    <>
    <div className="d-flex justify-content-center">
      {links()}
    </div>
    </>
  );
}

export default SocialMediaIcons;
