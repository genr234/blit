type ActiveHandler = (id: string) => void;

function scoreEntry(entry: IntersectionObserverEntry) {
	const rect = entry.boundingClientRect;
	const viewportCenter = window.innerHeight / 2;
	const entryCenter = rect.top + rect.height / 2;
	const distance = Math.abs(viewportCenter - entryCenter);

	return entry.intersectionRatio * 1000 - distance;
}

export function observeSectionIds(ids: string[], onActive: ActiveHandler) {
	const elements = ids
		.map((id) => document.getElementById(id))
		.filter((element): element is HTMLElement => element instanceof HTMLElement);

	if (elements.length === 0) {
		return () => {};
	}

	const visible = new Map<string, IntersectionObserverEntry>();

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				const id = entry.target.id;

				if (entry.isIntersecting) {
					visible.set(id, entry);
				} else {
					visible.delete(id);
				}
			}

			const [bestEntry] = [...visible.values()].sort(
				(left, right) => scoreEntry(right) - scoreEntry(left)
			);

			if (bestEntry) {
				onActive(bestEntry.target.id);
			}
		},
		{
			threshold: [0.2, 0.4, 0.6, 0.8],
			rootMargin: '-18% 0px -42% 0px'
		}
	);

	for (const element of elements) {
		observer.observe(element);
	}

	return () => observer.disconnect();
}
