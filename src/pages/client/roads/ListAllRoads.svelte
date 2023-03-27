<script lang="ts">
  import { onMount } from "svelte";

  type Ride = {
    id: number;
    Kms: number;
    date: string;
    heureDepart: string;
    heureArrivee: string;
    places: number;
    conducteurNom: string;
    conducteurPrenom: string;
  };

  let rides: Ride[][] = [];
  let error: string | null = null;

  onMount(async () => {
    try {
      const response = await fetch("http://symfony.camilledebusscher.fr/listeTrajet");

      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      rides = data;
    } catch (err) {
      error = err.message;
      console.error("Une erreur s'est produite lors de la récupération des données:", err);
    }
  });
</script>

<div class="min-h-screen bg-gray-100 flex flex-col items-center py-8">
  <h1 class="text-2xl font-bold mb-8">Liste des trajets</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {#if error}
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong class="font-bold">Erreur :</strong>
        <span class="block sm:inline">{error}</span>
      </div>
    {:else}
      {#each rides as group (group[0].id)}
        {#each group as ride}
          <div class="bg-white shadow-md rounded p-6">
            <h2 class="text-xl font-semibold mb-4">{ride.conducteurNom} {ride.conducteurPrenom}</h2>
            <p>Kms: {ride.Kms.toLocaleString()}</p>
            <p>Date: {ride.date}</p>
            <p>Heure de départ: {ride.heureDepart}</p>
            <p>Heure d'arrivée: {ride.heureArrivee}</p>
            <p>Places disponibles: {ride.places}</p>
          </div>
        {/each}
      {/each}
    {/if}
  </div>
</div>