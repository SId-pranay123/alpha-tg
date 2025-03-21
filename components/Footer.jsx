export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} SkyTrade Alpha. All rights reserved.
              </p>
            </div>
            <div>
              <a 
                href="https://magiceden.io/marketplace/skytrade_genesis" 
                target="_blank" 
                rel="noreferrer"
                className="text-sm text-blue-400 hover:text-blue-300"
              >
                Get the NFT on Magic Eden
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }