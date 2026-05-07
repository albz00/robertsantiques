<script>
  import {
    SITE_ADDRESS,
    SITE_IMAGES,
    SITE_PHONE_DISPLAY,
    SITE_PHONE_TEL,
    STOCK_IMAGES,
  } from './site.js';
</script>

<section
  id="top"
  class="relative isolate z-0 flex min-h-[100svh] flex-col justify-center overflow-hidden bg-espresso pb-16 pt-[calc(8.75rem+env(safe-area-inset-top,0px))] text-bone md:pb-24 md:pt-[calc(9.25rem+env(safe-area-inset-top,0px))] scroll-mt-28"
>
  <!-- Full-bleed background image with dark overlay -->
  <div
    class="pointer-events-none absolute inset-0 z-0"
    aria-hidden="true"
  >
    <img
      src={SITE_IMAGES.stillLife}
      alt=""
      class="h-full w-full object-cover object-center"
    />
    <div
      class="absolute inset-0 bg-espresso/85 md:bg-gradient-to-r md:from-espresso/95 md:via-espresso/75 md:to-espresso/30"
    ></div>
  </div>

  <div class="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-10">
    <div class="grid gap-12 md:grid-cols-12 md:items-center md:gap-10 lg:gap-14">
      <div class="max-w-2xl md:col-span-6 lg:col-span-5">
        <h1 class="display text-6xl leading-[1.0] sm:text-7xl md:text-[6.5rem]">
          Robert<span class="text-brass">&rsquo;</span>s
          <span class="block italic text-brass-light">Antiques</span>
        </h1>

        <div class="mt-8 flex flex-wrap gap-2">
          {#each ['Furniture', 'Lighting', 'Mirrors', 'Ceramics', 'Silver', 'Wine Room'] as tag}
            <span
              class="rounded-full border border-bone/25 px-3 py-1 font-sans text-[11px] tracking-[0.2em] text-bone/75 uppercase"
            >
              {tag}
            </span>
          {/each}
        </div>

        <p class="mt-8 max-w-md font-sans text-base leading-relaxed text-bone/75 md:text-lg">
          A shop full of antique furniture, lighting, and decorative pieces, plus a wine room near
          the front of the store. Open seven days a week.
        </p>

        <p class="mt-4 font-sans text-sm tracking-wide text-bone/55">
          {SITE_ADDRESS.street} &middot; {SITE_ADDRESS.city}, {SITE_ADDRESS.region}
          &middot;
          <a href={SITE_PHONE_TEL} class="font-tabular text-brass hover:text-brass-light transition"
            >{SITE_PHONE_DISPLAY}</a
          >
        </p>

        <div class="mt-10 flex flex-wrap items-center gap-4">
          <a href="#collections" class="btn-showcase">Browse the Shop</a>
          <a href="#visit" class="btn-brass-luxe">Plan a Visit</a>
        </div>
      </div>

      <!-- Right rail: overlapping photo cluster -->
      <div class="relative md:col-span-6 md:col-start-7 lg:col-span-7 lg:col-start-6">
        <div class="relative mx-auto aspect-[4/5] w-full max-w-[380px] sm:max-w-[420px] md:max-w-[460px] md:aspect-[5/6] lg:max-w-[500px]">
          <!-- Primary: large back image, top-left -->
          <div class="absolute left-0 top-0 z-[1] h-[76%] w-[76%]">
            <div class="photo-stack photo-stack--hero mb-0 mr-0 h-full">
              <div class="photo-stack__media h-full">
                <img
                  src={STOCK_IMAGES.medievalCabinet}
                  alt="Carved dark wood cabinet with medieval panels"
                  class="h-full w-full object-cover object-center"
                />
                <!-- Wine room stamp, bottom-left corner of primary image -->
                <img
                  src="https://imagedelivery.net/FvOXf_HoZxDXgXU5xPiCfw/d79b170e-80f8-4120-ed0f-e57f61816900/public"
                  alt=""
                  aria-hidden="true"
                  class="pointer-events-none absolute bottom-3 left-3 z-[2] w-16 md:bottom-4 md:left-4 md:w-20"
                />
              </div>
            </div>
          </div>
          <!-- Secondary: smaller front image, overlapping bottom-right corner -->
          <div class="absolute bottom-0 right-0 z-[3] h-[58%] w-[58%]">
            <div class="photo-stack mb-0 mr-0 h-full">
              <div class="photo-stack__media h-full ring-4 ring-espresso/95">
                <img
                  src={STOCK_IMAGES.silverPlate}
                  alt="Antique silver hollowware and serving pieces"
                  class="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="bg-wine text-bone">
  <div
    class="mx-auto flex max-w-[1400px] flex-wrap items-center justify-around gap-y-3 px-6 py-5 font-display text-base tracking-[0.38em] uppercase md:px-10 md:text-lg"
  >
    <span>Furniture</span>
    <span class="text-brass/70">&#9830;</span>
    <span>Lighting</span>
    <span class="text-brass/70">&#9830;</span>
    <span>Mirrors</span>
    <span class="text-brass/70">&#9830;</span>
    <span>Ceramics</span>
    <span class="text-brass/70">&#9830;</span>
    <span>Silver</span>
    <span class="text-brass/70">&#9830;</span>
    <span>Wine Room</span>
  </div>
</section>
