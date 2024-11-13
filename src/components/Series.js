import React from "react";

const Series = () => {
  return (
    <div className="w-full min-h-screen px-4 md:px-10 lg:px-20 py-10 bg-gray-100">
      <div className="grid grid-cols-1 mt-10 lg:grid-cols-12 gap-10">
        
        {/* Table Content */}
        <div className="col-span-9">
          <h1 className="text-3xl font-bold uppercase mb-6">Series Schedule</h1>
          <table className="w-full rounded-md text-white">
            <thead className="bg-purple-900">
              <tr className="h-16">
                <th className="text-left font-bold text-xl px-4 md:px-6">Month</th>
                <th className="text-left font-bold text-xl px-4 md:px-6">Series Name</th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-16 bg-gray-200">
                <td className="px-4 md:px-6 text-purple-900 font-semibold">November 2025</td>
                <td className="px-4 md:px-6 text-gray-700 font-semibold">The Ashes 2025-26</td>
              </tr>
              <tr className="h-16 bg-gray-100">
                <td className="px-4 md:px-6 text-purple-900 font-semibold">September 2025</td>
                <td className="px-4 md:px-6 text-gray-700 font-semibold">South Africa tour of England 2025</td>
              </tr>
              <tr className="h-16 bg-gray-200">
                <td className="px-4 md:px-6 text-purple-900 font-semibold">June 2025</td>
                <td className="px-4 md:px-6 text-gray-700 font-semibold">World Test Championship Final 2025</td>
              </tr>
              <tr className="h-16 bg-gray-100">
                <td className="px-4 md:px-6 text-purple-900 font-semibold">May 2025</td>
                <td className="px-4 md:px-6 text-gray-700 font-semibold">Zimbabwe tour of England 2025</td>
              </tr>
              <tr className="h-16 bg-gray-200">
                <td className="px-4 md:px-6 text-purple-900 font-semibold">March 2025</td>
                <td className="px-4 md:px-6 text-gray-700 font-semibold">Pakistan tour of New Zealand 2025</td>
              </tr>
              <tr className="h-16 bg-gray-100">
                <td className="px-4 md:px-6 text-purple-900 font-semibold">February 2025</td>
                <td className="px-4 md:px-6 text-gray-700 font-semibold">Pakistan ODI Tri-Series 2025</td>
              </tr>
              <tr className="h-16 bg-gray-200">
                <td className="px-4 md:px-6 text-purple-900 font-semibold">January 2025</td>
                <td className="px-4 md:px-6 text-gray-700 font-semibold">SA20 2025</td>
              </tr>
              <tr className="h-16 bg-gray-100">
                <td className="px-4 md:px-6 text-purple-900 font-semibold">November 2024</td>
                <td className="px-4 md:px-6 text-gray-700 font-semibold">
                  Pakistan tour of Australia 2024, Afghanistan vs Bangladesh in UAE 2024, India tour of South Africa 2024
                </td>
              </tr>
            </tbody>
          </table>
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

export default Series;
