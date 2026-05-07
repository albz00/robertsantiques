<script>
  import Flourish from './Flourish.svelte';
  import { STOCK_IMAGES } from './site.js';

  const collections = [
    {
      number: '01',
      title: 'Carved Furniture',
      sub: 'Hall Chairs, Cabinets, Chests',
      img: STOCK_IMAGES.medievalChairs,
      copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Demo: hand-carved oak and walnut pieces selected for proportion, joinery, and patina.',
    },
    {
      number: '02',
      title: 'Silver & Tabletop',
      sub: 'Hollowware, Plate, Brass',
      img: STOCK_IMAGES.silverPlate,
      copy: 'Sed do eiusmod tempor incididunt ut labore. Demo lineup of estate silver, plate, and brass: tea services, candelabra, and the small things that set a table.',
    },
    {
      number: '03',
      title: 'Curiosities & Arms',
      sub: 'Display Pieces, Iron, Oddities',
      img: STOCK_IMAGES.curiosityMace,
      copy: 'Ut enim ad minim veniam, quis nostrud. Demo case of curiosities: medieval-style ironwork, ceremonial pieces, and oddities that earn a second look.',
    },
  ];
</script>

<section id="collections" class="relative bg-parchment py-20 md:py-40">
  <div class="mx-auto max-w-[1400px] px-6 md:px-10">
    <header class="mx-auto max-w-3xl text-center">
      <span
        class="font-sans text-[11px] font-medium tracking-[0.32em] text-claret uppercase"
      >
        The Collections
      </span>
      <h2
        class="display mt-6 text-5xl leading-[1.05] text-espresso md:text-6xl"
      >
        Three rooms,
        <span class="italic">three temperaments.</span>
      </h2>
      <p class="mt-8 font-sans text-base leading-relaxed text-stone">
        Three areas of the showroom, each with its own character. Inventory
        rotates seasonally, and everything on the floor is available to take home.
      </p>
      <div class="mt-10 flex justify-center">
        <Flourish tone="patina" />
      </div>
    </header>

    <div class="mt-20 grid gap-10 md:grid-cols-3 md:gap-8">
      {#each collections as c (c.number)}
        <article class="group flex flex-col">
          <div class="relative">
            <div class="photo-stack">
              <div class="photo-stack__media aspect-[3/4] bg-walnut/10">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  class="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
            </div>
            <span
              class="absolute top-5 left-5 z-[2] font-tabular text-xs tracking-[0.28em] text-bone/90 uppercase"
            >
              No. {c.number}
            </span>
          </div>

          <div class="mt-7 flex-1">
            <span
              class="font-sans text-[10px] tracking-[0.32em] text-claret uppercase"
            >
              {c.sub}
            </span>
            <h3 class="mt-3 font-display text-3xl text-espresso md:text-4xl">
              {c.title}
            </h3>
            <p class="mt-4 font-sans text-sm leading-relaxed text-stone">
              {c.copy}
            </p>
          </div>

          <a href="#visit" class="btn-ledge">
            Discover the room
            <span aria-hidden="true">&rarr;</span>
          </a>
        </article>
      {/each}
    </div>
  </div>
</section>
