<script lang="ts">
  import Router from "svelte-spa-router";
  import Header from "./layouts/Header.svelte";
  import { routes } from "./routes";
  import Footer from "./layouts/Footer.svelte";
</script>

<main>
  <Header />
  <Router {routes} />
  <Footer />
</main>

<style>
</style>
