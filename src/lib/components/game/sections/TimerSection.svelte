<script lang="ts">
	import { fly } from "svelte/transition";

  export let timer: number;
</script>

<div class="timer-section">
  <p>Timer: {timer}</p>
  {#if timer % 2 === 0}
    <p class="flash" transition:fly={{ y: 20, duration: 300 }}>
      Click now!
    </p>
  {/if}
</div>

<style>
  .timer-section {
    margin: 1rem 0;
    text-align: center;
  }

  .flash {
    color: #00cc00;
    font-weight: bold;
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }
</style>