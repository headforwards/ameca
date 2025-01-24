<script lang="ts">
    import Logo from '$lib/images/hf-white.png';
</script>

<svelte:head>
	<title>Headforwards Ameca Demo</title>
	<meta name="Demo app for the ameca event" content="demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
               <img src={Logo} alt="Welcome" /> 
			</picture>
		</span>

		The Headforwards Workshop, Running every 30 minutes!
	</h1>

	<h3>Choose from</h3>

	<h2>
		our <strong><a href="/target_practise">Target Practice Game</a></strong> and try to get the high score!
	</h2>
    	<i>Can you beat your manual score with an automated approach?</i>

	<h2> or </h2>
	
	<h2>
	 	our <strong><a href="/puzzle_room">Puzzle Room</a></strong> to help recover the database codes!
	</h2>
	<i>A sector showing as inactive, whats the code word & sector name  so we can re-activate it?</i>
	
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
        margin-bottom: 50px;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

    i {
        color: var(--color-theme-1-hover);
    }
</style>
