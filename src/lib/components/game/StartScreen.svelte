<script lang="ts">
  import { fly } from 'svelte/transition';
  import Button from '$lib/components/ui/Button.svelte';

  export let startGame: () => void;
  export let highScore: number;
</script>

<div 
  class="start-screen" 
  transition:fly={{ y: 200, duration: 500 }}
>
  <h1>Target Practice</h1>
  <p>Click the targets as they appear! Practice your automation skills.</p>
  <p>High Score: {highScore}</p>
  <p>Hints for automation:</p>
  <ul>
    <li>Each target has a unique data-testid</li>
    <li>You'll need to handle elements that appear and disappear</li>
    <li>Watch out for changing positions!</li>
  </ul>
  <Button 
    on:click={startGame}
    testId="start-button"
  >
    Start Game
  </Button>
</div>

<style>
  .start-screen {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    padding: 2rem;
    background: var(--color-theme-3);
    border-radius: 8px;
    box-shadow: 0 4px 6px var(--color-theme-3);
  }

  h1 {
    margin: 0 0 1rem 0;
  }

  ul {
    text-align: left;
    margin: 1rem 0;
  }

  li {
    margin: 0.5rem 0;
  }
</style>