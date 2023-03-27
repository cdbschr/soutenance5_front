import { writable } from "svelte/store";

interface User {
  id: number;
  pseudo: string;
  password: string;
}

export const isAuthenticated = writable<boolean>(false);
export const user = writable<User | null>(null);