<script lang="ts">
	import type { FAQ, QuestionSection } from '$lib/data/blit';

	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import FAQItem from '$lib/components/faq/FAQItem.svelte';
	import QuestionTransitionBand from '$lib/components/tabs/QuestionTransitionBand.svelte';

	type Props = {
		id: string;
		faqs: FAQ[];
		questionItems: QuestionSection[];
	};

	let { id, faqs, questionItems }: Props = $props();

	let openIndex = $state<number | null>(null);
</script>

<Section {id} class="pt-24 sm:pt-28">
	<Container narrow>
		<QuestionTransitionBand items={questionItems} activeId={id} class="mb-10" />

		<div class="space-y-1">
			{#each faqs as faq, index (faq.question)}
				<FAQItem
					question={faq.question}
					answer={faq.answer}
					open={openIndex === index}
					onToggle={() => {
						openIndex = openIndex === index ? null : index;
					}}
				/>
			{/each}
		</div>
	</Container>
</Section>
