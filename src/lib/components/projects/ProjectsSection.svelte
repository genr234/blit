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

<Section class="pt-10 sm:pt-14">
	<Container>
		<div class="mx-auto max-w-4xl text-center">
			<p class="reddit-sans text-[1.7rem] leading-none tracking-[-0.03em] text-zinc-400">
				and...
			</p>
			<p class="reddit-sans mt-4 text-[1.35rem] leading-tight text-balance text-zinc-500 sm:text-[1.65rem]">
				Check out some amazing projects made by other Hack Clubbers
			</p>
		</div>

		<div class="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2">
			{#each projects as project (project.title)}
				<ProjectCard {project} />
			{/each}
		</div>
	</Container>
</Section>
