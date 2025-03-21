
import Head from 'next/head';

export default function About() {
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>About | SkyTrade Alpha</title>
        <meta name="description" content="Learn more about SkyTrade Alpha and gain access with our Genesis NFT" />
      </Head>
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              About SkyTrade Alpha
            </h1>
            <p className="text-lg text-gray-300">
              The future of Air rights insights and analytics
            </p>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2 bg-gray-900 bg-opacity-60 rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-purple-300">Our Mission</h2>
              <p className="text-gray-300 mb-4">
                SkyTrade Alpha provides exclusive insights and advanced tools for our NFT holders.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900 to-indigo-800 rounded-xl p-6 shadow-lg flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">Access Alpha</h2>
                <p className="text-gray-200 mb-6">
                  To access SkyTrade Alpha's exclusive content and features, you need to own a SkyTrade Genesis NFT.
                </p>
                <div className="bg-black bg-opacity-30 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-medium mb-2 text-purple-200">Genesis NFT Benefits:</h3>
                  <ul className="text-gray-200 space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Exclusive content
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Air rights insights
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Community
                    </li>
                  </ul>
                </div>
              </div>
              
              <a 
                href="https://magiceden.io/marketplace/skytrade_genesis" 
                target="_blank" 
                rel="noreferrer" 
                className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg text-center transition-colors shadow-md flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
                Get Genesis NFT on Magic Eden
              </a>
            </div>
          </div>
    
        </div>
      </main>
    </div>
  );
}