<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import ultraterm from '$lib/assets/projects/ultraterm.png';
	import deskmate from '$lib/assets/projects/deskmate.png';
	import bomb from '$lib/assets/projects/bomb.png';
	import keyboard from '$lib/assets/projects/keyboard.png';

	type Props = {
		variant: 'ultraterm' | 'deskmate' | 'bomb' | 'keyboard';
		class?: string;
	};

	let { variant, class: className = '' }: Props = $props();

	const photos = {
		ultraterm: ultraterm,
		deskmate: deskmate,
		bomb: bomb,
		keyboard: keyboard
	};
</script>

<div
	data-asset-slot={photos[variant]}
	class={cn('flex h-56 min-h-0 min-w-0 items-center justify-center px-6 text-center', className)}
>
	<img
		src={photos[variant]}
		alt={`${variant} project art`}
		class="max-h-full max-w-full shrink object-contain"
	/>
</div>
