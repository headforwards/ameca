<script lang="ts">
  import { fly } from 'svelte/transition';
  import Button from '$lib/components/ui/Button.svelte';
  import TimerSection from '$lib/components/game/sections/TimerSection.svelte';
  import HintSection from '$lib/components/game/sections/HintSection.svelte';
  import FrequencyControls from '$lib/components/game/FrequencyControls.svelte';
  import { onDestroy } from 'svelte';
  import { TARGET_FREQUENCY } from '$lib/components/game/types';

  let isHiddenVisible = false;
  let sequence = [false, false, false];
  let showError = false;
  let clickCount = 0;
  let currentFrequency = 0;
  let lastClickTime = 0;
  let timer = 0;
  let timerInterval: ReturnType<typeof setInterval>;
  let showArea3Controls = false;

  // Timers
  function startTimer() {
    timer = 0;
    timerInterval = setInterval(() => {
      timer++;
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
    }
  }

  // Reactive decs
  $: isHiddenVisible = sequence.every(s => s);
  $: showArea3Controls = sequence[0] && sequence[1] && !sequence[2];
  $: {
    if (sequence[0] && !sequence[1]) {
      startTimer();
    } else {
      stopTimer();
    }
  }

  // Game logic 
  function resetSequence() {
    sequence = [false, false, false];
    clickCount = 0;
    showError = true;
    currentFrequency = 0;
    setTimeout(() => showError = false, 2000);
  }

  function handleButtonClick(index: number) {
    const currentTime = Date.now();

    if (index === 0) {
      if (currentTime - lastClickTime < 800) {
        resetSequence();
        return;
      }
      lastClickTime = currentTime;
      clickCount++;
      sequence[0] = clickCount === 3;
    }

    if (index === 1) {
      if (sequence[0] && timer % 2 === 0) {
        sequence[1] = true;
      } else {
        resetSequence();
      }
    }

    if (index === 2 && showArea3Controls) {
      if (currentFrequency === TARGET_FREQUENCY) {
        sequence[2] = true;
      } else {
        resetSequence();
      }
    }
  }

  function adjustFrequency(amount: number) {
    currentFrequency = Math.max(0, Math.min(100, currentFrequency + amount));
  }

  onDestroy(() => {
    stopTimer();
  });
</script>

<div class="puzzle-container">
  <h1>Welcome to the Puzzle Room</h1>
  <p>Find the hidden path... but be careful, the path is not straightforward.</p>
  
  <div class="puzzle-section">
    <div class="button-grid">
      <Button 
        on:click={() => handleButtonClick(0)}
        dataTestId="puzzle-button-1"
        disabled={sequence[0]} 
      >
        {sequence[0] ? 'Area 1 Secured' : 'Investigate Area 1'}
      </Button>

      <Button 
        on:click={() => handleButtonClick(1)}
        dataTestId="puzzle-button-2"
        disabled={sequence[1] || !sequence[0]} 
      >
        {sequence[1] ? 'Area 2 Secured' : 'Investigate Area 2'}
      </Button>

      <Button 
        on:click={() => handleButtonClick(2)}
        dataTestId="puzzle-button-3"
        disabled={sequence[2] || !sequence[1]} 
      >
        {sequence[2] ? 'Area 3 Secured' : 'Investigate Area 3'}
      </Button>
    </div>

    {#if showError}
      <p class="error" transition:fly={{ y: 20, duration: 300 }}>
        Investigation failed! Try again... (The investigation requires patience...)
      </p>
    {/if}

    {#if sequence[0] && !sequence[1]}
      <TimerSection {timer} />
    {/if}

    {#if showArea3Controls}
      <FrequencyControls
        {currentFrequency}
        targetFrequency={TARGET_FREQUENCY}
        onAdjust={adjustFrequency}
      />
    {/if}

    <HintSection {sequence} />
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

  .error {
    color: #cc0000;
    margin-top: 1rem;
    text-align: center;
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
</style>