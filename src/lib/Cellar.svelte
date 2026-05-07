<script>
  import Flourish from './Flourish.svelte';
  import { SITE_IMAGES } from './site.js';

  /** Representative regions; stock rotates. Not an inventory list. */
  const regions = ['Bordeaux', 'Burgundy', 'Champagne', 'Tuscany', 'Rioja', 'Napa Valley'];
</script>

<section
  id="cellar"
  class="relative isolate overflow-hidden bg-wine py-20 text-bone md:py-40"
>
  <div class="absolute inset-0 -z-10">
    <img
      src={SITE_IMAGES.wineTable}
      alt=""
      class="h-full w-full object-cover opacity-35"
    />
    <div
      class="absolute inset-0 bg-gradient-to-b from-wine/90 via-wine/75 to-mahogany"
    ></div>
  </div>

  <div class="mx-auto max-w-[1400px] px-6 md:px-10">
    <header class="mx-auto max-w-3xl text-center">
      <span
        class="font-sans text-[11px] font-medium tracking-[0.32em] text-brass-light uppercase"
      >
        Inside &middot; The Wine Room
      </span>
      <h2 class="display mt-6 text-5xl leading-[0.95] md:text-8xl">
        The
        <span class="italic text-brass-light">Wine Room.</span>
      </h2>
      <div class="mt-10 flex justify-center">
        <Flourish tone="brass" />
      </div>
      <p class="mt-10 font-display text-2xl leading-snug text-bone/80 italic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Demo: a small
        selection of wines up front, browsed the same way as the antiques. Ask at
        the counter.
      </p>
    </header>

    <div class="mt-20 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-16">
      <div class="md:col-span-5">
        <div class="photo-stack mx-auto max-w-lg md:mx-0">
          <div class="photo-stack__media aspect-[3/4]">
            <img
              src={SITE_IMAGES.wineTable}
              alt="Wine selection near the front at Robert's Antiques"
              class="h-full w-full object-cover"
            />
          </div>
        </div>
        <p class="mt-8 font-sans text-sm leading-relaxed text-bone/70">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Demo:
          stock is small, labels change as bottles leave. Ask at the counter what
          is in today.
        </p>
      </div>

      <div class="md:col-span-7">
        <h3 class="font-display text-3xl text-brass-light md:text-4xl">
          Regions you may see
        </h3>
        <p class="mt-4 max-w-lg font-sans text-sm leading-relaxed text-bone/65">
          Labels rotate with stock. This is not a live inventory; ask in store
          for what is available today.
        </p>

        <ul class="mt-8 flex flex-wrap gap-3">
          {#each regions as name}
            <li class="rounded-xl bg-bone/[0.06] px-4 py-3 font-display text-xl text-bone">
              {name}
            </li>
          {/each}
        </ul>

        <div class="mt-12 flex flex-wrap items-center gap-6">
          <a href="#visit" class="btn-brass-luxe">Ask In Store</a>
          <a
            href="#visit"
            class="font-sans text-[11px] tracking-[0.28em] text-bone/85 uppercase underline-offset-8 hover:underline"
          >
            Visit the showroom &rarr;
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
