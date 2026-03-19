export type QuestionSection = {
	id: string;
	label: string;
};

export type TimelineStepData = {
	number: number;
	title: string;
	body: string;
	art: 'sketch' | 'model' | 'repo' | 'pcb';
	icon: 'sun' | 'hourglass' | 'send' | 'trophy';
	streak?: boolean;
};

export type Guide = {
	title: string;
	href: string;
	icon: 'box' | 'chip' | 'code' | 'cad' | 'game' | 'launcher';
};

export type FAQ = {
	question: string;
	answer: string;
};

export type Project = {
	title: string;
	author: string;
	art: 'ultraterm' | 'deskmate' | 'bomb' | 'keyboard';
};

export const questionSections: QuestionSection[] = [
	{ id: 'how-it-works', label: 'Wait, how does this work?' },
	{ id: 'never-made-this', label: "But I've never made something like this before!" },
	{ id: 'other-questions', label: 'I have other questions...' }
];

export const timelineSteps: TimelineStepData[] = [
	{
		number: 1,
		title: 'Brainstorm & describe your console',
		body: 'Come up with something cool. What if your console shot water at the player? What if you made a calculator that turns into a handheld when opened? Once you are done, create your project and explain how it works.',
		art: 'sketch',
		icon: 'sun'
	},
	{
		number: 2,
		title: 'Start working on your console and devlog everything',
		body: 'It is time to get your hands dirty. Your console needs hardware, a case, and software. Depending on what you are making, a controller might help too. Post progress every day so your streak grows while the build comes together.',
		art: 'model',
		icon: 'hourglass',
		streak: true
	},
	{
		number: 3,
		title: 'Finish your console, submit it!',
		body: 'Once it is ready, show exactly what your console is. When the project is approved, you get support to order the pieces and parts needed to build a polished physical version.',
		art: 'repo',
		icon: 'send'
	},
	{
		number: 4,
		title: 'Build it IRL and get additional prizes!',
		body: 'You made it. Solder and squish it all together until the console works, then send a video of it in action to claim the final prizes.',
		art: 'pcb',
		icon: 'trophy'
	}
];

export const guides: Guide[] = [
	{ title: 'Design your first case using cardboard!', href: '#', icon: 'box' },
	{ title: 'Intro to PCBs: Build your own game controller', href: '#', icon: 'chip' },
	{ title: 'Code your launcher in HTML, CSS and JS', href: '#', icon: 'code' },
	{ title: 'CAD for dummies', href: '#', icon: 'cad' },
	{ title: 'Make your first game with PICO-8', href: '#', icon: 'game' },
	{ title: 'Everything you need to know about ES-DE', href: '#', icon: 'game' }
];

export const faqs: FAQ[] = [
	{
		question: 'What can I make?',
		answer:
			'Anything from a tiny desk toy with buttons to a full handheld with a custom launcher. The only real requirement is that it feels like your own playful console idea.'
	},
	{
		question: 'What does “blit” mean?',
		answer:
			'In graphics programming, blitting is copying pixels from one place to another. It is a fitting name for a month about making screens, games, and hardware feel alive.'
	},
	{
		question: 'How do I log my hours?',
		answer:
			'Post a short daily devlog with what you built, what got stuck, and what comes next. Consistency matters more than polish, and the streak card is meant to reward that habit.'
	},
	{
		question: 'Is this legit?',
		answer:
			'Yes. The program is structured to help Hack Clubbers go from an idea to a real console with public progress, project review, and extra rewards once the physical build is complete.'
	}
];

export const projects: Project[] = [
	{ title: 'Ultraterm', author: 'by Finn, Canada', art: 'ultraterm' },
	{ title: 'Deskmate', author: 'by Suhansh, Singapore', art: 'deskmate' },
	{ title: 'Bomb Defusal', author: 'by Josh, Brandon, Jonathan, Australia', art: 'bomb' },
	{ title: 'Biblically Accurate Keyboard', author: 'by Alex Tran, California', art: 'keyboard' }
];
