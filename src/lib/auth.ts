// Authentication utility functions

export function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('token');
}

export function getUser(): any | null {
  if (typeof window === 'undefined') return null;
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : null;
}

export function isAuthenticated(): boolean {
  return !!getAuthToken();
}

export function logout() {
  if (typeof window === 'undefined') return;
  
  // Clear localStorage
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  
  // Clear cookie
  document.cookie = 'auth_token=; path=/; max-age=0';
  
  // Redirect to home
  window.location.href = '/';
}

export async function verifyToken(token: string): Promise<boolean> {
  try {
    const AUTH_SERVICE_URL = process.env.NEXT_PUBLIC_AUTH_SERVICE_URL || 'http://localhost:4000';
    
    const response = await fetch(`${AUTH_SERVICE_URL}/api/auth/verify`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    return response.ok;
  } catch (error) {
    return false;
  }
}
