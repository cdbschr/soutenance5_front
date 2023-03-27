<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let text: string = "Bouton";
  export let primary: boolean = true;
  export let secondary: boolean = false;
  export let disabled: boolean = false;
  export let link: string | null = null;
</script>

<a href="/#{link}" class="flex justify-center w-full">
  <button
    class="my-3 py-2 px-4 w-3/4 md:w-1/10 rounded border-2 border-transparent focus:outline-none
    {primary ? 'bg-violet-600 text-white border-violet-600' : ''}
    {secondary ? 'bg-white text-violet-600 border-violet-600' : ''}
    {disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}"
    {disabled}
  >
    {text}
  </button>
</a>
