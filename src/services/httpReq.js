import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export function getContacts() {
  return api.get("/contacts");
}

export function deleteContact(id) {
  return api.delete(`/contacts/${id}`);
}

export function addContact(data) {
  return api.post("/contacts", data);
}

export function editeContact(id, data) {
  return api.patch(`/contacts/${id}`, data);
}

api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

//  json-server --watch ./data/contacts.json
