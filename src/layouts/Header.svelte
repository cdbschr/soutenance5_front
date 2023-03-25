<script>
  import Logo from "../components/Logo.svelte";
  import Navigation from "../components/Navigation.svelte";
  import NavigationMobile from "../components/NavigationMobile.svelte";
  import { onMount } from "svelte";

  let isMobile = false;
  const viewport = window.innerWidth;

  onMount(() => {
    isMobile = viewport <= 768;
    window.addEventListener("resize", handleResize);
  });

  function handleResize() {
    isMobile = viewport <= 768;
  }
</script>

<header class="flex justify-between">
  <Logo />
  {#if isMobile}
    <NavigationMobile />
  {:else}
    <Navigation />
  {/if}
</header>