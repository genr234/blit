<script lang="ts">
	import type { Guide } from '$lib/data/blit';

	import ExternalLinkIcon from '$lib/components/ui/ExternalLinkIcon.svelte';
	import GuideIcon from '$lib/components/guides/GuideIcon.svelte';

	type Props = {
		guide: Guide;
	};

	let { guide }: Props = $props();
</script>

<button
	type="button"
	class="group flex min-h-[8.6rem] flex-col justify-between rounded-[1.2rem] border border-zinc-200 bg-white p-4 shadow-[0_12px_20px_rgba(15,23,42,0.07)] transition-transform duration-200 hover:-translate-y-1"
>
	<p
		class="reddit-sans-semibold max-w-[14ch] text-left text-[1.15rem] leading-[1.12] tracking-[-0.04em] text-zinc-950 sm:text-[1.25rem]"
	>
		{guide.title}
	</p>

	<div class="mt-4 flex items-end justify-between">
		<GuideIcon icon={guide.icon} />
		<ExternalLinkIcon class="transition-transform duration-200 group-hover:-translate-y-0.5" />
	</div>
</button>
