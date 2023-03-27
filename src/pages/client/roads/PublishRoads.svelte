<script lang="ts">
  let ville_depart: string = "";
  let ville_arrivee: string = "";
  let date: string = "";
  let heureDepart: string = "";
  let heureArrivee: string = "";
  let kms: string = "";
  let id_pers: string = "";
  let places: string = "";
  let errorMessage: string | null = null;

  async function handleSubmit() {
    errorMessage = null;
    const data = {
      ville_depart,
      ville_arrivee,
      date,
      heureDepart,
      heureArrivee,
      kms: parseInt(kms, 10),
      id_pers: parseInt(id_pers, 10),
      places: parseInt(places, 10),
    };

    try {
      const response = await fetch("http://symfony.camilledebusscher.fr/insertTrajet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Erreur ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Trajet ajouté avec succès:", result);
    } catch (err) {
      errorMessage = err.message;
      console.error("Une erreur s'est produite lors de l'ajout du trajet:", err);
    }
  }
</script>

<div class="max-w-md mx-auto">
  <form on:submit|preventDefault={handleSubmit} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="heureDepart"> Heure de départ </label>
      <input
        id="heureDepart"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="time"
        bind:value={heureDepart}
        required
      />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="heureArrivee"> Heure d'arrivée </label>
      <input
        id="heureArrivee"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="time"
        bind:value={heureArrivee}
        required
      />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="kms"> Kilomètres </label>
      <input
        id="kms"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="number"
        bind:value={kms}
        required
      />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="id_pers"> ID de la personne </label>
      <input
        id="id_pers"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="number"
        bind:value={id_pers}
        required
      />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="places"> Nombre de places </label>
      <input
        id="places"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="number"
        bind:value={places}
        required
      />
    </div>
    {#if errorMessage}
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
        <strong class="font-bold">Erreur :</strong>
        <span class="block sm:inline">{errorMessage}</span>
      </div>
    {/if}
    <div class="flex items-center justify-between">
      <button
        class="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Ajouter le trajet
      </button>
    </div>
  </form>
</div>
