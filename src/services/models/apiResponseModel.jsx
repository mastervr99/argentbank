export function apiResponseModel(data) {
    return {
        status: data.status,
        message: data.message,
        body: {
            id: data.body.id,
            email : data.body.email
        },
    };
}
