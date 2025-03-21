export async function verifyWalletAccess(walletAddress) {
    try {
      const response = await fetch('https://token-gate-worker.siddharthpranay0.workers.dev/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ walletAddress }),
        credentials: 'include',
      });
      const cookies = response.headers.get('set-cookie');
      console.log('Cookies:', cookies);
      if (cookies) {
        res.setHeader('Set-Cookie', cookies);
      }
      return await response.json();
    } catch (error) {
      console.error('Error verifying wallet access:', error);
      return { success: false, message: 'Error connecting to verification service' };
    }
  }