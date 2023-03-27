<script lang="ts">
  import Cookies from "js-cookie";
  import { user, isAuthenticated } from "../../../stores/authStore";
  import Button from "../../../components/Button.svelte";

  let username = "";
  let password = "";

  async function handleSubmit() {
    const params = new URLSearchParams();
    params.append("username", username);
    params.append("pwd", password);

    try {
      const response = await fetch(`https://symfony.camilledebusscher.fr/login?${params.toString()}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.token) {
        Cookies.set("authToken", data.token, {
          sameSite: "strict",
        });

        $isAuthenticated = true;
        $user = data.user;
        console.log("User logged in");

      } else {
        console.error("Error while logging in user : JWT not found");
      }
    } catch (error) {
      console.error(error);
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="bg-white px-8 pt-6 mb-4">
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username"> Pseudo </label>
    <input
      type="username"
      id="username"
      bind:value={username}
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Pseudo"
      required
    />
  </div>
  <div class="mb-6">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Mot de passe </label>
    <input
      type="password"
      id="password"
      bind:value={password}
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Mot de passe"
      required
    />
  </div>
  <div class="flex items-center justify-center">
    <button
      type="submit"
      class="bg-violet-600 hover:bg-violet-800 text-white my-3 py-2 px-4 w-3/4 md:w-1/10 rounded border-2 border-transparent focus:outline-none"
    >
      Se connecter
    </button>
  </div>
</form>
<div class="px-8 pb-8 mb-4">
  <Button text="S'inscrire" link="/register" tertiary />
</div>
