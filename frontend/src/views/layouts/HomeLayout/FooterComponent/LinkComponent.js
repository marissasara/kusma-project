import  { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const LinkComponent = ({hashtag}) => {

    const url = process.env.REACT_APP_API_URL;
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const [footers,setFooters] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
  
    useEffect( () => {
      setIsLoading(true)
      axios(`${url}/homepage/footers/${hashtag}`)
      .then( response => {
        //console.log(response)
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
                     <p><a href={`/footers/${footer.id}`} className="text-white">{footer.title}</a></p>
                    </div>   
                )
            }) // map
        } // if
    } // links

    


    return (
        <div>
            <h6 className="text-uppercase fw-bold">{hashtag}</h6>
            <hr id="footercolorhr" />
            {links()}
            {/* <p><a href="http://www.rtm.gov.my/" className="text-white">RTM</a></p>
            <p><a href="https://rtmklik.rtm.gov.my/" className="text-white">RTMKLIK</a></p>
            <p><a href="https://radio.rtm.gov.my/" className="text-white">STESEN RADIO KAMI</a></p>
            <p><a href="https://podcast.rtm.gov.my/" className="text-white">PODCAST RTM</a></p> */}
        </div>
    );
};

export default LinkComponent;