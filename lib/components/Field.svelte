<script>
  import {Input} from 'sveltestrap';
  import {getContext} from 'svelte';
  import {key} from './key';

  export let name;
  export let type = 'text';

  const {errors, form, handleChange} = getContext(key);
</script>

<Input
  {name}
  {type}
  value={$form[name]}
  on:change={handleChange}
  on:blur={handleChange}
  {...$$props}
  class={$errors[name] ? 'form-control is-invalid' : ''}
/>
