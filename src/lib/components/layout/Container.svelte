<script lang="ts">
	import type { Snippet } from 'svelte';

	import { cn } from '$lib/utils/cn';

	type Props = {
		as?: keyof HTMLElementTagNameMap;
		class?: string;
		narrow?: boolean;
		children?: Snippet;
	};

	let { as = 'div', class: className = '', narrow = false, children }: Props = $props();
</script>

<svelte:element
	this={as}
	class={cn('mx-auto w-full px-5 sm:px-6 lg:px-8', narrow ? 'max-w-4xl' : 'max-w-6xl', className)}
>
	{@render children?.()}
</svelte:element>
