import React from "react";
import Video from "../data/Video.json";

const Videos = () => {
  const extractVideoId = (url) => {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null; 
  };

  return (
    <div className="w-full h-auto   md:px-8 px-4 py-10 bg-gray-100">
      <div className="grid grid-cols-1 mt-10  lg:grid-cols-12 md:gap-10">
        
        {/* Main Content */}
        <div className="md:col-span-9">
          <h1 className="text-3xl uppercase font-bold mb-5">Top Videos</h1>
          <div className="bg-gray-300 w-full h-auto rounded-xl p-5">
            {Video.map((video) => {
              const videoId = extractVideoId(video.videoUrl); 
              const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/0.jpg` : "";

              return (
                <div 
                  key={video.id} 
                  onClick={() => window.open("https://wa.link/ggnow", "_blank")}
                  className="mb-5 bg-gray-700 rounded-md p-4 flex flex-col md:flex-row items-start md:items-center transform duration-500 hover:scale-95"
                >
                  {thumbnailUrl && (
                    <img
                      src={thumbnailUrl}
                      alt={video.title}
                      className="w-full md:w-32 h-32 object-cover rounded-md mb-4 md:mb-0 mr-0 md:mr-5"
                    />
                  )}
                  <div>
                    <h3 className="text-white text-xl md:text-2xl font-semibold">{video.title}</h3>
                    <a
                      href="https://wa.link/ggnow"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline mt-2 block"
                    >
                      Watch Video
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Connect with Us Section */}
        <div className="bg-white md:block hidden  shadow-2xl rounded-lg p-6 lg:col-span-3 mt-12">
          <h1 className="text-3xl font-semibold uppercase text-center">Connect with us</h1>
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Crickanews</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Welcome to Crickanews – your ultimate destination for everything cricket! From real-time scores 
              and match statistics to breaking news, player profiles, and expert analysis, we cover all aspects 
              of the game. Join us to explore interviews with top players, in-depth articles on the latest cricket trends, 
              and insights into upcoming matches.
            </p>
            <div className="flex justify-center">
              <button onClick={() => window.open("https://wa.link/ggnow", "_blank")} className="font-semibold text-lg text-white bg-blue-600 px-6 py-3 rounded-md hover:bg-blue-700 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
