export async function connectPhantomWallet() {
    try {
      if (!window.solana || !window.solana.isPhantom) {
        throw new Error('Phantom wallet is not installed');
      }
      
      // Set up account change listener before connecting
      setupWalletChangeListener();
      
      const response = await window.solana.connect();
      
      // Store the current wallet address for future comparison
      localStorage.setItem('current_wallet_address', response.publicKey.toString());
      
      return response.publicKey.toString();
    } catch (error) {
      console.error('Error connecting to Phantom wallet:', error);
      throw error;
    }
  }
  
  export function isPhantomInstalled() {
    return typeof window !== 'undefined' && window.solana && window.solana.isPhantom;
  }

    export function setupWalletChangeListener() {
        if (!window.solana || !window.solana.isPhantom) return;
    
        // Clean up any existing polling interval
        if (window._phantomPollingInterval) {
        clearInterval(window._phantomPollingInterval);
        window._phantomPollingInterval = null;
        }
    
        // Store the current wallet address for comparison
        const getCurrentWalletAddress = async () => {
        try {
            const resp = await window.solana.connect({ onlyIfTrusted: true });
            return resp.publicKey.toString();
        } catch (err) {
            console.log("Error getting current wallet:", err);
            return null;
        }
        };
    
        // Setup polling for account changes
        const checkAccountChange = async () => {
        const currentWalletAddress = await getCurrentWalletAddress();
        const storedWalletAddress = localStorage.getItem('current_wallet_address');
        
        if (!currentWalletAddress) {
            // Wallet disconnected
            if (localStorage.getItem('alpha_verified') === 'true') {
            console.log('Wallet disconnected, clearing auth');
            clearAuthentication();
            window.location.href = '/verify-access';
            }
            return;
        }
        
        if (storedWalletAddress && storedWalletAddress !== currentWalletAddress) {
            console.log('Wallet address changed from', storedWalletAddress, 'to', currentWalletAddress);
            
            if (localStorage.getItem('alpha_verified') === 'true') {
            console.log('Clearing auth due to wallet change');
            clearAuthentication();
            window.location.href = '/verify-access';
            } else {
            // Update the stored wallet address
            localStorage.setItem('current_wallet_address', currentWalletAddress);
            }
        }
        };
        
        // Run initial check
        checkAccountChange();
        
        // Set up interval for polling
        const pollingInterval = setInterval(checkAccountChange, 2000); // Check every 2 seconds
        window._phantomPollingInterval = pollingInterval;
        
        // Try to use accountChanged event as a backup
        try {
        window.solana.on('accountChanged', (publicKey) => {
            console.log('accountChanged event triggered', publicKey);
            checkAccountChange();
        });
        } catch (err) {
        console.log('Error adding accountChanged listener:', err);
        }
        
        // Return a cleanup function
        return () => {
        if (window._phantomPollingInterval) {
            clearInterval(window._phantomPollingInterval);
            window._phantomPollingInterval = null;
        }
        
        try {
            window.solana.removeAllListeners?.('accountChanged');
        } catch (err) {
            console.log('Error removing accountChanged listener:', err);
        }
        };
    }
  
  
  
  function clearAuthentication() {
    // Clear all authentication data
    localStorage.removeItem('alpha_verified');
    localStorage.removeItem('current_wallet_address');
    localStorage.removeItem('verification_timestamp');
    
    // Clear any session flags
    sessionStorage.removeItem('navigating_to_alpha');
    sessionStorage.removeItem('navigating_to_verify');
  }
  