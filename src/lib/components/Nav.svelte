<script lang="ts">
	import { base } from '$app/paths';
	let { active = false } = $props();
</script>

<header
	class="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference invert"
>
	<a href="{base}/" class="text-2xl font-black uppercase tracking-tighter">Roi Borromeo</a>

	<nav class="hidden md:flex gap-8">
		<a href="{base}/#works" class="hover:underline font-bold uppercase">Works</a>
		<a href="{base}/#about" class="hover:underline font-bold uppercase">About</a>
		<a href="{base}/#contact" class="hover:underline font-bold uppercase">Contact</a>
	</nav>

	<button class="md:hidden brutal-btn !py-1 !px-4 text-sm"> Menu </button>
</header>
