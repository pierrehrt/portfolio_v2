<template>
  <a :href="anchor" class="group">
    <span
      class="inline-block nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
    ></span>
    <span
      class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
    >
      {{ name }}
    </span>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  anchor: string;
}>();
</script>
