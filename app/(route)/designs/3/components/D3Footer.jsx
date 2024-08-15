import Link from "next/link";

// components/Footer.js
export default function D3Footer() {
    return (
      <footer className="bg-slate-50 pt-12">
        <div className="container mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {/* About Section */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold mb-4">Women PWR</h2>
              <p className="text-gray-600 mb-4">
                I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> info@mysite.com
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> 123-456-7890
              </p>
              <p className="text-gray-600">
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
                className="py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-pink-500 bg-slate-50"
              />
                <div className="border-t-2 border-gray-300"></div>
                <button className="bg-pink-500 text-white py-2 px-6 rounded-none hover:bg-pink-600 transition duration-200">
                  Sign Up!
                </button>
              </div>
            </div>
  
            {/* Quick Links Section */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Support Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Podcast
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 border-t py-4 text-gray-100 text-sm bg-blue-700 flex flex-col md:flex-row justify-center items-center">
          <p>© 2024 by Women PWR. Powered and secured by Cards</p>
          <p className="md:ml-4 mt-2 md:mt-0">
            <Link href="#" className="hover:underline">Terms & Conditions</Link> | <Link href="#" className="hover:underline">Privacy Policy</Link> | <Link href="#" className="hover:underline">Accessibility Statement</Link>
          </p>
        </div>
      </footer>
    );
  }