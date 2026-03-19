<script lang="ts">
	import type { QuestionSection } from '$lib/data/blit';

	import { cn } from '$lib/utils/cn';

	type Props = {
		items: QuestionSection[];
		activeId: string;
		onSelect: (id: string) => void;
		class?: string;
		align?: 'left' | 'center';
	};

	let { items, activeId, onSelect, class: className = '', align = 'left' }: Props = $props();

	function getOrderedItems() {
		const activeItem = items.find((item) => item.id === activeId);

		if (!activeItem) {
			return items;
		}

		return [activeItem, ...items.filter((item) => item.id !== activeId)];
	}

	function getInactiveItems() {
		return items.filter((item) => item.id !== activeId);
	}
</script>

<div
	class={cn(
		'mx-auto flex w-full max-w-4xl flex-col gap-1',
		align === 'center' ? 'items-center text-center' : 'items-start text-left',
		className
	)}
>
	{#each getOrderedItems().slice(0, 1) as item (item.id)}
		<button
			type="button"
			class="reddit-sans-semibold max-w-[26ch] text-[1.36rem] leading-tight tracking-[-0.045em] text-balance text-zinc-950 transition-colors duration-200 hover:text-zinc-800 sm:text-[1.5rem]"
			aria-current="true"
			onclick={() => onSelect(item.id)}
		>
			{item.label}
		</button>
	{/each}

	<div
		class={cn(
			'flex w-full flex-col gap-0.5 text-[1rem] leading-tight sm:text-[1.08rem]',
			align === 'center' ? 'items-center' : 'items-start'
		)}
	>
		{#each getInactiveItems() as item (item.id)}
			<button
				type="button"
				class="reddit-sans text-zinc-600 transition-colors duration-200 hover:text-zinc-800 hover:underline hover:decoration-zinc-500 hover:underline-offset-[0.14em]"
				onclick={() => onSelect(item.id)}
			>
				{item.label}
			</button>
		{/each}
	</div>
</div>
