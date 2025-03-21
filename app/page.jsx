
export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">Welcome to SkyTrade Alpha</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Access exclusive air rights insights with our token-gated platform.
          Own our NFT to unlock premium content.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Public Content</h2>
          <p className="text-gray-700 mb-6">
            General information and basic resources available to all users.
          </p>
          <ul className="mb-8 space-y-3">
            <li className="flex items-center">
              <div className="bg-green-100 p-1 rounded-full mr-3">
                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">News</span>
            </li>
            <li className="flex items-center">
              <div className="bg-green-100 p-1 rounded-full mr-3">
                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">Basic Content</span>
            </li>
            <li className="flex items-center">
              <div className="bg-green-100 p-1 rounded-full mr-3">
                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">Community Forums</span>
            </li>
          </ul>
          <a 
            href="/about" 
            className="inline-block px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 transition duration-150"
          >
            Learn More
          </a>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-500">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Premium Alpha Content</h2>
          <p className="text-gray-700 mb-6">
            Exclusive insights for NFT holders only.
          </p>
          <ul className="mb-8 space-y-3">
            <li className="flex items-center">
              <div className="bg-blue-100 p-1 rounded-full mr-3">
                <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">Get Access to Alpha Content</span>
            </li>
            
          </ul>
          <a 
            href="/alpha" 
            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-150"
          >
            Access Alpha Content
          </a>
        </div>
      </div>
    </div>
  );
}