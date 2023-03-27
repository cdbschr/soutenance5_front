import CreateAccount from "./pages/client/auth/CreateAccount.svelte";
import Home from "./pages/client/Home.svelte";
import Login from "./pages/client/auth/Login.svelte";

export const routes = {
  "/": Home,
  "/login": Login,
  "/register": CreateAccount,
};
