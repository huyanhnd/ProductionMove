export function getToken() {
    return JSON.parse(localStorage.getItem("token"));
}

export function setToken(data) {
    localStorage.setItem("token", JSON.stringify(data.jwtToken));
}