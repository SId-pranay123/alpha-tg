export function getCookie(name) {
    if (typeof document === 'undefined') return null;
    
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

// utils/cookies.js
export function hasAccessCookie() {
    // console.log("All cookies:", document.cookie);
    
    // Check for the cookie
    const cookies = document.cookie.split(';');
    const alphaAccessCookie = cookies.find(cookie => 
        cookie.trim().startsWith('alpha_access=')
    );
    
    // Check localStorage as a fallback
    const localStorageAccess = localStorage.getItem('alpha_verified') === 'true';
    
    // console.log("Cookie found:", !!alphaAccessCookie, "LocalStorage access:", localStorageAccess);
    
    return !!alphaAccessCookie || localStorageAccess;
}