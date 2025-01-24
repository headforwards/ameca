<script lang="ts">
  import { fly } from 'svelte/transition';
  import Button from '$lib/components/ui/Button.svelte';

  let isHiddenVisible = false;
  let clickCount = 0;
  let sequence = [false, false, false];
  let showError = false;
  let lastClickTime = 0;
  
  // Hidden element will only show when all conditions are met
  $: isHiddenVisible = sequence.every(s => s);

  function handleButtonClick(index: number) {
    const currentTime = Date.now();
    
    // Reset sequence if clicking too fast
    if (currentTime - lastClickTime < 800) {
      sequence = [false, false, false];
      showError = true;
      setTimeout(() => showError = false, 2000);
      return;
    }
    
    lastClickTime = currentTime;
    clickCount++;

    // Different conditions for each button
    switch(index) {
      case 0:
        // First button needs exactly 3 clicks
        sequence[0] = clickCount % 3 === 0;
        break;
      case 1:
        // Second button needs to be clicked when time milliseconds end in 0
        sequence[1] = currentTime % 10 === 0;
        break;
      case 2:
        // Third button needs to be clicked after the others
        sequence[2] = sequence[0] && sequence[1];
        break;
    }

    // Reset if wrong sequence
    if (!sequence[index]) {
      const otherIndices = [0, 1, 2].filter(i => i !== index);
      otherIndices.forEach(i => sequence[i] = false);
    }
  }
</script>

<div class="puzzle-container">
  <h1>Welcome to the Puzzle Room</h1>
  <p>Find the hidden path... but be careful, the path is not straightforward.</p>
  
  <div class="puzzle-section">
    <div class="button-grid">
      <Button 
        on:click={() => handleButtonClick(0)}
        dataTestId="puzzle-button-1"
      >
        Investigate Area 1
      </Button>

      <Button 
        on:click={() => handleButtonClick(1)}
        dataTestId="puzzle-button-2"
      >
        Investigate Area 2
      </Button>

      <Button 
        on:click={() => handleButtonClick(2)}
        dataTestId="puzzle-button-3"
      >
        Investigate Area 3
      </Button>
    </div>

    {#if showError}
      <p class="error" transition:fly={{ y: 20, duration: 300 }}>
        Too fast! The investigation requires patience...
      </p>
    {/if}

    <div class="hint-section">
      <p class="hint">Investigation notes:</p>
      <ul>
        <li class="hint-item">
          <span class="hint-text">Area 1: "Patterns repeat in threes..."</span>
          {#if sequence[0]}
            <span class="check" transition:fly={{ x: 20, duration: 300 }}>
              ✅
            </span>
          {/if}
        </li>
        <li class="hint-item">
          <span class="hint-text">Area 2: "Time is of the essence..."</span>
          {#if sequence[1]}
            <span class="check" transition:fly={{ x: 20, duration: 300 }}>
              ✅
            </span>
          {/if}
        </li>
        <li class="hint-item">
          <span class="hint-text">Area 3: "The path must be prepared..."</span>
          {#if sequence[2]}
            <span class="check" transition:fly={{ x: 20, duration: 300 }}>
               ✅
            </span>
          {/if}
        </li>
      </ul>
    </div>
  </div>

  {#if isHiddenVisible}
    <div 
      class="hidden-element"
      transition:fly={{ y: 20, duration: 500 }}
      data-testid="hidden-link-container"
    >
      <p>You've uncovered something interesting...</p>
      <a href="/puzzle_room/secret" data-testid="secret-link">
        <span class="visually-hidden">Path to secret</span>
        🔍
      </a>
    </div>
  {/if}
</div>

<style>
  .puzzle-container {
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }

  .puzzle-section {
    margin: 2rem 0;
  }

  .button-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .hidden-element {
    margin-top: 2rem;
    padding: 1rem;
    border: 1px dashed #ccc;
    border-radius: 4px;
    opacity: 0.7;
    background: var(--color-theme-3);
  }

  .hidden-element a {
    text-decoration: none;
    font-size: 1.5rem;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  .error {
    color: #cc0000;
    margin-top: 1rem;
    text-align: center;
  }

  .hint-section {
    margin-top: 2rem;
    padding: 1rem;
    background: var(--color-theme-3);
    border-radius: 4px;
  }

  .hint {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  .hint-item {
    margin: 0.5rem 0;
    color: var(--color-theme-1);
    font-style: italic;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .hint-text {
    flex: 1;
  }

  .check {
    display: inline-flex;
    align-items: center;
  }
</style>