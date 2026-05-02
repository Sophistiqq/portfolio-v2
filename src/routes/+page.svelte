<script lang="ts">
	import { base } from '$app/paths';
	import { projects } from '$lib/data/projects';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<svelte:head>
	<title>ROI BORROMEO | PIXEL PERFECT BRUTALISM</title>
</svelte:head>

<!-- Hero Section -->
<section
	class="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 border-b-8 border-brutal-black bg-brutal-yellow"
>
	<h1 class="text-6xl md:text-[12rem] leading-none mb-8">
		Pixel<br />Perfect<br /><span
			class="bg-brutal-black text-brutal-white px-4 inline-block mt-2 md:mt-6">Accuracy.</span
		>
	</h1>
	<p class="text-xl md:text-3xl max-w-2xl font-bold uppercase mb-12">
		I build minimalistic websites with a strong focus on what matters. Currently based in the
		Philippines.
	</p>
	<div class="flex flex-wrap gap-6">
		<a href="{base}/#works" class="brutal-btn text-xl">See My Works</a>
		<a href="{base}/#about" class="brutal-btn bg-brutal-white text-xl">The Story</a>
	</div>
</section>

<!-- Projects Section -->
<section id="works" class="p-6 md:p-12">
	<div class="flex justify-between items-end mb-12">
		<h2 class="text-5xl md:text-8xl">Selected<br />Works</h2>
		<p class="text-right font-bold uppercase max-w-[200px] hidden md:block">
			A collection of school and personal projects brought to life.
		</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

<!-- About/Skills Section (Condensed Brutalist) -->
<section id="about" class="bg-brutal-black text-brutal-white p-6 md:p-12 border-y-8 border-brutal-black">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
		<div>
			<h2 class="text-5xl md:text-8xl mb-8 text-brutal-yellow">My<br />Background</h2>
			<div class="space-y-6 text-lg md:text-xl font-medium">
				<p>
					For almost eight years, I've been on a journey with web development that started in senior high school.
				</p>
				<p>
					My hardware was a laptop with a broken hard drive connector and 2GB of RAM. I used my phone as a display.
				</p>
				<p>
					I embraced the command line, switched to Arch Linux, and learned system optimization.
				</p>
			</div>
		</div>
		<div class="flex flex-col justify-end">
			<div class="brutal-card bg-brutal-pink text-brutal-black brutal-shadow">
				<h3 class="text-3xl mb-4">Core Skills</h3>
				<ul class="grid grid-cols-2 gap-4 font-bold uppercase">
					<li>Frontend Dev</li>
					<li>Arch Linux</li>
					<li>SvelteKit</li>
					<li>Tailwind</li>
					<li>Bash Scripting</li>
					<li>Design</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section id="contact" class="p-6 md:p-12 bg-brutal-green">
	<div class="max-w-4xl">
		<h2 class="text-6xl md:text-9xl mb-12">Get In<br />Touch.</h2>
		<p class="text-2xl md:text-4xl font-black uppercase mb-12">
			I don't bite (unless you ask me to code in PHP 😅).
		</p>
		<a href="mailto:roi.for.work@gmail.com" class="brutal-btn text-2xl md:text-4xl w-full text-center">
			roi.for.work@gmail.com
		</a>
	</div>
</section>
