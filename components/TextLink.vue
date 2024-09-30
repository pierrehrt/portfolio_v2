<template>
  <div class="mt-12">
    <a
      class="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
      :href="url"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="View Full Résumé (opens in a new tab)"
      ><span
        class="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none"
        >{{ name }}
        <span class="inline-block">
          <ArrowStaight
            class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
          /> </span></span
    ></a>
  </div>
</template>

<script lang="ts" setup>
import ArrowStaight from "~/assets/icons/arrow-straight.svg";
defineProps<{
  name: string;
  url: string;
}>();
</script>

<style></style>
