<script lang="ts">
	import { onMount } from 'svelte';

	import type { TimelineStepData } from '$lib/data/blit';

	import InlineGlyph from '$lib/components/ui/InlineGlyph.svelte';
	import StepArt from '$lib/components/timeline/StepArt.svelte';
	import StreakCard from '$lib/components/timeline/StreakCard.svelte';

	type Props = {
		step: TimelineStepData;
	};

	let { step }: Props = $props();

	let stepElement = $state<HTMLElement | null>(null);
	let isVisible = $state(false);

	onMount(() => {
		if (!stepElement || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			isVisible = true;
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry?.isIntersecting) {
					isVisible = true;
					observer.disconnect();
				}
			},
			{
				threshold: 0.2,
				rootMargin: '0px 0px -12% 0px'
			}
		);

		observer.observe(stepElement);

		return () => observer.disconnect();
	});
</script>

<article
	bind:this={stepElement}
	class="relative pb-16 pl-10 transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] last:pb-0 sm:pl-16"
	class:opacity-100={isVisible}
	class:translate-y-0={isVisible}
	class:opacity-0={!isVisible}
	class:translate-y-8={!isVisible}
	style={`transition-delay:${Math.max(0, step.number - 1) * 80}ms;`}
>
	<div
		class="reddit-sans-xbold absolute top-1 left-0 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-[#ff2f24] text-lg text-white transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
		class:scale-100={isVisible}
		class:scale-90={!isVisible}
	>
		{step.number}
	</div>

	<div
		class="grid gap-6 md:grid-cols-[minmax(0,1fr)_14rem] md:items-start lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-8"
	>
		<div>
			<h3 class="reddit-sans-semibold text-[2rem] leading-[1.02] text-zinc-950 sm:text-[2.35rem]">
				<span>{step.title}</span>
				<InlineGlyph
					glyph={step.icon}
					class="ml-[0.18em] inline-block h-[0.82em] w-[0.82em] align-[-0.08em]"
				/>
			</h3>

			<p
				class="reddit-sans mt-4 max-w-[20rem] text-[1.18rem] leading-[1.28] tracking-[-0.03em] text-zinc-600 sm:max-w-[27rem] sm:text-[1.36rem]"
			>
				{step.body}
			</p>

			{#if step.streak}
				<div class="mt-6 max-w-[31rem]">
					<StreakCard active={isVisible} />
				</div>
			{/if}
		</div>

		<StepArt variant={step.art} class="mt-1 md:w-full" />
	</div>
</article>
