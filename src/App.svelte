<script>
  import Nav from './lib/Nav.svelte';
  import Hero from './lib/Hero.svelte';
  import Intro from './lib/Intro.svelte';
  import Collections from './lib/Collections.svelte';
  import Featured from './lib/Featured.svelte';
  import Gallery from './lib/Gallery.svelte';
  import Cellar from './lib/Cellar.svelte';
  import Heritage from './lib/Heritage.svelte';
  import Visit from './lib/Visit.svelte';
  import Footer from './lib/Footer.svelte';
</script>

<Nav />
<main>
  <div class="load-in" style="--delay: 80ms;"><Hero /></div>
  <div class="load-in" style="--delay: 180ms;"><Intro /></div>
  <div class="load-in" style="--delay: 260ms;"><Collections /></div>
  <div class="load-in" style="--delay: 340ms;"><Featured /></div>
  <div class="load-in" style="--delay: 420ms;"><Gallery /></div>
  <div class="load-in" style="--delay: 500ms;"><Cellar /></div>
  <div class="load-in" style="--delay: 580ms;"><Heritage /></div>
  <div class="load-in" style="--delay: 660ms;"><Visit /></div>
</main>
<div class="load-in" style="--delay: 740ms;"><Footer /></div>
