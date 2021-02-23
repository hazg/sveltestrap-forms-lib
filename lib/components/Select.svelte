<script>
  import {Input} from 'sveltestrap';
  import {getContext} from 'svelte';
  import {key} from './key';

  export let name;

  const {errors, form, handleChange} = getContext(key);
</script>

<Input
  type="select"
  {name}
  value={$form[name]}
  on:change={handleChange}
  on:blur={handleChange}
  {...$$props}
  class={$errors[name] ? 'form-control is-invalid' : ''}
>
  <slot />
</Input>
