<script lang="ts">
  import { fly } from 'svelte/transition';
  import type { TargetPosition } from './types';
  
  export let position: TargetPosition;
  export let testId: string;
  export let onHit: () => void;
</script>

<div
  class="target"
  on:click={onHit}
  data-testid={testId}
  style="left: {position.x}px; top: {position.y}px"
  transition:fly={{ y: 50, duration: 300 }}
>
  Click me!
</div>

<style>
  .target {
    position: absolute;
    width: 80px;
    height: 80px;
    background: var(--color-theme-3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text);
    border: 2px solid var(--color-text);
    cursor: pointer;
    user-select: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: transform 0.1s;
  }
  
  .target:hover {
    transform: scale(1.1);
  }
</style>
