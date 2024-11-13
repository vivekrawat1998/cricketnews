import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Livecard = () => {
  const matches = [
    {
      team1: { name: 'India', flag: 'https://flagcdn.com/in.svg', score: '250/3', overs: '40.3' },
      team2: { name: 'Australia', flag: 'https://flagcdn.com/au.svg', score: '248/9', overs: '50' },
      status: 'India needs 3 runs in 9 balls',
      live: true,
    },
    {
      team1: { name: 'England', flag: 'https://flagcdn.com/gb.svg', score: '320/7', overs: '48.2' },
      team2: { name: 'New Zealand', flag: 'https://flagcdn.com/nz.svg', score: '315/8', overs: '50' },
      status: 'England needs 5 runs in 10 balls',
      live: true,
    },
    {
      team1: { name: 'Pakistan', flag: 'https://flagcdn.com/pk.svg', score: '198/6', overs: '42.0' },
      team2: { name: 'South Africa', flag: 'https://flagcdn.com/za.svg', score: '200/5', overs: '38.5' },
      status: 'South Africa won by 5 wickets',
      live: false,
    },
    {
      team1: { name: 'Sri Lanka', flag: 'https://flagcdn.com/lk.svg', score: '275/8', overs: '50' },
      team2: { name: 'Bangladesh', flag: 'https://flagcdn.com/bd.svg', score: '210/10', overs: '47.4' },
      status: 'Sri Lanka won by 65 runs',
      live: false,
    },
    {
      team1: { name: 'West Indies', flag: 'https://flagcdn.com/jm.svg', score: '290/6', overs: '50' },
      team2: { name: 'Afghanistan', flag: 'https://flagcdn.com/af.svg', score: '280/9', overs: '50' },
      status: 'West Indies won by 10 runs',
      live: false,
    },
    {
      team1: { name: 'India', flag: 'https://flagcdn.com/in.svg', score: '180/3', overs: '30.0' },
      team2: { name: 'South Africa', flag: 'https://flagcdn.com/za.svg', score: '355/7', overs: '50' },
      status: 'India needs 176 runs in 20 overs',
      live: true,
    },
    {
      team1: { name: 'Australia', flag: 'https://flagcdn.com/au.svg', score: '320/5', overs: '50' },
      team2: { name: 'England', flag: 'https://flagcdn.com/gb.svg', score: '285/9', overs: '50' },
      status: 'Australia won by 35 runs',
      live: false,
    },
  ];

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="w-full px-0  mt-24 mx-auto"> 
      {matches.map((match, index) => (
   <div key={index} className="flex-shrink-0  bg-gray-700 text-white rounded-xl  shadow-lg p-4"> 
          <div className="flex justify-between gap-10 items-center mb-4">
            <h2 className="text-2xl font-bold">Live Cricket Score</h2>
            {match.live && (
              <span className="bg-red-600 text-white text-xs font-semibold py-1 px-3 rounded-full animate-pulse">
                Live
              </span>
            )} 
          </div>
          <div className="flex items-center  justify-between mb-4">
            <div className="flex items-center space-x-2">
              <img src={match.team1.flag} alt={`${match.team1.name} Flag`} className="w-10 h-10 rounded-full" />
              <div>
                <h3 className="text-lg font-semibold">{match.team1.name}</h3>
                <p className="text-sm">{match.team1.score} ({match.team1.overs} Ovs)</p>
              </div>
            </div>
            <span className="text-xl font-bold">VS</span>
            <div className="flex items-center space-x-2">
              <img src={match.team2.flag} alt={`${match.team2.name} Flag`} className="w-10 h-10 rounded-full" />
              <div>
                <h3 className="text-lg font-semibold">{match.team2.name}</h3>
                <p className="text-sm">{match.team2.score} ({match.team2.overs} Ovs)</p>
              </div>
            </div>
          </div>
          <div className="text-center text-yellow-300 font-semibold mt-4">
            {match.status}
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Livecard;
