<script>
	import GiftIcon from './GiftIcon.svelte';
</script>

<div class="borde rounded-[1.4rem] bg-white px-6 py-5 shadow-[0_12px_22px_rgba(15,23,42,0.08)]">
	<p
		class="reddit-sans-semibold text-[1.1rem] leading-[1.16] text-zinc-950"
	>
		<span>Devlog your progress everyday and start a streak</span>
		<span aria-hidden="true" class="ml-[0.18em] inline-block align-[-0.08em]">
			<svg
				width="30"
				height="30"
				viewBox="0 0 30 30"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="h-[0.9em] w-[0.9em]"
			>
				<rect width="29.8864" height="29.8864" fill="white" />
				<path d="M13.6981 2.49048H11.2075V7.47155H13.6981V2.49048Z" fill="black" />
				<path d="M11.2076 7.47168H8.71704V9.96222H11.2076V7.47168Z" fill="black" />
				<path d="M8.71686 9.96216H6.22632V12.4527H8.71686V9.96216Z" fill="black" />
				<path d="M18.6793 12.4529H16.1887V14.9434H18.6793V12.4529Z" fill="black" />
				<path d="M21.1695 9.96216H18.679V12.4527H21.1695V9.96216Z" fill="black" />
				<path d="M23.66 12.4529H21.1694V14.9434H23.66V12.4529Z" fill="black" />
				<path d="M26.1507 14.9434H23.6602V22.415H26.1507V14.9434Z" fill="black" />
				<path d="M6.22638 12.4529H3.73584V22.415H6.22638V12.4529Z" fill="black" />
				<path d="M16.1885 7.47168H13.698V12.4528H16.1885V7.47168Z" fill="black" />
				<path d="M23.66 22.4148H21.1694V24.9053H23.66V22.4148Z" fill="black" />
				<path d="M21.1697 24.9053H8.71704V27.3958H21.1697V24.9053Z" fill="black" />
				<path d="M8.71686 22.4148H6.22632V24.9053H8.71686V22.4148Z" fill="black" />
				<path d="M18.6791 19.9243H11.2075V24.9054H18.6791V19.9243Z" fill="black" />
				<path d="M16.1885 17.4338H13.698V21.1696H16.1885V17.4338Z" fill="black" />
			</svg>
		</span>
	</p>

	<div class="mt-7">
		<div class="relative h-6">
			<div
				class="absolute top-1/2 right-2 left-2 border-t-[3px] border-dotted border-zinc-400"
			></div>
			<div
				class="absolute top-[calc(50%-0.35rem)] left-0 h-3.5 w-3.5 rounded-full bg-zinc-400"
			></div>
			<div
				class="absolute top-[calc(50%-0.42rem)] left-[31%] flex h-4.5 w-4.5 -translate-x-1/2 items-center justify-center bg-white text-[0.7rem] text-[#ff3b30]"
			>
				<GiftIcon />
			</div>
			<div
				class="absolute top-[calc(50%-0.42rem)] left-[62%] flex h-4.5 w-4.5 -translate-x-1/2 items-center justify-center bg-white text-[0.7rem] text-[#ff3b30]"
			>
				<GiftIcon />
			</div>
			<div
				class="absolute top-[calc(50%-0.42rem)] right-0 flex h-4.5 w-4.5 translate-x-1/2 items-center justify-center bg-white text-[0.7rem] text-[#ff3b30]"
			>
				<GiftIcon />
			</div>
		</div>

		<div class="reddit-sans mt-3 grid grid-cols-[auto_31%_31%_auto] text-[0.72rem] text-zinc-500">
			<span class="justify-self-start">you are here</span>
			<span class="reddit-sans-bold justify-self-center text-[#ff3b30]">7 days</span>
			<span class="reddit-sans-bold justify-self-center text-[#ff3b30]">14 days</span>
			<span class="reddit-sans-bold justify-self-end text-[#ff3b30]">30 days</span>
		</div>
	</div>
</div>
