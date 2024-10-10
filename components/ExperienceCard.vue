<template>
  <div
    class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
  >
    <div
      class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
    ></div>

    <header
      class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
      aria-label="2024 to Present"
    >
      {{ startYear }} — {{ endYear }}
    </header>
    <div class="z-10 sm:col-span-6">
      <h3 class="font-medium leading-snug text-slate-200">
        <div>
          <a
            :href="companyUrl"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)"
            class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
          >
            <span
              class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
            ></span>
            <span>
              {{ title }} ·
              <span class="inline-block">
                {{ companyName }}
                <ArrowUp
                  class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                />
              </span>
            </span>
          </a>
        </div>
        <div v-if="position">
          <div class="text-slate-500" aria-hidden="true">{{ position }}</div>
        </div>
      </h3>
      <p class="mt-2 text-sm leading-normal">
        {{ description }}
      </p>
      <ul
        class="mt-2 flex flex-wrap"
        aria-label="Related links"
        v-if="relatedLinks && relatedLinks.length > 0"
      >
        <li class="mr-4 mt-2" v-for="link in relatedLinks" :key="link.name">
          <RelatedLink :linkName="link.name" :url="link.url" />
        </li>
      </ul>
      <ul class="mt-2 flex flex-wrap" v-if="tags">
        <li class="mr-1.5 mt-2" v-for="tag in tags" :key="tag">
          <TagPill :name="tag" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowUp from "~/assets/icons/arrow-up.svg";
defineProps<{
  title: string;
  description: string;
  companyName: string;
  companyUrl: string;
  position?: string;
  startYear: string;
  endYear: string;
  tags?: string[];
  relatedLinks?: { name: string; url: string }[] | undefined;
}>();
</script>
