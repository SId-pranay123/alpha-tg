export function getCookie(name) {
    if (typeof document === 'undefined') return null;
    
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }
  
  export function hasAccessCookie() {
    return getCookie('alpha_access') === 'true';
  }
  