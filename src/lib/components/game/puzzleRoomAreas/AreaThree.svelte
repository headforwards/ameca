<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';
  import FrequencyControls from '$lib/components/game/FrequencyControls.svelte';

  export let isComplete = false;
  export let isEnabled = false;
  
  const TARGET_FREQUENCY = 42;
  let currentFrequency = 0;

  function handleClick() {
    if (isEnabled && currentFrequency === TARGET_FREQUENCY) {
      dispatchEvent(new CustomEvent('complete'));
    } else {
      dispatchEvent(new CustomEvent('reset'));
    }
  }

  function adjustFrequency(amount: number) {
    currentFrequency = Math.max(0, Math.min(100, currentFrequency + amount));
  }
</script>

<div>
  <Button 
    on:click={handleClick}
    dataTestId="puzzle-button-3"
    disabled={isComplete || !isEnabled} 
  >
    {isComplete ? 'Area 3 Secured' : 'Investigate Area 3'}
  </Button>

  {#if isEnabled && !isComplete}
    <FrequencyControls
      {currentFrequency}
      targetFrequency={TARGET_FREQUENCY}
      onAdjust={adjustFrequency}
    />
  {/if}
</div>