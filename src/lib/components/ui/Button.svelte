<script lang="ts">
    import type { ButtonType } from '$lib/components/game/types';
    
    export let type: ButtonType = 'button';
    export let disabled: boolean = false;
    export let testId: string | undefined = undefined;
    export let dataTestId: string | undefined = undefined;
</script>

<button 
    {type}
    {disabled}
    data-testid={dataTestId || testId}
    on:click
    class="primary-button"
>
    <span class="button-content">
        <slot />
        {#if disabled}
            <span class="lock-icon" aria-hidden="true">🔒</span>
        {/if}
    </span>
</button>

<style>
    .primary-button {
        background-color: var(--color-theme-1, #ffd700);
        color: var(--color-text, #333);
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s ease;
        width: 100%;
        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
    }

    .primary-button:hover:not(:disabled) {
        background-color: var(--color-theme-1, #ffd700);
        filter: brightness(1.1);
        transform: translateY(-2px);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .primary-button:active:not(:disabled) {
        transform: translateY(0);
        filter: brightness(0.95);
    }

    .primary-button:disabled {
        background-color: #8a8a8a;
        cursor: not-allowed;
        opacity: 0.8;
        transform: none;
        box-shadow: none;
    }

    .button-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .lock-icon {
        font-size: 0.9em;
    }

    @media (max-width: 768px) {
        .primary-button {
            padding: 0.5rem 1rem;
        }
    }
</style>