<script lang="ts">
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import IconSlotMachine from '$lib/components/slotmachine/IconSlotMachine.svelte';

	type SpinResult = {
		labels: string[];
		indexes: number[];
		text: string;
	};

	let machine: { spin: (targets?: number[]) => Promise<SpinResult> } | null = null;
	let responseText = $state(
		'Spin me and I will give you a random project idea to work on! Spin me spin me spin me'
	);
	let requestState = $state<'idle' | 'spinning' | 'sending'>('idle');
	let errorText = $state('');
	let forcedWinningIndexes = $state<number[] | null>(null);

	const buttonLabel = $derived(
		requestState === 'spinning'
			? 'spinning...'
			: requestState === 'sending'
				? 'thinking...'
				: 'spin'
	);

	async function handleSpin(event: MouseEvent) {
		if (!machine || requestState !== 'idle') {
			return;
		}

		errorText = '';
		requestState = 'spinning';
		forcedWinningIndexes = event.shiftKey
			? (() => {
					const winningIndex = Math.floor(Math.random() * 9);
					return Array.from({ length: 3 }, () => winningIndex);
			  })()
			: null;

		try {
			const result = await machine.spin(forcedWinningIndexes ?? undefined);

			requestState = 'sending';

			const response = await fetch('/api/slotmachine', {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(result)
			});

			const payload = await response.json();

			if (!response.ok) {
				throw new Error(payload?.message ?? 'Something went wrong.');
			}

			responseText =
				typeof payload?.message === 'string'
					? payload.message
					: `You rolled ${result.text}.`;
		} catch (error) {
			errorText = error instanceof Error ? error.message : 'Could not reach the slot machine endpoint.';
		} finally {
			requestState = 'idle';
			forcedWinningIndexes = null;
		}
	}
</script>

<Section class="pt-16 pb-24 sm:pt-20 sm:pb-28">
	<Container class="max-w-6xl">
		<p
			class="reddit-sans mx-auto text-center text-[1.5rem] leading-none tracking-[-0.03em] text-zinc-400 sm:text-[1.8rem]"
		>
			Need inspiration?
		</p>

		<h2
			class="reddit-sans-bold mx-auto mt-6 max-w-[13ch] text-center text-[2.8rem] leading-[0.95] tracking-[-0.055em] text-zinc-950 sm:text-[4.1rem]"
		>
			Have a go at the Idea-o-Matic!
		</h2>

		<div class="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-end">
			<div class="relative rounded-[1.55rem] border border-zinc-200 bg-white px-7 py-7 shadow-[0_16px_28px_rgba(15,23,42,0.08)] sm:min-h-[16rem] sm:px-9 sm:py-8">
				<p
					class="reddit-sans max-w-[28ch] text-[1.15rem] leading-[1.32] tracking-[-0.025em] text-zinc-600 sm:text-[1.35rem]"
				>
					{responseText}
				</p>

				{#if errorText}
					<p class="reddit-sans mt-4 text-[0.98rem] leading-tight text-[#c7372f]">
						{errorText}
					</p>
				{/if}

				<div
					aria-hidden="true"
					class="absolute bottom-0 right-7 h-8 w-8 translate-y-1/2 rotate-45 border-r border-b border-zinc-200 bg-white shadow-[8px_8px_14px_rgba(15,23,42,0.05)] lg:top-[68%] lg:right-0 lg:bottom-auto lg:translate-x-1/2 lg:translate-y-0 lg:-rotate-45 lg:border-b lg:border-r"
				></div>
			</div>

			<div class="flex flex-col gap-3 lg:pb-1">
				<IconSlotMachine bind:this={machine} showResult={false} spriteOffsetX={-5} class="mx-auto lg:mx-0" />

				<button
					type="button"
					class="reddit-sans-semibold rounded-[0.7rem] bg-zinc-900 px-5 py-3 text-[1.3rem] leading-none tracking-[-0.03em] text-white transition-colors duration-200 hover:bg-zinc-800 disabled:cursor-wait disabled:bg-zinc-700"
					disabled={requestState !== 'idle'}
					onclick={handleSpin}
				>
					{buttonLabel}
				</button>
			</div>
		</div>
	</Container>
</Section>
