<script lang="ts">
  import { fly } from 'svelte/transition';
  import type { TargetPosition } from './types';
 
  export let position: TargetPosition;
  export let testId: string;
  export let onHit: () => void;

  const randomDirection = () => {
    // Get viewport dimensions and target position
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Calculate distance from center of viewport to target
    const centerX = viewportWidth / 2 - position.x;
    const centerY = viewportHeight / 2 - position.y;
    
    // Calculate max safe distance based on position
    const maxDistance = Math.min(
        Math.abs(centerX), 
        Math.abs(centerY), 
        viewportWidth / 3, 
        viewportHeight / 3
    );
    
    const distance = Math.random() * (maxDistance - 100) + 100;
    const angle = Math.random() * Math.PI * 2;
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance
    };
  };

  const randomDuration = () => Math.floor(Math.random() * 200) + 100; // Random duration 100-300ms

  const flyDirection = randomDirection();
  const duration = randomDuration();
</script>

<div
  class="target"
  on:click={onHit}
  data-testid={testId}
  style="left: {position.x}px; top: {position.y}px"
  transition:fly={{ x: flyDirection.x, y: flyDirection.y, duration }}
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