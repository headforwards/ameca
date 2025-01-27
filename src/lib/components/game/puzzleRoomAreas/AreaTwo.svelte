<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';
  import TimerSection from '$lib/components/game/sections/TimerSection.svelte';

  export let isComplete = false;
  export let isEnabled = false;
  export let timer = 0;

  function handleClick() {
    if (isEnabled && timer % 2 === 0) {
      dispatchEvent(new CustomEvent('complete'));
    } else {
      dispatchEvent(new CustomEvent('reset'));
    }
  }
</script>

<div>
  <Button 
    on:click={handleClick}
    dataTestId="puzzle-button-2"
    disabled={isComplete || !isEnabled} 
  >
    {isComplete ? 'Area 2 Secured' : 'Investigate Area 2'}
  </Button>

  {#if isEnabled && !isComplete}
    <TimerSection {timer} />
  {/if}
</div>
