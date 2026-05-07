<script>
  import Flourish from './Flourish.svelte';
  import {
    SITE_ADDRESS,
    SITE_ESTABLISHED,
    SITE_PHONE_DISPLAY,
    SITE_PHONE_TEL,
  } from './site.js';
</script>

<footer class="bg-espresso pt-24 pb-10 text-bone">
  <div class="mx-auto max-w-[1400px] px-6 md:px-10">
    <div class="grid gap-16 md:grid-cols-12">
      <div class="md:col-span-5">
        <p class="font-sans text-[11px] tracking-[0.32em] text-brass uppercase">
          Established
          <span class="font-tabular align-middle text-[11px] text-brass">{SITE_ESTABLISHED}</span>
        </p>
        <div class="mt-2 font-display text-4xl">
          Robert<span class="text-brass">&rsquo;</span>s Antiques
        </div>
        <p class="mt-6 max-w-md font-sans text-sm leading-relaxed text-bone/65">
          An antique shop in Lewisburg, West Virginia. Furniture, lighting,
          mirrors, ceramics, silver, and a small wine room near the front.
          Open seven days.
        </p>

        <div class="mt-10">
          <Flourish tone="brass" />
        </div>

        <p class="mt-6 max-w-sm font-sans text-sm leading-relaxed text-bone/70">
          <a
            href={SITE_PHONE_TEL}
            class="font-tabular text-brass-light transition hover:text-brass"
            >{SITE_PHONE_DISPLAY}</a
          >
          <span class="text-bone/50"> · </span>
          <span class="font-tabular">{SITE_ADDRESS.street}, {SITE_ADDRESS.city}, {SITE_ADDRESS.region}</span>
        </p>
      </div>

      <div class="md:col-span-2">
        <span
          class="font-sans text-[10px] tracking-[0.3em] text-brass uppercase"
          >The House</span
        >
        <ul class="mt-5 space-y-3 font-display text-lg text-bone/85">
          <li><a href="#collections" class="hover:text-brass-light">Collections</a></li>
          <li><a href="#featured" class="hover:text-brass-light">Featured</a></li>
          <li><a href="#cellar" class="hover:text-brass-light">Wine Room</a></li>
          <li><a href="#heritage" class="hover:text-brass-light">Heritage</a></li>
          <li><a href="#visit" class="hover:text-brass-light">Visit</a></li>
        </ul>
      </div>

      <div class="md:col-span-2">
        <span
          class="font-sans text-[10px] tracking-[0.3em] text-brass uppercase"
          >Services</span
        >
        <ul class="mt-5 space-y-3 font-display text-lg text-bone/85">
          <li><a href="#visit" class="hover:text-brass-light">Sourcing</a></li>
          <li><a href="#visit" class="hover:text-brass-light">Restoration</a></li>
          <li><a href="#visit" class="hover:text-brass-light">Appraisal</a></li>
          <li><a href="#visit" class="hover:text-brass-light">White glove delivery</a></li>
          <li><a href="#cellar" class="hover:text-brass-light">Wine Room</a></li>
        </ul>
      </div>

      <div class="md:col-span-3">
        <span
          class="font-sans text-[10px] tracking-[0.3em] text-brass uppercase"
          >The Letter</span
        >
        <p class="mt-5 font-sans text-sm leading-relaxed text-bone/65">
          A short note, four times a year, when new pieces arrive on the floor.
        </p>
        <form
          class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end"
          onsubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="email@example.com"
            class="min-w-0 flex-1 rounded-xl border-0 bg-bone/10 px-4 py-3 font-sans text-base font-normal text-bone placeholder:text-bone/35 focus:bg-bone/15 focus:outline-none"
          />
          <button type="submit" class="btn-brass-luxe shrink-0 py-3 text-[0.62rem]">
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <div
      class="mt-20 flex flex-col items-start justify-between gap-4 pt-10 font-sans text-[11px] tracking-[0.28em] text-bone/55 uppercase md:flex-row md:items-center"
    >
      <span>&copy; <span class="font-tabular">2026</span> Robert&rsquo;s Antiques. All rights reserved.</span>
      <div class="flex gap-8">
        <a href="#top" class="hover:text-brass">Privacy</a>
        <a href="#top" class="hover:text-brass">Terms</a>
        <a href="#top" class="hover:text-brass">Sitemap</a>
      </div>
      <span class="italic normal-case tracking-normal text-bone/40">
        {SITE_ADDRESS.city}, {SITE_ADDRESS.region} · Open seven days
      </span>
    </div>
  </div>
</footer>
