<script lang="ts">
  import logo from "../assets/logo.png";

  const name: string = "ShareTheRide";
  const alt = "Logo " + name;
  export let w: string = "w-20";
  export let showTitle: boolean = false;
</script>

<figure class="flex justify-center items-center">
  <img src={logo} {alt} class={w} />
  {#if showTitle}
    <h1 class="text-white">{name}</h1>
  {/if}
</figure>
