export function storeToken(token, rememberMe) {
    if (rememberMe) {
      localStorage.setItem('token', token);
    } else {
      sessionStorage.setItem('token', token);
    }
}
  
export function getToken() {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    return token;
}

export function removeToken() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
}

export function isTokenExpired(token) {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp < Date.now() / 1000;
    } catch (e) {
      return true;
    }
}

export async function login(loginData) {
    try {
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            const errorMessage = errorData.message || "Une erreur s'est produite. Veuillez réessayer ultérieurement.";
            if (response.status === 400) {
                throw new Error(errorMessage);
            }
            return { error: errorMessage };
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return { error: "Une erreur s'est produite. Veuillez réessayer ultérieurement." };
    }
}

export async function getProfile(token) {
    try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            const error_message = "Impossible de récupérer le profil utilisateur. Veuillez réessayer ultérieurement.";
            return { error: error_message };
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching profile data:', error);
        return { error: "Une erreur s'est produite. Veuillez réessayer ultérieurement." };
    }
}

export function storeUserProfile(userProfile) {
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
}

export function getUserProfile() {
    const userProfile = localStorage.getItem('userProfile');
    return userProfile ? JSON.parse(userProfile) : null;
}