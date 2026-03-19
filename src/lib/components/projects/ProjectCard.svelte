<script lang="ts">
	import type { Project } from '$lib/data/blit';

	import ExternalLinkIcon from '$lib/components/ui/ExternalLinkIcon.svelte';
	import ProjectArt from '$lib/components/projects/ProjectArt.svelte';

	type Props = {
		project: Project;
	};

	let { project }: Props = $props();
</script>

<article class="mx-auto flex max-w-[22rem] flex-col items-center transition-transform duration-200 hover:-translate-y-1">
	<ProjectArt variant={project.art} class="w-full" />

	<div
		class="-mt-6 flex w-[86%] items-start justify-between rounded-[1.2rem] border border-zinc-200 bg-white px-4 py-3 shadow-[0_14px_22px_rgba(15,23,42,0.08)]"
	>
		<div>
			<h3 class="reddit-sans-semibold text-[1.5rem] leading-none tracking-[-0.045em] text-zinc-950">
				{project.title}
			</h3>
			<p class="reddit-sans mt-1 text-[0.97rem] leading-tight tracking-[-0.02em] text-zinc-700">
				{project.author}
			</p>
		</div>

		<ExternalLinkIcon class="mt-0.5 shrink-0" />
	</div>
</article>
