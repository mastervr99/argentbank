export function userModel(data) {
    return {
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
    };
}
