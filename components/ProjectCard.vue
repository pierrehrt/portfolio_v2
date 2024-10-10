<template lang="">
  <div
    class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
  >
    <div
      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
    ></div>
    <div class="z-10 sm:order-2 sm:col-span-6">
      <h3>
        <a
          class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
          :href="projecturl"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Build a Spotify Connected App (opens in a new tab)"
          ><span
            class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
          ></span
          ><span
            >{{ title }}
            <span class="inline-block"
              ><ArrowUp
                class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" /></span></span
        ></a>
      </h3>
      <p class="mt-2 text-sm leading-normal">
        {{ description }}
      </p>
      <div class="mt-2 flex flex-wrap items-center gap-4" v-if="relatedLinks">
        <span class="text-sm leading-normal text-slate-400">Team: </span>
        <ul
          class="flex flex-wrap items-center"
          aria-label="Related links"
          v-if="relatedLinks && relatedLinks.length > 0"
        >
          <li class="mr-4" v-for="link in relatedLinks" :key="link">
            <RelatedLink :linkName="link.name" :url="link.url" />
          </li>
        </ul>
      </div>
      <ul class="mt-2 flex flex-wrap" v-if="tags">
        <li class="mr-1.5 mt-2" v-for="tag in tags" :key="tag">
          <TagPill :name="tag" />
        </li>
      </ul>
    </div>
    <img
      alt="Build a Spotify Connected App Newline course marketing card"
      loading="lazy"
      width="200"
      height="48"
      decoding="async"
      data-nimg="1"
      class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
      style="color: transparent"
      :src="imagePath"
    />
  </div>
</template>
<script lang="ts" setup>
import ArrowUp from "~/assets/icons/arrow-up.svg";
defineProps<{
  title: string;
  description: string;
  projecturl: string;
  imagePath: string;
  tags?: string[];
  relatedLinks?: { name: string; url: string }[] | undefined;
}>();
</script>
<style lang=""></style>
