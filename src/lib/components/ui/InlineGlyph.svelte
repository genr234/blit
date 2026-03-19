<script lang="ts">
	type Glyph = 'sun' | 'hourglass' | 'send' | 'trophy';

	type Props = {
		glyph: Glyph;
		class?: string;
	};

	let { glyph, class: className = '' }: Props = $props();
</script>

{#if glyph === 'sun'}
	<svg
		width="46"
		height="43"
		viewBox="0 0 46 43"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class={className}
	>
		<path d="M28.6689 7.64504H17.2013V11.4676H28.6689V7.64504Z" fill="black" />
		<path d="M17.2013 11.4676H13.3788V15.2901H17.2013V11.4676Z" fill="black" />
		<path d="M32.4914 11.4676H28.6689V15.2901H32.4914V11.4676Z" fill="black" />
		<path d="M40.1364 7.64504H36.3139V11.4676H40.1364V7.64504Z" fill="black" />
		<path d="M43.9589 3.82252H40.1364V7.64504H43.9589V3.82252Z" fill="black" />
		<path d="M5.73378 19.1126H0V22.9351H5.73378V19.1126Z" fill="black" />
		<path d="M45.8702 19.1126H40.1364V22.9351H45.8702V19.1126Z" fill="black" />
		<path d="M9.55629 7.64504H5.73378V11.4676H9.55629V7.64504Z" fill="black" />
		<path d="M5.73378 3.82252H1.91126V7.64504H5.73378V3.82252Z" fill="black" />
		<path d="M17.2013 26.7576H13.3788V30.5801H17.2013V26.7576Z" fill="black" />
		<path d="M32.4914 26.7576H28.6689V30.5801H32.4914V26.7576Z" fill="black" />
		<path d="M13.3788 15.2901H9.55629V26.7576L13.3788 26.7576V15.2901Z" fill="black" />
		<path d="M36.3139 15.2901H32.4914V26.7576L36.3139 26.7576V15.2901Z" fill="black" />
		<path d="M28.6689 30.5801H17.2013V34.4027H28.6689V30.5801Z" fill="black" />
		<path d="M28.6689 38.2252H17.2013V42.0477H28.6689V38.2252Z" fill="black" />
		<path d="M21.0238 34.4027H17.2013V38.2252H21.0238V34.4027Z" fill="black" />
		<path d="M28.6689 34.4027H24.8464V38.2252H28.6689V34.4027Z" fill="black" />
		<path d="M24.8464 0H21.0238V5.73378H24.8464V0Z" fill="black" />
	</svg>
{:else if glyph === 'hourglass'}
	<svg
		width="45"
		height="45"
		viewBox="0 0 45 45"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class={className}
	>
		<path d="M11.2369 7.49146H3.74561V11.2371H11.2369V7.49146Z" fill="black" />
		<path d="M7.49123 11.2369H3.74561V14.9826H7.49123V11.2369Z" fill="black" />
		<path d="M11.2371 14.9824H7.49146V18.728H11.2371V14.9824Z" fill="black" />
		<path d="M14.9826 3.74561H11.2369V22.4737H14.9826V3.74561Z" fill="black" />
		<path d="M33.7107 18.7283H11.2369V22.4739H33.7107V18.7283Z" fill="black" />
		<path d="M37.4563 14.9824H33.7107V18.728H37.4563V14.9824Z" fill="black" />
		<path d="M41.2018 3.74561H37.4562V14.9825H41.2018V3.74561Z" fill="black" />
		<path d="M37.4563 3.74561H11.2369V7.49123H37.4563V3.74561Z" fill="black" />
		<path d="M18.728 22.4739H14.9824V29.9651H18.728V22.4739Z" fill="black" />
		<path d="M29.965 22.4739H26.2194V29.9651H29.965V22.4739Z" fill="black" />
		<path d="M37.4565 29.9652H7.49146V33.7108H37.4565V29.9652Z" fill="black" />
		<path d="M11.2371 33.7107H7.49146V41.2019H11.2371V33.7107Z" fill="black" />
		<path d="M37.4563 33.7107H33.7107V41.2019H37.4563V33.7107Z" fill="black" />
		<path d="M33.7107 37.4562H11.2369V41.2018H33.7107V37.4562Z" fill="black" />
	</svg>
{:else if glyph === 'send'}
	<svg
		width="45"
		height="45"
		viewBox="0 0 45 45"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class={className}
	>
		<path
			d="M7.49123 35.5834H14.9825V39.3291H3.74561V24.3465H7.49123V35.5834ZM22.4737 35.5834H14.9825V31.8378H22.4737V35.5834ZM29.965 31.8378H22.4737V28.0922H29.965V31.8378ZM37.4563 28.0922H29.965V24.3465H37.4563V28.0922ZM18.7281 24.3465H7.49123V20.6009H18.7281V24.3465ZM41.2019 24.3465H37.4563V20.6009H41.2019V24.3465ZM14.9825 9.36404H7.49123V20.6009H3.74561V5.61841H14.9825V9.36404ZM37.4563 20.6009H29.965V16.8553H37.4563V20.6009ZM29.965 16.8553H22.4737V13.1097H29.965V16.8553ZM22.4737 13.1097H14.9825V9.36404H22.4737V13.1097Z"
			fill="black"
		/>
	</svg>
{:else if glyph === 'trophy'}
	<svg
		width="45"
		height="45"
		viewBox="0 0 45 45"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class={className}
	>
		<path d="M33.7106 5.61841H11.2368V9.36404H33.7106V5.61841Z" fill="black" />
		<path d="M14.9824 5.61841H11.2368V28.0922H14.9824V5.61841Z" fill="black" />
		<path d="M33.7107 5.61841H29.9651V28.0922H33.7107V5.61841Z" fill="black" />
		<path d="M41.202 9.36401H29.9651V13.1096H41.202V9.36401Z" fill="black" />
		<path d="M14.9825 9.36401H3.74561V13.1096H14.9825V9.36401Z" fill="black" />
		<path d="M7.49123 13.1096H3.74561V20.6009H7.49123V13.1096Z" fill="black" />
		<path d="M11.2368 20.6008H7.49121V24.3465H11.2368V20.6008Z" fill="black" />
		<path d="M37.4563 20.6008H33.7107V24.3465H37.4563V20.6008Z" fill="black" />
		<path d="M41.2019 13.1096H37.4563V20.6009H41.2019V13.1096Z" fill="black" />
		<path d="M29.9652 28.092H14.9827V31.8377H29.9652V28.092Z" fill="black" />
		<path d="M24.3467 31.8379H20.6011V39.3291H24.3467V31.8379Z" fill="black" />
		<path d="M28.0921 35.5833H16.8552V39.3289H28.0921V35.5833Z" fill="black" />
	</svg>
{/if}
