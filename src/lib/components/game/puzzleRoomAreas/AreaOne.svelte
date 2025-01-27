<script lang="ts">
  import Button from '$lib/components/ui/Button.svelte';

  export let isComplete = false;
  
  let clickCount = 0;
  let lastClickTime = 0;

  function handleClick() {
    const currentTime = Date.now();
    
    if (currentTime - lastClickTime < 800) {
      clickCount = 0;
      dispatchEvent(new CustomEvent('reset'));
      return;
    }

    lastClickTime = currentTime;
    clickCount++;

    if (clickCount === 3) {
      dispatchEvent(new CustomEvent('complete'));
    }
  }
</script>

<Button 
  on:click={handleClick}
  dataTestId="puzzle-button-1"
  disabled={isComplete} 
>
  {isComplete ? 'Area 1 Secured' : 'Investigate Area 1'}
</Button>
