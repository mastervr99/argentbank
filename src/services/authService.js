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
            const error_message = "Notre service est actuellement indisponible. Nous vous invitons à réessayer ultérieurement. Merci de votre compréhension.";
            return { error: error_message };
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
