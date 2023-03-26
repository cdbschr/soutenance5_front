<script lang="ts">
  import Logo from "../components/Logo.svelte";
  import { onMount } from "svelte";
  import { link } from "svelte-spa-router";

  let isMobile: boolean = false;
  const viewport: number = window.innerWidth;

  onMount(() => {
    isMobile = viewport <= 768;
    window.addEventListener("resize", handleResize);
  });

  function handleResize() {
    isMobile = viewport <= 768;
  }
</script>

{#if isMobile}
  <header class="flex justify-center w-screen bg-violet-400">
    <a href="/" use:link>
      <Logo showTitle={true} />
    </a>
  </header>
{/if}
