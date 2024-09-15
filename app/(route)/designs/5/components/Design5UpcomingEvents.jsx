// components/UpcomingEvents.js
export default function Design5UpcomingEvents() {
  const events = [
    {
      date: "Sun, Sep 23",
      title: "Open House & Treat",
      location: "San Francisco",
    },
    {
      date: "Tue, Nov 20",
      title: "Weight Lifting",
      location: "San Francisco",
    },
    {
      date: "Wed, Dec 19",
      title: "Veterans Family Lunch",
      location: "San Francisco",
    },
  ];

  return (
    <div id="upcoming-events" className="px-4 md:px-20 py-16 bg-gray-100">
      <h2 className="text-4xl md:text-3xl font-bold text-center mb-8 text-gray-800">Upcoming Events</h2>
      <div className="space-y-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-start border-b pb-4"
          >
            <div className="text-left md:text-left">
              <p className="text-gray-500">{event.date}</p>
              <p className="text-lg font-semibold text-gray-800">{event.title}</p>
              <p className="text-gray-500">{event.location}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="bg-stone-500 text-white py-2 px-6 rounded hover:bg-stone-600 transition duration-200">
                Register Now
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-stone-600 text-white py-2 px-6 rounded hover:bg-stone-800 transition duration-200">
          Register Now
        </button>
      </div>
    </div>
  );
}
