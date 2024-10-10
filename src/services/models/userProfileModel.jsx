export function userProfileModel(data) {
    return {
        firstname: data.body.firstName,
        lastname: data.body.lastName,
    };
}
