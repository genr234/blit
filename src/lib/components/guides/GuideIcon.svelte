<script lang="ts">
	import { cn } from '$lib/utils/cn';

	type Props = {
		icon: 'box' | 'chip' | 'code' | 'cad' | 'game' | 'launcher';
		class?: string;
	};

	let { icon, class: className = '' }: Props = $props();
</script>

<div class={cn('grid h-5 w-5 place-items-center text-zinc-800', className)}>
	{#if icon === 'box'}
		<svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M28 18.6665H4V21.3332H28V18.6665Z" fill="black" />
			<path d="M28 24H4V26.6667H28V24Z" fill="black" />
			<path d="M30.6667 21.3335H28V24.0002H30.6667V21.3335Z" fill="black" />
			<path d="M4.00004 21.3335H1.33337V24.0002H4.00004V21.3335Z" fill="black" />
			<path d="M6.66667 12H4V18.6667H6.66667V12Z" fill="black" />
			<path d="M9.33329 9.3335H6.66663V12.0002H9.33329V9.3335Z" fill="black" />
			<path d="M12 6.6665H9.33337V9.33317H12V6.6665Z" fill="black" />
			<path d="M20 4H12V6.66667H20V4Z" fill="black" />
			<path d="M14.6667 6.6665H12V15.9998H14.6667V6.6665Z" fill="black" />
			<path d="M20 6.6665H17.3334V15.9998H20V6.6665Z" fill="black" />
			<path d="M22.6667 6.6665H20V9.33317H22.6667V6.6665Z" fill="black" />
			<path d="M25.3333 9.3335H22.6666V12.0002H25.3333V9.3335Z" fill="black" />
			<path d="M28 12H25.3334V18.6667H28V12Z" fill="black" />
		</svg>
	{:else if icon === 'chip'}
		<svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M26.6667 2.6665H5.33337V5.33317H26.6667V2.6665Z" fill="black" />
			<path d="M26.6667 26.6665H5.33337V29.3332H26.6667V26.6665Z" fill="black" />
			<path d="M5.33329 5.3335H2.66663V26.6668H5.33329V5.3335Z" fill="black" />
			<path d="M29.3333 5.3335H26.6666V26.6668H29.3333V5.3335Z" fill="black" />
			<path d="M13.3333 8H10.6666V10.6667H13.3333V8Z" fill="black" />
			<path d="M18.6667 24H21.3334V21.3333H18.6667V24Z" fill="black" />
			<path d="M10.6667 10.6665H8V13.3332H10.6667V10.6665Z" fill="black" />
			<path d="M21.3333 21.3335H24V18.6668H21.3333V21.3335Z" fill="black" />
			<path d="M13.3333 13.3335H10.6666V16.0002H13.3333V13.3335Z" fill="black" />
			<path d="M18.6667 18.6665H21.3334V15.9998H18.6667V18.6665Z" fill="black" />
			<path d="M21.3334 10.6665H13.3334V13.3332H21.3334V10.6665Z" fill="black" />
			<path d="M10.6666 21.3335H18.6666V18.6668H10.6666V21.3335Z" fill="black" />
			<path d="M24 5.3335H21.3334V10.6668H24V5.3335Z" fill="black" />
			<path d="M7.99996 26.6665H10.6666V21.3332H7.99996V26.6665Z" fill="black" />
		</svg>
	{:else if icon === 'code'}
		<svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M9.33341 9.3335H6.66675V12.0002H9.33341V9.3335Z" fill="black" />
			<path d="M22.6666 9.3335H25.3333V12.0002H22.6666V9.3335Z" fill="black" />
			<path d="M17.3333 8H20V13.3333H17.3333V8Z" fill="black" />
			<path d="M14.6666 13.3335H17.3333V18.6668H14.6666V13.3335Z" fill="black" />
			<path d="M12.0001 18.6665H14.6667V23.9998H12.0001V18.6665Z" fill="black" />
			<path d="M6.66667 12H4V14.6667H6.66667V12Z" fill="black" />
			<path d="M25.3333 12H28V14.6667H25.3333V12Z" fill="black" />
			<path d="M3.99992 14.6665H1.33325V17.3332H3.99992V14.6665Z" fill="black" />
			<path d="M28.0001 14.6665H30.6667V17.3332H28.0001V14.6665Z" fill="black" />
			<path d="M6.66667 17.3335H4V20.0002H6.66667V17.3335Z" fill="black" />
			<path d="M25.3333 17.3335H28V20.0002H25.3333V17.3335Z" fill="black" />
			<path d="M9.33341 20H6.66675V22.6667H9.33341V20Z" fill="black" />
			<path d="M22.6666 20H25.3333V22.6667H22.6666V20Z" fill="black" />
		</svg>
	{:else if icon === 'cad'}
		<svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M8.00004 2.6665H5.33337V5.33317H8.00004V2.6665Z" fill="black" />
			<path d="M5.33329 5.3335H2.66663V8.00016H5.33329V5.3335Z" fill="black" />
			<path d="M10.6667 5.3335H8V8.00016H10.6667V5.3335Z" fill="black" />
			<path d="M8.00004 8H5.33337V26.6667H8.00004V8Z" fill="black" />
			<path d="M24 24H8V26.6667H24V24Z" fill="black" />
			<path d="M10.6667 21.3335H8V24.0002H10.6667V21.3335Z" fill="black" />
			<path d="M13.3333 18.6665H10.6666V21.3332H13.3333V18.6665Z" fill="black" />
			<path d="M16 16H13.3334V18.6667H16V16Z" fill="black" />
			<path d="M18.6667 13.3335H16V16.0002H18.6667V13.3335Z" fill="black" />
			<path d="M21.3333 10.6665H18.6666V13.3332H21.3333V10.6665Z" fill="black" />
			<path d="M29.3333 24H26.6666V26.6667H29.3333V24Z" fill="black" />
			<path d="M26.6667 21.3335H24V24.0002H26.6667V21.3335Z" fill="black" />
			<path d="M26.6667 26.6665H24V29.3332H26.6667V26.6665Z" fill="black" />
		</svg>
	{:else if icon === 'game'}
		<svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M26.6667 5.3335H5.33337V8.00016H26.6667V5.3335Z" fill="black" />
			<path d="M26.6667 24H5.33337V26.6667H26.6667V24Z" fill="black" />
			<path d="M5.33329 8H2.66663V24H5.33329V8Z" fill="black" />
			<path d="M29.3333 8H26.6666V24H29.3333V8Z" fill="black" />
			<path d="M13.3333 12H10.6666V20H13.3333V12Z" fill="black" />
			<path d="M16 14.6665H8V17.3332H16V14.6665Z" fill="black" />
			<path d="M21.3333 12H18.6666V14.6667H21.3333V12Z" fill="black" />
			<path d="M24 17.3335H21.3334V20.0002H24V17.3335Z" fill="black" />
		</svg>
	{/if}
</div>
