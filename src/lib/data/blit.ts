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
		body: 'It\'s time to get your hands dirty! Your console needs hardware, a case, and software. Depending on what you are making, a controller might help too. Post a devlog everyday to grow your streak and earn additional prizes.',
		art: 'model',
		icon: 'hourglass',
		streak: true
	},
	{
		number: 3,
		title: 'Finish your console, submit it!',
		body: 'Once it\'s ready, showcase your console. Once we approve it, we\'ll give you a grant to order the pieces and parts needed to make it real!',
		art: 'repo',
		icon: 'send'
	},
	{
		number: 4,
		title: 'Build it IRL and get additional prizes!',
		body: 'Congratulations! You made it! Now solder and squish it all together until it works, then ship a video of it in action to claim your additional prizes. We\'ll also give you feedback for you to imporve your console as you build it and implementing that feedback will get you even more prizes!',
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
			'Anything from a tiny desk toy with buttons to a full handheld with a custom launcher. Virtual consoles or arcade cabinets work too! We want you to be creative with your project so making something unique is strongly encouraged!'
	},
	{
		question: 'What does “blit” mean?',
		answer:
			'Bit blit (also written BITBLT, BIT BLT, BitBLT, Bit BLT, Bit Blt etc., which stands for bit block transfer) is a data operation commonly used in computer graphics in which several bitmaps are combined into one using a boolean function. Basically it\'s a fancy way to say copying pixels from one place to another.'
	},
	{
		question: 'How do I log my hours?',
		answer:
			'You can log your hours by journaling your progress and posting it as a devlog on your project page (similar to how blueprint does it!). You can post as many devlogs as you want, but only one per day will count towards your streak.'
	},
	{
		question: 'Is this legit?',
		answer:
			'Yes. Hack Club is a 501(c)(3) nonprofit organization that runs programs like this all the time!'
	}
];

export const projects: Project[] = [
	{ title: 'Ultraterm', author: 'by Finn, Canada', art: 'ultraterm' },
	{ title: 'Deskmate', author: 'by Suhansh, Singapore', art: 'deskmate' },
	{ title: 'Bomb Defusal', author: 'by Josh, Brandon, Jonathan, Australia', art: 'bomb' },
	{ title: 'Biblically Accurate Keyboard', author: 'by Alex Tran, California', art: 'keyboard' }
];
