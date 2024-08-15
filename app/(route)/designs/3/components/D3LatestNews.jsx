import Image from "next/image";

// components/LatestNews.js
export default function D3LatestNews() {
    const newsData = [
      {
        title: "Female Robotics Team Wins Major Award",
        image: "https://images.pexels.com/photos/3119215/pexels-photo-3119215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        views: 141,
        comments: 0,
        likes: 2,
      },
      {
        title: "Women Overtake Men in College Degrees",
        image: "https://images.pexels.com/photos/7312328/pexels-photo-7312328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        views: 47,
        comments: 0,
        likes: 3,
      },
      {
        title: "Countries with the Best Parental Leave Policies",
        image: "https://images.pexels.com/photos/25047781/pexels-photo-25047781/free-photo-of-elderly-woman-sitting-and-sewing-at-store.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        views: 34,
        comments: 0,
        likes: 3,
      },
    ];
  
    return (
      <div id="latest-news"  className="px-4 py-16 bg-white">
        <h2 className="text-5xl font-bold text-center mb-8 ">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
          {newsData.map((news, index) => (
            <div key={index} className="border rounded-none overflow-hidden bg-white">
              <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
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
          <button className="bg-pink-500 text-white py-2 px-6 rounded-none hover:bg-pink-600 transition duration-200">
            Read More
          </button>
        </div>
      </div>
    );
  }