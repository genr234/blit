<script lang="ts">
	import { onMount } from 'svelte';

	import type { QuestionSection } from '$lib/data/blit';
	import QuestionNav from '$lib/components/tabs/QuestionNav.svelte';
	import { activeQuestionSection } from '$lib/stores/scrollSections';
	import { observeSectionIds } from '$lib/utils/observers';

	type Props = {
		items: QuestionSection[];
		class?: string;
		observe?: boolean;
		activeId?: string;
		align?: 'left' | 'center';
	};

	let { items, class: className = '', observe = false, activeId, align = 'left' }: Props = $props();

	function handleSelect(id: string) {
		activeQuestionSection.set(id);
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	onMount(() => {
		if (!observe) {
			return;
		}

		return observeSectionIds(
			items.map((item) => item.id),
			(id) => activeQuestionSection.set(id)
		);
	});
</script>

<QuestionNav
	{items}
	activeId={activeId ?? $activeQuestionSection}
	onSelect={handleSelect}
	class={className}
	{align}
/>
