<script lang="ts">
	import FAQSection from '$lib/components/faq/FAQSection.svelte';
	import GuidesSection from '$lib/components/guides/GuidesSection.svelte';
	import Hero from '$lib/components/hero/Hero.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import ProjectsSection from '$lib/components/projects/ProjectsSection.svelte';
	import SlotMachineSection from '$lib/components/slotmachine/SlotMachineSection.svelte';
	import Timeline from '$lib/components/timeline/Timeline.svelte';
	import { faqs, guides, projects, questionSections, timelineSteps } from '$lib/data/blit';
</script>

<Hero />

<Timeline id="how-it-works" steps={timelineSteps} questionItems={questionSections} />
<GuidesSection id="never-made-this" {guides} questionItems={questionSections} />
<FAQSection id="other-questions" {faqs} questionItems={questionSections} />
<SlotMachineSection />
<ProjectsSection {projects} />

<Footer />
