<script>
  import Flourish from './Flourish.svelte';
  import {
    SITE_ADDRESS,
    SITE_ESTABLISHED,
    SITE_IMAGES,
    SITE_MAPS_URL,
  } from './site.js';
</script>

<section class="relative bg-bone py-20 md:py-40">
  <div
    class="mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-12 md:gap-14 md:px-10 lg:gap-16"
  >
    <div class="flex flex-col md:col-span-5">
      <span
        class="block font-sans text-[11px] font-medium tracking-[0.32em] text-claret uppercase"
      >
        A Note from Robert
      </span>
      <h2
        class="display mt-6 text-5xl leading-[1.05] text-espresso md:text-6xl"
      >
        Thirty years
        <span class="italic text-claret">on the floor</span>
        in Lewisburg.
      </h2>

      <div class="mt-12">
        <Flourish tone="patina" />
      </div>

      <p class="mt-12 font-display text-2xl leading-snug text-stone italic">
        &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Demo
        sed do eiusmod tempor incididunt ut labore.&rdquo;
      </p>
      <p class="mt-6 font-sans text-sm tracking-[0.25em] text-walnut uppercase">
        Robert, Proprietor
      </p>

      <!-- Directions: sits with copy column so it reads as one block -->
      <aside
        class="mt-14 rounded-2xl border border-walnut/[0.12] bg-walnut/[0.04] px-8 py-9 md:mt-16 md:max-w-md"
      >
        <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span class="font-sans text-[10px] tracking-[0.32em] text-claret uppercase">
            Find the shop
          </span>
          <span class="font-tabular text-lg leading-none text-brass/90" aria-hidden="true"
            >&#9830;</span
          >
        </div>

        <div class="mt-6 space-y-2 text-espresso">
          <p class="font-display text-xl leading-snug md:text-2xl">
            {SITE_ADDRESS.street}
          </p>
          <p class="font-tabular text-sm text-stone md:text-[15px]">
            {SITE_ADDRESS.city}, {SITE_ADDRESS.region} &middot; Open seven days
          </p>
          <p class="font-sans text-[10px] tracking-[0.26em] text-walnut uppercase">
            On Washington Street since
            <span class="font-tabular">{SITE_ESTABLISHED}</span>
          </p>
        </div>

        <a
          href={SITE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          class="mt-7 inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.28em] text-claret uppercase underline-offset-4 hover:underline"
        >
          Directions <span aria-hidden="true">&rarr;</span>
        </a>
      </aside>
    </div>

    <div class="md:col-span-7 md:self-start">
      <div class="grid grid-cols-12 gap-6 gap-y-8">
        <div class="col-span-12 md:col-span-7">
          <div class="photo-stack">
            <div class="photo-stack__media aspect-[3/4]">
              <img
                src={SITE_IMAGES.shopFloor}
                alt="Interior of Robert's Antiques: wine and home display"
                class="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div class="col-span-12 flex flex-col gap-6 md:col-span-5">
          <div class="photo-stack">
            <div class="photo-stack__media aspect-[3/4]">
              <img
                src={SITE_IMAGES.wineTable}
                alt="Curated wine selection"
                class="h-full w-full object-cover"
              />
            </div>
          </div>
          <div class="photo-stack">
            <div class="photo-stack__media aspect-[4/3]">
              <img
                src={SITE_IMAGES.stillLife}
                alt="Still life with wine, books, and candlelight"
                class="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
