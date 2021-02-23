<script>
  import ErrorMessage from './ErrorMessage.svelte';
  import {getContext} from 'svelte';
  import {key} from './key';

  export let name;
  export let showErrors = true;

  const {errors, form, handleChange} = getContext(key);
</script>

<!-- prettier-ignore -->
<textarea

  {name}
  on:change={handleChange}
  on:blur={handleChange}
  {...$$props}
  class={$errors[name] ? 'form-control is-invalid' : 'form-control'}
>
  {$form[name]}
</textarea>
{#if showErrors}
  <ErrorMessage {name} />
{/if}
