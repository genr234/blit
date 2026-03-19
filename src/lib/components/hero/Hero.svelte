<script lang="ts">
	import heroMask from '$lib/assets/hero.png';
	import Container from '$lib/components/layout/Container.svelte';
	import HackClubFlag from '$lib/components/ui/HackClubFlag.svelte';
</script>

<section class="relative flex min-h-[92svh] items-center overflow-hidden">
	<img
		src={heroMask}
		alt=""
		aria-hidden="true"
		class="pointer-events-none absolute inset-0 h-full w-full object-cover object-center mix-blend-multiply"
	/>

	<HackClubFlag />

	<Container class="relative flex min-h-[92svh] flex-col items-center justify-center text-center">
		<div class="max-w-3xl pt-24 sm:pt-14">
			<p
				class="red-rose-title text-[4.4rem] leading-none tracking-[-0.04em] text-zinc-950 sm:text-[6rem] lg:text-[7rem]"
			>
				blit
			</p>

			<p
				class="reddit-sans mt-3 text-[1.45rem] leading-[1.15] tracking-[-0.04em] text-balance text-zinc-950 sm:text-[2.05rem] lg:text-[2.4rem]"
			>
				what if you locked in for
				<span class="relative inline-flex leading-none">
					<span>a month</span>
					<span
						aria-hidden="true"
						data-asset-slot="hero-underline-svg"
						class="pointer-events-none absolute -bottom-[0.47em] block h-[0.52em] [&_svg]:block [&_svg]:h-auto [&_svg]:w-full"
					>
						<svg
							width="156"
							height="13"
							viewBox="0 0 156 13"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
						>
							<path
								d="M155.737 0.532887C94.6344 -0.454899 60.5324 -0.125268 0 1.9922V5.1876C60.516 3.25663 94.6075 2.93518 155.737 3.69055V0.532887Z"
								fill="#FF0000"
							/>
							<path
								d="M147.695 8.43334C95.4894 7.21817 66.4837 7.87752 14.8692 9.66621V13C66.7345 11.1443 95.8158 10.6723 147.695 11.9433V8.43334Z"
								fill="#FF0000"
							/>
						</svg>
					</span>
				</span>
				<br />
				and built your own <span class="reddit-sans-bold">game console</span>?
			</p>
		</div>


		<div class="mt-24 flex h-10 w-10 items-center justify-center text-[#ff3b30]">
			<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="h-7 w-7">
				<path
					d="m6 9 6 6 6-6"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2.2"
				/>
			</svg>
		</div>
	</Container>
</section>
