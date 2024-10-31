import { Outlet } from 'react-router-dom';

import { useEffect } from 'react';


const HomeLayout = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#eeeeee';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  useEffect(() => {
    const link1 = document.createElement('link');
    link1.rel = 'preconnect';
    link1.href = 'https://fonts.googleapis.com';

    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = 'true';
    
    const link3 = document.createElement('link');
    link3.href = 'https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap';
    link3.rel = 'stylesheet';

    document.head.appendChild(link1);
    document.head.appendChild(link2);
    document.head.appendChild(link3);

    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
      document.head.removeChild(link3);
    };
  }, []);

  return (
    <>
      {/* <div className="container-fluid row overflow-auto colorcontainerkelabu"> */}
      {/* <div className="col d-flex flex-column h-sm-100 mb-2 mt-4"> */}
        <Outlet />
      {/* </div> */}
      {/* </div> */}
    </>
  );
  
};

export default HomeLayout;
