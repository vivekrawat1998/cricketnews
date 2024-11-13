import React from "react";

const News = () => {
  const newsData = [
    {
      id: 1,
      news: "Shami ready to return to competitive cricket",
      des: "Having been on the sidelines for last one year, Indian fast bowler Mohammed Shami...",
    },
    {
      id: 2,
      news: "Hasaranga out of New Zealand ODIs",
      des: "In a massive setback for Sri Lanka ahead of the ODI series against New Zealand...",
    },
    {
      id: 3,
      news: "Tim Paine backs Dhruv Jurel for Border-Gavaskar Trophy",
      des: "India's promising young gun, Dhruv Jurel, has caught the eye of former Australia...",
    },
    {
      id: 4,
      news: "SA vs IND 3rd T20I: All you need to know, probable XI, head to head",
      des: "India and South Africa are set to face off in a crucial third match...",
    },
    {
      id: 5,
      news: "Mike Hussey on Rohit, Kohli’s form amidst criticism",
      des: "Indian head coach Gautam Gambhir had strongly rebuked former Australian cricketers...",
    },
    {
      id: 6,
      news: "Lockie Ferguson ruled out of ODI series against Sri Lanka",
      des: "New Zealand all-rounder Lockie Ferguson has been ruled out of the ODI series...",
    },
    {
      id: 7,
      news: "South Africa name squads for England white-ball series",
      des: "South Africa have named their squads for the upcoming T20I and ODI...",
    },
    {
      id: 8,
      news: "Javed Miandad’s reaction to India’s decision against traveling to Pakistan",
      des: "With reports doing the rounds that India have decided not to travel...",
    },
  ];

  return (
    <div className="w-full h-auto bg-gray-100 py-10">
      <div className="container mt-10 mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Main News Section */}
        <div className="md:col-span-8">
          <h1 className="text-4xl font-semibold uppercase mb-6">Top Stories</h1>
          <div className="bg-white shadow-lg rounded-xl p-6">
            {newsData.map((item) => (
              <div key={item.id} className="mb-8 border-b border-gray-200 pb-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {item.news}
                </h2>
                <p className="text-gray-600">{item.des}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Connect with Us Section */}
        <div className="col-span-3 mt-10 md:block hidden">
          <div className="bg-white shadow-xl rounded-lg p-6 mt-10 lg:mt-0">
            <h1 className="text-3xl font-semibold uppercase text-center">Connect with Us</h1>
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
    </div>
  );
};

export default News;
