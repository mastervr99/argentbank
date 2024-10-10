export function loginResponseModel(data) {
    return {
        token: data.body.token,
    };
}
