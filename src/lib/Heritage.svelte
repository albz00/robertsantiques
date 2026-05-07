<script>
  import Flourish from './Flourish.svelte';
  import { SITE_ESTABLISHED } from './site.js';

  const milestones = [
    {
      year: String(SITE_ESTABLISHED),
      title: 'The shop opens its doors',
      copy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Demo: sed do eiusmod tempor incididunt ut labore et dolore.',
    },
    {
      year: '1994',
      title: 'The floor grows, the stock deepens',
      copy: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
    },
    {
      year: '2003',
      title: 'A wine room is added near the front',
      copy: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      year: '2018',
      title: 'New space, same unhurried pace',
      copy: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];
</script>

<section id="heritage" class="relative bg-bone py-20 md:py-40">
  <div class="mx-auto max-w-[1400px] px-6 md:px-10">
    <div class="grid gap-16 md:grid-cols-12">
      <div class="md:col-span-5">
        <span
          class="font-sans text-[11px] font-medium tracking-[0.32em] text-claret uppercase"
        >
          Heritage
        </span>
        <h2
          class="display mt-6 text-5xl leading-[1.05] text-espresso md:text-6xl"
        >
          The long
          <span class="italic">memory</span>
          of a small shop.
        </h2>
        <p class="mt-8 font-sans text-base leading-relaxed text-stone">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Demo
          placeholder. Replace with the real story when ready.
        </p>
        <p class="mt-6 font-sans text-base leading-relaxed text-stone">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>

        <div class="mt-12">
          <Flourish tone="patina" />
        </div>
      </div>

      <ol class="flex flex-col gap-14 md:col-span-7 md:pl-10">
        {#each milestones as m}
          <li class="relative grid grid-cols-[5rem_1fr] items-start gap-6 sm:grid-cols-[6rem_1fr]">
            <div>
              <span class="font-tabular text-4xl text-claret md:text-5xl"
                >{m.year}</span
              >
            </div>
            <div>
              <h3 class="font-display text-2xl text-espresso md:text-3xl">
                {m.title}
              </h3>
              <p class="mt-3 font-sans text-sm leading-relaxed text-stone">
                {m.copy}
              </p>
            </div>
          </li>
        {/each}
      </ol>
    </div>
  </div>
</section>
