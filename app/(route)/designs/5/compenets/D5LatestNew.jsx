'use client'

// compenets/LatestNews.js
export default function D3LatestNews() {
    const newsData = [
      {
        title: "Veterans Team Wins Major Award",
        image: "https://northeastern-my.sharepoint.com/:i:/r/personal/patel_saura_northeastern_edu/Documents/Hai%20Griff%20Bco/BearBrown/Pexels/20_0813_1078.jpg?csf=1&web=1&e=aekogY",
        views: 141,
        comments: 0,
        likes: 2,
      },
      {
        title: "Providing Exceptional Health Care for Veterans and Their Families at No Cost",
        image: "https://northeastern-my.sharepoint.com/:i:/r/personal/patel_saura_northeastern_edu/Documents/Hai%20Griff%20Bco/BearBrown/Pexels/20_0813_1077.jpg?csf=1&web=1&e=WgG3L6",
        views: 47,
        comments: 0,
        likes: 3,
      },
      {
        title: "Countries with the Best Veterans Leave Policies",
        image: "https://northeastern-my.sharepoint.com/:i:/r/personal/patel_saura_northeastern_edu/Documents/Hai%20Griff%20Bco/BearBrown/Pexels/20_0813_1088.jpg?csf=1&web=1&e=XOCmwL",
        views: 34,
        comments: 0,
        likes: 3,
      },
      {
        title: "Restoring Health and Performance",
        image: "https://northeastern-my.sharepoint.com/:i:/r/personal/patel_saura_northeastern_edu/Documents/Hai%20Griff%20Bco/BearBrown/Pexels/20_0813_1109.jpg?csf=1&web=1&e=RUtX3i",
        views: 55,
        comments: 0,
        likes: 3,
      },
    ];
  
    return (
      <div id="latest-news" className="px-4 py-16 bg-gray-100">
        <h2 className="text-5xl font-bold text-center mb-8 text-gray-800">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
          {newsData.map((news, index) => (
            <div key={index} className="border rounded overflow-hidden bg-white shadow-lg">
              <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{news.title}</h3>
                <div className="flex justify-between items-center text-gray-500 text-sm">
                  <div className="flex items-center space-x-2">
                    <span>👁️ {news.views}</span>
                    <span>💬 {news.comments}</span>
                  </div>
                  <span>♡ {news.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-200">
            Read More
          </button>
        </div>
      </div>
    );
}
