<script lang="ts">
	import { slide } from 'svelte/transition';

	import { cn } from '$lib/utils/cn';

	type Props = {
		question: string;
		answer: string;
		open?: boolean;
		onToggle: () => void;
	};

	let { question, answer, open = false, onToggle }: Props = $props();
</script>

<div class="border-b-[3px] border-dotted border-zinc-300 py-4 last:border-b-0">
	<button
		type="button"
		class="flex w-full items-start justify-between gap-4 text-left"
		aria-expanded={open}
		onclick={onToggle}
	>
		<span
			class="reddit-sans-semibold text-[1.9rem] leading-[1.05] tracking-[-0.05em] text-zinc-950 sm:text-[2.4rem]"
		>
			{question}
		</span>

		<span class="mt-1 flex h-9 w-9 items-center justify-center text-[#ff2f24]">
			<svg
				viewBox="0 0 20 20"
				fill="none"
				aria-hidden="true"
				class={cn('h-7 w-7 transition-transform duration-200', open && 'rotate-45')}
			>
				<path
					d="M10 4v12M4 10h12"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-width="2.4"
				/>
			</svg>
		</span>
	</button>

	{#if open}
		<div transition:slide class="pt-4 pr-10">
			<p
				class="reddit-sans max-w-3xl text-[1.1rem] leading-[1.35] tracking-[-0.025em] text-zinc-600 sm:text-[1.25rem]"
			>
				{answer}
			</p>
		</div>
	{/if}
</div>
