<script lang="ts">
  let ville_depart: string = "";
  let ville_arrivee: string = "";
  let date: string = "";
  let trajets = [];

  async function handleSearch() {
    const queryParams = new URLSearchParams({
      ville_depart,
      ville_arrivee,
      date,
    });

    try {
      const response = await fetch(
        `http://symfony.camilledebusscher.fr/rechercheTrajet?${queryParams.toString()}`,
      );
      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }
      trajets = await response.json();
    } catch (err) {
      console.error("Erreur lors de la recherche de trajets:", err);
    }
  }
</script>

<div class="max-w-md mx-auto">
  <form on:submit|preventDefault={handleSearch} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="ville_depart"> Ville de départ </label>
      <input
        id="ville_depart"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        bind:value={ville_depart}
        required
      />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="ville_arrivee"> Ville d'arrivée </label>
      <input
        id="ville_arrivee"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        bind:value={ville_arrivee}
        required
      />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="date"> Date </label>
      <input
        id="date"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="date"
        bind:value={date}
        required
      />
    </div>
    <div class="flex items-center justify-between">
      <button
        class="bg-violet-600 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Rechercher
      </button>
    </div>
  </form>
</div>

<div class="max-w-4xl mx-auto">
  {#each trajets as trajet}
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <p>Ville de départ: {trajet.ville_depart}</p>
      <p>Ville d'arrivée: {trajet.ville_arrivee}</p>
      <p>Date: {trajet.date}</p>
      <!-- Afficher le reste des informations -->
      
    </div>
  {/each}
  {#if trajets.length === 0}
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <p>Aucun trajet trouvé.</p>
    </div>
  {/if}
</div>