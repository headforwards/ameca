<script lang="ts">
  import { gameState } from '$lib/stores/gameStore';
</script>

<div class="game-stats" data-testid="game-stats">
  <span>Score: {$gameState.score}</span>
  <span>Time: {$gameState.timeLeft}s</span>
</div>

<style>
  .game-stats {
    position: fixed;
    top: 1rem;
    right: 1rem;
    background: var(--color-theme-2);
    color: var(--color-theme-1);
    padding: 0.5rem 1rem;
    border-radius: 4px;
    display: flex;
    gap: 1rem;
    z-index: 10;
  }
</style>