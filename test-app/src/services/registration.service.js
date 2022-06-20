import http from "../http-common";

export function getAll() {
  return http.get("/members").then((data) => data.data);
}

export function get(id) {
  return http.get(`/members/${id}`);
}

export function register(ismanual, data) {
  return http.post(`/members/${ismanual}`, data);
}

export function update(id, data) {
  return http.put(`/members/${id}`, data);
}

export function deleteProduct(id) {
  return http.delete(`/members/${id}`);
}
