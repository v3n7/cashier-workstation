import { UserStorage } from "storage";

const API_URL = "http://localhost:3001/api/v1";

export function fetchData(resource, method = "GET", data) {
  const { token } = UserStorage.load();
  return fetch(`${API_URL}${resource}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  }).then(response => {
    console.info({ response })
    return response
  });
}
