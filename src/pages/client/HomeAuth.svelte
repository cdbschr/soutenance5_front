<script lang="ts">
  import Router from "svelte-spa-router";
  import { routesAuth } from "../../routesAuth";
  import AuthenticatedWrapper from "./auth/AuthenticatedWrapper.svelte";
</script>

<AuthenticatedWrapper>
  <Router {routesAuth} />
</AuthenticatedWrapper>