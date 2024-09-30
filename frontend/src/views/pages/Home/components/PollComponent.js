import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PollItem = ({ rank, title, artist, type, image }) => {
  return (
    <div className="row align-items-center mb-3 border-bottom pb-3">
      <div className="col-2">
        <img
          src={image}
          alt={title}
          className="img-fluid"
        />
      </div>
      <div className="col-8">
        <h5>{title}</h5>
        <p className="mb-1">{artist}</p>
        <p className="text-muted">{type}</p>
      </div>
      <div className="col-2 text-center">
        <h2 className="text-success">{rank}</h2>
        <button className="btn btn-outline-secondary btn-sm" disabled>Vote</button>
      </div>
    </div>
  );
};

const PollList = () => {
  const pollData = [
    {
      rank: 1,
      title: 'Berharap Kau Kembali',
      artist: 'Fabio Asher',
      type: 'VIDEO',
      image: 'https://via.placeholder.com/100x100', // Placeholder image
    },
    {
      rank: 2,
      title: 'Janji',
      artist: 'Aziz Harun',
      type: 'VIDEO',
      image: 'https://via.placeholder.com/100x100', // Placeholder image
    },
    // Add more poll items here...
  ];

  return (
    <div className="container mt-5">
      {pollData.map((item, index) => (
        <PollItem
          key={index}
          rank={item.rank}
          title={item.title}
          artist={item.artist}
          type={item.type}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default PollList;
