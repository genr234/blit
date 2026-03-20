<script lang="ts">
	import { onMount } from 'svelte';

	import { cn } from '$lib/utils/cn';

	const DEFAULT_ICONS = [
		'bluetooth',
		'wifi',
		'music',
		'calls',
		'cat',
		'nature',
		'ai',
		'camera',
		'battery'
	];

	const DEFAULT_SPRITE_URL =
		'https://cdn.hackclub.com/019d0648-9aa4-7caa-be3f-7ac9d2b84034/Group%2017.svg';
	const DEFAULT_SPRITE_ORDER = [1, 0, 8, 7, 6, 5, 4, 3, 2];

	const BASE_REPEAT = 2;
	const SPIN_EASING = 'cubic-bezier(.41,-0.01,.63,1.09)';

	type SpinResult = {
		labels: string[];
		indexes: number[];
		text: string;
	};

	type ReelState = {
		translateY: number;
		transition: string;
	};

	type Props = {
		class?: string;
		icons?: string[];
		spriteUrl?: string;
		spriteOrder?: number[];
		reelCount?: number;
		iconSize?: number;
		spriteOffsetX?: number;
		timePerIcon?: number;
		initialIndexes?: number[];
		autoSpin?: boolean;
		showResult?: boolean;
	};

	let {
		class: className = '',
		icons = DEFAULT_ICONS,
		spriteUrl = DEFAULT_SPRITE_URL,
		spriteOrder = DEFAULT_SPRITE_ORDER,
		reelCount = 3,
		iconSize = 79,
		spriteOffsetX = -7,
		timePerIcon = 100,
		initialIndexes = [0, 0, 0],
		autoSpin = false,
		showResult = true
	}: Props = $props();

	let indexes = $state<number[]>([]);
	let reelStates = $state<ReelState[]>([]);
	let isSpinning = $state(false);
	let statusText = $state('');

	const iconCount = $derived(Math.max(1, icons.length));
	const slotHeight = $derived(iconSize * 3);
	const panelWidth = $derived(reelCount * iconSize + 32);
	const repeatCount = $derived(BASE_REPEAT + reelCount + 4);
	const repeatedIcons = $derived(
		Array.from({ length: iconCount * repeatCount }, (_, index) => index % iconCount)
	);

	function mod(value: number, divisor: number) {
		return ((value % divisor) + divisor) % divisor;
	}

	function getCanonicalCell(index: number) {
		return BASE_REPEAT * iconCount + mod(index, iconCount);
	}

	function getSpriteRow(index: number) {
		return spriteOrder[mod(index, iconCount)] ?? mod(index, iconCount);
	}

	function getTranslateYForCell(cellIndex: number) {
		return -(cellIndex * iconSize - iconSize);
	}

	function createReelState(index: number): ReelState {
		return {
			translateY: getTranslateYForCell(getCanonicalCell(index)),
			transition: 'none'
		};
	}

	function syncIndexes() {
		indexes = Array.from({ length: reelCount }, (_, index) =>
			mod(initialIndexes[index] ?? 0, iconCount)
		);
		reelStates = indexes.map((index) => createReelState(index));
	}

	function getResult(indexList = indexes): SpinResult {
		const labels = indexList.map((index) => icons[mod(index, iconCount)] ?? `${index}`);

		return {
			labels,
			indexes: [...indexList],
			text: labels.join(' - ')
		};
	}

	function wait(duration: number) {
		return new Promise<void>((resolve) => {
			window.setTimeout(resolve, duration);
		});
	}

	async function roll(reelIndex: number, targetIndex?: number) {
		const currentIndex = indexes[reelIndex] ?? 0;
		const resolvedTarget =
			targetIndex === undefined ? Math.floor(Math.random() * iconCount) : mod(targetIndex, iconCount);
		const extraRounds = reelIndex + 2;
		const stepDelta = extraRounds * iconCount + mod(resolvedTarget - currentIndex, iconCount);
		const startCell = getCanonicalCell(currentIndex);
		const targetCell = startCell + stepDelta;
		const duration = (8 + stepDelta) * timePerIcon;
		const delay = reelIndex * 150;

		await wait(delay);

		reelStates[reelIndex] = {
			translateY: getTranslateYForCell(targetCell),
			transition: `transform ${duration}ms ${SPIN_EASING}`
		};
		reelStates = [...reelStates];

		await wait(duration);

		indexes[reelIndex] = resolvedTarget;
		indexes = [...indexes];
		reelStates[reelIndex] = createReelState(resolvedTarget);
		reelStates = [...reelStates];
	}

	export async function spin(targetIndexes?: number[]) {
		if (isSpinning) {
			return getResult();
		}

		isSpinning = true;
		statusText = 'rolling...';

		await Promise.all(
			Array.from({ length: reelCount }, (_, index) => roll(index, targetIndexes?.[index]))
		);

		const result = getResult();
		statusText = result.text;
		isSpinning = false;

		return result;
	}

	onMount(() => {
		syncIndexes();
		statusText = getResult(indexes).text;

		if (autoSpin) {
			const timeout = window.setTimeout(() => {
				void spin();
			}, 700);

			return () => window.clearTimeout(timeout);
		}
	});
</script>

<div class={cn('flex w-fit flex-col items-center gap-4', className)}>
	<div
		class="relative flex items-center gap-3 rounded-[1.65rem] border border-zinc-200 bg-[linear-gradient(180deg,#ffffff_0%,#f5f1ed_100%)] p-4 shadow-[0_18px_34px_rgba(15,23,42,0.1)]"
		style={`width:${panelWidth}px;`}
	>
		{#each Array.from({ length: reelCount }) as _, reelIndex (reelIndex)}
			<div
				class="relative overflow-hidden rounded-[1rem] border border-zinc-300 bg-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.65)]"
				style={`width:${iconSize}px; height:${slotHeight}px;`}
			>
				<div
					class="absolute inset-x-0 top-0 will-change-transform"
					style={`transform:translateY(${reelStates[reelIndex]?.translateY ?? 0}px); transition:${reelStates[reelIndex]?.transition ?? 'none'};`}
				>
					{#each repeatedIcons as iconIndex, cellIndex (cellIndex)}
						<div
							class="bg-no-repeat"
							style={`width:${iconSize}px; height:${iconSize}px; background-image:url(${spriteUrl}); background-size:${iconSize}px ${iconSize * iconCount}px; background-position:${spriteOffsetX}px ${-getSpriteRow(iconIndex) * iconSize}px;`}
						></div>
					{/each}
				</div>

				<div
					class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,9,0.18)_0%,rgba(255,255,255,0)_26%,rgba(255,255,255,0)_74%,rgba(12,10,9,0.18)_100%)]"
				></div>
				<div
					class="pointer-events-none absolute inset-x-0 top-1/2 h-[1px] -translate-y-1/2 bg-zinc-300/70"
				></div>
			</div>
		{/each}

		<div
			aria-hidden="true"
			class="pointer-events-none absolute inset-y-0 left-2 w-3 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.2)_100%)]"
		></div>
		<div
			aria-hidden="true"
			class="pointer-events-none absolute inset-y-0 right-2 w-3 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.2)_100%)]"
		></div>
	</div>

	{#if showResult}
		<p class="reddit-sans text-center text-[0.98rem] leading-tight tracking-[-0.02em] text-zinc-600">
			{isSpinning ? 'rolling...' : statusText}
		</p>
	{/if}
</div>
