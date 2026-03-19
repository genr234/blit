<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import sketch from '$lib/assets/steps/sketch.png';
	import model from '$lib/assets/steps/model.png';
	import repo from '$lib/assets/steps/repo.png';
	import pcb from '$lib/assets/steps/pcb.png';

	type Props = {
		variant: 'sketch' | 'model' | 'repo' | 'pcb';
		class?: string;
	};

	let { variant, class: className = '' }: Props = $props();

	const photos = {
		sketch: sketch,
		model: model,
		repo: repo,
		pcb: pcb
	} as const;
</script>

<div
	data-asset-slot={photos[variant]}
	class={cn(
		'relative grid h-[11.5rem] place-items-center overflow-hidden rounded-[1.2rem]',
		className
	)}
>
	<img src={photos[variant]} alt={`${variant} step art`} class="max-h-full max-w-full" />
</div>
