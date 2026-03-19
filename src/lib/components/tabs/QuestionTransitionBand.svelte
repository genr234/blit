<script lang="ts">
	import type { QuestionSection } from '$lib/data/blit';
	import { cn } from '$lib/utils/cn';

	type Props = {
		items: QuestionSection[];
		activeId: string;
		class?: string;
	};

	let { items, activeId, class: className = '' }: Props = $props();

	function handleSelect(id: string) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

</script>

<div class={cn('mx-auto flex w-full flex-col items-center text-center', className)}>
	{#each items as item (item.id)}
		<button
			type="button"
			class={cn(
				'reddit-sans-semibold flex items-center justify-center gap-2 leading-none transition-colors duration-200',
				item.id === activeId
					? 'text-[1.95rem] text-zinc-950 hover:text-zinc-800'
					: 'text-[1.3rem] text-zinc-300 hover:text-zinc-500]',
				item.id === items[0]?.id ? 'mt-0' : 'mt-3 sm:mt-4'
			)}
			aria-current={item.id === activeId ? 'true' : undefined}
			onclick={() => handleSelect(item.id)}
		>
			{#if item.id === activeId}
				<span aria-hidden="true" class="text-[0.72em] text-[#ff2f24]">›</span>
			{/if}
			<span class="text-balance">{item.label}</span>
		</button>
	{/each}
</div>
