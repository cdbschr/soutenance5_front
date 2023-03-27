<script lang="ts">
  import Button from "../../../components/Button.svelte";

  let username = "";
  let pwd = "";
  let confirmPassword = "";
  let passwordMismatch = false;

  function checkPasswordsMatch() {
    passwordMismatch = pwd !== confirmPassword;
  }

  async function handleSubmit() {
    if (passwordMismatch) {
      return;
    }

    const params = new URLSearchParams();
    params.append("username", username);
    params.append("pwd", pwd);

    try {
      const response = await fetch(`https://symfony.camilledebusscher.fr/register?${params.toString()}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.error(error);
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="bg-white px-8 pt-6 mb-4">
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username"> Pseudo </label>
    <input
      type="text"
      id="username"
      bind:value={username}
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Pseudo"
      required
    />
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="pwd"> Mot de passe </label>
    <input
      type="password"
      id="pwd"
      bind:value={pwd}
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Mot de passe"
      required
    />
  </div>
  <div class="mb-6">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="confirmPassword">
      Confirmer le mot de passe
    </label>
    <input
      type="password"
      id="confirmPassword"
      bind:value={confirmPassword}
      on:input={checkPasswordsMatch}
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Confirmer le mot de passe"
      required
    />
  </div>
  {#if passwordMismatch}
    <p class="text-red-500 text-xs italic mb-4">Les mots de passe ne correspondent pas.</p>
  {/if}
  <div class="flex items-center justify-center">
    <button
      type="submit"
      class="bg-violet-600 hover:bg-violet-800 text-white my-3 py-2 px-4 w-3/4 md:w-1/10 rounded border-2 border-transparent focus:outline-none"
      disabled={passwordMismatch}
    >
      S'inscrire
    </button>
  </div>
</form>
<div class="px-8 pb-8 mb-4">
  <Button text="Se connecter" link="/login" tertiary/>
</div>