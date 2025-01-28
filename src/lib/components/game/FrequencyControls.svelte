<script lang="ts">
  import { fly } from 'svelte/transition';
  export let currentFrequency: number;
  export let targetFrequency: number;
  export let onAdjust: (amount: number) => void;
</script>

<div class="area3-controls" transition:fly={{ y: 20, duration: 300 }}>
  <p class="target-frequency">Target Frequency: <span data-testid="frequency-target">{targetFrequency}</span></p>
  <p>Current Frequency: {currentFrequency}</p>
  <div class="frequency-controls">
    <button class="adjust-btn" data-testid="frequency-minus-ten" on:click={() => onAdjust(-10)}>-10</button>
    <button class="adjust-btn" data-testid="frequency-minus-one" on:click={() => onAdjust(-1)}>-1</button>
    <div class="frequency-display" data-testid="current-frequency">{currentFrequency}</div>
    <button class="adjust-btn" data-testid="frequency-plus-one" on:click={() => onAdjust(1)}>+1</button>
    <button class="adjust-btn" data-testid="frequency-plus-ten" on:click={() => onAdjust(10)}>+10</button>
  </div>
  <p class="hint-text">Match the target frequency and click "Investigate Area 3"</p>
</div>

<style>
  .area3-controls {
    margin: 1rem 0;
    padding: 1rem;
    background: var(--color-theme-3);
    border-radius: 4px;
    text-align: center;
  }

  .frequency-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin: 1rem 0;
  }

  .adjust-btn {
    background: var(--color-theme-1);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .adjust-btn:hover {
    filter: brightness(1.1);
  }

  .frequency-display {
    background: var(--color-theme-2);
    padding: 0.5rem 2rem;
    border-radius: 4px;
    min-width: 80px;
  }

  .hint-text {
    margin-top: 0.5rem;
    font-style: italic;
  }

  .target-frequency {
    font-size: 1.2em;
    font-weight: bold;
    color: var(--color-theme-1);
    margin-bottom: 0.5rem;
  }

</style>