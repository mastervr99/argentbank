import { getToken } from './authService'; 
export async function updateUserProfile(profile) {
  try {
    const token = getToken(); 
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, 
      },
      body: JSON.stringify({
        firstName: profile.firstname,
        lastName: profile.lastname,
      }),
    });

    if (!response.ok) {
        if (response.status === 401) {
          return { success: false, error: 'Session expirée. Veuillez vous reconnecter.' };
        }
        const errorData = await response.json();
        const errorMessage = errorData.message || "Une erreur s'est produite. Veuillez réessayer ultérieurement.";
        return { success: false, error: errorMessage };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Error updating user profile:', error);
    return { success: false, error: error.message || "Une erreur s'est produite. Veuillez réessayer ultérieurement." };
  }
}
