<script>
  import {getContext} from 'svelte';
  import {key} from './key';

  export let name;

  const {errors} = getContext(key);
</script>

{#if $errors[name]}
  <small class="text-danger" {...$$props}>{$errors[name]}</small>
{/if}
