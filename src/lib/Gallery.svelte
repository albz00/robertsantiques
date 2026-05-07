<script>
  import { SITE_IMAGES, STOCK_IMAGES } from './site.js';

  const items = [
    {
      img: SITE_IMAGES.shopFloor,
      title: 'Shop floor vignette',
      meta: 'The showroom',
    },
    {
      img: STOCK_IMAGES.medievalCorbels,
      title: 'Oak angel corbels',
      meta: 'Medieval carving',
    },
    {
      img: SITE_IMAGES.wineTable,
      title: 'Wine room vignette',
      meta: 'Near the front',
    },
    {
      img: STOCK_IMAGES.medievalCabinet,
      title: 'Carved case furniture',
      meta: 'Panels and timber',
    },
    {
      img: SITE_IMAGES.stillLife,
      title: 'Still life salon',
      meta: 'Books and candles',
    },
    {
      img: STOCK_IMAGES.carvedChest,
      title: 'Gothic Revival chest',
      meta: 'Dark oak and brass',
    },
  ];
</script>

<section class="relative bg-wine-deep py-20 text-bone md:py-40">
  <div class="mx-auto max-w-[1400px] px-6 md:px-10">
    <header
      class="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end"
    >
      <div class="max-w-2xl">
        <span
          class="font-sans text-[11px] font-medium tracking-[0.32em] text-brass uppercase"
        >
          Recent Acquisitions
        </span>
        <h2 class="display mt-6 text-5xl leading-[1.05] md:text-6xl">
          Pieces newly arrived
          <span class="italic text-brass-light">on the floor.</span>
        </h2>
      </div>
      <div class="max-w-md">
        <p class="font-sans text-sm leading-relaxed text-bone/75">
          Inventory turns slowly. What you see on the floor is what is available.
          Stop in to have a look.
        </p>
        <a href="#visit" class="btn-brass-luxe mt-5">
          Visit the showroom
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </header>

    <div
      class="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:mt-20 md:grid-cols-3 md:gap-x-8 md:gap-y-16"
    >
      {#each items as item, i (i)}
        <figure class="group flex flex-col">
          <div class="photo-stack">
            <div class="photo-stack__media aspect-[3/4] bg-walnut/10">
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                class="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
            </div>
          </div>
          <figcaption class="mt-6 flex items-baseline gap-4">
            <span
              class="font-tabular text-[10px] tracking-[0.3em] text-brass-light uppercase"
              >No. {String(i + 1).padStart(2, '0')}</span
            >
            <div class="flex flex-1 flex-col">
              <span class="font-display text-xl text-bone md:text-2xl">
                {item.title}
              </span>
              <span
                class="mt-1 font-sans text-[11px] tracking-[0.28em] text-bone/55 uppercase"
              >
                {item.meta}
              </span>
            </div>
          </figcaption>
        </figure>
      {/each}
    </div>
  </div>
</section>
