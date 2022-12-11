export function getToken() {
    const auth = JSON.parse(localStorage.getItem("persist:root"))?.auth;
    const currentUser = auth && JSON.parse(auth).currentUser;
    return currentUser?.jwtToken;
}

export function getRole() {
    const auth = JSON.parse(localStorage.getItem("persist:root"))?.auth;
    const currentUser = auth && JSON.parse(auth).currentUser;
    return currentUser?.role;
}