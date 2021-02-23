<script>
  import {Input} from 'sveltestrap';
  import ErrorMessage from './ErrorMessage.svelte';
  import {getContext} from 'svelte';
  import {key} from './key';

  export let name;
  export let showErrors = true;

  const {errors, form, handleChange} = getContext(key);
</script>

<Input
  type="select"
  {name}
  value={$form[name]}
  on:change={handleChange}
  on:blur={handleChange}
  class={$errors[name] ? 'form-control is-invalid' : 'form-control'}
  {...$$props}
>
  <slot />
</Input>
{#if showErrors}
  <ErrorMessage {name} />
{/if}
