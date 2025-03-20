'use client';

// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { isAuthenticated } from '@/lib/wallet';

// export default function AlphaPage() {
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();
  
//   useEffect(() => {
//     // Check authentication when component mounts
//     if (!isAuthenticated()) {
//       // Not authenticated, redirect to verification
//       router.push('/verify-nft?redirect=/alpha');
//       return;
//     }
    
//     // Authenticated, show content
//     setLoading(false);
//   }, [router]);
  
//   if (loading) {
//     return <div className="container mx-auto p-8 text-center">Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto px-4 max-w-4xl">
//       <div className="text-center mb-8">
//         <div className="inline-block py-1 px-3 rounded bg-blue-100 text-blue-800 text-sm font-medium mb-2">
//           Premium Content
//         </div>
//         <h1 className="text-3xl font-bold">SkyTrade Alpha Insights</h1>
//         <p className="text-gray-600 mt-2">
//           Exclusive trading signals and market analysis for NFT holders
//         </p>
//       </div>
      
//       <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
//         <div className="bg-blue-600 text-white p-4">
//           <h2 className="text-xl font-semibold">Today's Market Analysis</h2>
//           <p className="text-sm opacity-80">Last updated: March 20, 2025</p>
//         </div>
//         <div className="p-6">
//           <p className="text-gray-700 mb-4">
//             The crypto market is showing strong bullish signals today, with major coins breaking through key resistance levels.
//             Bitcoin has successfully maintained support above $95,000, indicating potential for further upward movement.
//           </p>
          
//           <h3 className="font-semibold text-lg mb-2">Key Observations:</h3>
//           <ul className="list-disc ml-6 mb-4 space-y-1 text-gray-700">
//             <li>Ethereum has broken past its previous ATH of $15,300</li>
//             <li>Layer-2 solutions are seeing increased adoption and token appreciation</li>
//             <li>DeFi TVL has grown by 12.5% in the past week</li>
//             <li>NFT trading volume shows renewed interest in digital collectibles</li>
//           </ul>
          
//           <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 mb-4">
//             <p className="text-yellow-800 font-medium">Expert Insight</p>
//             <p className="text-yellow-700">
//               Watch for increased volatility in mid-cap altcoins as profit-taking from major coins flows into higher-risk assets.
//             </p>
//           </div>
//         </div>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="bg-green-600 text-white p-4">
//             <h2 className="text-xl font-semibold">Trading Signals</h2>
//           </div>
//           <div className="p-6">
//             <div className="space-y-4">
//               <div className="p-3 border rounded border-green-200 bg-green-50">
//                 <div className="flex justify-between items-center">
//                   <span className="font-medium">BTC/USD</span>
//                   <span className="text-green-700 font-medium">BUY</span>
//                 </div>
//                 <p className="text-sm text-gray-600 mt-1">Entry: $94,500 - $95,500</p>
//                 <p className="text-sm text-gray-600">Target: $102,000</p>
//                 <p className="text-sm text-gray-600">Stop: $91,000</p>
//               </div>
              
//               <div className="p-3 border rounded border-red-200 bg-red-50">
//                 <div className="flex justify-between items-center">
//                   <span className="font-medium">ETH/BTC</span>
//                   <span className="text-red-700 font-medium">SELL</span>
//                 </div>
//                 <p className="text-sm text-gray-600 mt-1">Entry: 0.068 - 0.070</p>
//                 <p className="text-sm text-gray-600">Target: 0.064</p>
//                 <p className="text-sm text-gray-600">Stop: 0.072</p>
//               </div>
              
//               <div className="p-3 border rounded border-green-200 bg-green-50">
//                 <div className="flex justify-between items-center">
//                   <span className="font-medium">SOL/USD</span>
//                   <span className="text-green-700 font-medium">BUY</span>
//                 </div>
//                 <p className="text-sm text-gray-600 mt-1">Entry: $315 - $325</p>
//                 <p className="text-sm text-gray-600">Target: $380</p>
//                 <p className="text-sm text-gray-600">Stop: $295</p>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           <div className="bg-indigo-600 text-white p-4">
//             <h2 className="text-xl font-semibold">Upcoming Opportunities</h2>
//           </div>
//           <div className="p-6">
//             <div className="space-y-4">
//               <div>
//                 <h3 className="font-medium">New DeFi Protocol Launch</h3>
//                 <p className="text-sm text-gray-600 mb-1">March 25, 2025</p>
//                 <p className="text-gray-700">
//                   A major new DeFi protocol with innovative yield strategies is launching next week.
//                   Early participants may benefit from launch incentives.
//                 </p>
//               </div>
              
//               <div>
//                 <h3 className="font-medium">Layer-1 Protocol Upgrade</h3>
//                 <p className="text-sm text-gray-600 mb-1">April 2, 2025</p>
//                 <p className="text-gray-700">
//                   A significant protocol upgrade is scheduled that will improve throughput and reduce fees.
//                   Historical data suggests price appreciation following successful upgrades.
//                 </p>
//               </div>
              
//               <div>
//                 <h3 className="font-medium">NFT Collection Release</h3>
//                 <p className="text-sm text-gray-600 mb-1">April 10, 2025</p>
//                 <p className="text-gray-700">
//                   A highly anticipated NFT collection from a renowned digital artist is dropping.
//                   Our analysis suggests strong potential for appreciation.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from 'react';
import Head from 'next/head';
import { redirect } from 'next/navigation';
import { hasAccessCookie } from '../../utils/cookies';

export default function Alpha() {
  const [authorized, setAuthorized] = useState(false);
  
  // useEffect(() => {
  //   // Client-side verification
  //   if (!hasAccessCookie()) {
  //     redirect('/verify-access');
  //   } else {
  //     setAuthorized(true);
  //   }
  // }, []);
  

  useEffect(() => {
    // Client-side verification with fallback
    const hasAccess = hasAccessCookie();
    // console.log("Checking alpha access:", hasAccess);
    
    if (!hasAccess) {
      // console.log("No access, redirecting to verification");
      window.location.href = '/verify-access'; // Use window.location for more reliable redirects
    } else {
      setAuthorized(true);
    }
  }, []);

  if (!authorized) {
    return <div className="loading">Verifying access...</div>;
  }
  
  return (
    <div className="alpha-page">
      <Head>
        <title>Alpha Section | Your App</title>
      </Head>
      
      <main>
        <h1>Welcome to the Alpha Section</h1>
        <p>
          This is exclusive content for NFT holders.
          Thank you for your support!
        </p>
        
        {/* Your alpha content here */}
      </main>
    </div>
  );
}
