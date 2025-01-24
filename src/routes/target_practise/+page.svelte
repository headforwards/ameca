<!-- src/routes/demoGame/+page.svelte -->
<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import Target from '$lib/components/game/Target.svelte';
  import GameStats from '$lib/components/game/GameStats.svelte';
  import StartScreen from '$lib/components/game/StartScreen.svelte';
  import { gameState } from '$lib/stores/gameStore';
  import { GAME_SETTINGS } from '$lib/components/game/types';
  import type { TargetPosition } from '$lib/components/game/types';

  let gameStarted = false;
  let targetVisible = false;
  let targetPosition: TargetPosition = { x: 0, y: 0 };
  let currentTestId = 'target-1';
  let timer: ReturnType<typeof setInterval> | undefined;

  function generateTargetPosition(): TargetPosition {
    const mainContainer = document.querySelector('main');
    if (!mainContainer) return { x: 0, y: 0 };

    const containerRect = mainContainer.getBoundingClientRect();
    
    const maxX = containerRect.width - GAME_SETTINGS.TARGET_SIZE - (GAME_SETTINGS.SCREEN_MARGIN * 2);
    const maxY = containerRect.height - GAME_SETTINGS.TARGET_SIZE - (GAME_SETTINGS.SCREEN_MARGIN * 2);
    
    const x = GAME_SETTINGS.SCREEN_MARGIN + (Math.random() * maxX);
    const y = GAME_SETTINGS.SCREEN_MARGIN + (Math.random() * maxY);
    
    return {
      x: Math.max(GAME_SETTINGS.SCREEN_MARGIN, Math.min(x, maxX)),
      y: Math.max(GAME_SETTINGS.SCREEN_MARGIN, Math.min(y, maxY))
    };
  }

  function spawnTarget(): void {
    targetVisible = false;
    targetPosition = generateTargetPosition();
    currentTestId = `target-${Math.floor(Math.random() * 1000)}`;
    
    setTimeout(() => {
      targetVisible = true;
    }, GAME_SETTINGS.SPAWN_DELAY);
  }

  function startGame(): void {
    gameStarted = true;
    gameState.set({
      score: 0,
      timeLeft: GAME_SETTINGS.DURATION,
      highScore: $gameState.highScore
    });
    
    spawnTarget();
    
    timer = setInterval(() => {
      gameState.update(state => ({
        ...state,
        timeLeft: state.timeLeft - 1
      }));

      if ($gameState.timeLeft <= 0) {
        endGame();
      }
    }, 1000);
  }

  function endGame(): void {
    gameStarted = false;
    targetVisible = false;
    if (timer) clearInterval(timer);
    
    gameState.update(state => ({
      ...state,
      highScore: Math.max(state.score, state.highScore)
    }));
  }

  function handleTargetHit(): void {
    gameState.update(state => ({
      ...state,
      score: state.score + 1
    }));
    spawnTarget();
  }

  onDestroy(() => {
    if (timer) clearInterval(timer);
  });
</script>

<div class="game-container" data-testid="game-container">
  {#if !gameStarted}
    <StartScreen 
      startGame={startGame} 
      highScore={$gameState.highScore} 
    />
  {:else}
    <GameStats />
    
    {#if targetVisible}
      <Target
        position={targetPosition}
        testId={currentTestId}
        onHit={handleTargetHit}
      />
    {/if}
  {/if}
</div>

<style>
  .game-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  :global(main) {
    padding: 0 !important;
    margin: 0 !important;
    max-width: 100% !important;
    position: relative;
  }
</style>