<script lang="ts">
  import Button from "../../components/Button.svelte";
  import Logo from "../../components/Logo.svelte";
</script>

<main class="flex md:flex-row-reverse flex-wrap md:flex-nowrap justify-center p-5">
  <div class="sm:hidden">
    <Logo w="w-56" />
  </div>
  <div class="md:w-1/2">
    <h3 class="text-base md:text-lg">
      Bienvenue sur l'application ShareTheRide, pour pouvoir consulter les trajets disponibles n'hésitez pas à
      vous connecter ou vous créer un compte.
    </h3>
  </div>
  <div class="flex flex-wrap sm:flex-nowrap justify-center w-full sm:w-1/2">
    <Button text="S'inscrire" link="/register" primary />
    <Button text="Se connecter" link="/login" secondary />
  </div>
</main>