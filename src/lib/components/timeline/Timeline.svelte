<script lang="ts">
	import type { QuestionSection, TimelineStepData } from '$lib/data/blit';

	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import QuestionTransitionBand from '$lib/components/tabs/QuestionTransitionBand.svelte';
	import TimelineStep from '$lib/components/timeline/TimelineStep.svelte';

	type Props = {
		id: string;
		steps: TimelineStepData[];
		questionItems: QuestionSection[];
	};

	let { id, steps, questionItems }: Props = $props();
</script>

<Section {id} class="pt-14 sm:pt-20">
	<Container class="max-w-5xl">
		<QuestionTransitionBand
			items={questionItems}
			activeId={id}
			class="mb-10"
		/>

		<div class="relative ml-5 sm:ml-6">
			<div
				aria-hidden="true"
				class="absolute top-1 bottom-0 left-0 w-0 -translate-x-1/2 border-l-[4px] border-dashed border-zinc-300"
			></div>

			{#each steps as step (step.number)}
				<TimelineStep {step} />
			{/each}

			<div
				class="absolute -bottom-1 left-0 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-zinc-400"
			></div>
		</div>
	</Container>
</Section>
