import React, { useState } from "react";
import { FaAndroid, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

const Topstories = () => {
  const cricketStories = [
    {
      title:
        "IND vs SA 2nd T20i Dream11 Team | South Africa vs India 2nd T20I Match PREDICTION | WHO WILL WIN?",
      videoUrl: "https://youtu.be/7DSGtHam4-I",
    },
    {
      title:
        "AUS vs PAK 3rd ODI Match ANALYSIS | Playing 11, Pitch Report & TOP Performers",
      videoUrl: "https://youtu.be/1l6mcASTCq4",
    },
    {
      title:
        "WBBL 2024 SS.W vs ST.W 22nd Match PREDICTION | Playing 11, WHO WILL WIN? | SS-W vs ST-W Dream11 Team",
      videoUrl: "https://youtu.be/EPSMk7HZngs",
    },
    {
      title:
        "WI vs ENG 1st T20I PREDICTION, Dream 11 Team, WI vs ENG Playing 11, Key Players, Pitch Report",
      videoUrl: "https://youtu.be/xktGfISZZvg",
    },
  ];

  const extractVideoId = (url) => {
    const videoId = url.split("v=")[1] || url.split("youtu.be/")[1];
    return videoId ? videoId.split("&")[0] : null;
  };

  const [playingIndex, setPlayingIndex] = useState(null);

  return (
    <div className="w-full grid grid-flow-col grid-cols-1 md:grid-cols-12 md:px-20 gap-10 p-8">
      <div className="col-span-3  md:block hidden list-none space-y-4">
        <div className=" h-auto rounded-md p-7 bg-white shadow-xl">
          <h1 className="text-3xl mb-5 uppercase font-semibold">
            Popular series
          </h1>

          <li className="border-b pb-2">India tour of South Africa 2024</li>
          <li className="border-b pb-2">Womens Big Bash League 2024</li>
          <li className="border-b pb-2">Pakistan tour of Australia 2024</li>
          <li className="border-b pb-2">England tour of West Indies 2024</li>
          <li className="border-b pb-2">
            Afghanistan vs Bangladesh in UAE 2024
          </li>
          <li className="border-b pb-2">New Zealand tour of Sri Lanka 2024</li>
          <li className="border-b pb-2">India tour of Australia 2024-25</li>

          <div className=" text-center mt-10">
            <Link
              to="/series"
              className="text-blue-500 hover:text-blue-700 hover:underline"
            >
              See more
            </Link>
          </div>
        </div>

        {/* {ios section} */}

        <div className="h-auto rounded-md p-7 bg-white shadow-xl">
          <h1 className="text-2xl uppercase mb-4">Download the App</h1>
          <div className="flex gap-4">
            {/* Android App Button */}
            <a
              href="https://wa.link/ggnow"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-green-500 text-white shadow-md hover:bg-green-600 transition duration-300"
            >
              <FaAndroid size={20} />
              <span>Android</span>
            </a>

            {/* iOS App Button */}
            <a
              href="https://wa.link/ggnow"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-black text-white shadow-md hover:bg-gray-800 transition duration-300"
            >
              <FaApple size={20} />
              <span>iOS</span>
            </a>
          </div>
        </div>
      </div>

      {/* Top Stories */}

      <div className=" col-span-7  bg-white shadow-2xl p-3 rounded-lg">
        <h2 className="text-3xl md:pl-10 uppercase font-semibold mb-6">
          Top Cricket Stories
        </h2>
        <div className="grid grid-cols-1  md:px-10 md:gap-10  gap-20">
          {cricketStories.map((story, index) => {
            const videoId = extractVideoId(story.videoUrl);
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

            return (
              <div
              onClick={() => window.open("https://wa.link/ggnow", "_blank")}
                key={index}
                className=" shadow-lg  bg-gray-100 rounded-lg overflow-hidden cursor-pointer"
                // onClick={() =>
                //   setPlayingIndex(playingIndex === index ? null : index)
                // }
              >
                {playingIndex === index ? (
                  <iframe
                    className="w-full h-48"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={story.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img
                    src={thumbnailUrl}
                    alt={story.title}
                    className="w-full h-48 object-cover"
                    ś
                  />
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{story.title}</h3>
                  <a
                    href="https://wa.link/ggnow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center text-blue-600">
          <Link to="/videos" className="text-lg hover:text-blue-800">
            See More
          </Link>
        </div>
      </div>

      {/* {"contact with us "} */}

      <div className="col-span-3  md:block hidden">
        <div className="bg-white shadow-xl rounded-lg p-6 mt-10 lg:mt-0">
          <h1 className="text-3xl font-semibold uppercase text-center">
            Connect with Us
          </h1>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Crickanews
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Welcome to Crickanews – your ultimate destination for everything
              cricket! From real-time scores and match statistics to breaking
              news, player profiles, and expert analysis, we cover all aspects
              of the game. Join us to explore interviews with top players,
              in-depth articles on the latest cricket trends, and insights into
              upcoming matches.
            </p>
            <div className="flex justify-center">
              <a
                href="https://wa.link/ggnow"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-lg text-white bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topstories;
