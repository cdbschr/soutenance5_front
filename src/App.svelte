<script lang="ts">
  import Router from "svelte-spa-router";
  import Header from "./layouts/Header.svelte";
  import { routes } from "./routes";
  import Footer from "./layouts/Footer.svelte";
  import { isAuthenticated } from "./stores/authStore";
  import HomeAuth from "./pages/client/HomeAuth.svelte";
</script>

<main>
  <Header />
  <!-- {#if !isAuthenticated} -->
    <Router {routes} />
  <!-- {:else} -->
    <!-- <HomeAuth /> -->
  <!-- {/if} -->
  <Footer />
</main>

<style>
</style>
