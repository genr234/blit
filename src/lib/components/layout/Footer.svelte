<script lang="ts">
    import heart from '$lib/assets/heart.svg';
</script>

<footer class="relative w-full overflow-hidden border-t border-zinc-200 bg-white py-10">
    <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,241,240,0.34)_52%,rgba(255,226,223,0.62)_100%)]"
    ></div>
    <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-x-0 bottom-0 h-34 bg-[radial-gradient(ellipse_at_bottom,rgba(255,88,72,0.11)_0%,rgba(255,122,106,0.055)_34%,rgba(255,255,255,0)_76%)]"
    ></div>

    <nav class="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center text-sm leading-tight text-zinc-500">
        <p>
            <a href="https://hackclub.com" class="underline hover:text-zinc-700">Hack Club</a> · <a href="https://hackclub.com/slack" class="underline hover:text-zinc-700">Slack</a> · <a href="https://hackclub.com/clubs" class="underline hover:text-zinc-700">Clubs</a> · <a href="https://hackclub.com/hackathons" class="underline hover:text-zinc-700">Hackathons</a>
        </p>
        <p>
            Made with <img src={heart} alt="heart" class="inline-block h-4 w-4 fill-zinc-500" /> by genr234
        </p>
    </nav>
</footer>
