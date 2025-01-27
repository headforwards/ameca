<script lang="ts">
  import { fly } from 'svelte/transition';
  
  export let sequence: boolean[];
</script>

<div class="hint-section">
  <p class="hint">Investigation notes:</p>
  <ul>
    <li class="hint-item">
      <span class="hint-text">Area 1: "Patterns repeat in threes..."</span>
      {#if sequence[0]}
        <span class="check" transition:fly={{ x: 20, duration: 300 }}>✅</span>
      {/if}
    </li>
    <li class="hint-item">
      <span class="hint-text">Area 2: "Click when the timer is even!"</span>
      {#if sequence[1]}
        <span class="check" transition:fly={{ x: 20, duration: 300 }}>✅</span>
      {/if}
    </li>
    <li class="hint-item">
      <span class="hint-text">Area 3: "Match the target frequency..."</span>
      {#if sequence[2]}
        <span class="check" transition:fly={{ x: 20, duration: 300 }}>✅</span>
      {/if}
    </li>
  </ul>
</div>

<style>
  
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