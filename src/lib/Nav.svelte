<script>
  import { onMount } from 'svelte';
  import {
    SITE_ADDRESS,
    SITE_PHONE_DISPLAY,
    SITE_PHONE_TEL,
  } from './site.js';

  let scrolled = $state(false);

  onMount(() => {
    const onScroll = () => {
      scrolled = window.scrollY > 60;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<header
  class="fixed inset-x-0 top-0 z-50 border-b border-bone/10 backdrop-blur-md transition-all duration-300 {scrolled
    ? 'bg-espresso shadow-[0_12px_40px_-8px_rgba(40,28,30,0.35)]'
    : 'bg-espresso/96'}"
>
  <div class="border-b border-bone/10 text-bone/70">
    <div
      class="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-2 text-[11px] tracking-[0.22em] uppercase md:px-10"
    >
      <a
        href={SITE_PHONE_TEL}
        class="font-tabular text-brass transition hover:text-brass-light"
        >{SITE_PHONE_DISPLAY}</a
      >
      <span class="hidden text-center font-tabular md:inline"
        >Mon through Sat, 10:30 AM to 5:30 PM. Sun 11:00 AM to 3:00 PM.</span
      >
      <span class="max-w-[14rem] text-right font-tabular sm:max-w-none md:text-right"
        >{SITE_ADDRESS.street} · {SITE_ADDRESS.city}, {SITE_ADDRESS.region}</span
      >
    </div>
  </div>

  <nav
    class="text-bone transition-all duration-300"
    class:py-6={!scrolled}
    class:py-3={scrolled}
  >
    <div
      class="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10"
    >
      <a href="#top" class="group block leading-none">
        <span class="block font-display text-3xl tracking-tight md:text-4xl">
          Robert<span class="text-brass">&rsquo;</span>s Antiques
        </span>
      </a>

      <ul class="hidden items-center gap-10 text-bone/85 lg:flex">
        <li><a href="#featured" class="nav-link">Featured</a></li>
        <li><a href="#collections" class="nav-link">Collections</a></li>
        <li><a href="#cellar" class="nav-link">Wine Room</a></li>
        <li><a href="#heritage" class="nav-link">Heritage</a></li>
      </ul>

      <button
        type="button"
        class="font-display text-2xl text-bone lg:hidden"
        aria-label="Open menu">&#x2630;</button
      >
    </div>
  </nav>
</header>
