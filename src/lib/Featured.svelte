<script>
  import { SITE_IMAGES } from './site.js';
</script>

<section id="featured" class="relative bg-bone py-20 md:py-40">
  <div
    class="mx-auto grid max-w-[1400px] items-center gap-16 px-6 md:grid-cols-12 md:gap-24 md:px-10"
  >
    <div class="md:col-span-7">
      <div class="relative z-0">
        <div class="photo-stack">
          <div class="photo-stack__media aspect-[4/5]">
            <img
              src={SITE_IMAGES.shopFloor}
              alt="Robert's Antiques: shop display with wine and decor"
              class="h-full w-full object-cover"
            />
          </div>
        </div>
        <div
          class="absolute -bottom-6 left-6 z-[3] rounded-xl bg-espresso px-6 py-4 text-bone shadow-[0_16px_40px_rgba(28,18,20,0.35)] md:-right-10 md:left-auto"
        >
          <span class="font-sans text-[10px] tracking-[0.3em] text-brass uppercase">
            On the Floor
          </span>
          <div class="mt-1 font-display text-2xl">The Lewisburg House</div>
        </div>
      </div>
    </div>

    <div class="md:col-span-5">
      <span
        class="font-sans text-[11px] font-medium tracking-[0.32em] text-claret uppercase"
      >
        A Look Inside
      </span>
      <h2
        class="display mt-6 text-5xl leading-[1.05] text-espresso md:text-6xl"
      >
        A showroom
        <span class="italic">worth stepping</span>
        into.
      </h2>
      <p class="mt-8 font-sans text-base leading-relaxed text-stone">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor. Demo: furniture placed the way it actually lives,
        not staged for a catalogue.
      </p>
      <p class="mt-6 font-sans text-base leading-relaxed text-stone">
        Antiques sit alongside the wine room up front. The whole store
        is open to browse, seven days a week.
      </p>

      <dl
        class="mt-12 grid grid-cols-2 gap-x-10 gap-y-8 rounded-2xl bg-parchment/35 px-6 py-8"
      >
        <div>
          <dt class="font-sans text-[10px] tracking-[0.3em] text-stone uppercase">
            Setting
          </dt>
          <dd class="mt-1 font-display text-xl text-espresso">The showroom</dd>
        </div>
        <div>
          <dt class="font-sans text-[10px] tracking-[0.3em] text-stone uppercase">
            Mood
          </dt>
          <dd class="mt-1 font-display text-xl text-espresso">Warm, unhurried</dd>
        </div>
        <div>
          <dt class="font-sans text-[10px] tracking-[0.3em] text-stone uppercase">
            Mix
          </dt>
          <dd class="mt-1 font-display text-xl text-espresso">
            Antiques &amp; wine
          </dd>
        </div>
        <div>
          <dt class="font-sans text-[10px] tracking-[0.3em] text-stone uppercase">
            Access
          </dt>
          <dd class="mt-1 font-display text-xl text-espresso italic">
            In person, by day
          </dd>
        </div>
      </dl>

      <div class="mt-10 flex flex-wrap items-center gap-5">
        <a href="#visit" class="btn-showcase">Plan Your Visit</a>
        <a
          href="#cellar"
          class="font-display text-xl text-stone italic hover:text-claret transition"
          >The wine room &rarr;</a
        >
      </div>
    </div>
  </div>
</section>
