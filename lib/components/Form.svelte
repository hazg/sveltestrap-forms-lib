<script>
  import {Form} from 'sveltestrap';
  import {setContext} from 'svelte';
  import {createForm} from '../create-form';
  import {key} from './key';

  export let initialValues = {};
  export let validate = null;
  export let validationSchema = null;
  export let onSubmit;

  // export let showErrors = true

  const {
    form,
    errors,
    touched,
    state,
    handleChange,
    handleSubmit,
    updateField,
    updateTouched,
  } = createForm({
    initialValues,
    validationSchema,
    validate,
    onSubmit,
  });

  setContext(key, {
    form,
    errors,
    touched,
    state,
    handleChange,
    handleSubmit,
    updateField,
    updateTouched,
  });
</script>

<Form on:submit={handleSubmit} {...$$restProps}>
  <slot
    {form}
    {errors}
    {touched}
    {state}
    {handleChange}
    {handleSubmit}
    {updateField}
    {updateTouched}
  />
</Form>
