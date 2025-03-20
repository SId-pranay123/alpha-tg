export async function connectPhantomWallet() {
    try {
      if (!window.solana || !window.solana.isPhantom) {
        throw new Error('Phantom wallet is not installed');
      }
      
      const response = await window.solana.connect();
      return response.publicKey.toString();
    } catch (error) {
      console.error('Error connecting to Phantom wallet:', error);
      throw error;
    }
  }
  
  export function isPhantomInstalled() {
    return typeof window !== 'undefined' && window.solana && window.solana.isPhantom;
  }