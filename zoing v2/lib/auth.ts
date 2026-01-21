// lib/auth.ts
import { users } from "./db";

export function registerUser(username: string, password: string) {
  users.push({ username, password });
}

export function loginUser(username: string, password: string) {
  return users.find(u => u.username === username && u.password === password);
}
