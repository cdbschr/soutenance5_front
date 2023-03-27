<script lang="ts">
  import { link } from "svelte-spa-router";

  let companyName: string = "ShareTheRide";
  let companyLink: string = "/";
  let year: number = new Date().getFullYear();
</script>

<footer class="mt-24 flex justify-center items-center bg-violet-400 text-white py-4 w-full">
  <p class="text-sm">
    &copy; {year}
    <a href={companyLink} class="text-white no-underline hover:underline" use:link>{companyName}</a>. Tous
    droits réservés.
  </p>
</footer>
