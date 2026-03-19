<script lang="ts">
	import { cn } from '$lib/utils/cn';

	type Props = {
		class?: string;
	};

	let { class: className = '' }: Props = $props();
</script>

<svg
	viewBox="0 0 12 12"
	fill="none"
	aria-hidden="true"
	class={cn('h-3 w-3 text-[#ff3b30]', className)}
>
	<path d="M2.25 6h6" stroke="currentColor" stroke-linecap="round" stroke-width="1.6" />
	<path
		d="m5.9 2.8 3.2 3.2-3.2 3.2"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="1.6"
	/>
</svg>
