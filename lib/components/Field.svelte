<script>
  import {Input} from 'sveltestrap';
  import ErrorMessage from './ErrorMessage.svelte';
  import {getContext} from 'svelte';
  import {key} from './key';

  export let name;
  export let showErrors = true;
  export let type = 'text';

  const {errors, form, handleChange} = getContext(key);
</script>

<Input
  {name}
  {type}
  value={$form[name]}
  on:change={handleChange}
  on:blur={handleChange}
  class={$errors[name] ? 'form-control is-invalid' : 'form-control'}
  {...$$props}
/>
{#if showErrors}
  <ErrorMessage {name} />
{/if}
