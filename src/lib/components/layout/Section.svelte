<script lang="ts">
	import type { Snippet } from 'svelte';

	import { cn } from '$lib/utils/cn';

	type Props = {
		id?: string;
		class?: string;
		children?: Snippet;
	};

	let { id, class: className = '', children }: Props = $props();
</script>

<section
	{id}
	class={cn('relative scroll-mt-32 py-18 sm:scroll-mt-36 sm:py-24 lg:py-28', className)}
>
	{@render children?.()}
</section>
