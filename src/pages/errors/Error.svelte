<script lang="ts">
  import Button from "../../components/Button.svelte";

  export let errorCode: string = "404";
  export let errorMessage: string = "Page non trouvée";
</script>

<div class="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md">
    <div class="text-center mb-6">
      <h1 class="text-3xl font-bold text-red-600">{errorCode}</h1>
      <h2 class="text-xl font-semibold text-gray-700">{errorMessage}</h2>
    </div>
    <div class="text-center">
      <Button text="Retour à l'accueil" />
    </div>
  </div>
</div>