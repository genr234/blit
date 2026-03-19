<script lang="ts">
	import type { Guide, QuestionSection } from '$lib/data/blit';

	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import GuideCard from '$lib/components/guides/GuideCard.svelte';
	import QuestionTransitionBand from '$lib/components/tabs/QuestionTransitionBand.svelte';

	type Props = {
		id: string;
		guides: Guide[];
		questionItems: QuestionSection[];
	};

	let { id, guides, questionItems }: Props = $props();
</script>

<Section {id} class="overflow-hidden py-24 sm:py-28">
	<div
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#fffafc_0%,#f9eeff_10%,#f6e7ff_24%,#f4e2ff_50%,#f6e7ff_76%,#f9eeff_90%,#fffafc_100%)]"
	></div>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_14%,rgba(255,255,255,0.42)_0%,rgba(255,255,255,0.14)_34%,rgba(255,255,255,0)_68%)]"
	></div>

	<Container class="relative max-w-6xl">
		<QuestionTransitionBand items={questionItems} activeId={id} class="mb-10" />

		<h2
			class="reddit-sans-semibold text-center text-[2.35rem] leading-none tracking-[-0.055em] text-zinc-950 sm:text-[3.4rem]"
		>
			That’s okay! None of us had either!
		</h2>

		<div class="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-start">
			<div>
				<p
					class="reddit-sans max-w-[32rem] text-[1.18rem] leading-[1.28] tracking-[-0.03em] text-zinc-600 sm:text-[1.4rem]"
				>
					Hack Clubbers all around the world started their project from scratch with messy wires,
					lots of hot glue, cardboard, and still made amazing things. If you ever feel blocked,
					I conveniently placed some guides here to give you a good start!
				</p>
			</div>

			<img
				src="https://cdn.hackclub.com/019d0158-6d73-701f-a267-9b690f22a1dc/Screenshot%202026-03-17%20at%2021.01.50%201.png"
				width="370"
				height="250"
				alt="Messy table"
				class="rounded-xl"
			/>
		</div>

		<div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each guides as guide (guide.title)}
				<GuideCard {guide} />
			{/each}
		</div>
	</Container>
</Section>
