<script lang="ts">
  let username = "";
  let password = "";

  async function handleSubmit() {
    try {
      const response = await fetch("https://your-api-url/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="bg-white px-8 pt-6 pb-8 mb-4">
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
      class="bg-violet-600 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Se connecter
    </button>
  </div>
</form>
