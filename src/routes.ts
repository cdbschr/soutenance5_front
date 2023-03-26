import CreateAccount from "./pages/client/CreateAccount.svelte";
import Home from "./pages/client/Home.svelte";
import Login from "./pages/client/Login.svelte";

export const routes = {
  "/": Home,
  "/login": Login,
  "/register": CreateAccount,
};
