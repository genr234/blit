<script lang="ts">
	import { cn } from '$lib/utils/cn';

	type Props = {
		class?: string;
	};

	let { class: className = '' }: Props = $props();
</script>

<div
	aria-hidden="true"
	class={cn('bg-plus-pattern pointer-events-none absolute inset-0', className)}
></div>
