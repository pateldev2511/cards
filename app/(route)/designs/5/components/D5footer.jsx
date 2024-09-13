import Link from "next/link";

// compenents/footer.js
export default function D3Footer() {
    return (
      <footer className="bg-gray-800 pt-12 text-white">
        <div className="container mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {/* About Section */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold mb-4">Liberty Veterans Foundation</h2>
              <p className="mb-4">
                Liberty Veterans Foundation is a 501(c)(3) organization dedicated to providing comprehensive health care and wellness services to veterans and their families.
              </p>
              <p>
                <strong>Email:</strong> info@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> 123-456-7890
              </p>
              <p>
                <strong>Registered Charity:</strong> 12345-67
              </p>
            </div>
  
            {/* Newsletter Signup Section */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold mb-4">Get Monthly Updates</h2>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email here *"
                  className="py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                />
                <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition duration-200">
                  Sign Up!
                </button>
              </div>
            </div>
  
            {/* Quick Links Section */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-gray-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">
                    Support Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">
                    Podcast
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 border-t py-4 text-sm bg-gray-900 flex flex-col md:flex-row justify-center items-center">
          <p>© 2024 Liberty Veterans Foundation. Powered and secured by Cards</p>
          <p className="md:ml-4 mt-2 md:mt-0">
            <Link href="#" className="hover:underline">Terms & Conditions</Link> | <Link href="#" className="hover:underline">Privacy Policy</Link> | <Link href="#" className="hover:underline">Accessibility Statement</Link>
          </p>
        </div>
      </footer>
    );
}
