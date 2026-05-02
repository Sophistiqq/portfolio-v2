<script lang="ts">
	import './layout.css';
	import Nav from '$lib/components/Nav.svelte';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Nav />

<main class="pt-24">
	{@render children()}
</main>

<footer class="p-12 brutal-border mt-24 bg-brutal-black text-brutal-white">
	<div class="flex flex-col md:flex-row justify-between items-center gap-8">
		<h2 class="text-4xl">Let's build something bold.</h2>
		<div class="flex gap-6">
			<a href="https://github.com/Sophistiqq" class="hover:text-brutal-yellow transition-colors">GitHub</a>
			<a href="https://facebook.com/PIMD.xD" class="hover:text-brutal-yellow transition-colors">Facebook</a>
			<a href="mailto:roi.for.work@gmail.com" class="hover:text-brutal-yellow transition-colors">Email</a>
		</div>
	</div>
	<p class="mt-12 opacity-50 text-sm">© 2026 ROI BORROMEO. PIXEL PERFECT BRUTALISM.</p>
</footer>
