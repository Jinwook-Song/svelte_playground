<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  let { children, ...props }: HTMLButtonAttributes = $props();
</script>

<button {...props}>{@render children()}</button>

<style>
  button {
    background-color: black;
    color: white;
    padding: 20px 24px;
    font-weight: normal;
    font-size: 22px;
    text-transform: uppercase;
    transition: all 0.3s;
    border: 1px solid white;
  }

  button:hover {
    background-color: white;
    color: black;
  }
</style>
