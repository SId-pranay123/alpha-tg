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
  
    // Remove any existing listeners to avoid duplicates
    window.solana.removeAllListeners?.('accountChanged');
  
    // Add account change listener
    window.solana.on('accountChanged', (publicKey) => {
  
      // If there's no publicKey, the wallet is disconnected
      if (!publicKey) {
        clearAuthentication();
        window.location.href = '/verify-access';
        return;
      }
  
      const newWalletAddress = publicKey.toString();
      const previousWalletAddress = localStorage.getItem('current_wallet_address');
  
    //   console.log('Previous wallet:', previousWalletAddress);
    //   console.log('New wallet:', newWalletAddress);
  
      // Check if the user is verified and the wallet address has changed
      if (localStorage.getItem('alpha_verified') === 'true' &&
          previousWalletAddress && previousWalletAddress !== newWalletAddress) {
        // console.log('Wallet address changed for a verified user, clearing auth');
        clearAuthentication();
        window.location.reload()
      }
    });
  }
  
  
  function clearAuthentication() {
    // Clear all authentication data
    localStorage.removeItem('alpha_verified');
    localStorage.removeItem('current_wallet_address');
    
    // Clear any session flags
    sessionStorage.removeItem('navigating_to_alpha');
    sessionStorage.removeItem('navigating_to_verify');
  }