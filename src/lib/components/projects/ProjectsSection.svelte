<script lang="ts">
	import type { Project } from '$lib/data/blit';

	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import ProjectCard from '$lib/components/projects/ProjectCard.svelte';

	type Props = {
		projects: Project[];
	};

	let { projects }: Props = $props();
</script>

<Section class="pt-24 sm:pt-28">
	<Container>
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="reddit-sans-bold text-5xl leading-none text-balance text-zinc-950">
				Need some inspiration?
			</h2>
			<p class="reddit-sans mt-3 text-xl leading-tight text-balance text-zinc-500">
				Check out some amazing projects made by other Hack Clubbers
			</p>
		</div>

		<div class="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-2">
			{#each projects as project (project.title)}
				<ProjectCard {project} />
			{/each}
		</div>
	</Container>
</Section>
