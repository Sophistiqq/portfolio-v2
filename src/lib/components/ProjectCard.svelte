<script lang="ts">
	import { base } from '$app/paths';
	import type { Project } from '$lib/data/projects';
	let { project }: { project: Project } = $props();
</script>

<article class="brutal-card brutal-shadow-hover group flex flex-col gap-4 h-full">
	<div class="relative overflow-hidden brutal-border h-48 bg-brutal-black">
		<img
			src="{base}{project.image}"
			alt={project.name}
			class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
		/>
		<div
			class="absolute top-2 left-2 {project.color} brutal-border px-2 py-0.5 text-xs font-bold uppercase"
		>
			{project.type}
		</div>
	</div>

	<div class="flex-grow">
		<h3 class="text-2xl mb-2">{project.name}</h3>
		<p class="text-sm opacity-80 leading-tight mb-4">{project.description}</p>
	</div>

	<a 
		href={project.link} 
		target="_blank" 
		rel="noopener noreferrer" 
		class="brutal-btn w-full text-center text-sm"
	>
		View Project
	</a>
</article>
