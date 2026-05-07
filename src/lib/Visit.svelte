<script>
  import Flourish from './Flourish.svelte';
  import {
    SITE_ADDRESS,
    SITE_ADDRESS_LINE2,
    SITE_MAPS_URL,
    SITE_PHONE_DISPLAY,
    SITE_PHONE_TEL,
    SITE_HOURS,
  } from './site.js';
</script>

<section id="visit" class="relative bg-parchment py-20 md:py-40">
  <div class="mx-auto max-w-[1400px] px-6 md:px-10">
    <div class="grid gap-20 md:grid-cols-12">
      <div class="md:col-span-5">
        <span
          class="font-sans text-[11px] font-medium tracking-[0.32em] text-claret uppercase"
        >
          Visit the Showroom
        </span>
        <h2
          class="display mt-6 text-5xl leading-[1.05] text-espresso md:text-6xl"
        >
          Step inside
          <span class="italic">anytime</span>
          we&rsquo;re open.
        </h2>

        <div class="mt-12">
          <Flourish tone="patina" />
        </div>

        <dl class="mt-12 space-y-10">
          <div>
            <dt
              class="font-sans text-[10px] tracking-[0.32em] text-claret uppercase"
            >
              The Shop
            </dt>
            <dd class="mt-3 font-tabular text-xl font-normal text-espresso md:text-2xl">
              {SITE_ADDRESS.street}
            </dd>
            <dd class="font-tabular text-xl font-normal text-espresso md:text-2xl">
              {SITE_ADDRESS_LINE2}
            </dd>
            <dd class="mt-4">
              <a
                href={SITE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                class="font-sans text-sm tracking-[0.2em] text-claret uppercase underline-offset-4 hover:underline"
              >
                Directions &rarr;
              </a>
            </dd>
          </div>

          <div>
            <dt
              class="font-sans text-[10px] tracking-[0.32em] text-claret uppercase"
            >
              Hours
            </dt>
            <ul class="mt-4 space-y-1">
              {#each SITE_HOURS as row}
                <li
                  class="flex justify-between gap-6 rounded-xl px-3 py-2.5 font-tabular text-lg font-normal text-espresso odd:bg-walnut/[0.04] md:text-xl"
                >
                  <span class="min-w-[7rem]">{row.day}</span>
                  <span class="text-right text-stone">{row.hours}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div>
            <dt
              class="font-sans text-[10px] tracking-[0.32em] text-claret uppercase"
            >
              Phone
            </dt>
            <dd class="mt-3 font-tabular text-xl font-normal text-espresso">
              <a
                href={SITE_PHONE_TEL}
                class="transition hover:text-claret">{SITE_PHONE_DISPLAY}</a
              >
            </dd>
          </div>
        </dl>
      </div>

      <div class="md:col-span-7">
        <form
          class="grid grid-cols-2 gap-x-6 gap-y-8 rounded-[2rem] bg-bone/95 p-6 shadow-[0_28px_72px_-28px_rgba(42,34,38,0.18)] sm:p-10 md:p-14"
          onsubmit={(e) => e.preventDefault()}
        >
          <header class="col-span-2">
            <span
              class="font-sans text-[10px] tracking-[0.32em] text-claret uppercase"
            >
              Get in Touch
            </span>
            <h3 class="mt-4 font-display text-3xl text-espresso md:text-4xl">
              Tell us the room you&rsquo;re finishing.
            </h3>
            <p class="mt-3 font-sans text-sm text-stone">
              Questions about a piece, sourcing, or the wine room? Leave a
              note and we'll be in touch. For a quicker reply, call <a
                href={SITE_PHONE_TEL}
                class="font-tabular text-claret underline-offset-2 hover:underline"
                >{SITE_PHONE_DISPLAY}</a
              >.
            </p>
          </header>

          <label class="col-span-1 block">
            <span
              class="font-sans text-[10px] tracking-[0.3em] text-stone uppercase"
              >First Name</span
            >
            <input
              type="text"
              class="mt-2 w-full rounded-xl border-0 bg-parchment/50 px-3 py-3 font-sans text-base font-normal text-espresso shadow-inner shadow-walnut/5 placeholder:text-stone/45 transition focus:bg-bone focus:shadow-md focus:outline-none"
              placeholder="Eleanor"
            />
          </label>
          <label class="col-span-1 block">
            <span
              class="font-sans text-[10px] tracking-[0.3em] text-stone uppercase"
              >Last Name</span
            >
            <input
              type="text"
              class="mt-2 w-full rounded-xl border-0 bg-parchment/50 px-3 py-3 font-sans text-base font-normal text-espresso shadow-inner shadow-walnut/5 placeholder:text-stone/45 transition focus:bg-bone focus:shadow-md focus:outline-none"
              placeholder="Whitfield"
            />
          </label>
          <label class="col-span-2 block">
            <span
              class="font-sans text-[10px] tracking-[0.3em] text-stone uppercase"
              >Email</span
            >
            <input
              type="email"
              class="mt-2 w-full rounded-xl border-0 bg-parchment/50 px-3 py-3 font-sans text-base font-normal text-espresso shadow-inner shadow-walnut/5 placeholder:text-stone/45 transition focus:bg-bone focus:shadow-md focus:outline-none"
              placeholder="eleanor@example.com"
            />
          </label>
          <label class="col-span-2 block">
            <span
              class="font-sans text-[10px] tracking-[0.3em] text-stone uppercase"
              >Interested In</span
            >
            <select
              class="mt-2 w-full cursor-pointer rounded-xl border-0 bg-parchment/50 px-3 py-3 font-sans text-base font-normal text-espresso shadow-inner shadow-walnut/5 transition focus:bg-bone focus:shadow-md focus:outline-none"
            >
              <option>A specific piece on the floor</option>
              <option>Sourcing for a project</option>
              <option>The wine room</option>
              <option>Directions / visit</option>
            </select>
          </label>
          <label class="col-span-2 block">
            <span
              class="font-sans text-[10px] tracking-[0.3em] text-stone uppercase"
              >Note</span
            >
            <textarea
              rows="4"
              class="mt-2 w-full resize-none rounded-xl border-0 bg-parchment/50 px-3 py-3 font-sans text-base font-normal text-espresso shadow-inner shadow-walnut/5 placeholder:text-stone/45 transition focus:bg-bone focus:shadow-md focus:outline-none"
              placeholder="A few sentences about the room, the period, and your budget."
            ></textarea>
          </label>

          <div class="col-span-2 flex items-center justify-between">
            <span class="font-sans text-xs text-stone italic"
              >We never share your details.</span
            >
            <button type="submit" class="btn-showcase"> Send Note </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
