<script>
  let { tone = 'brass', size = 'md' } = $props();

  const toneClass = $derived(
    tone === 'brass'
      ? 'text-brass'
      : tone === 'patina'
        ? 'text-patina'
        : tone === 'bone'
          ? 'text-bone/70'
          : 'text-stone'
  );
  const gap = $derived(size === 'sm' ? 'gap-1.5' : 'gap-2');
  const dotSm = $derived(size === 'sm' ? 'h-1 w-1' : 'h-1.5 w-1.5');
  const dotMd = $derived(size === 'sm' ? 'h-1.5 w-1.5' : 'h-2 w-2');
</script>

<div
  class={`flex items-center justify-center ${toneClass} ${gap}`}
  aria-hidden="true"
>
  <span class={`rotate-45 rounded-[1px] bg-current opacity-75 ${dotSm}`}></span>
  <span class={`rotate-45 rounded-[1px] bg-current ${dotMd}`}></span>
  <span class={`rotate-45 rounded-[1px] bg-current opacity-75 ${dotSm}`}></span>
</div>
