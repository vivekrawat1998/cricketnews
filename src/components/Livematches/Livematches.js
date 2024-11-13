import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Livecard from "./Livecard";

const Livematches = () => {
  const teams = [
    { name: "India", flag: "https://flagcdn.com/in.svg" },
    { name: "Australia", flag: "https://flagcdn.com/au.svg" },
    { name: "England", flag: "https://flagcdn.com/gb.svg" },
    { name: "New Zealand", flag: "https://flagcdn.com/nz.svg" },
    { name: "Pakistan", flag: "https://flagcdn.com/pk.svg" },
    { name: "South Africa", flag: "https://flagcdn.com/za.svg" },
    { name: "Sri Lanka", flag: "https://flagcdn.com/lk.svg" },
    { name: "Bangladesh", flag: "https://flagcdn.com/bd.svg" },
    { name: "West Indies", flag: "https://flagcdn.com/jm.svg" },
    { name: "Afghanistan", flag: "https://flagcdn.com/af.svg" },
  ];

  const settings = {
    loader: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5, 
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, 
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="w-full px-2 md:px-20 z-20 relative  h-auto ">
      <Livecard />
      <div className="mt-10">
        <Slider {...settings} className="border-2 border-gray-300 px-10  pl-20 rounded-xl">
          {teams.map((team, index) => (
            <div key={index} className="grid grid-flow-col grid-cols-2 place-items-center space-x-2">
              <img
                src={team.flag}
                alt={`${team.name} Flag`}
                className="w-10 h-10 text-center rounded-full"
              />
              <span className="font-semibold text-center">{team.name}</span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Livematches;
