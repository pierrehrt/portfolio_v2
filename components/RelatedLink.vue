<template>
  <a
    class="relative inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
    :href="url"
    target="_blank"
    rel="noreferrer noopener"
    aria-label="MusicKit.js (opens in a new tab)"
  >
    <Linkicon class="mr-1 h-3 w-3" :fontControlled="false" />
    <span>{{ linkName }}</span></a
  >
</template>

<script setup lang="ts">
import Linkicon from "~/assets/icons/link.svg";
defineProps<{
  linkName: string;
  url: string;
}>();
</script>
