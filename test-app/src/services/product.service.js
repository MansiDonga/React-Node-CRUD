import http from "../http-common";

export function getAll() {
  return http.get("/products").then((data) => data.data);
}

export function get(id) {
  return http.get(`/products/${id}`);
}

export function create(data) {
  return http.post("/products", data);
}

export function update(id, data) {
  return http.put(`/products/${id}`, data);
}

export function deleteProduct(id) {
  return http.delete(`/products/${id}`);
}
