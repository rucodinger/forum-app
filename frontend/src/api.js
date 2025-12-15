const BASE_URL = "http://localhost:8000";

export async function registerUser(data) {
    const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return response;
}

export async function getUsers() {
    const response = await fetch(`${BASE_URL}/users`);
    return response;
}