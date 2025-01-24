<script lang="ts">
  type ButtonType = 'button' | 'submit' | 'reset';
  
  export let type: ButtonType = 'button';
  export let testId: string | undefined = undefined;
  export let dataTestId: string | undefined = undefined; 
</script>

<button 
  {type}
  data-testid={dataTestId || testId}
  on:click
  class="primary-button"
>
  <slot />
</button>
