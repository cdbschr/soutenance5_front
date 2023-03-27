<script lang="ts">
  import { onMount } from "svelte";
  import { isAuthenticated } from "../../../stores/authStore";

  export let redirectTo: string = "/login";

  let auth = false;

  onMount(async () => {
    if (!$isAuthenticated) {
      history.pushState(null, "", redirectTo);
      location.reload();
    } else {
      auth = true;
    }
  });
</script>

{#if auth}
  <slot />
{/if}