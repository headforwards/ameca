<script lang="ts">
  import { fly } from 'svelte/transition';
  let showSolutions = false;
</script>

<div class="answers-container">
  <h1>Puzzle Room Solutions</h1>
  
  <div class="warning-section">
    <p>⚠️ Spoiler Alert! This page contains solutions to the puzzle room challenges.</p>
    <button 
      class="reveal-button" 
      on:click={() => showSolutions = !showSolutions}
    >
      {showSolutions ? 'Hide' : 'Reveal'} Solutions
    </button>
  </div>

  {#if showSolutions}
    <div class="solutions" transition:fly={{ y: 20, duration: 300 }}>
      <section class="solution-section">
        <h2>Area 1: Pattern Challenge</h2>
        <div class="solution-content">
          <p class="hint">"Patterns repeat in threes..."</p>
          <div class="solution-steps">
            <h3>Solution:</h3>
            <ol>
              <li>Click the "Investigate Area 1" button exactly three times</li>
              <li>Wait at least 0.8 seconds between each click</li>
              <li>A checkmark will appear when successful</li>
            </ol>
            <div class="note">
              Note: Clicking too quickly or too many times will reset progress
            </div>
          </div>
        </div>
      </section>

      <section class="solution-section">
        <h2>Area 2: Timing Challenge</h2>
        <div class="solution-content">
          <p class="hint">"Click when the timer is even!"</p>
          <div class="solution-steps">
            <h3>Solution:</h3>
            <ol>
              <li>Click "Investigate Area 2" when timer says "click now"</li>
              <li>This requires precise timing</li>
              <li>Success depends on clicking at exactly the right moment</li>
            </ol>
            <div class="note">
              Tip: Watch the timer closely and be ready to click, its when its divisble by 2 so shouldnt be hard!
            </div>
          </div>
        </div>
      </section>

      <section class="solution-section">
        <h2>Area 3: Sequence Challenge</h2>
        <div class="solution-content">
          <p class="hint">"Match the target frequency..."</p>
          <div class="solution-steps">
            <h3>Solution:</h3>
            <ol>
              <li>Complete Area 1 challenge first</li>
              <li>Complete Area 2 challenge</li>
              <li>Only then will Area 3 become completable</li>
              <li>Youll have to hit the target frequency to unlock the hidden panel!</li>
            </ol>
            <div class="note">
              Important: 👀™️🦆
            </div>
          </div>
        </div>
      </section>

      <section class="solution-section">
        <h2>Automation Tips</h2>
        <div class="solution-content">
          <h3>Key Elements:</h3>
          <ul>
            <li>Each button has a unique data-testid: "puzzle-button-1", "puzzle-button-2", "puzzle-button-3"</li>
            <li>Checkmarks appear when conditions are met</li>
            <li>The hidden link container has data-testid="hidden-link-container"</li>
            <li>The final link has data-testid="secret-link"</li>
          </ul>
          <div class="note">
            For automation: Remember to handle timing constraints and state changes
          </div>
        </div>
      </section>
    </div>
  {/if}
</div>

<style>
  .answers-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  .warning-section {
    background: #666;
    padding: 1rem;
    border-radius: 4px;
    margin: 2rem 0;
    text-align: center;
  }

  .reveal-button {
    background: var(--color-theme-1);
    color: var(--color-theme-3);
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 1rem;
    font-size: 1rem;
    transition: background 0.2s;
  }

  .reveal-button:hover {
    background: var(--color-theme-1-hover);
  }

  .solutions {
    margin-top: 2rem;
  }

  .solution-section {
    background:  var(--color-theme-3);
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 1.5rem;
    margin-bottom: 2rem;
  }

  .solution-section h2 {
    color: #ff3e00;
    margin-top: 0;
  }

  .hint {
    font-style: italic;
    color: #666;
    border-left: 3px solid #ff3e00;
    padding-left: 1rem;
    margin: 1rem 0;
  }

  .solution-steps {
    margin-top: 1rem;
  }

  .solution-steps h3 {
    margin-bottom: 0.5rem;
  }

  ol, ul {
    margin: 0.5rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin: 0.5rem 0;
  }

  .note {
    background:  rgb(35, 35, 35);
    padding: 0.8rem;
    border-radius: 4px;
    margin-top: 1rem;
    font-size: 0.9rem;
  }

  @media (max-width: 600px) {
    .answers-container {
      padding: 1rem;
    }
  }
</style>